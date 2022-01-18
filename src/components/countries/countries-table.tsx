import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ICountry } from "../../interfaces";

const textColor: string = "#124a63";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: textColor,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface Props {
  countries: Array<ICountry>;
}

interface ITableData {
  name: string;
  capital: string;
  currency: string;
  formattedLanguages: string;
}

export const CountriesTable: React.FC<Props> = ({ countries }) => {
  const createData = (countryData: ICountry): ITableData => {
    const { name, capital, currency, languages } = countryData;

    // add a comma after each available language
    const formattedLanguages: string = languages.map(({ name }) => name).join(", ");

    return { name, capital, currency, formattedLanguages };
  };

  const tableData: Array<ITableData> = countries.map(createData);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name </StyledTableCell>
              <StyledTableCell align="right">Capital</StyledTableCell>
              <StyledTableCell align="right">Currency</StyledTableCell>
              <StyledTableCell align="right">Languages</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map(row => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.capital}</StyledTableCell>
                <StyledTableCell align="right">{row.currency}</StyledTableCell>
                <StyledTableCell align="right">{row.formattedLanguages}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
