import { Dashboard, Domain, LocationOn, Router } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Console.module.css';

export default function DrawerList() {
  return (
    <List>
      <ListItem className={styles.dashboard}>
        <ListItemIcon>
          <Dashboard className={styles.drawerListIcon} />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            className={styles.accordionSummary}
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <Domain className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Organizations</ListItemText>
          </AccordionSummary>
          <AccordionDetails className={styles.normalization}>
            <Link to="/allorganization" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>AO</ListItemText>
                <ListItemText> All Organizations</ListItemText>
              </AccordionSummary>
            </Link>
            <Link to="/createorganization" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>+O</ListItemText>
                <ListItemText> Create Organizations</ListItemText>
              </AccordionSummary>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            className={styles.accordionSummary}
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <LocationOn className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Location</ListItemText>
          </AccordionSummary>
          <AccordionDetails className={styles.normalization}>
            <Link to="/alllocation" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>AL</ListItemText>
                <ListItemText> All Location</ListItemText>
              </AccordionSummary>
            </Link>
            <Link to="/createlocation" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>+L</ListItemText>
                <ListItemText> Create Location</ListItemText>
              </AccordionSummary>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            className={styles.accordionSummary}
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <Router className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Equipment</ListItemText>
          </AccordionSummary>
          <AccordionDetails className={styles.normalization}>
            <Link to="/allequipment" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>AE</ListItemText>
                <ListItemText> All Equipment</ListItemText>
              </AccordionSummary>
            </Link>
            <Link to="/createequipment" className={styles.routerLink}>
              <AccordionSummary className={styles.accordionSummary}>
                <ListItemText>+E</ListItemText>
                <ListItemText> Create Equipment</ListItemText>
              </AccordionSummary>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </List>
  );
}
