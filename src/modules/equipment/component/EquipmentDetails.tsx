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
                <Typography variant="h2" color="secondary-light">
                  Equipment Type
                </Typography>
                <Typography variant="body2">Grandstream HT812 (ATA)</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Last Seen Online
                </Typography>
                <Typography variant="body2">02/22/2021 7:00:42 pm</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Description
                </Typography>
                <Typography variant="body2">-</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Mac
                </Typography>
                <Typography variant="body2">C0:74:AD:26:49:4A</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Serial
                </Typography>
                <Typography variant="body2">22EAU1NL5126494A</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Power State
                </Typography>
                <Typography variant="body2">-</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Battery State
                </Typography>
                <Typography variant="body2">-</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h2" color="secondary-light">
                  Status
                </Typography>
                <Typography variant="body2">-</Typography>
              </TableCell>
            </TableRow>
          </Table>
        </Paper>
      </section>
    </div>
  );
}
