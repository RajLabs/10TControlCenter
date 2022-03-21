import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import DidList from './DidList';
import styles from './equipment.module.css';

export default function EquipmentListDetails() {
  return (
    <div>
      <Grid container>
        <Grid item lg={5} md={6}>
          <Grid container>
            <Grid item lg={6}>
              <Typography>
                <h1 className={styles.headerTwo}>Equipment</h1>
              </Typography>
            </Grid>
            <Grid item lg={6} style={{ marginTop: '10px' }}>
              <Button variant="contained">
                <strong> +</strong>
              </Button>
              <Button style={{ backgroundColor: 'white' }}>
                <ArrowBackIosIcon />
              </Button>
              <Button style={{ backgroundColor: 'white' }}>
                <ArrowForwardIos />
              </Button>
            </Grid>
          </Grid>
          <Paper elevation={0} className={styles.equipmentType}>
            <Grid container style={{ margin: '10px' }}>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Equipment Type
                </Typography>
                <Typography variant="body2" color="primary">
                  Grandstream HT812 (ATA)
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Last Seen Online
                </Typography>
                <Typography variant="body2">02/22/2021 7:00:42 pm</Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Mac
                </Typography>
                <Typography variant="body2">C0:74:AD:26:49:4A</Typography>
              </Grid>
              <Grid container style={{ margin: '10px' }}>
                <Grid item lg={4}>
                  <Typography variant="h2" color="secondary-light">
                    Serial
                  </Typography>
                  <Typography variant="body2">22EAU1NL5126494A</Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography variant="h2" color="secondary-light">
                    Description
                  </Typography>
                  <Typography variant="body2">-</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={0} className={styles.equipmentType}>
            <Grid container style={{ margin: '10px' }}>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Equipment Type
                </Typography>
                <Typography variant="body2" color="primary">
                  Grandstream HT812 (ATA)
                </Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Last Seen Online
                </Typography>
                <Typography variant="body2">02/22/2021 7:00:42 pm</Typography>
              </Grid>
              <Grid item lg={4}>
                <Typography variant="h2" color="secondary-light">
                  Mac
                </Typography>
                <Typography variant="body2">C0:74:AD:26:49:4A</Typography>
              </Grid>
              <Grid container style={{ margin: '10px' }}>
                <Grid item lg={4}>
                  <Typography variant="h2" color="secondary-light">
                    Serial
                  </Typography>
                  <Typography variant="body2">22EAU1NL5126494A</Typography>
                </Grid>
                <Grid item lg={4}>
                  <Typography variant="h2" color="secondary-light">
                    Description
                  </Typography>
                  <Typography variant="body2">-</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item lg={7} md={6}>
          <DidList />
        </Grid>
      </Grid>
    </div>
  );
}
