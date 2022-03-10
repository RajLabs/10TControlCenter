import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';
import EquipmentDetails from './EquipmentDetails';
import EquipmentDID from './EquipmentDID';

export default function AllEquipment() {
  return (
    <div className={styles.headerAlignment}>
      <Card className={styles.card}>
        <div className={styles.headerIcon}>
          <ArrowBackIosIcon className={styles.arrowBackIcon} />
          <div>
            <div className={styles.equipmentDetails}>
              <Grid container>
                <Grid item xs={3} md={3} lg={3}>
                  <Typography>Location Details</Typography>
                  <Typography>
                    Starbucks 6966 (4605 E Chandler Blvd - Phoenix, AZ)
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                  <Typography>Address</Typography>
                  <Typography>4605 E. Chandler Blvd. A</Typography>
                </Grid>
                <Grid item xs={5} md={5} lg={5}>
                  <Grid container>
                    <Grid item xs={3} md={3} lg={3}>
                      <Typography>City</Typography>
                      <Typography>Phoenix</Typography>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <Typography>State</Typography>
                      <Typography>AZ</Typography>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <Typography>Zip</Typography>
                      <Typography>85048</Typography>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <Typography>e911</Typography>
                      <Typography>Off</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                  <p className={styles.online}> Online</p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Card>
      <Typography>
        <h1 className={styles.header}>Equipment</h1>
      </Typography>
      <Box className={styles.box}>
        <EquipmentDetails />
        <EquipmentDID />
        <br />
        <EquipmentDetails />
      </Box>
    </div>
  );
}
