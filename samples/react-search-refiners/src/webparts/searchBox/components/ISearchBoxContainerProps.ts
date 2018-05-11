import { IEventAggregator } from "@microsoft/sp-webpart-base";
import ISearchDataProvider from "../../dataProviders/ISearchDataProvider";

export interface ISearchBoxProps {
    eventAggregator: IEventAggregator;
    enableQuerySuggestions: boolean;
    searchDataProvider: ISearchDataProvider;
}
