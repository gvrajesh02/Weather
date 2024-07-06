import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    borderBottom: 'none',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    borderBottom: 'none',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 'none',
  },
}));

const StyledTable = styled(Table)(({ theme }) => ({
  borderCollapse: 'collapse',
}));

const Forecast = ({ forecast }) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Temperature (°C)</StyledTableCell>
            <StyledTableCell>Conditions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {forecast.map((day, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {day.date}
              </StyledTableCell>
              <StyledTableCell>{day.temp}</StyledTableCell>
              <StyledTableCell sx={{ textTransform: 'capitalize' }}>{day.conditions}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default Forecast;
