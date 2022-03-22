import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Card, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import DidList from './DidList';
import styles from './equipment.module.css';

const equipment = [
  {
    id: 1,
    type: "Grandstream HT812 (ATA)",
    lastSeen: "02/22/2021 7:00:42 pm",
    mac: "C0:74:AD:26:49:4A",
    serial: "22EAU1NL5126494A",
    dids: [
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
    ]
  },
  {
    id: 2,
    type: "Grandstream HT812 (ATA)",
    lastSeen: "02/22/2021 7:00:42 pm",
    mac: "C0:74:AD:26:49:4A",
    serial: "22EAU1NL5126494A",
    dids: [
      {
        number: 4523452354,
        lastSeen: '10/02/2020 12:05:20 am',
        description: 'Voice Line 2',
        mac: 'C0:74:AD:26:49:4A',
        port: 3
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
        port: 3
      },
      {
        number: 4523452354,
        lastSeen: '10/02/2020 12:05:20 am',
        description: 'Voice Line 1',
        mac: 'C0:74:AD:26:49:4A',
        port: 4
      }
    ]
  },
]
const useStyles = makeStyles({
  equipmentDetailBTN: {
    root: {
      maxWidth: "20px",
      fontWeight: 900
    }
  }
})

export default function EquipmentListDetails() {
  const [didList, setDidList] = useState<any>([]);
  const classes = useStyles();

  function handleClick(list: any) {
    setDidList(list.dids)
  }

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
              <Button variant="contained" sx={{ maxWidth: "20px" }} className={classes.equipmentDetailBTN} >
                +
              </Button>
              <Button className={styles.arrowBTN}>
                <ArrowBackIosIcon />
              </Button>
              <Button style={{ backgroundColor: 'white' }}>
                <ArrowForwardIos />
              </Button>
            </Grid>
          </Grid>
          {equipment.map(list => {
            return (
              <Card className={styles.equipmentList} onClick={() => handleClick(list)}>
                <Grid container style={{ margin: '10px' }}>
                  <Grid item lg={4}>
                    <Typography variant="h2" color="secondary-light">
                      Equipment Type
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {list.type}
                    </Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography variant="h2" color="secondary-light">
                      Last Seen Online
                    </Typography>
                    <Typography variant="body2">
                      {list.lastSeen}
                    </Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography variant="h2" color="secondary-light">
                      Mac
                    </Typography>
                    <Typography variant="body2">{list.mac}</Typography>
                  </Grid>
                  <Grid container style={{ margin: '10px' }}>
                    <Grid item lg={4}>
                      <Typography variant="h2" color="secondary-light">
                        Serial
                      </Typography>
                      <Typography variant="body2">{list.serial}</Typography>
                    </Grid>
                    <Grid item lg={4}>
                      <Typography variant="h2" color="secondary-light">
                        Description
                      </Typography>
                      <Typography variant="body2">-</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            )
          })}
        </Grid>
        <Grid item lg={7} md={6}>
          <DidList didList={didList} />
        </Grid>
      </Grid>
    </div>
  );
}
