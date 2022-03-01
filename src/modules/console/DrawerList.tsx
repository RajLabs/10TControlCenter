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
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <Domain className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Organizations</ListItemText>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/" className={styles.routerLink}>
              <ListItem>All Organizations</ListItem>
            </Link>
            <Link to="/" className={styles.routerLink}>
              <ListItem>Create Organization</ListItem>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <LocationOn className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Location</ListItemText>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/" className={styles.routerLink}>
              <ListItem>All Location</ListItem>
            </Link>
            <Link to="/" className={styles.routerLink}>
              <ListItem>Create Location</ListItem>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
      <ListItem className={styles.listItem}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={styles.accordionIcon} />}
            aria-controls="panel1a-content"
          >
            <ListItemIcon>
              <Router className={styles.drawerListIcon} />
            </ListItemIcon>
            <ListItemText>Equipment</ListItemText>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/" className={styles.routerLink}>
              <ListItem>All Equipment</ListItem>
            </Link>
            <Link to="/" className={styles.routerLink}>
              <ListItem>Create Equipment</ListItem>
            </Link>
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </List>
  );
}
