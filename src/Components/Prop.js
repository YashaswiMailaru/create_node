import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "leaflet/dist/leaflet.css";
import { Mao, MapContainer, TileLayer, useMap } from "react-leaflet";
import * as L from "leaflet";

export default function Prop(props) {
  const [checked, setChecked] = React.useState(false);
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleTypeChange = (event) => {
    props.setPtype(event.target.value);
  };

  return (
    <div className="row">
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={handleCheckChange}
              style={{
                color: "#000080",
              }}
            />
          }
          label="Properties"
        />
        <div className="row">
          <div className="col">
            {checked && (
              <FormControl variant="standard" sx={{ minWidth: 120 }}>
                <label>Select key type</label>
                <Select
                  value={props.Ptype}
                  onChange={handleTypeChange}
                  displayEmpty
                  variant="outlined"
                  sx={ {marginTop: 1.5}}
                >
                  <MenuItem value="" disabled hidden>
                    {" "}
                    Select type
                  </MenuItem>
                  <MenuItem value={"time"}>Time</MenuItem>
                  <MenuItem value={"location"}>Location</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
          <div className="col">
            {checked && props.Ptype === "time" && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <div class="row">
                    <div class="col">
                      <label>Start Time</label>
                      <TimePicker
                        ampm={false}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        value={props.startTime}
                        onChange={(newValue) => {
                          props.setStartTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{ mt: 1.5 }}/>}
                      />
                    </div>
                    <div className="col">
                      <label>End Time</label>
                      <TimePicker  
                        ampm={false}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        inputFormat="HH:mm:ss"
                        mask="__:__:__"
                        value={props.endTime}
                        onChange={(newValue) => {
                          props.setEndTime(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} sx={{ mt: 1.5 }}/>}
                      />
                    </div>
                  </div>
                </Stack>
              </LocalizationProvider>
            )}
          </div>
          <div className="col">
            {checked && props.Ptype === "location" && <div></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
