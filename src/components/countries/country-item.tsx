import React, { useState, SyntheticEvent } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ICountry } from "../../interfaces";
import "../../styles/countries.scss";

interface Props {
  country: ICountry;
}

export const CountryItem: React.FC<Props> = ({ country }) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const { languages, name, capital, currency } = country;
  // add a comma after each available language
  const formattedLanguages = languages.map(({ name }) => name).join(", ");

  const handleChange = (panel: string) => (e: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expanded === name} onChange={handleChange(name)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${name}-content`} id={`${name}-header`}>
        <Typography className="country_item_name">{name}</Typography>
        <Typography sx={{ color: "text.secondary" }}>{capital}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="country_item_panel_row">
          <Typography component="div" className="country_item_label">
            Currency -
          </Typography>
          <Typography component="div">{currency}</Typography>
        </div>
        <div className="country_item_panel_row">
          <Typography component="div" className="country_item_label">
            Languages -
          </Typography>
          <Typography component="div">{formattedLanguages}</Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
