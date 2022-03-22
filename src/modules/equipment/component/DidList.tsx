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
      <TableRow style={{ backgroundColor: '#E5EEFF' }}>
        <TableCell>Phone Number</TableCell>
        <TableCell>Last Seen Online</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Equipment MAC</TableCell>
        <TableCell>Device Port</TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function DidList({ didList }: any) {

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
              {didList.map((row: any, index: number) => {
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
