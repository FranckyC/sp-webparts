"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var sp_pnp_js_1 = require("sp-pnp-js");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sortBy_1 = require("lodash-es/sortBy");
var groupBy_1 = require("lodash-es/groupBy");
var mapValues_1 = require("lodash-es/mapValues");
var mapKeys_1 = require("lodash-es/mapKeys");
var moment = require("moment");
var SearchDataProvider = (function () {
    function SearchDataProvider(webPartContext) {
        this._initialSearchResult = null;
        this._context = webPartContext;
        // Setup the PnP JS instance
        var consoleListener = new sp_pnp_js_1.ConsoleListener();
        sp_pnp_js_1.Logger.subscribe(consoleListener);
        // To limit the payload size, we set odata=nometadata
        // We just need to get list items here
        // We use a local configuration to avoid conflicts with other Web Parts
        this._localPnPSetup = sp_pnp_js_1.default.sp.configure({
            headers: {
                Accept: "application/json; odata=nometadata",
            },
        }, this._context.pageContext.web.absoluteUrl);
    }
    Object.defineProperty(SearchDataProvider.prototype, "resultsCount", {
        get: function () { return this._resultsCount; },
        set: function (value) { this._resultsCount = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDataProvider.prototype, "selectedProperties", {
        get: function () { return this._selectedProperties; },
        set: function (value) { this._selectedProperties = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDataProvider.prototype, "queryTemplate", {
        get: function () { return this._queryTemplate; },
        set: function (value) { this._queryTemplate = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDataProvider.prototype, "resultSourceId", {
        get: function () { return this._resultSourceId; },
        set: function (value) { this._resultSourceId = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchDataProvider.prototype, "enableQueryRules", {
        get: function () { return this._enableQueryRules; },
        set: function (value) { this._enableQueryRules = value; },
        enumerable: true,
        configurable: true
    });
    /**
     * Performs a search query against SharePoint
     * @param query The search query in KQL format
     * @return The search results
     */
    SearchDataProvider.prototype.search = function (query, refiners, refinementFilters, pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var searchQuery, sortedRefiners, page, sortList, results, _a, allItemsPromises_1, refinementResults_1, r2, resultRows, refinementResultsRows, refinementRows, relevantResults, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        searchQuery = {};
                        sortedRefiners = [];
                        page = pageNumber ? pageNumber : 1;
                        searchQuery.ClientType = "ContentSearchRegular";
                        searchQuery.Querytext = query;
                        // Disable query rules by default if not specified
                        searchQuery.EnableQueryRules = this._enableQueryRules ? this._enableQueryRules : false;
                        if (this._resultSourceId) {
                            searchQuery.SourceId = this._resultSourceId;
                        }
                        else {
                            // To be able to use search query variable according to the current context
                            // http://www.techmikael.com/2015/07/sharepoint-rest-do-support-query.html
                            searchQuery.QueryTemplate = this._queryTemplate;
                        }
                        searchQuery.RowLimit = this._resultsCount ? this._resultsCount : 50;
                        searchQuery.SelectProperties = this._selectedProperties;
                        searchQuery.TrimDuplicates = false;
                        sortList = [
                            {
                                Property: "Created",
                                Direction: sp_pnp_js_1.SortDirection.Descending
                            },
                            {
                                Property: "Size",
                                Direction: sp_pnp_js_1.SortDirection.Ascending
                            }
                        ];
                        searchQuery.SortList = sortList;
                        if (refiners) {
                            // Get the refiners order specified in the property pane
                            sortedRefiners = refiners.split(",");
                            searchQuery.Refiners = refiners ? refiners : "";
                        }
                        if (refinementFilters) {
                            if (refinementFilters.length > 0) {
                                searchQuery.RefinementFilters = [this._buildRefinementQueryString(refinementFilters)];
                            }
                        }
                        results = {
                            RelevantResults: [],
                            RefinementResults: [],
                            TotalRows: 0,
                        };
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, , 9]);
                        if (!(!this._initialSearchResult || page == 1)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this._localPnPSetup.search(searchQuery)];
                    case 2:
                        _a._initialSearchResult = _b.sent();
                        _b.label = 3;
                    case 3:
                        allItemsPromises_1 = [];
                        refinementResults_1 = [];
                        if (!this._initialSearchResult.RawSearchResults.PrimaryQueryResult) return [3 /*break*/, 7];
                        r2 = this._initialSearchResult;
                        if (!(page > 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this._initialSearchResult.getPage(page, this._resultsCount)];
                    case 4:
                        r2 = _b.sent();
                        _b.label = 5;
                    case 5:
                        resultRows = r2.RawSearchResults.PrimaryQueryResult.RelevantResults.Table.Rows;
                        refinementResultsRows = r2.RawSearchResults.PrimaryQueryResult.RefinementResults;
                        refinementRows = refinementResultsRows ? refinementResultsRows["Refiners"] : [];
                        // Map search results
                        resultRows.map(function (elt) {
                            var p1 = new Promise(function (resolvep1, rejectp1) {
                                // Build item result dynamically
                                // We can't type the response here because search results are by definition too heterogeneous so we treat them as key-value object
                                var result = {};
                                elt.Cells.map(function (item) {
                                    result[item.Key] = item.Value;
                                });
                                // Get the icon source URL
                                _this._mapToIcon(result.Filename ? result.Filename : sp_core_library_1.Text.format(".{0}", result.FileExtension)).then(function (iconUrl) {
                                    result.iconSrc = iconUrl;
                                    resolvep1(result);
                                }).catch(function (error) {
                                    rejectp1(error);
                                });
                            });
                            allItemsPromises_1.push(p1);
                        });
                        // Map refinement results                    
                        refinementRows.map(function (refiner) {
                            var values = [];
                            refiner.Entries.map(function (item) {
                                values.push({
                                    RefinementCount: parseInt(item.RefinementCount, 10),
                                    RefinementName: _this._formatDate(item.RefinementName),
                                    RefinementToken: item.RefinementToken,
                                    RefinementValue: _this._formatDate(item.RefinementValue),
                                });
                            });
                            refinementResults_1.push({
                                FilterName: refiner.Name,
                                Values: values,
                            });
                        });
                        return [4 /*yield*/, Promise.all(allItemsPromises_1)];
                    case 6:
                        relevantResults = _b.sent();
                        // Sort refiners according to the property pane value
                        refinementResults_1 = sortBy_1.default(refinementResults_1, function (refinement) {
                            // Get the index of the corresponding filter name
                            return sortedRefiners.indexOf(refinement.FilterName);
                        });
                        results.RelevantResults = relevantResults;
                        results.RefinementResults = refinementResults_1;
                        results.TotalRows = this._initialSearchResult.TotalRows;
                        _b.label = 7;
                    case 7: return [2 /*return*/, results];
                    case 8:
                        error_1 = _b.sent();
                        sp_pnp_js_1.Logger.write("[SharePointDataProvider.search()]: Error: " + error_1, sp_pnp_js_1.LogLevel.Error);
                        throw error_1;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the icon corresponding to the file name extension
     * @param filename The file name (ex: file.pdf)
     */
    SearchDataProvider.prototype._mapToIcon = function (filename) {
        return __awaiter(this, void 0, void 0, function () {
            var webAbsoluteUrl, web, encodedFileName, iconFileName, iconUrl, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        webAbsoluteUrl = this._context.pageContext.web.absoluteUrl;
                        web = new sp_pnp_js_1.Web(webAbsoluteUrl);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        encodedFileName = filename ? filename.replace(/["']/g, "") : "";
                        return [4 /*yield*/, web.mapToIcon(encodedFileName, 1)];
                    case 2:
                        iconFileName = _a.sent();
                        iconUrl = webAbsoluteUrl + "/_layouts/15/images/" + iconFileName;
                        return [2 /*return*/, iconUrl];
                    case 3:
                        error_2 = _a.sent();
                        sp_pnp_js_1.Logger.write("[SharePointDataProvider._mapToIcon()]: Error: " + error_2, sp_pnp_js_1.LogLevel.Error);
                        throw error_2;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Find and eeplace ISO 8601 dates in the string by a friendly value
     * @param inputValue The string to format
     */
    SearchDataProvider.prototype._formatDate = function (inputValue) {
        var iso8061rgx = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/g;
        var matches = inputValue.match(iso8061rgx);
        var updatedInputValue = inputValue;
        if (matches) {
            matches.map(function (match) {
                updatedInputValue = updatedInputValue.replace(match, moment(match).format("LL"));
            });
        }
        return updatedInputValue;
    };
    /**
     * Build the refinement condition in FQL format
     * @param selectedFilters The selected filter array
     */
    SearchDataProvider.prototype._buildRefinementQueryString = function (selectedFilters) {
        var refinementQueryConditions = [];
        var refinementQueryString = null;
        var refinementFilters = mapValues_1.default(groupBy_1.default(selectedFilters, 'FilterName'), function (values) {
            var refinementFilter = values.map(function (filter) {
                return filter.Value.RefinementToken;
            });
            return refinementFilter.length > 1 ? sp_core_library_1.Text.format("or({0})", refinementFilter) : refinementFilter.toString();
        });
        mapKeys_1.default(refinementFilters, function (value, key) {
            refinementQueryConditions.push(key + ":" + value);
        });
        var conditionsCount = refinementQueryConditions.length;
        switch (true) {
            // No filters
            case (conditionsCount === 0): {
                refinementQueryString = null;
                break;
            }
            // Just one filter
            case (conditionsCount === 1): {
                refinementQueryString = refinementQueryConditions[0].toString();
                break;
            }
            // Multiple filters
            case (conditionsCount > 1): {
                refinementQueryString = sp_core_library_1.Text.format("and({0})", refinementQueryConditions.toString());
                break;
            }
        }
        return refinementQueryString;
    };
    return SearchDataProvider;
}());
exports.default = SearchDataProvider;

//# sourceMappingURL=SearchDataProvider.js.map
