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
var List_1 = require("office-ui-fabric-react/lib/List");
var Tile_1 = require("./Tile");
require("../SearchWebPart.scss");
var ROWS_PER_PAGE = 3;
var MAX_ROW_HEIGHT = 300;
var TilesList = (function (_super) {
    __extends(TilesList, _super);
    function TilesList() {
        var _this = _super.call(this) || this;
        _this._positions = {};
        _this._getItemCountForPage = _this._getItemCountForPage.bind(_this);
        _this._getPageHeight = _this._getPageHeight.bind(_this);
        return _this;
    }
    TilesList.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        return (React.createElement(List_1.List, { items: items, getItemCountForPage: this._getItemCountForPage, getPageHeight: this._getPageHeight, renderedWindowsAhead: 4, className: "searchWp__list", onRenderCell: function (item, index) { return (React.createElement("div", { className: "searchWp__tile", style: {
                    width: (100 / _this._columnCount) + '%',
                } },
                React.createElement(Tile_1.default, { key: index, item: item }))); } }));
    };
    TilesList.prototype._getItemCountForPage = function (itemIndex, surfaceRect) {
        if (itemIndex === 0) {
            this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
            this._columnWidth = Math.floor(surfaceRect.width / this._columnCount);
            this._rowHeight = this._columnWidth;
        }
        return this._columnCount * ROWS_PER_PAGE;
    };
    TilesList.prototype._getPageHeight = function (itemIndex, surfaceRect) {
        return this._rowHeight * ROWS_PER_PAGE;
    };
    return TilesList;
}(React.Component));
exports.default = TilesList;

//# sourceMappingURL=TilesList.js.map
