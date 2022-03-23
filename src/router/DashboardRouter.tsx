import React from 'react';
import Dashboard from 'modules/dashboard/Dashboard';
import AllEquipment from 'modules/equipment/component/AllEquipment';
import CreateEquipment from 'modules/equipment/component/CreateEquipment';
import AllLocation from 'modules/location/component/AllLocation';
import CreateLocation from 'modules/location/component/CreateLocation';
import AllOrganization from 'modules/organization/component/AllOrganization';
import CreateOrganization from 'modules/organization/component/CreateOrganization';
import { Route, Routes } from 'react-router-dom';

export default function DashboardRouter() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={
          <Dashboard />
        } />
        <Route
          path="createorganization"
          element={<CreateOrganization />}
        />
        <Route path="allorganization" element={
          <AllOrganization />
        } />
        <Route path="createlocation" element={<CreateLocation />} />
        <Route path="alllocation" element={<AllLocation />} />
        <Route path="createequipment" element={<CreateEquipment />} />
        <Route path="allequipment" element={<AllEquipment />} />
        <Route path="equipmentdetails" element={<AllEquipment />} />
      </Routes>
    </div>
  );
}
