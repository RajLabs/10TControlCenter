import {
  TablePagination,
  TableSortLabel
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
import TableToolbar from './TableToolbar';
import { rows } from '../LocationSlice';
import styles from './Location.module.css';


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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}
type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
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
interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
   const {order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell className={styles.tableHeader}
              key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
           <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              aria-hidden="false"
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function LocationDataTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('location');
  const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // const classes = useStyles();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

   const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
                        {row.location}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.address}</TableCell>
                    <TableCell align="left">{row.city}</TableCell>
                    <TableCell align="left">{row.state}</TableCell>
                    <TableCell align="left">{row.zip}</TableCell>
                    {row.status === 'Online' ? (
                      <TableCell align="left">
                        <p className={styles.online}> {row.status}</p>
                      </TableCell>
                    ) : null}
                    {row.status === 'Offline' ? (
                      <TableCell align="left">
                        <p className={styles.offline}> {row.status}</p>
                      </TableCell>
                    ) : null}
                    {row.status === 'Trouble' ? (
                      <TableCell align="left">
                        <p className={styles.trouble}> {row.status}</p>
                      </TableCell>
                    ) : null}
                    <TableCell align="left">{row.emergence}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div>
              <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
            {/* <div className={styles.pagination}>1-10 of 25 </div>
            <Pagination
              count={5}
              shape="rounded"
              color="primary"
              className={classes.pagination}
              onChange={handleChangePage}
              page={page}
            /> */}
          </div>
        </TableContainer>
      </Paper>
    </Box>
  );
}
