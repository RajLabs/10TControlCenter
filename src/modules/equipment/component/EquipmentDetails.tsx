import { Paper, Table, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';

export default function EquipmentDetails() {
  return (
    <div>
      <section>
        <Paper elevation={0} className={styles.equipmentType}>
          <Table>
            <TableRow>
              <TableCell>
                <Typography className={styles.tableHeader}>
                  Equipment Type
                </Typography>
                <Typography className={styles.tableBody}>
                  Grandstream HT812 (ATA)
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>
                  Last Seen Online
                </Typography>
                <Typography className={styles.tableBody}>
                  02/22/2021 7:00:42 pm
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>
                  Description
                </Typography>
                <Typography className={styles.tableBody}>-</Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>Mac</Typography>
                <Typography className={styles.tableBody}>
                  C0:74:AD:26:49:4A
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>Serial</Typography>
                <Typography className={styles.tableBody}>
                  22EAU1NL5126494A
                </Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>
                  Power State
                </Typography>
                <Typography className={styles.tableBody}>-</Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>
                  Battery State
                </Typography>
                <Typography className={styles.tableBody}>-</Typography>
              </TableCell>
              <TableCell>
                <Typography className={styles.tableHeader}>Status</Typography>
                <Typography className={styles.tableBody}>-</Typography>
              </TableCell>
            </TableRow>
          </Table>
        </Paper>
      </section>
    </div>
  );
}
