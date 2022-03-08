import LoginPage from 'modules/auth/components/Login';
import RequireAuth from 'modules/auth/components/RequireAuth';
import Console from 'modules/console/component/Console';
import Dashboard from 'modules/dashboard/Dashboard';
import HomePage from 'modules/home/HomePage';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/console"
        element={
          <RequireAuth>
            <Console />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
