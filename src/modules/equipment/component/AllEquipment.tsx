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
        <div className={styles.headerContent}>
        <div className={styles.headerIcon}>
          <ArrowBackIosIcon className={styles.arrowBackIcon} />
        </div>
        <div className={styles.equipmentDetails}>
              <Grid container>
                <Grid item xs={3} md={3} lg={4}>
                  <div style={{fontSize:"20px"}}>Location Details</div>
                  <div>
                    Starbucks 6966 (4605 E Chandler Blvd - Phoenix, AZ)
                  </div>
                </Grid>
                <Grid item xs={2} md={2} lg={2}>
                  <div>Address</div>
                  <div>4605 E. Chandler Blvd. A</div>
                </Grid>
                <Grid item xs={5} md={5} lg={5}>
                  <Grid container>
                    <Grid item xs={3} md={3} lg={3}>
                      <div>City</div>
                      <div>Phoenix</div>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <div>State</div>
                      <div>AZ</div>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <div>Zip</div>
                      <div>85048</div>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                      <div>e911</div>
                      <div>Off</div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} md={2} lg={1}>
                  <p className={styles.online}> Online</p>
                </Grid>
              </Grid>
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
