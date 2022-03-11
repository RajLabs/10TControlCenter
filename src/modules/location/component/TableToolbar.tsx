import SearchIcon from '@mui/icons-material/Search';
import {
    Autocomplete,
    Button,
    IconButton,
    InputBase, TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { location } from '../LocationSlice';
import styles from './Location.module.css';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      maxHeight: '35px',
      padding: 0,
      fontSize: '15px'
    }
  },
  searchBar: {
    ml: 1,
    flex: 1,
    fontSize: '15px',
    paddingLeft: '5px'
  },
  filter: {
    float: 'left',
    marginTop: '8px'
  },
  tableHeaderBTN: {
    textTransform: 'capitalize',
    backgroundColor: 'transparent',
    fontWeight: 500,
    cursor: 'pointer'
  },
  pagination: {
    float: 'right',
    paddingTop: '20px'
  }
});

export default function TableToolbar() {
  const classes = useStyles();
  return (
    <section style={{}}>
      <strong className={classes.filter}> Filter &nbsp; </strong>
      <div className={styles.locationSearch}>
        <InputBase
          className={classes.searchBar}
          placeholder="Location Name / Address"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" sx={{ paddingBottom: '5px' }} />
        </IconButton>
      </div>
      <div className={styles.city}>
        <Autocomplete
          options={location}
          getOptionLabel={option => option}
          className={classes.root}
          renderInput={params => <TextField {...params} placeholder="City" />}
        />
      </div>
      <div className={styles.city}>
        <Autocomplete
          size="small"
          options={location}
          getOptionLabel={option => option}
          className={classes.root}
          renderInput={params => <TextField {...params} placeholder="State" />}
        />
      </div>
      <Button variant="contained" className={styles.addBTN}>
        <strong> +</strong> &nbsp; Add
      </Button>
      <Button variant="contained" className={styles.addLocation}>
        <strong> +</strong> &nbsp; Add Location
      </Button>
    </section>
  );
}
