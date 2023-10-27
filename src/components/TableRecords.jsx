import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ItemTable } from "./ItemTable";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function TableRecords({records, select}) {
  
  const navigate = useNavigate();

  const handleClick = (record) => {
    select(record);
    navigate("/ver");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Typography fontWeight={"bold"}>Total: {records.length}</Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Nacimiento</TableCell>
            <TableCell>Encargado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record, i) => (
            <ItemTable
              key={record.id}
              record={record}
              num={i + 1}
              onClick={handleClick}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
}
