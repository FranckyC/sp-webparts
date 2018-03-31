import ISearchDataProvider from "./ISearchDataProvider";
import { ISearchResults, IRefinementFilter } from "../models/ISearchResult";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
declare class SearchDataProvider implements ISearchDataProvider {
    private _initialSearchResult;
    private _resultsCount;
    private _context;
    private _appSearchSettings;
    private _selectedProperties;
    private _queryTemplate;
    private _resultSourceId;
    private _enableQueryRules;
    resultsCount: number;
    selectedProperties: string[];
    queryTemplate: string;
    resultSourceId: string;
    enableQueryRules: boolean;
    private _localPnPSetup;
    constructor(webPartContext: IWebPartContext);
    /**
     * Performs a search query against SharePoint
     * @param query The search query in KQL format
     * @return The search results
     */
    search(query: string, refiners?: string, refinementFilters?: IRefinementFilter[], pageNumber?: number): Promise<ISearchResults>;
    /**
     * Gets the icon corresponding to the file name extension
     * @param filename The file name (ex: file.pdf)
     */
    private _mapToIcon(filename);
    /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    private _formatDate(inputValue);
    /**
     * Build the refinement condition in FQL format
     * @param selectedFilters The selected filter array
     */
    private _buildRefinementQueryString(selectedFilters);
}
export default SearchDataProvider;
