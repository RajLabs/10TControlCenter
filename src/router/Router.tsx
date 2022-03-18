import LoginPage from 'modules/auth/components/Login';
import RequireAuth from 'modules/auth/components/RequireAuth';
import Console from 'modules/console/component/Console';
import HomePage from 'modules/home/HomePage';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'modules/dashboard/Dashboard';
import AllEquipment from 'modules/equipment/component/AllEquipment';
import CreateEquipment from 'modules/equipment/component/CreateEquipment';
import AllLocation from 'modules/location/component/AllLocation';
import CreateLocation from 'modules/location/component/CreateLocation';
import AllOrganization from 'modules/organization/component/AllOrganization';
import CreateOrganization from 'modules/organization/component/CreateOrganization';

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
      >
        <Route path="/console/dashboard" element={<Dashboard />} />
        <Route path="/console/createorganization" element={<CreateOrganization />} />
        <Route path="/console/allorganization" element={<AllOrganization />} />
        <Route path="/console/createlocation" element={<CreateLocation />} />
        <Route path="/console/alllocation" element={<AllLocation />} />
        <Route path="/console/createequipment" element={<CreateEquipment />} />
        <Route path="/console/allequipment" element={<AllEquipment />} />
      </Route>
    </Routes>
  );
}
