import { useState } from "react";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";

export function TestDatePicker(
  props: Omit<DatePickerProps, "onChange" | "value" | "renderInput">
) {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker
      {...props}
      onChange={setDate}
      value={date}
      renderInput={renderInput}
    />
  );
}

function renderInput(props) {
  return <TextField {...props} />;
}
