import React, { SyntheticEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IContinents } from "../../interfaces";
import Typography from "@mui/material/Typography";
import "../../styles/continents.scss";

interface Props {
  continents: Array<IContinents>;
}

export const ContinentsTable: React.FC<Props> = ({ continents }) => {
  const navigate: NavigateFunction = useNavigate();

  const onContinentSelect = (code: string) => (e: SyntheticEvent) => {
    //TODO 3: Navigate to selected continent
    navigate(`/${code}`);
  };

  return (
    <React.Fragment>
      <div className="continents_table_heading">
        <Typography variant="h6">Name</Typography>
        <Typography variant="h6">Code</Typography>
      </div>
      <div>
        {continents.map((continent, i) => (
          <div className="continents_table_row" key={i} onClick={onContinentSelect(continent.code)}>
            <div className="continents_table_name">{continent.name}</div>
            <div className="continents_table_code">{continent.code}</div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};
