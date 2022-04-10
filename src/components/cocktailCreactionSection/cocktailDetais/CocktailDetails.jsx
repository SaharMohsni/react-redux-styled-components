import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ContainerWithVerticalContent } from "../../styles/ContainerWithVerticalContent.styled";
import { COCKTAIL_DETAILS_Filters_COUNT } from "../../../utils/constants";
import { setCocktailFiltersData } from "../../../features/actions/cocktailBar.actions";
import { isObjctEmpty } from "../../../utils/isEmpty";

const CocktailDetails = ({
  cocktailDetailsData,
  setValidStep,
  cocktailFiltersData,
}) => {
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = React.useState(cocktailFiltersData);

  React.useEffect(() => {
    if (!isObjctEmpty(selectedData)) {
      let allSelectData = Object.values(selectedData);

      if (
        allSelectData.length === COCKTAIL_DETAILS_Filters_COUNT &&
        !allSelectData.includes("")
      ) {
        dispatch(setCocktailFiltersData(selectedData));
        setValidStep(true);
      } else {
        setValidStep(false);
      }
    }
  }, [selectedData]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSelectedData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const renderItems = (itemsList) => {
    return itemsList.map((item) => {
      return (
        <MenuItem value={item.value} key={item.key}>
          {item.value}
        </MenuItem>
      );
    });
  };

  return (
    <ContainerWithVerticalContent>
      {cocktailDetailsData.map((cocktailDetails) => {
        const { isMultiple, label, data, key } = cocktailDetails;
        return (
          <FormControl
            key={label}
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              {label}
            </InputLabel>

            <Select
              labelId={`${
                isMultiple
                  ? "demo-multiple-name-label"
                  : " demo-simple-select-standard-label"
              }`}
              id={`${
                isMultiple
                  ? "demo-multiple-name"
                  : "demo-simple-select-standard"
              }`}
              multiple={isMultiple}
              value={selectedData[key]}
              name={key}
              onChange={(event, isMultiple) => handleChange(event, isMultiple)}
              label={label}
            >
              {renderItems(data)}
            </Select>
          </FormControl>
        );
      })}
    </ContainerWithVerticalContent>
  );
};

export default CocktailDetails;
