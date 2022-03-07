import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, IconButton, TextField } from '@mui/material';
import React from 'react';
import styles from './Location.module.css';
import LocationDataTable from './LocationDataTable';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder'
];
export default function AllLocation() {
  return (
    <div className={styles.sidebarMenuAlignment}>
      <div className={styles.locationHeader}>
        <div className={styles.location}>Location</div>
        <div className={styles.starbucks}>Starbucks</div>
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
            options={names}
            getOptionLabel={option => option}
            renderInput={params => (
              <TextField
                {...params}
                placeholder="Location"
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
