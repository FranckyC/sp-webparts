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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_core_library_2 = require("@microsoft/sp-core-library");
var strings = require("SearchWebPartStrings");
var SearchContainer_1 = require("./components/SearchContainer/SearchContainer");
var MockSearchDataProvider_1 = require("../dataProviders/MockSearchDataProvider");
var SearchDataProvider_1 = require("../dataProviders/SearchDataProvider");
var moment = require("moment");
var Placeholder_1 = require("@pnp/spfx-controls-react/lib/Placeholder");
var SearchWebPart = (function (_super) {
    __extends(SearchWebPart, _super);
    function SearchWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Override the base onInit() implementation to get the persisted properties to initialize data provider.
     */
    SearchWebPart.prototype.onInit = function () {
        // Init the moment JS library locale globally
        var currentLocale = this.context.pageContext.cultureInfo.currentCultureName;
        moment.locale(currentLocale);
        if (sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._dataProvider = new MockSearchDataProvider_1.default();
        }
        else {
            this._dataProvider = new SearchDataProvider_1.default(this.context);
        }
        return _super.prototype.onInit.call(this);
    };
    Object.defineProperty(SearchWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    SearchWebPart.prototype.render = function () {
        var renderElement = null;
        // Configure the provider before the query according to our needs
        this._dataProvider.resultsCount = this.properties.maxResultsCount;
        this._dataProvider.queryTemplate = this.properties.queryTemplate;
        var searchContainer = React.createElement(SearchContainer_1.default, {
            searchDataProvider: this._dataProvider,
            queryKeywords: this.properties.queryKeywords,
            maxResultsCount: this.properties.maxResultsCount,
            selectedProperties: this.properties.selectedProperties ? this.properties.selectedProperties.replace(/\s|,+$/g, '').split(",") : [],
            refiners: this.properties.refiners,
            showPaging: this.properties.showPaging,
        });
        var placeholder = React.createElement(Placeholder_1.Placeholder, {
            iconName: strings.PlaceHolderEditLabel,
            iconText: strings.PlaceHolderIconText,
            description: strings.PlaceHolderDescription,
            buttonLabel: strings.PlaceHolderConfigureBtnLabel,
            onConfigure: this._setupWebPart.bind(this)
        });
        renderElement = this.properties.queryKeywords ? searchContainer : placeholder;
        ReactDom.render(renderElement, this.domElement);
    };
    Object.defineProperty(SearchWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    SearchWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    groups: [
                        {
                            groupName: strings.SearchSettingsGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('queryKeywords', {
                                    label: strings.SearchQueryKeywordsFieldLabel,
                                    value: "",
                                    multiline: true,
                                    resizable: true,
                                    placeholder: strings.SearchQueryPlaceHolderText,
                                    onGetErrorMessage: this._validateEmptyField.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('queryTemplate', {
                                    label: strings.QueryTemplateFieldLabel,
                                    value: "{searchTerms} Path:{Site}",
                                    multiline: true,
                                    resizable: true,
                                    placeholder: strings.SearchQueryPlaceHolderText,
                                    onGetErrorMessage: this._validateEmptyField.bind(this)
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('selectedProperties', {
                                    label: strings.SelectedPropertiesFieldLabel,
                                    multiline: true,
                                    resizable: true,
                                    value: "Title,Path,Created,Filename,ServerRedirectedPreviewURL",
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('refiners', {
                                    label: strings.RefinersFieldLabel,
                                    multiline: true,
                                    resizable: true,
                                    value: "Created"
                                }),
                                sp_webpart_base_1.PropertyPaneSlider("maxResultsCount", {
                                    label: strings.MaxResultsCount,
                                    max: 50,
                                    min: 1,
                                    showValue: true,
                                    step: 1,
                                    value: 50,
                                }),
                                sp_webpart_base_1.PropertyPaneToggle("showPaging", {
                                    label: strings.ShowPagingLabel,
                                    checked: false,
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    /**
     * Opens the Web Part property pane
     */
    SearchWebPart.prototype._setupWebPart = function () {
        this.context.propertyPane.open();
    };
    SearchWebPart.prototype._validateEmptyField = function (value) {
        if (!value) {
            return strings.EmptyFieldErrorMessage;
        }
        return "";
    };
    return SearchWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = SearchWebPart;

//# sourceMappingURL=SearchWebPart.js.map
