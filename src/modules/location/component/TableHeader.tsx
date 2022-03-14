import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { TableCell, Typography } from '@mui/material';
import React from 'react';
import styles from './Location.module.css';

export default function TableHeader({ headCell }: any) {
  const [sortIconChange, setSortIconChange] = React.useState(false);

  const handleSorting = () => {
    setSortIconChange(!sortIconChange);
  };
  return (
    <TableCell className={styles.tableHeader} key={headCell.id}>
      <Typography onClick={handleSorting} variant="h5">
        {headCell.label}
        {sortIconChange === false ? (
          <ArrowUpward className={styles.sortIcon} />
        ) : (
          <ArrowDownward className={styles.sortIcon} />
        )}
      </Typography>
    </TableCell>
  );
}
