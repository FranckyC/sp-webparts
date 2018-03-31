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
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var strings = require("SearchWebPartStrings");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var sp_core_library_1 = require("@microsoft/sp-core-library");
require("../SearchWebPart.scss");
var update = require("immutability-helper");
var index_1 = require("office-ui-fabric-react/lib/components/GroupedList/index");
var react_custom_scrollbars_1 = require("react-custom-scrollbars");
var FilterPanel = (function (_super) {
    __extends(FilterPanel, _super);
    function FilterPanel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showPanel: false,
            selectedFilters: [],
            expandedGroups: [],
        };
        _this._onTogglePanel = _this._onTogglePanel.bind(_this);
        _this._onClosePanel = _this._onClosePanel.bind(_this);
        _this._addFilter = _this._addFilter.bind(_this);
        _this._removeFilter = _this._removeFilter.bind(_this);
        _this._isInFilterSelection = _this._isInFilterSelection.bind(_this);
        _this._applyAllfilters = _this._applyAllfilters.bind(_this);
        _this._removeAllFilters = _this._removeAllFilters.bind(_this);
        _this._onRenderHeader = _this._onRenderHeader.bind(_this);
        _this._onRenderCell = _this._onRenderCell.bind(_this);
        return _this;
    }
    FilterPanel.prototype.render = function () {
        var _this = this;
        var items = [];
        var groups = [];
        // Initialize the Office UI grouped list
        this.props.availableFilters.map(function (filter, i) {
            groups.push({
                key: i.toString(),
                name: filter.FilterName,
                count: 1,
                startIndex: i,
                isDropEnabled: true,
                isCollapsed: _this.state.expandedGroups.indexOf(i) === -1 ? true : false,
            });
            items.push(React.createElement("div", { key: i },
                React.createElement("div", { className: "filterPanel__filterProperty" }, filter.Values.map(function (refinementValue, j) {
                    // Create a new IRefinementFilter with only the current refinement information
                    var currentRefinement = {
                        FilterName: filter.FilterName,
                        Value: refinementValue,
                    };
                    return (React.createElement(Checkbox_1.Checkbox, { key: j, checked: _this._isInFilterSelection(currentRefinement), disabled: false, label: sp_core_library_1.Text.format(refinementValue.RefinementValue + " ({0})", refinementValue.RefinementCount), onChange: function (ev, checked) {
                            // Every time we chek/uncheck a filter, a complete new search request is performed with current selected refiners
                            checked ? _this._addFilter(currentRefinement) : _this._removeFilter(currentRefinement);
                        } }));
                }))));
        });
        var renderSelectedFilters = this.state.selectedFilters.map(function (filter) {
            return (React.createElement(Label_1.Label, { className: "filter" },
                React.createElement("i", { className: "ms-Icon ms-Icon--ClearFilter", onClick: function () { _this._removeFilter(filter); } }),
                filter.Value.RefinementName));
        });
        var renderAvailableFilters = React.createElement(index_1.GroupedList, { ref: 'groupedList', items: items, onRenderCell: this._onRenderCell, className: "filterPanel__body__group", groupProps: {
                onRenderHeader: this._onRenderHeader,
            }, groups: groups });
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { className: "searchWp__filterResultBtn", iconProps: { iconName: 'Filter' }, text: strings.FilterResultsButtonLabel, onClick: this._onTogglePanel }),
            (this.state.selectedFilters.length > 0) ?
                React.createElement("div", { className: "searchWp__selectedFilters" }, renderSelectedFilters)
                : null,
            React.createElement(Panel_1.Panel, { className: "filterPanel", isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedNear, isBlocking: false, isLightDismiss: true, onDismiss: this._onClosePanel, headerText: strings.FilterPanelTitle, closeButtonAriaLabel: 'Close', hasCloseButton: true, headerClassName: "filterPanel__header", onRenderBody: function () {
                    if (_this.props.availableFilters.length > 0) {
                        return (React.createElement(react_custom_scrollbars_1.Scrollbars, { style: { height: "100%" } },
                            React.createElement("div", { className: "filterPanel__body" },
                                React.createElement("div", { className: "filterPanel__body__allFiltersToggle" },
                                    React.createElement(Toggle_1.Toggle, { onText: strings.RemoveAllFiltersLabel, offText: strings.ApplyAllFiltersLabel, onChanged: function (checked) {
                                            checked ? _this._applyAllfilters() : _this._removeAllFilters();
                                        }, checked: _this.state.selectedFilters.length === 0 ? false : true })),
                                renderAvailableFilters)));
                    }
                    else {
                        return (React.createElement("div", { className: "filterPanel__body" }, strings.NoFilterConfiguredLabel));
                    }
                } })));
    };
    FilterPanel.prototype._onRenderCell = function (nestingDepth, item, itemIndex) {
        return (React.createElement("div", { className: "ms-Grid-row", "data-selection-index": itemIndex },
            React.createElement("div", { className: "ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10 ms-smPush1 ms-mdPush1 ms-lgPush1" }, item)));
    };
    FilterPanel.prototype._onRenderHeader = function (props) {
        var _this = this;
        return (React.createElement("div", { className: "ms-Grid-row", onClick: function () {
                // Update the index for expanded groups to be able to keep it open after a re-render
                var updatedExpandedGroups = props.group.isCollapsed ?
                    update(_this.state.expandedGroups, { $push: [props.group.startIndex] }) :
                    update(_this.state.expandedGroups, { $splice: [[_this.state.expandedGroups.indexOf(props.group.startIndex), 1]] });
                _this.setState({
                    expandedGroups: updatedExpandedGroups,
                });
                props.onToggleCollapse(props.group);
            } },
            React.createElement("div", { className: "ms-Grid-col ms-u-sm1 ms-u-md1 ms-u-lg1" },
                React.createElement("div", { className: "header-icon" },
                    React.createElement("i", { className: props.group.isCollapsed ? "ms-Icon ms-Icon--ChevronDown" : "ms-Icon ms-Icon--ChevronUp" }))),
            React.createElement("div", { className: "ms-Grid-col ms-u-sm10 ms-u-md10 ms-u-lg10" },
                React.createElement("div", { className: "ms-font-l" }, props.group.name))));
    };
    FilterPanel.prototype._onClosePanel = function () {
        this.setState({ showPanel: false });
    };
    FilterPanel.prototype._onTogglePanel = function () {
        this.setState({ showPanel: !this.state.showPanel });
    };
    FilterPanel.prototype._addFilter = function (filterToAdd) {
        // Add the filter to the selected filters collection
        var newFilters = update(this.state.selectedFilters, { $push: [filterToAdd] });
        this._applyFilters(newFilters);
    };
    FilterPanel.prototype._removeFilter = function (filterToRemove) {
        // Remove the filter from the selected filters collection
        var newFilters = this.state.selectedFilters.filter(function (elt) {
            return elt.Value.RefinementToken !== filterToRemove.Value.RefinementToken;
        });
        this._applyFilters(newFilters);
    };
    FilterPanel.prototype._applyAllfilters = function () {
        var allFilters = [];
        this.props.availableFilters.map(function (filter) {
            filter.Values.map(function (refinementValue, index) {
                allFilters.push({ FilterName: filter.FilterName, Value: refinementValue });
            });
        });
        this._applyFilters(allFilters);
    };
    FilterPanel.prototype._removeAllFilters = function () {
        this._applyFilters([]);
    };
    /**
     * Inner method to effectivly apply the refiners by calling back the parent component
     * @param selectedFilters The filters to apply
     */
    FilterPanel.prototype._applyFilters = function (selectedFilters) {
        // Save the selected filters
        this.setState({
            selectedFilters: selectedFilters,
        });
        this.props.onUpdateFilters(selectedFilters);
    };
    /**
     * Checks if the current filter is present in the list of the selected filters
     * @param filterToCheck The filter to check
     */
    FilterPanel.prototype._isInFilterSelection = function (filterToCheck) {
        var newFilters = this.state.selectedFilters.filter(function (filter) {
            return filter.Value.RefinementToken === filterToCheck.Value.RefinementToken;
        });
        return newFilters.length === 0 ? false : true;
    };
    return FilterPanel;
}(React.Component));
exports.default = FilterPanel;

//# sourceMappingURL=FilterPanel.js.map
