import { Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styles from '../location/component/Location.module.css';
import { rows } from '../location/LocationSlice';

const useStyles = makeStyles({
  pagination: {
    float: 'right',
    paddingTop: '20px'
  }
});

export default function Paginate({
  setCurrentPage,
  currentPage,
  indexOfFirstPage,
  indexOfLastPage
}: any) {
  const classes = useStyles();
  const totalPage = [];

  for (let i = 1; i <= Math.ceil(rows.length / 5); i++) {
    totalPage.push(i);
  }

  const count = totalPage.length;

  const handlePagination = (event: any) => {
    setCurrentPage(event.currentTarget.textContent);
  };
  return (
    <div>
      <div className={styles.pagination}>
        {indexOfFirstPage + 1}-{indexOfLastPage} of {rows.length}{' '}
      </div>
      <Pagination
        count={count}
        page={currentPage}
        color="primary"
        shape="rounded"
        onChange={handlePagination}
        className={classes.pagination}
      />
    </div>
  );
}
