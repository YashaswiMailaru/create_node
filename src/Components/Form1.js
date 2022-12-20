import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Prop from "./Prop.js";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

export default function Form1() {
  const [node_name, setNodeName] = React.useState("");
  const handleNameChange = (event) => {
    setNodeName(event.target.value);
  };
  const [Ptype, setPtype] = React.useState("");
  const [startTime, setStartTime] = React.useState(dayjs("2022-04-07"));
  const [endTime, setEndTime] = React.useState(dayjs("2022-04-07"));
  const [node_type, setNodeType] = React.useState("");
  const handleNodeTypeChange = (event) => {
    setNodeType(event.target.value);
  };
  const [btnClicked, setbtnvalue] = React.useState(false);
  const nodes = [];
  const handleButtonClicked = (event) => {
    const node = {};
    node["node_name"] = node_name;
    node["node_type"] = node_type;
    node["properties"] = {};
    node["properties"]["time"] = { starttime: startTime, endtime: endTime };
    node["properties"]["location"] = "";
    nodes.push(node);
    console.log(node);
  };
  return (
    <div>
      <div className="row">
        <div className="col">
          <FormControl variant="standard" sx={{ minWidth: 120}} >
            <label >Select node type</label>
            <Select sx={ {marginTop: 1.5}}
              value={node_type}
              onChange={handleNodeTypeChange}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="" disabled hidden>
                {" "}
                Select type
              </MenuItem>
              <MenuItem value={"Policy Class Node"}>Policy Class Node</MenuItem>
              <MenuItem value={"User Node"}>User Node</MenuItem>
              <MenuItem value={"User Attribute Node"}>
                User Attribute Node
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col">
          <TextField
            placeholder="Create Nodes"
            value={node_name}
            onChange={handleNameChange}
            sx={ {marginTop: 4.5}}
          />
        </div>
        <div className="col">
          <Fab
            color="primary"
            size="small"
            onClick={handleButtonClicked}
            sx={ {marginTop: 4.5}}
            style={{
              backgroundColor: "#000080",
            }}
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
      <Prop
        setPtype={setPtype}
        Ptype={Ptype}
        startTime={startTime}
        setStartTime={setStartTime}
        endTime={endTime}
        setEndTime={setEndTime}
      ></Prop>
    </div>
  );
}
