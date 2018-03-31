/// <reference types="react" />
import * as React from "react";
import IPagingProps from "./IPagingProps";
export default class Paging extends React.Component<IPagingProps, null> {
    constructor(props: IPagingProps);
    render(): React.ReactElement<IPagingProps>;
    private _onPageUpdate(pageNumber);
}
