import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '../../../assets/img/Dashboard_Icon.svg';
import EquipmentIcon from '../../../assets/img/Equipment_Icon.svg';
import LocationsIcon from '../../../assets/img/Locations_Icon.svg';
import OrganizationsIcon from '../../../assets/img/Organizations_Icon.svg';
import styles from './Console.module.css';

export default function DrawerList() {
  return (
    <div>
      <List>
        <ListItem className={styles.dashboard}>
          <ListItemIcon>
            <img
              src={DashboardIcon}
              className={styles.drawerListIcon}
              width="18px"
              alt="dashboardIcon"
            />
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
                <img
                  src={OrganizationsIcon}
                  className={styles.drawerListIcon}
                  width="18px"
                  alt="organizationsIcon"
                />
              </ListItemIcon>
              <ListItemText>Organizations</ListItemText>
            </AccordionSummary>
            <AccordionDetails className={styles.normalization}>
              <Link to="allorganization" className={styles.routerLink}>
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>AO</ListItemText>
                  <ListItemText> All Organizations</ListItemText>
                </AccordionSummary>
              </Link>
              <Link
                to="createorganization"
                className={styles.routerLink}
              >
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>+O</ListItemText>
                  <ListItemText> Create Organization</ListItemText>
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
                <img
                  src={LocationsIcon}
                  className={styles.drawerListIcon}
                  width="18px"
                  alt="locationsIcon"
                />
              </ListItemIcon>
              <ListItemText>Locations</ListItemText>
            </AccordionSummary>
            <AccordionDetails className={styles.normalization}>
              <Link to="alllocation" className={styles.routerLink}>
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>AL</ListItemText>
                  <ListItemText> All Locations</ListItemText>
                </AccordionSummary>
              </Link>
              <Link to="createlocation" className={styles.routerLink}>
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
                <img
                  src={EquipmentIcon}
                  className={styles.drawerListIcon}
                  width="18px"
                  alt="equipmentIcon"
                />
              </ListItemIcon>
              <ListItemText>Equipment</ListItemText>
            </AccordionSummary>
            <AccordionDetails className={styles.normalization}>
              <Link to="allequipment" className={styles.routerLink}>
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>AE</ListItemText>
                  <ListItemText> All Equipment</ListItemText>
                </AccordionSummary>
              </Link>
              <Link
                to="equipmentlist"
                className={styles.routerLink}
              >
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>ED</ListItemText>
                  <ListItemText>Equipment Details</ListItemText>
                </AccordionSummary>
              </Link>
              <Link to="createequipment" className={styles.routerLink}>
                <AccordionSummary className={styles.accordionSummary}>
                  <ListItemText>+E</ListItemText>
                  <ListItemText> Create Equipment</ListItemText>
                </AccordionSummary>
              </Link>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
    </div>
  );
}
