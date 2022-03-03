import SearchIcon from '@mui/icons-material/Search';
import { Button, Grid, IconButton, InputBase, TextField } from '@mui/material';
import React from 'react';
import styles from './Location.module.css';
import LocationDataTable from './LocationDataTable';

export default function AllLocation() {
  return (
    <div className={styles.sidebarMenuAlignment}>
      <div className={styles.locationHeader}>
        <div className={styles.location}>Location</div>
        <div>Starbucks</div>
      </div>
      <div className={styles.searchBar}>
        <InputBase
          sx={{ ml: 1, flex: 1, backgroundColor: '#fff', pl: '5px' }}
          placeholder="Starbucks"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type="submit"
          sx={{ p: '5px', backgroundColor: '#fff', borderRadius: 0 }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={10} md={10} lg={10}>
          <span>Filter</span>
          <InputBase
            sx={{ ml: 1, flex: 1, backgroundColor: '#fff', pl: '5px' }}
            placeholder="Starbucks"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton
            type="submit"
            sx={{ p: '5px', backgroundColor: '#fff', borderRadius: 0 }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <TextField
            sx={{ maxWidth: '100px', mx: 1 }}
            id="outlined-size-small"
            size="small"
            placeholder="City"
          />
          <TextField
            sx={{ maxWidth: '100px', mx: 1 }}
            id="outlined-size-small"
            size="small"
            placeholder="State"
          />
          {/* <FormControl sx={{ minWidth: 100, mx: 1, p: 0 }}>
            <Select
              sx={{ padding: 0 }}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em style={{ color: 'gray' }}>Select</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          {/* <FormControl sx={{ minWidth: 100, mx: 1 }}>
            <Select
              style={{ padding:  }}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em style={{ color: 'gray' }}>Select</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          <Button variant="contained" style={{ backgroundColor: '#5346A0' }}>
            +Add
          </Button>
        </Grid>
        <Grid item xs={2} md={2} lg={2}>
          <Button
            variant="contained"
            style={{ backgroundColor: 'gray', borderRadius: '20px' }}
          >
            +Add Location
          </Button>
        </Grid>
      </Grid>
      <LocationDataTable />
    </div>
  );
}
