import { Typography } from '@mui/material';
import React from 'react';
import Authentication from './modules/auth/components/Authentication';

function AppContainer() {
  return (
    <div className="App">
      <Authentication />
      <Typography variant="h1" component="div" gutterBottom>
        h1. Heading
      </Typography>
    </div>
  );
}

export default AppContainer;
