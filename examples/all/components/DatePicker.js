"use strict";
exports.__esModule = true;
exports.TestDatePicker = void 0;
var react_1 = require("react");
var x_date_pickers_1 = require("@mui/x-date-pickers");
var material_1 = require("@mui/material");
function TestDatePicker(props) {
    var _a = (0, react_1.useState)(null), date = _a[0], setDate = _a[1];
    return (<x_date_pickers_1.DatePicker {...props} onChange={setDate} value={date} renderInput={renderInput}/>);
}
exports.TestDatePicker = TestDatePicker;
function renderInput(props) {
    return <material_1.TextField {...props}/>;
}
