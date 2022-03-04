import { ArrowDownward } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Autocomplete,
  Button,
  Grid,
  IconButton,
  InputBase,
  Stack,
  TextField
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
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
              fontWeight: 900
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
    <Toolbar>
      <Grid container spacing={1} sx={{ marginTop: '20px' }}>
        <Grid item xs={10} md={10} lg={10}>
          <span>Filter</span>
          <InputBase
            className={styles.locationSearch}
            placeholder="Location Name / Address"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton
            className={styles.locationSearchIcon}
            type="submit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <div className={styles.city}>
            <Autocomplete
              id="size-small-outlined"
              size="small"
              options={names}
              getOptionLabel={option => option}
              renderInput={params => (
                <TextField
                  {...params}
                  placeholder="City"
                  sx={{ marginTop: '-7px' }}
                />
              )}
            />
          </div>
          <Stack
            spacing={2}
            sx={{
              width: 100,
              display: 'inline-block',
              mx: 1
            }}
          >
            <Autocomplete
              id="size-small-outlined"
              size="small"
              options={names}
              getOptionLabel={option => option}
              renderInput={params => (
                <TextField
                  {...params}
                  placeholder="State"
                  sx={{ marginTop: '-7px' }}
                />
              )}
            />
          </Stack>
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
    </Toolbar>
  );
}

export default function LocationDataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar />
        <TableContainer
          sx={{ paddingLeft: '25px', paddingRight: '25px', marginTop: '20px' }}
        >
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead />
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.location}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
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
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 15, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
