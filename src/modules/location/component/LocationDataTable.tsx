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
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { location, rows } from '../LocationSlice';
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

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'location',
    numeric: true,
    disablePadding: false,
    label: 'Location Name'
  },
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

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell className={styles.tableHeader}>
            <Button className={styles.tableHeaderBTN}>
              {headCell.label}
              &nbsp;
              <ArrowDownward className={styles.tableHeaderIcon} />
            </Button>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar() {
  return (
    <section style={{}}>
      <strong style={{ float: 'left', marginTop: '10px' }}>
        {' '}
        Filter &nbsp;{' '}
      </strong>
      <div className={styles.locationSearch}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Location Name / Address"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon color="primary" />
        </IconButton>
      </div>
      <div className={styles.city}>
        <Autocomplete
          size="small"
          options={location}
          getOptionLabel={option => option}
          renderInput={params => (
            <TextField {...params} placeholder="City" style={{ padding: 0 }} />
          )}
        />
      </div>
      <div className={styles.city}>
        <Autocomplete
          size="small"
          options={location}
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
      <Box sx={{ width: '100%' }}>
        <Paper
          sx={{ width: '100%', mb: 2, p: 4 }}
          className={styles.allLocationTable}
        >
          <EnhancedTableToolbar />
          <TableContainer>
            <Table
              sx={{
                [`& .${tableCellClasses.root}`]: {
                  borderBottom: 'none'
                },
                minWidth: 750,
                marginTop: '20px',
                overflow: 'visible'
              }}
              aria-labelledby="tableTitle"
            >
              <EnhancedTableHead />
              <TableBody>
                {rows.map((row, index) => {
                  return (
                    <TableRow
                      tabIndex={-1}
                      key={row.location}
                      style={
                        index % 2
                          ? { background: '#F9F9F9' }
                          : { background: 'white' }
                      }
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        padding="none"
                        align="left"
                        sx={{ padding: '20px' }}
                      >
                        <Link to="/" className={styles.linkToLocation}>
                          {row.location}
                        </Link>
                      </TableCell>
                      <TableCell align="left">{row.address}</TableCell>
                      <TableCell align="left">{row.city}</TableCell>
                      <TableCell align="left">{row.state}</TableCell>
                      <TableCell align="left">{row.zip}</TableCell>
                      {row.status === 'Online' ? (
                        <TableCell align="left">
                          <div className={styles.online}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      {row.status === 'Offline' ? (
                        <TableCell align="left">
                          <div className={styles.offline}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      {row.status === 'Trouble' ? (
                        <TableCell align="left">
                          <div className={styles.trouble}> {row.status}</div>
                        </TableCell>
                      ) : null}
                      <TableCell align="left">{row.emergence}</TableCell>
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
