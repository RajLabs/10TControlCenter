import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase } from '@mui/material';
import React from 'react';
import styles from './Location.module.css';
import LocationDataTable from './LocationDataTable';

export default function AllLocation() {
  return (
    <div className={styles.sidebarMenuAlignment}>
      <div className={styles.locationHeader}>
        <div className={styles.location}>Location</div>
        <div className={styles.starbucks}>Starbucks</div>
      </div>
      <div className={styles.searchBar}>
        <InputBase
          className={styles.locationSearch}
          placeholder="Starbucks"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="submit"
          className={styles.locationSearchIcon}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div className={styles.locationtable}>
        <LocationDataTable />
      </div>
    </div>
  );
}
