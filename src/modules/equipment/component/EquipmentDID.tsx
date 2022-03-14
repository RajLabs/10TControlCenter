import {
  Button,
  Paper,
  Table,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';

export default function EquipmentDID() {
  return (
    <Paper className={styles.didCard}>
      <header className={styles.didHeader}>
        <div>DID&apos;s</div>
        <Button className={styles.addBtn}>Add DID&apos;s</Button>
      </header>
      <Table className={styles.didTable}>
        <TableRow>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Phone Number
            </Typography>
            <Typography variant="h5">18188358855</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Last Seen Online
            </Typography>
            <Typography variant="h5">10/02/2020 12:05:20 am</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Description
            </Typography>
            <Typography variant="h5">Voice Line 1</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Equipment MAC
            </Typography>
            <Typography variant="h5">C0:74:AD:2B:36:E0</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Device Port
            </Typography>
            <Typography variant="h5">1</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              Temp Inbound
            </Typography>
            <Typography variant="h5">-</Typography>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <Typography variant="h4" color="secondary-dark">
              e911
            </Typography>
            <Typography variant="h5">-</Typography>
          </TableCell>
          <TableCell>
            <div className={styles.online}>
              <Typography variant="subtitle1">Online</Typography>
            </div>
          </TableCell>
        </TableRow>
      </Table>
    </Paper>
  );
}
