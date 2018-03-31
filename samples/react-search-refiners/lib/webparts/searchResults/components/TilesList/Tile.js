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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DocumentCard_1 = require("office-ui-fabric-react/lib/DocumentCard");
var Image_1 = require("office-ui-fabric-react/lib/Image");
var moment = require("moment");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
require("../SearchResultsWebPart.scss");
var PREVIEW_IMAGE_WIDTH = 204;
var PREVIEW_IMAGE_HEIGHT = 111;
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tile.prototype.render = function () {
        var item = this.props.item;
        var previewSrc = "";
        if (!sp_lodash_subset_1.isEmpty(item.SiteLogo))
            previewSrc = item.SiteLogo;
        else if (!sp_lodash_subset_1.isEmpty(item.PreviewUrl))
            previewSrc = item.PreviewUrl;
        else if (!sp_lodash_subset_1.isEmpty(item.PictureThumbnailURL))
            previewSrc = item.PictureThumbnailURL;
        else if (!sp_lodash_subset_1.isEmpty(item.ServerRedirectedPreviewURL))
            previewSrc = item.ServerRedirectedPreviewURL;
        var iconSrc = this.props.showFileIcon ? item.iconSrc : "";
        var previewProps = {
            previewImages: [
                {
                    url: item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path,
                    previewImageSrc: previewSrc,
                    iconSrc: iconSrc,
                    imageFit: Image_1.ImageFit.cover,
                    height: PREVIEW_IMAGE_HEIGHT,
                }
            ],
        };
        return (React.createElement(DocumentCard_1.DocumentCard, { onClickHref: item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path, className: "searchWp__resultCard" },
            React.createElement("div", { className: "searchWp__tile__iconContainer", style: { "height": PREVIEW_IMAGE_HEIGHT } },
                React.createElement(DocumentCard_1.DocumentCardPreview, __assign({}, previewProps))),
            React.createElement(DocumentCard_1.DocumentCardTitle, { title: item.Title, shouldTruncate: false }),
            React.createElement("div", { className: "searchWp__tile__footer", hidden: !this.props.showCreatedDate },
                React.createElement("span", null, moment(item.Created).isValid() ? moment(item.Created).format("L") : null))));
    };
    return Tile;
}(React.Component));
exports.default = Tile;

//# sourceMappingURL=Tile.js.map
