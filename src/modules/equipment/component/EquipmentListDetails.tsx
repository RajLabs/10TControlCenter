import { ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button, Card, Grid, Typography } from '@mui/material';
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

export default function EquipmentListDetails() {
  const [didList, setDidList] = useState<any>([]);
  const [didListIndex, setDidListIndex] = useState(-1);

  function handleClick(list: any, index: number) {
    setDidList(list.dids);
    setDidListIndex(index);
  }

  return (
    <div>
      <Grid container>
        <Grid item lg={5} md={6}>
          <Grid container style={{ padding: '15px 15px 15px 20px' }}>
            <Grid item lg={9}>
              <Typography variant="h1" color="secondary">
                Equipment
              </Typography>
            </Grid>
            <Grid item lg={3} >
              <div className={styles.equipmentAddField}>
                <Button variant="contained" className={styles.addBTN} >
                  +
                </Button>
                <Button className={styles.arrowBTN}>
                  <ArrowBackIosIcon sx={{ paddingLeft: '5px' }} />
                </Button>
                <Button className={styles.arrowBTN}>
                  <ArrowForwardIos sx={{ paddingLeft: '5px' }} />
                </Button>
              </div>
            </Grid>
          </Grid>
          {equipment.map((list: any, index: number) => {
            return (
              <Card className={didListIndex != index ? styles.equipmentList : styles.equipmentListOnClick} onClick={() => handleClick(list, index)}>
                <Grid container >
                  <Grid item lg={4} style={{ margin: "10px 0px 10px 0px" }}>
                    <Typography variant="h2" color="secondary-light">
                      Equipment Type
                    </Typography>
                    <Typography variant="h3" color="primary">
                      {list.type}
                    </Typography>
                  </Grid>
                  <Grid item lg={4} style={{ margin: "10px 0px 10px 0px" }}>
                    <Typography variant="h2" color="secondary-light">
                      Last Seen Online
                    </Typography>
                    <Typography variant="h3">
                      {list.lastSeen}
                    </Typography>
                  </Grid>
                  <Grid item lg={4} style={{ margin: "10px 0px 10px 0px" }}>
                    <Typography variant="h2" color="secondary-light">
                      Mac
                    </Typography>
                    <Typography variant="h3">{list.mac}</Typography>
                  </Grid>
                  <Grid item lg={4} style={{ margin: "10px 0px 10px 0px" }}>
                    <Typography variant="h2" color="secondary-light">
                      Serial#
                    </Typography>
                    <Typography variant="h3">{list.serial}</Typography>
                  </Grid>
                  <Grid item lg={4} style={{ margin: "10px 0px 10px 0px" }}>
                    <Typography variant="h2" color="secondary-light" >
                      Description
                    </Typography>
                    <Typography variant="h3">-</Typography>
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
