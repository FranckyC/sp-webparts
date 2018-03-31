import ISearchDataProvider from "./ISearchDataProvider";
import { ISearchResults, IRefinementFilter } from "../models/ISearchResult";
declare class MockSearchDataProvider implements ISearchDataProvider {
    selectedProperties: string[];
    private _itemsCount;
    resultsCount: number;
    private _searchResults;
    constructor();
    search(query: string, refiners?: string, refinementFilters?: IRefinementFilter[], pageNumber?: number): Promise<ISearchResults>;
    private _paginate(array, pageSize, pageNumber);
}
export default MockSearchDataProvider;
