import React from 'react';
import { Table, TableCell, TableRow } from '@mui/material';

export default function EquipmentDID() {
  return (
    <section>
      <Table>
        <TableRow>
          <TableCell>
            <div>Phone Number</div>
            <div>18188358855</div>
          </TableCell>
          <TableCell>
            <div>Last Seen Online</div>
            <div>10/02/2020 12:05:20 am</div>
          </TableCell>
          <TableCell>
            <div>Description</div>
            <div>Voice Line 1</div>
          </TableCell>
          <TableCell>
            <div>Equipment MAC</div>
            <div>C0:74:AD:2B:36:E0</div>
          </TableCell>
          <TableCell>
            <div>Device Port</div>
            <div>1</div>
          </TableCell>
          <TableCell>
            <div>Temp Inbound</div>
            <div>-</div>
          </TableCell>
          <TableCell>
            <div>e911</div>
            <div>-</div>
          </TableCell>
        </TableRow>
      </Table>
    </section>
  );
}
