import { Button, Paper, Table, TableCell, TableRow } from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';

export default function EquipmentDID() {
  return (
    <Paper className={styles.didCard}>
      <header className={styles.didHeader} >
        <div >DID&apos;s</div>
        <Button className={styles.addBtn}>Add DID&apos;s</Button>
      </header>
      <Table className={styles.didTable}>
        <TableRow>
          <TableCell className={styles.didDetails}>
            <div>Phone Number</div>
            <p>18188358855</p>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <div>Last Seen Online</div>
            <p>10/02/2020 12:05:20 am</p>
            </TableCell>
          <TableCell className={styles.didDetails}>
            <div>Description</div>
             <p>Voice Line 1</p>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <div>Equipment MAC</div>
             <p>C0:74:AD:2B:36:E0</p>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <div>Device Port</div>
            <p>1</p>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <div>Temp Inbound</div>
            <p>-</p>
          </TableCell>
          <TableCell className={styles.didDetails}>
            <div>e911</div>
             <p>-</p>
          </TableCell>
          <TableCell>
            <div className={styles.online}> Online</div>
          </TableCell>
        </TableRow>
      </Table>
      </Paper>
  );
}
