"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var intersection_1 = require("lodash-es/intersection");
var clone_1 = require("lodash-es/clone");
var MockSearchDataProvider = (function () {
    function MockSearchDataProvider() {
        this._searchResults = {
            RelevantResults: [
                {
                    Title: "Document 1 - Category 1",
                    Url: "http://document1.ca",
                    Created: "2017-07-22T15:38:54.0000000Z",
                    RefinementTokenValues: "ǂǂ446f63756d656e74,ǂǂ45647563617465",
                    ContentCategory: "Document",
                },
                {
                    Title: "Document 2 - Category 2",
                    Url: "http://document2.ca",
                    Created: "2017-07-22T15:38:54.0000000Z",
                    RefinementTokenValues: "ǂǂ446f63756d656e74,ǂǂ416476697365",
                    ContentCategory: "Document",
                },
                {
                    Title: "Form 1",
                    Url: "http://form1.ca",
                    Created: "2017-07-22T15:38:54.0000000Z",
                    RefinementTokenValues: "ǂǂ466f726d",
                    ContentCategory: "Form",
                },
                {
                    Title: "Video 1 - Category 1",
                    Url: "https://www.youtube.com/watch?v=S93e6UU7y9o",
                    Created: "2017-07-22T15:38:54.0000000Z",
                    RefinementTokenValues: "ǂǂ566964656f,ǂǂ45647563617465",
                    ContentCategory: "Video",
                },
                {
                    Title: "Video 2 - Category 2",
                    Url: "https://www.youtube.com/watch?v=8Nl_dKVQ1O8",
                    Created: "2017-07-22T15:38:54.0000000Z",
                    RefinementTokenValues: "ǂǂ566964656f,ǂǂ416476697365",
                    ContentCategory: "Video",
                },
            ],
            RefinementResults: [
                {
                    FilterName: "Type",
                    Values: [
                        {
                            RefinementCount: 2,
                            RefinementName: "Document",
                            RefinementToken: "ǂǂ446f63756d656e74",
                            RefinementValue: "Document",
                        },
                        {
                            RefinementCount: 2,
                            RefinementName: "Video",
                            RefinementToken: "ǂǂ566964656f",
                            RefinementValue: "Video",
                        },
                        {
                            RefinementCount: 1,
                            RefinementName: "Form",
                            RefinementToken: "ǂǂ466f726d",
                            RefinementValue: "Form",
                        }
                    ]
                },
                {
                    FilterName: "Theme",
                    Values: [
                        {
                            RefinementCount: 2,
                            RefinementName: "Category 1",
                            RefinementToken: "ǂǂ45647563617465",
                            RefinementValue: "Category 1",
                        },
                        {
                            RefinementCount: 2,
                            RefinementName: "Category 2",
                            RefinementToken: "ǂǂ416476697365",
                            RefinementValue: "Category 2",
                        },
                    ]
                }
            ],
            TotalRows: 5,
        };
    }
    Object.defineProperty(MockSearchDataProvider.prototype, "resultsCount", {
        get: function () { return this._itemsCount; },
        set: function (value) { this._itemsCount = value; },
        enumerable: true,
        configurable: true
    });
    MockSearchDataProvider.prototype.search = function (query, refiners, refinementFilters, pageNumber) {
        var _this = this;
        var p1 = new Promise(function (resolve, reject) {
            var filters = [];
            var searchResults = clone_1.default(_this._searchResults);
            var filteredResults = [];
            if (refinementFilters.length > 0) {
                refinementFilters.map(function (filter) {
                    filters.push(filter.Value.RefinementToken);
                });
                searchResults.RelevantResults.map(function (searchResult) {
                    var filtered = intersection_1.default(filters, searchResult.RefinementTokenValues.split(","));
                    if (filtered.length > 0) {
                        filteredResults.push(searchResult);
                    }
                });
                searchResults = {
                    RelevantResults: filteredResults,
                    RefinementResults: _this._searchResults.RefinementResults,
                    TotalRows: filteredResults.length,
                };
            }
            // Return only the specified count
            searchResults.RelevantResults = _this._paginate(searchResults.RelevantResults, _this._itemsCount, pageNumber);
            // Simulate an async call
            setTimeout(function () {
                resolve(searchResults);
            }, 1000);
        });
        return p1;
    };
    MockSearchDataProvider.prototype._paginate = function (array, pageSize, pageNumber) {
        var basePage = --pageNumber * pageSize;
        return pageNumber < 0 || pageSize < 1 || basePage >= array.length
            ? []
            : array.slice(basePage, basePage + pageSize);
    };
    return MockSearchDataProvider;
}());
exports.default = MockSearchDataProvider;

//# sourceMappingURL=MockSearchDataProvider.js.map
