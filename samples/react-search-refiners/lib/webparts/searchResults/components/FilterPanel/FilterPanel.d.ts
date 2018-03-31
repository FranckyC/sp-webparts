/// <reference types="react" />
import * as React from "react";
import IFilterPanelProps from "./IFilterPanelProps";
import IFilterPanelState from "./IFilterPanelState";
import "../SearchResultsWebPart.scss";
export default class FilterPanel extends React.Component<IFilterPanelProps, IFilterPanelState> {
    constructor(props: any);
    render(): React.ReactElement<IFilterPanelProps>;
    private _onRenderCell(nestingDepth, item, itemIndex);
    private _onRenderHeader(props);
    private _onClosePanel();
    private _onTogglePanel();
    private _addFilter(filterToAdd);
    private _removeFilter(filterToRemove);
    private _applyAllfilters();
    private _removeAllFilters();
    /**
     * Inner method to effectivly apply the refiners by calling back the parent component
     * @param selectedFilters The filters to apply
     */
    private _applyFilters(selectedFilters);
    /**
     * Checks if the current filter is present in the list of the selected filters
     * @param filterToCheck The filter to check
     */
    private _isInFilterSelection(filterToCheck);
}
