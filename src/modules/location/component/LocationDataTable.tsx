import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paginate from 'modules/common/Paginate';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { rows } from '../LocationSlice';
import styles from './Location.module.css';
import TableHeader from './TableHeader';
import TableToolbar from './TableToolbar';

interface Data {
  location: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  status: string;
  emergence: string;
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
    id: 'emergence',
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
          <TableHeader headCell={headCell} />
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function LocationDataTable() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [rowsPerPage] = React.useState(5);
  const indexOfLastPage = currentPage * rowsPerPage;
  const indexOfFirstPage = indexOfLastPage - rowsPerPage;
  console.log(indexOfLastPage);
  console.log(indexOfFirstPage);

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{ width: '100%', mb: 2, p: 4 }}
        className={styles.allLocationTable}
      >
        <TableToolbar />
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
              {rows
                .slice(indexOfFirstPage, indexOfLastPage)
                .map((row, index) => {
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
                          <Typography variant="h5"> {row.location}</Typography>
                        </Link>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h4"> {row.address}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h4"> {row.city}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h4"> {row.state}</Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography variant="h4"> {row.zip}</Typography>
                      </TableCell>
                      {row.status === 'Online' ? (
                        <TableCell align="left">
                          <div className={styles.online}>
                            <Typography variant="subtitle1">Online</Typography>
                          </div>
                        </TableCell>
                      ) : null}
                      {row.status === 'Offline' ? (
                        <TableCell align="left">
                          <div className={styles.offline}>
                            <Typography variant="subtitle1">Offline</Typography>
                          </div>
                        </TableCell>
                      ) : null}
                      {row.status === 'Trouble' ? (
                        <TableCell align="left">
                          <div className={styles.trouble}>
                            <Typography variant="subtitle1">Trouble</Typography>
                          </div>
                        </TableCell>
                      ) : null}
                      <TableCell align="left">
                        <Typography variant="h4"> {row.emergence}</Typography>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <div>
            <Paginate
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              indexOfFirstPage={indexOfFirstPage}
              indexOfLastPage={indexOfLastPage}
            />
          </div>
        </TableContainer>
      </Paper>
    </Box>
  );
}
