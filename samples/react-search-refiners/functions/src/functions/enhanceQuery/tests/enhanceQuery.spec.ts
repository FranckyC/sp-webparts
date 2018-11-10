import { INlpResponse } from '../../../models/INlpResponse';
import { Context, HttpMethod, HttpRequest, HttpStatusCode } from 'azure-functions-ts-essentials';
import { LuisHelper } from '../../../helpers/LuisHelper';
import { TextAnalyticsHelper } from '../../../helpers/TextAnalyticsHelper';
import { run } from '../enhanceQuery';
import * as $ from '../../../../tools/build/helpers';
import * as fs from 'fs';
import { ILuisGetIntentResponse } from '../../../models/ILuisGetIntentResponse';
import { LuisEntities, LuisIntents } from '../config/ILuisMappingsDefinition';

// Build the process.env object according to Azure Function Application Settings
const localSettingsFile = $.root('./src/local.settings.json');
const settings = JSON.parse(fs.readFileSync(localSettingsFile, { encoding: 'utf8' })
                    .toString()).Values;

Object.keys(settings)
    .map(key => {
        process.env[key] = settings[key];
});

describe('POST /api/query/enhance', () => {

    it('should throw a warning message if the input query is empty', async () => {

        const mockContext: Context = {
            done: (err, response) => {
                expect(err).toBeUndefined();
                expect(response.status).toEqual(HttpStatusCode.InternalServerError);
                expect(response.body.error.message).toBeDefined();
            }
          };

        const mockRequest: HttpRequest = {
            method: HttpMethod.Post,
            headers: { 'content-type': 'application/json' },
            body: {
                rawQuery: ''
            }
        };

        try {
            await run(mockContext, mockRequest);
        } catch (e) {
            fail(e);
        }
    });

    it('should throw an error if the language is not supported', async () => {

        TextAnalyticsHelper.prototype.detectLanguage = jest.fn().mockReturnValue('la');

        const mockContext: Context = {
            done: (err, response) => {
                expect(err).toBeUndefined();
                expect(response.status).toEqual(HttpStatusCode.InternalServerError);
                expect(response.body.error.message).toBeDefined();
            }
          };

        const mockRequest: HttpRequest = {
            method: HttpMethod.Post,
            headers: { 'content-type': 'application/json' },
            body: {
                rawQuery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            }
        };

        try {
            await run(mockContext, mockRequest);
        } catch (e) {
            fail(e);
        }
    });

    describe('No entity has been recognized', () => {

        let query;
        const noEntitiesResponseMock = getNoEntitiesResponseMock();

        beforeEach(() => {
            query = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
            LuisHelper.prototype.getIntentFromQuery = jest.fn().mockReturnValue(noEntitiesResponseMock);
            TextAnalyticsHelper.prototype.detectLanguage = jest.fn().mockReturnValue('fr');
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('should return the input query as is', async () => {

            const mockContext: Context = {
                done: (err, response) => {
                    expect(response.status).toEqual(HttpStatusCode.OK);
                    expect(response.body).toEqual({
                        enhancedQuery: query,
                        detectedLanguage: 'fr',
                        entities: []
                    } as INlpResponse);
                }
            };

            const mockRequest: HttpRequest = {
                method: HttpMethod.Post,
                headers: { 'content-type': 'application/json' },
                body: {
                    rawQuery: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                }
            };

            try {
                await run(mockContext, mockRequest);
            } catch (e) {
                fail(e);
            }
        });
    });

    describe('Key phrases have been recognized in the query', () => {

        let query;

        const multipleKeyPhrasesOnlyResponseMock = getMultipleKeyPhrasesOnlyResponseMock();

        beforeEach(() => {
            query = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
            TextAnalyticsHelper.prototype.detectLanguage = jest.fn().mockReturnValue('fr');
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it('should return a valid SharePoint KQL query with balanced parenthesis', async () => {

            
        });
    });
});

/**
 * Mock utility functions
 */
function getNoEntitiesResponseMock(): ILuisGetIntentResponse {
    return {
        query: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        entities: [],
        topScoringIntent: {
            intent: LuisIntents.None,
            score: 0.5
        }
    }
}

function getMultipleKeyPhrasesOnlyResponseMock(): ILuisGetIntentResponse {
    return {
        query: "I'm looking for ${mockSecondKeyPhraseLabel} on ${mockFirstKeyPhraseLabel}",
        entities: [
            {
                entity: "${mockFirstKeyPhraseLabel}",
                type: LuisEntities.KeyPhrase,
                startIndex: 52,
                endIndex: 72,
                role: ""
            },
            {
                entity: "${mockSecondKeyPhraseLabel}",
                type: LuisEntities.KeyPhrase,
                startIndex: 15,
                endIndex: 26
            }
        ],
        topScoringIntent: {
            intent: LuisIntents.SearchByKeywords,
            score: 0.999998868
        }
    }
}
