import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './equipment.module.css';
import EquipmentListDetails from './EquipmentListDetails';

export default function EquipmentList() {
  return (
    <div className={styles.headerAlignment}>
      <Card className={styles.card}>
        <div className={styles.headerContent}>
          <Grid container>
            <Grid item xs={1} md={1} lg={1}>
              <div className={styles.headerIcon}>
                <ArrowBackIosIcon className={styles.arrowBackIcon} />
              </div>
            </Grid>
            <Grid item xs={11} md={11} lg={11}>
              <div className={styles.equipmentDetails}>
                <Grid container>
                  <Grid item xs={3} md={3} lg={4}>
                    <Typography className={styles.locationDetails}>
                      Location Details
                    </Typography>
                    <Typography variant="h5">
                      Starbucks 6966 (4605 E Chandler Blvd - Phoenix, AZ)
                    </Typography>
                  </Grid>
                  <Grid item xs={2} md={2} lg={2}>
                    <Typography variant="h5">Address</Typography>
                    <Typography variant="h4">
                      4605 E. Chandler Blvd. A
                    </Typography>
                  </Grid>
                  <Grid item xs={5} md={5} lg={5}>
                    <Grid container>
                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5">City</Typography>
                        <Typography variant="h4">Phoenix</Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5">State</Typography>
                        <Typography variant="h4">AZ</Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5">Zip</Typography>
                        <Typography variant="h4">85048</Typography>
                      </Grid>
                      <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5">e911</Typography>
                        <Typography variant="h4">Off</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2} md={2} lg={1}>
                    <div
                      className={styles.online}
                      style={{ marginTop: '10px' }}
                    >
                      <Typography variant="h4">Online</Typography>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </Card>
      <EquipmentListDetails />
    </div>
  );
}
