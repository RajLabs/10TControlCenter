import { ArrowDownward } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete,
  Button,
  IconButton,
  InputBase,
  Pagination,
  TextField
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import styles from './Location.module.css';

interface Data {
  location: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  status: string;
  emg: string;
}

function createData(
  location: string,
  address: string,
  city: string,
  state: string,
  zip: number,
  status: string,
  emg: string
): Data {
  return {
    location,
    address,
    city,
    state,
    zip,
    status,
    emg
  };
}

const rows = [
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'offline',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'offline',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'Trouble',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'Trouble',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  ),
  createData(
    'Starbucks(4605 E Chandler Blvd-phonenix,AZ)',
    '564 G.A.R HighWay',
    'Phoneix',
    'AZ',
    45344,
    'online',
    'off'
  )
];
interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'address',
    numeric: true,
    disablePadding: false,
    label: 'Address'
  },
  {
    id: 'city',
    numeric: true,
    disablePadding: false,
    label: 'City'
  },
  {
    id: 'state',
    numeric: true,
    disablePadding: false,
    label: 'State'
  },
  {
    id: 'zip',
    numeric: true,
    disablePadding: false,
    label: 'Zip'
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: 'Status'
  },
  {
    id: 'emg',
    numeric: true,
    disablePadding: false,
    label: 'e911'
  }
];

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
function EnhancedTableHead() {
  return (
    <TableHead className={styles.tableHeader}>
      <TableRow className={styles.tableHeader}>
        <TableCell
          sx={{
            backgroundColor: '#D3E3FC',
            paddingLeft: '20px',
            minWidth: 200,
            fontWeight: 900
          }}
        >
          Location Name
          <IconButton>
            <ArrowDownward style={{ fontSize: 18, fontWeight: 900 }} />
          </IconButton>
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            sx={{
              backgroundColor: '#D3E3FC',
              fontWeight: 900,
              minWidth: '150px'
            }}
          >
            {headCell.label}
            <IconButton>
              <ArrowDownward style={{ fontSize: 18, fontWeight: 900 }} />
            </IconButton>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
  return (
    <section style={{}}>
      <strong style={{ float: 'left', marginTop: '15px' }}>
        {' '}
        Filter &nbsp;{' '}
      </strong>
      <div className={styles.locationSearch}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search User..."
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </div>
      <div className={styles.city}>
        <Autocomplete
          size="small"
          options={names}
          getOptionLabel={option => option}
          renderInput={params => <TextField {...params} placeholder="City" />}
        />
      </div>
      <div className={styles.city}>
        <Autocomplete
          size="small"
          options={names}
          getOptionLabel={option => option}
          renderInput={params => <TextField {...params} placeholder="State" />}
        />
      </div>
      <Button variant="contained" className={styles.addBTN}>
        +Add
      </Button>
      <Button variant="contained" className={styles.addLocation}>
        +Add Location
      </Button>
    </section>
  );
}

export default function LocationDataTable() {
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  return (
    <div style={{ width: '100%' }}>
      <Box sx={{ width: '99%' }}>
        <Paper
          sx={{ width: '99%', mb: 2, p: 4 }}
          className={styles.allLocationTable}
        >
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{ minWidth: 750, marginTop: '20px', overflow: 'visible' }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead />
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow hover tabIndex={-1} key={row.location}>
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        align="left"
                        sx={{ padding: '20px' }}
                      >
                        {row.location}
                      </TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="left">{row.state}</TableCell>
                      <TableCell align="left">{row.zip}</TableCell>
                      {row.status === 'online' ? (
                        <TableCell align="left">
                          <div className={styles.online}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      {row.status === 'offline' ? (
                        <TableCell align="left">
                          <div className={styles.offline}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      {row.status === 'Trouble' ? (
                        <TableCell align="left">
                          <div className={styles.trouble}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      <TableCell align="left">{row.emg}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={5}
            shape="rounded"
            className={styles.pagination}
            onChange={handleChangePage}
            page={page}
          />
        </Paper>
      </Box>
    </div>
  );
}
