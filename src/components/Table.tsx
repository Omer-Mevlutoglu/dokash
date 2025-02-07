import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { data } from "../utils/data";

const Tablee = () => {
  return (
    <TableContainer component={Paper} sx={{ width: 500 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
            <TableCell>Game Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => {
            return (
              <TableRow>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.Password}</TableCell>
                <TableCell>{item.GameName}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tablee;
