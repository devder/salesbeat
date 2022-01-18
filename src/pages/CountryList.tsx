import { gql, useQuery } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ISingleContinent, ISingleContinentQueryResult } from "../interfaces";
import { ErrorDiv } from "../components/error-div";
import { LoadingDiv } from "../components/loading-div";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CountryItem } from "../components/countries/country-item";
import { SearchInput } from "../components/search-input";
import "../styles/countries.scss";

/**
 * update the query to show the country name, capital, currency and languages spoken
 */
const COUNTRIES_IN_CONTINENT = gql`
  query getCountriesInContent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        name
        capital
        currency
        languages {
          name
        }
      }
    }
  }
`;

interface IGqlQueryVars {
  code: string;
}

export const CountryList: React.VFC = () => {
  const [keyword, setKeyword] = useState<string>("");

  //TODO 4: extract the continent code from the URL
  // set a default continent code incase a user somehow navigates to a wrong URL
  const { continentCode = "EU" } = useParams<"continentCode">();

  //TODO 5: query the GraphQL endopoint to get a list of all countries in the continent
  const { loading, data, error } = useQuery<ISingleContinentQueryResult, IGqlQueryVars>(COUNTRIES_IN_CONTINENT, {
    variables: { code: continentCode.toUpperCase() },
  });

  if (loading) return <LoadingDiv />;

  if (error) return <ErrorDiv />;

  const singleContinent: ISingleContinent = data!.continent;

  const filteredCountries = singleContinent.countries.filter(
    ({ name, capital }) => name?.toLowerCase().includes(keyword) || capital?.toLowerCase().includes(keyword)
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value.toLowerCase());

  return (
    <Container>
      <Typography variant="h4" component="div" align="center">
        {singleContinent.name}
      </Typography>

      <Typography align="center" paragraph>
        {singleContinent.countries.length} Countries
      </Typography>

      <div className="countries_input_container">
        {/* //TODO 7: render a back button to allow the user to back to the list of continents */}
        <Button
          variant="outlined"
          startIcon={<KeyboardBackspaceIcon />}
          sx={{ textTransform: "none" }}
          component={Link}
          to="/"
        >
          Home
        </Button>

        <SearchInput onChange={handleInputChange} />
      </div>

      <div className="countries_table_heading">
        <Typography variant="h6" className="countries_table_heading_item">
          Country
        </Typography>

        <Typography variant="h6" className="countries_table_heading_item">
          Capital
        </Typography>
      </div>

      {/* //TODO 6: render list of countries from the query */}
      {filteredCountries.map((country, i) => (
        <CountryItem key={i} country={country} />
      ))}
    </Container>
  );
};
