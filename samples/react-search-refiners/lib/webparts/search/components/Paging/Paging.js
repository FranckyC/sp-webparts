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
var react_js_pagination_1 = require("react-js-pagination");
var Paging = (function (_super) {
    __extends(Paging, _super);
    function Paging(props) {
        var _this = _super.call(this, props) || this;
        _this._onPageUpdate = _this._onPageUpdate.bind(_this);
        return _this;
    }
    Paging.prototype.render = function () {
        return (React.createElement("div", { className: "searchWp__paginationContainer" },
            React.createElement("div", { className: "searchWp__paginationContainer__pagination" },
                React.createElement(react_js_pagination_1.default, { activePage: this.props.currentPage, firstPageText: React.createElement("i", { className: "ms-Icon ms-Icon--DoubleChevronLeft", "aria-hidden": "true" }), lastPageText: React.createElement("i", { className: "ms-Icon ms-Icon--DoubleChevronRight", "aria-hidden": "true" }), prevPageText: React.createElement("i", { className: "ms-Icon ms-Icon--ChevronLeft", "aria-hidden": "true" }), nextPageText: React.createElement("i", { className: "ms-Icon ms-Icon--ChevronRight", "aria-hidden": "true" }), activeLinkClass: "active", itemsCountPerPage: this.props.itemsCountPerPage, totalItemsCount: this.props.totalItems, pageRangeDisplayed: 5, onChange: this.props.onPageUpdate }))));
    };
    Paging.prototype._onPageUpdate = function (pageNumber) {
        this.props.onPageUpdate(pageNumber);
    };
    return Paging;
}(React.Component));
exports.default = Paging;

//# sourceMappingURL=Paging.js.map
