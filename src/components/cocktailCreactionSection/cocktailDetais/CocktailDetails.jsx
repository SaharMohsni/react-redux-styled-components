import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

const CocktailDetails = ({ cocktailDetailsData }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const renderItems = (itemsList) => {
    <>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {itemsList.map((item) => {
        return (
          <MenuItem value={item.value} key={item.key}>
            {item.value}
          </MenuItem>
        );
      })}
    </>;
  };
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        {cocktailDetailsData.map((el) => {
          return (
            <>
              <InputLabel id="demo-simple-select-standard-label">
                {el.label}
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                {renderItems(el.data)}
              </Select>
            </>
          );
        })}
      </FormControl>
    </div>
  );
};

export default CocktailDetails;
