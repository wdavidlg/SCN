
import { Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { FormBuscar } from "../components/FormBuscar";
import TableRecords from "../components/TableRecords";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useRecordContext } from "../context/RecordContext";

export const ListadoPage = () => {
  const {state:{records}, select, searchRecords } = useRecordContext();
  const [text, setText] = useState("")
  const navigate = useNavigate();

  const listRecords = useMemo(()=>{
    return searchRecords(text.trim())
  }, [records, text])

  const handleClick = () => {
    navigate("/registrar");
  }

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}
      >
        <Button
          type="submit"
          startIcon={<PersonAddAltIcon />}
          variant="contained"
          onClick={handleClick}
        >
          Crear nuevo
        </Button>
      </div>
      <FormBuscar onSearch={setText} />
      <TableRecords select={select} records={listRecords} />
    </div>
  );
};
