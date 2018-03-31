/// <reference types="react" />
import * as React from 'react';
import { ISearchBoxProps } from './ISearchBoxContainerProps';
export default class SearchBoxContainer extends React.Component<ISearchBoxProps, {}> {
    constructor();
    render(): React.ReactElement<ISearchBoxProps>;
    /**
     * Handler when a user enters new keywords
     * @param queryText The query text entered by the user
     */
    onSearch(queryText: string): void;
}
