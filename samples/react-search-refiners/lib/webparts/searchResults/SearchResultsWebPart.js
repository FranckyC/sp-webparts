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
var SearchResultsContainer_1 = require("./components/SearchResultsContainer/SearchResultsContainer");
var MockSearchDataProvider_1 = require("../dataProviders/MockSearchDataProvider");
var SearchDataProvider_1 = require("../dataProviders/SearchDataProvider");
var moment = require("moment");
var Placeholder_1 = require("@pnp/spfx-controls-react/lib/Placeholder");
var PropertyPaneCheckbox_1 = require("@microsoft/sp-webpart-base/lib/propertyPane/propertyPaneFields/propertyPaneCheckBox/PropertyPaneCheckbox");
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
        // Register an handler to catch search box queries
        this.bindPushStateEvent();
        this._useResultSource = false;
        return _super.prototype.onInit.call(this);
    };
    Object.defineProperty(SearchWebPart.prototype, "disableReactivePropertyChanges", {
        get: function () {
            // Set this to true if you don't want the reactive behavior.
            return false;
        },
        enumerable: true,
        configurable: true
    });
    SearchWebPart.prototype.render = function () {
        var renderElement = null;
        // Configure the provider before the query according to our needs
        this._dataProvider.resultsCount = this.properties.maxResultsCount;
        this._dataProvider.queryTemplate = this.properties.queryTemplate;
        this._dataProvider.resultSourceId = this.properties.resultSourceId;
        this._dataProvider.enableQueryRules = this.properties.enableQueryRules;
        var searchContainer = React.createElement(SearchResultsContainer_1.default, {
            searchDataProvider: this._dataProvider,
            queryKeywords: this.properties.queryKeywords,
            maxResultsCount: this.properties.maxResultsCount,
            resultSourceId: this.properties.resultSourceId,
            enableQueryRules: this.properties.enableQueryRules,
            selectedProperties: this.properties.selectedProperties ? this.properties.selectedProperties.replace(/\s|,+$/g, '').split(",") : [],
            refiners: this.properties.refiners,
            showPaging: this.properties.showPaging,
            showFileIcon: this.properties.showFileIcon,
            showCreatedDate: this.properties.showCreatedDate
        });
        var placeholder = React.createElement(Placeholder_1.Placeholder, {
            iconName: strings.PlaceHolderEditLabel,
            iconText: strings.PlaceHolderIconText,
            description: strings.PlaceHolderDescription,
            buttonLabel: strings.PlaceHolderConfigureBtnLabel,
            onConfigure: this._setupWebPart.bind(this)
        });
        renderElement = (this.properties.queryKeywords && !this.properties.useSearchBoxQuery) || this.properties.useSearchBoxQuery ? searchContainer : placeholder;
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
                                PropertyPaneCheckbox_1.PropertyPaneCheckbox("useSearchBoxQuery", {
                                    checked: false,
                                    text: strings.UseSearchBoxQueryLabel,
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('queryKeywords', {
                                    label: strings.SearchQueryKeywordsFieldLabel,
                                    description: strings.SearchQueryKeywordsFieldDescription,
                                    value: this.properties.queryKeywords,
                                    multiline: true,
                                    resizable: true,
                                    placeholder: strings.SearchQueryPlaceHolderText,
                                    onGetErrorMessage: this._validateEmptyField.bind(this),
                                    deferredValidationTime: 500,
                                    disabled: this.properties.useSearchBoxQuery
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('queryTemplate', {
                                    label: strings.QueryTemplateFieldLabel,
                                    value: this.properties.queryTemplate,
                                    multiline: true,
                                    resizable: true,
                                    placeholder: strings.SearchQueryPlaceHolderText,
                                    deferredValidationTime: 300,
                                    disabled: this._useResultSource,
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('resultSourceId', {
                                    label: strings.ResultSourceIdLabel,
                                    multiline: false,
                                    onGetErrorMessage: this.validateSourceId.bind(this),
                                    deferredValidationTime: 300
                                }),
                                sp_webpart_base_1.PropertyPaneToggle('enableQueryRules', {
                                    label: strings.EnableQueryRulesLabel,
                                    checked: this.properties.enableQueryRules,
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('selectedProperties', {
                                    label: strings.SelectedPropertiesFieldLabel,
                                    description: strings.SelectedPropertiesFieldDescription,
                                    multiline: true,
                                    resizable: true,
                                    value: this.properties.selectedProperties,
                                    deferredValidationTime: 300
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('refiners', {
                                    label: strings.RefinersFieldLabel,
                                    description: strings.RefinersFieldDescription,
                                    multiline: true,
                                    resizable: true,
                                    value: this.properties.refiners,
                                    deferredValidationTime: 300
                                }),
                                sp_webpart_base_1.PropertyPaneSlider("maxResultsCount", {
                                    label: strings.MaxResultsCount,
                                    max: 50,
                                    min: 1,
                                    showValue: true,
                                    step: 1,
                                    value: 50,
                                })
                            ]
                        },
                        {
                            groupName: strings.StylingSettingsGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneToggle("showPaging", {
                                    label: strings.ShowPagingLabel,
                                    checked: this.properties.showPaging,
                                }),
                                sp_webpart_base_1.PropertyPaneToggle("showFileIcon", {
                                    label: strings.ShowFileIconLabel,
                                    checked: this.properties.showFileIcon,
                                }),
                                sp_webpart_base_1.PropertyPaneToggle("showCreatedDate", {
                                    label: strings.ShowCreatedDateLabel,
                                    checked: this.properties.showCreatedDate,
                                })
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
    SearchWebPart.prototype.bindPushStateEvent = function () {
        // Original source: https://www.eliostruyf.com/check-page-mode-from-within-spfx-extensions
        var _this = this;
        var _pushState = function () {
            var _defaultPushState = history.pushState;
            var _self = _this;
            return function (data, title, url) {
                var currentUrl = new URLSearchParams(url);
                // We need to call the in context of the component
                // The "k" parameter is set by the search box component
                if (_self.properties.useSearchBoxQuery) {
                    _self.properties.queryKeywords = data.k;
                    _self.render();
                }
                // Call the original function with the provided arguments
                // This context is necessary for the context of the history change
                return _defaultPushState.apply(this, [data, title, url]);
            };
        };
        history.pushState = _pushState();
    };
    SearchWebPart.prototype.validateSourceId = function (value) {
        if (value.length > 0) {
            if (!/^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/.test(value)) {
                this._useResultSource = false;
                return strings.InvalidResultSourceIdMessage;
            }
            else {
                this._useResultSource = true;
            }
        }
        else {
            this._useResultSource = false;
        }
        return '';
    };
    return SearchWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = SearchWebPart;

//# sourceMappingURL=SearchResultsWebPart.js.map
