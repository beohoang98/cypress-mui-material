import { createRoot } from "react-dom/client";
import { CssBaseline, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TestDatePicker } from "./components/DatePicker";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <>
    <CssBaseline />
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div data-testid="text-field">
        <TextField label="Test TextField" />
      </div>
      <div data-testid="date-picker">
        <TestDatePicker label="Test Date Picker" />
      </div>
      <div data-testid="date-time-picker">
        <TestDatePicker label="Test Datetime Picker" />
      </div>
    </LocalizationProvider>
  </>
);
