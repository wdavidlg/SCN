import { TableCell, TableRow } from "@mui/material";

export const ItemTable = ({ record, num, onClick }) => {
  return (
    <TableRow
      onClick={() => onClick(record)}
      hover
      sx={{ cursor: "pointer", height: "40px" }}
    >
      <TableCell>{num}</TableCell>
      <TableCell>{record.name}</TableCell>
      <TableCell>{record.lastName}</TableCell>
      <TableCell>{record.birthDate}</TableCell>
      <TableCell>{record.nameResponsible}</TableCell>
    </TableRow>
  );
};
