import React from "react";
import { gql, useQuery } from "@apollo/client";
import { IContinents, IContinentsQueryResult } from "../interfaces";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ContinentsTable } from "../components/continents/continents-table";
import { ErrorDiv } from "../components/error-div";
import { LoadingDiv } from "../components/loading-div";

/**
 * TODO 1: Create a graphql query to get a list of all continents
 * You can use the IContinentQueryResult to shape the response appropriately
 */
const ALL_CONTITNENTS_QUERY = gql`
  query getContinents {
    continents {
      code
      name
    }
  }
`;

export const Continents: React.VFC = () => {
  const { data, loading, error } = useQuery<IContinentsQueryResult>(ALL_CONTITNENTS_QUERY);
  let continents: Array<IContinents> = [];

  if (loading) return <LoadingDiv />;

  if (error) return <ErrorDiv />;

  if (data) {
    continents = data.continents;
  }
  /**
   * TODO 2: Render the list of continents and their codes
   *  The user should be able to click on a continent.
   * Upon clicking a continent, navigate the user to /<continent-code>
   * where list of countries in that continent should be displayed
   */
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="subtitle1" component="div" align="center" paragraph>
        Found {continents.length} Continents
      </Typography>
      <ContinentsTable continents={continents} />
    </Container>
  );
};
