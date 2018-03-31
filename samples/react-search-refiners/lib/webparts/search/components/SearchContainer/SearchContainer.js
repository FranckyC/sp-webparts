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
var React = require("react");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var Spinner_1 = require("office-ui-fabric-react/lib/Spinner");
var sp_pnp_js_1 = require("sp-pnp-js");
var strings = require("SearchWebPartStrings");
var TilesList_1 = require("../TilesList/TilesList");
require("../SearchWebPart.scss");
var FilterPanel_1 = require("../FilterPanel/FilterPanel");
var Paging_1 = require("../Paging/Paging");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var SearchContainer = (function (_super) {
    __extends(SearchContainer, _super);
    function SearchContainer(props) {
        var _this = _super.call(this, props) || this;
        // Set the initial state
        _this.state = {
            results: {
                RefinementResults: [],
                RelevantResults: []
            },
            selectedFilters: [],
            availableFilters: [],
            currentPage: 1,
            areResultsLoading: false,
            isComponentLoading: true,
            errorMessage: "",
            hasError: false,
        };
        _this._onUpdateFilters = _this._onUpdateFilters.bind(_this);
        _this._onPageUpdate = _this._onPageUpdate.bind(_this);
        return _this;
    }
    SearchContainer.prototype.render = function () {
        var areResultsLoading = this.state.areResultsLoading;
        var items = this.state.results;
        var hasError = this.state.hasError;
        var errorMessage = this.state.errorMessage;
        var isComponentLoading = this.state.isComponentLoading;
        var wpContent = null;
        var renderOverlay = null;
        if (!isComponentLoading && areResultsLoading) {
            renderOverlay = React.createElement("div", null,
                React.createElement(office_ui_fabric_react_1.Overlay, { isDarkThemed: false, className: "overlay" }));
        }
        if (isComponentLoading) {
            wpContent = React.createElement(Spinner_1.Spinner, { size: Spinner_1.SpinnerSize.large, label: strings.LoadingMessage });
        }
        else {
            if (hasError) {
                wpContent = React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error }, errorMessage);
            }
            else {
                if (items.RelevantResults.length === 0) {
                    wpContent =
                        React.createElement("div", null,
                            React.createElement(FilterPanel_1.default, { availableFilters: this.state.availableFilters, onUpdateFilters: this._onUpdateFilters }),
                            React.createElement("div", { className: "searchWp__noresult" }, strings.NoResultMessage));
                }
                else {
                    wpContent =
                        React.createElement("div", null,
                            React.createElement(FilterPanel_1.default, { availableFilters: this.state.availableFilters, onUpdateFilters: this._onUpdateFilters }),
                            renderOverlay,
                            React.createElement(TilesList_1.default, { items: items.RelevantResults }),
                            this.props.showPaging ?
                                React.createElement(Paging_1.default, { totalItems: items.TotalRows, itemsCountPerPage: this.props.maxResultsCount, onPageUpdate: this._onPageUpdate, currentPage: this.state.currentPage })
                                : null);
                }
            }
        }
        return (React.createElement("div", { className: "searchWp" }, wpContent));
    };
    SearchContainer.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var searchResults, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.setState({
                            areResultsLoading: true,
                        });
                        return [4 /*yield*/, this.props.searchDataProvider.search(this.props.queryKeywords, this.props.refiners, this.state.selectedFilters, this.state.currentPage)];
                    case 1:
                        searchResults = _a.sent();
                        // Initial filters are just set once for the filter control during the component initialization
                        // By this way, we are be able to select multiple values whithin a specific filter (OR condition). Otherwise, if we pass every time the new filters retrieved from new results,
                        // previous values will overwritten preventing to select multiple values (default SharePoint behavior)
                        this.setState({
                            results: searchResults,
                            availableFilters: searchResults.RefinementResults,
                            areResultsLoading: false,
                            isComponentLoading: false,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        sp_pnp_js_1.Logger.write("[SearchContainer._componentDidMount()]: Error: " + error_1, sp_pnp_js_1.LogLevel.Error);
                        this.setState({
                            areResultsLoading: false,
                            isComponentLoading: false,
                            results: { RefinementResults: [], RelevantResults: [] },
                            hasError: true,
                            errorMessage: error_1.message
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SearchContainer.prototype.componentWillReceiveProps = function (nextProps) {
        return __awaiter(this, void 0, void 0, function () {
            var searchResults, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.props.refiners.toString() !== nextProps.refiners.toString()
                            || this.props.maxResultsCount !== nextProps.maxResultsCount)) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        // Clear selected filters on a new query or new refiners
                        this.setState({
                            selectedFilters: [],
                            areResultsLoading: true,
                        });
                        return [4 /*yield*/, this.props.searchDataProvider.search(nextProps.queryKeywords, nextProps.refiners, [], 1)];
                    case 2:
                        searchResults = _a.sent();
                        this.setState({
                            results: searchResults,
                            availableFilters: searchResults.RefinementResults,
                            areResultsLoading: false,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        sp_pnp_js_1.Logger.write("[SearchContainer._componentWillReceiveProps()]: Error: " + error_2, sp_pnp_js_1.LogLevel.Error);
                        this.setState({
                            areResultsLoading: false,
                            isComponentLoading: false,
                            results: { RefinementResults: [], RelevantResults: [] },
                            hasError: true,
                            errorMessage: error_2.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Callback function to apply new filters coming from the filter panel child component
     * @param newFilters The new filters to apply
     */
    SearchContainer.prototype._onUpdateFilters = function (newFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var searchResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Get back to the first page when new filters have been selected
                        this.setState({
                            selectedFilters: newFilters,
                            currentPage: 1,
                            areResultsLoading: true,
                        });
                        return [4 /*yield*/, this.props.searchDataProvider.search(this.props.queryKeywords, this.props.refiners, newFilters, 1)];
                    case 1:
                        searchResults = _a.sent();
                        this.setState({
                            results: searchResults,
                            areResultsLoading: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Callback function update search results according the page number
     * @param pageNumber The page mumber to get
     */
    SearchContainer.prototype._onPageUpdate = function (pageNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var searchResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            currentPage: pageNumber,
                            areResultsLoading: true,
                        });
                        return [4 /*yield*/, this.props.searchDataProvider.search(this.props.queryKeywords, this.props.refiners, this.state.selectedFilters, pageNumber)];
                    case 1:
                        searchResults = _a.sent();
                        this.setState({
                            results: searchResults,
                            areResultsLoading: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    return SearchContainer;
}(React.Component));
exports.default = SearchContainer;

//# sourceMappingURL=SearchContainer.js.map
