import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, IconButton, TextField } from '@mui/material';
import React from 'react';
import styles from './Location.module.css';
import LocationDataTable from './LocationDataTable';
import { location } from '../LocationSlice';
import map from '../../../assets/img/Map_Icon.svg';

export default function AllLocation() {
  return (
    <div className={styles.sidebarMenuAlignment}>
      <div className={styles.locationHeader}>
        <div className={styles.map}>
          <img src={map} alt="" />
        </div>
        <div className={styles.locations}>
          <div className={styles.location}>Location</div>
          <div className={styles.starbucks}>Starbucks</div>
        </div>
      </div>
      <div className={styles.searchBar}>
        <IconButton
          className={styles.searchLocation}
          type="submit"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <div className={styles.locationSelector}>
          <Autocomplete
            size="small"
            options={location}
            getOptionLabel={option => option}
            renderInput={params => (
              <TextField
                {...params}
                placeholder="Starbucks"
                variant="standard"
                InputProps={{ ...params.InputProps, disableUnderline: true }}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.locationtable}>
        <LocationDataTable />
      </div>
    </div>
  );
}
