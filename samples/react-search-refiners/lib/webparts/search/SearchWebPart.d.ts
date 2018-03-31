import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { ISearchWebPartProps } from './ISearchWebPartProps';
export default class SearchWebPart extends BaseClientSideWebPart<ISearchWebPartProps> {
    private _dataProvider;
    /**
     * Override the base onInit() implementation to get the persisted properties to initialize data provider.
     */
    protected onInit(): Promise<void>;
    protected readonly disableReactivePropertyChanges: boolean;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    /**
     * Opens the Web Part property pane
     */
    private _setupWebPart();
    private _validateEmptyField(value);
}
