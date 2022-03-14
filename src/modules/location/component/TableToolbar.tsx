import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete,
  Button,
  IconButton,
  InputBase,
  TextField
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { location } from '../LocationSlice';
import styles from './Location.module.css';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      maxHeight: '35px',
      padding: 0,
      fontSize: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center'
    },
    '& input::placeholder': {
      fontSize: '13px',
      marginTop: '-10px'
    }
  },
  searchBar: {
    ml: 1,
    fontSize: '15px',
    paddingLeft: '5px',
    width: '85%',
    '& input::placeholder': {
      fontSize: '13px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
  searchIcon: {},
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
  locationSearch: {
    float: 'left',
    border: '1px solid #ccc9c9 ',
    borderRadius: '5px',
    height: ' 35px ',
    display: 'flex'
  },
  city: {
    float: 'left',
    width: '100px',
    display: 'inline-block',
    marginLeft: '5px',
    height: '30px',
    '& input::placeholder': {
      fontSize: '13px'
    },
    '& .MuiOutlinedInput-root': {
      padding: '6px 4px 6px 6px'
    }
  }
});

export default function TableToolbar() {
  const classes = useStyles();
  return (
    <section style={{}}>
      <strong className={classes.filter}> Filter &nbsp; </strong>
      <div className={classes.locationSearch}>
        <InputBase
          className={classes.searchBar}
          placeholder="Location Name / Address"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={classes.searchIcon}
        >
          <SearchIcon color="primary" />
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
