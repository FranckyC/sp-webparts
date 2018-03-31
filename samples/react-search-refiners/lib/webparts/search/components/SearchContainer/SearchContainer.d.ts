/// <reference types="react" />
import * as React from "react";
import ISearchContainerProps from "./ISearchContainerProps";
import ISearchContainerState from "./ISearchContainerState";
import "../SearchWebPart.scss";
export default class SearchContainer extends React.Component<ISearchContainerProps, ISearchContainerState> {
    constructor(props: any);
    render(): React.ReactElement<ISearchContainerProps>;
    componentDidMount(): Promise<void>;
    componentWillReceiveProps(nextProps: ISearchContainerProps): Promise<void>;
    /**
     * Callback function to apply new filters coming from the filter panel child component
     * @param newFilters The new filters to apply
     */
    private _onUpdateFilters(newFilters);
    /**
     * Callback function update search results according the page number
     * @param pageNumber The page mumber to get
     */
    private _onPageUpdate(pageNumber);
}
