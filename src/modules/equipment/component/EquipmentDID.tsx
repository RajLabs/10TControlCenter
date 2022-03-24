import {
  Box, Button,
  Paper,
  Table, TableBody, TableCell, TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';

const didList = [
  {
    number: 4523452354,
    lastSeen: '10/02/2020 12:05:20 am',
    description: 'Voice Line 2',
    mac: 'C0:74:AD:26:49:4A',
    port: 3
  },
  {
    number: 4523452354,
    lastSeen: '10/02/2020 12:05:20 am',
    description: 'Voice Line 1',
    mac: 'C0:74:AD:26:49:4A',
    port: 4
  },
  {
    number: 4523452354,
    lastSeen: '10/02/2020 12:05:20 am',
    description: 'Voice Line 1',
    mac: 'C0:74:AD:26:49:4A',
    port: 3
  },
  {
    number: 4523452354,
    lastSeen: '10/02/2020 12:05:20 am',
    description: 'Voice Line 1',
    mac: 'C0:74:AD:26:49:4A',
    port: 4
  }
]
function EnhancedTableHead() {
  return (
    <TableHead style={{ backgroundColor: "#F8FAFF" }}>
      <TableRow >
        <TableCell className={styles.tableCell}>Phone Number</TableCell>
        <TableCell className={styles.tableCell}>Last Seen Online</TableCell>
        <TableCell className={styles.tableCell}>Description</TableCell>
        <TableCell className={styles.tableCell}>Equipment MAC</TableCell>
        <TableCell className={styles.tableCell}>Device Port</TableCell>
      </TableRow>
    </TableHead>
  );
}
export default function EquipmentDID() {
  return (
    <Paper className={styles.didCard}>
      <header className={styles.didHeader}>
        <div>DID&apos;s</div>
        <Button className={styles.addBtn}>Add DID&apos;s</Button>
      </header>
      <Box sx={{ width: '100%' }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead />
            <TableBody>
              {didList.map((row: any, index: number) => {
                return (
                  <TableRow
                  >
                    <TableCell style={{ borderBottom: "2px" }}>{row.number}</TableCell>
                    <TableCell>{row.lastSeen}</TableCell>
                    <TableCell>{row.description}</TableCell>
                    <TableCell>{row.mac}</TableCell>
                    <TableCell>{row.port}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Paper>
  );
}
