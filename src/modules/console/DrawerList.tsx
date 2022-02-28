import React from 'react';
import { Dashboard } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export default function DrawerList() {
  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText>Dashboard</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText>Organizations</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText>Location</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <Dashboard />
        </ListItemIcon>
        <ListItemText>Equipment</ListItemText>
      </ListItem>
    </List>
  );
}
