/// <reference types="react" />
import * as React from "react";
import ITilesListViewProps from "./ITilesListViewProps";
import "../SearchWebPart.scss";
export default class TilesList extends React.Component<ITilesListViewProps, null> {
    private _positions;
    private _columnCount;
    private _columnWidth;
    private _rowHeight;
    constructor();
    render(): JSX.Element;
    private _getItemCountForPage(itemIndex, surfaceRect);
    private _getPageHeight(itemIndex, surfaceRect);
}
