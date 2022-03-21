import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box
} from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow style={{ backgroundColor: 'rgb(238,238,238)' }}>
        <TableCell>Phone Number</TableCell>
        <TableCell>Last Seen Online</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Equipment MAC</TableCell>
        <TableCell>Device Port</TableCell>
      </TableRow>
    </TableHead>
  );
}
const rows = [
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
    port: 4
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
    port: 4
  }
];

export default function DidList() {
  return (
    <div className={styles.equipmentDidList}>
      <Grid container>
        <Grid item lg={9}>
          <Typography color="primary" className={styles.vegaPort}>
            VEGA 8 Port (ATA)
          </Typography>
        </Grid>
        <Grid item lg={3}>
          <Button className={styles.addBtn}>Add DID&apos;s</Button>
        </Grid>
      </Grid>
      <Typography className={styles.headerDid}>DID&apos;s</Typography>
      <Box sx={{ width: '100%' }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead />
            <TableBody>
              {rows.map((row: any, index: number) => {
                return (
                  <TableRow>
                    <TableCell>{row.number}</TableCell>
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
    </div>
  );
}
