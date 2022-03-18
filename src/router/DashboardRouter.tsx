import Dashboard from 'modules/dashboard/Dashboard';
import AllEquipment from 'modules/equipment/component/AllEquipment';
import CreateEquipment from 'modules/equipment/component/CreateEquipment';
import AllLocation from 'modules/location/component/AllLocation';
import CreateLocation from 'modules/location/component/CreateLocation';
import AllOrganization from 'modules/organization/component/AllOrganization';
import CreateOrganization from 'modules/organization/component/CreateOrganization';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function DashboardRouter() {
  return (
    <div>
      <Routes>
        <Route path="/console/dashboard" element={<Dashboard />} />
        <Route path="/console/createorganization" element={<CreateOrganization />} />
        <Route path="/console/allorganization" element={<AllOrganization />} />
        <Route path="/console/createlocation" element={<CreateLocation />} />
        <Route path="/console/alllocation" element={<AllLocation />} />
        <Route path="/console/createequipment" element={<CreateEquipment />} />
        <Route path="/console/allequipment" element={<AllEquipment />} />
      </Routes>
    </div>
  );
}
