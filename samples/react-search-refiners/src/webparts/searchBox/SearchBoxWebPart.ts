import { Environment, EnvironmentType, Text, Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration, PropertyPaneToggle } from '@microsoft/sp-webpart-base';
import * as strings from 'SearchBoxWebPartStrings';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import ISearchDataProvider from "../dataProviders/ISearchDataProvider";
import MockSearchDataProvider from "../dataProviders/MockSearchDataProvider";
import SearchDataProvider from "../dataProviders/SearchDataProvider";
import { ISearchBoxProps } from './components/ISearchBoxContainerProps';
import SearchBox from './components/SearchBoxContainer';

export interface ISearchBoxWebPartProps {

  /**
   * Indicates if we should show the query suggestions when typing
   */
  enableQuerySuggestions: boolean;
}

export default class SearchBoxWebPart extends BaseClientSideWebPart<ISearchBoxWebPartProps> {

  private _searchDataProvider: ISearchDataProvider;

  /**
   * Override the base onInit() implementation to get the persisted properties to initialize data provider.
   */
  protected onInit(): Promise<void> {

    // Initializes data provider on first load according to property pane configuration
    this.initSearchDataProvider();

    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<ISearchBoxProps > = React.createElement(
      SearchBox, { 
        eventAggregator: this.context.eventAggregator,
        enableQuerySuggestions: this.properties.enableQuerySuggestions,
        searchDataProvider: this._searchDataProvider,
      } as ISearchBoxProps);

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected onPropertyPaneFieldChanged(propertyPath: string, oldValue: any, newValue: any): void {

    // Initializes data provider on first load according to property pane configuration
    this.initSearchDataProvider();
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          groups: [
            {
              groupName: strings.SearchBoxQuerySuggestionsSettings,
              groupFields: [
                PropertyPaneToggle("enableQuerySuggestions", {
                  checked: false,
                  label: strings.SearchBoxEnableQuerySuggestions,
                }),
                
              ]
            }
          ]
        },
      ]
    };
  }

  /**
   * Initializes the query optimization data provider instance according to the current environnement
   */
  private initSearchDataProvider() {
    
    if (this.properties.enableQuerySuggestions) {
      if (Environment.type === EnvironmentType.Local ) {
        this._searchDataProvider = new MockSearchDataProvider();
      } else {
        this._searchDataProvider = new SearchDataProvider(this.context);
      }
    }
  }
}