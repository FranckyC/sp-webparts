"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var strings = require("SearchBoxWebPartStrings");
var SearchBoxContainer = (function (_super) {
    __extends(SearchBoxContainer, _super);
    function SearchBoxContainer() {
        var _this = _super.call(this) || this;
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }
    SearchBoxContainer.prototype.render = function () {
        return (React.createElement(SearchBox_1.SearchBox, { onSearch: this.onSearch, placeholder: strings.SearchInputPlaceholder }));
    };
    /**
     * Handler when a user enters new keywords
     * @param queryText The query text entered by the user
     */
    SearchBoxContainer.prototype.onSearch = function (queryText) {
        var url = new URLSearchParams();
        url.append("k", queryText);
        // The data parameter wil be caught by the search results WP
        history.pushState({ k: queryText }, '', sp_core_library_1.Text.format("#{0}", url.toString()));
    };
    return SearchBoxContainer;
}(React.Component));
exports.default = SearchBoxContainer;

//# sourceMappingURL=SearchBoxContainer.js.map
