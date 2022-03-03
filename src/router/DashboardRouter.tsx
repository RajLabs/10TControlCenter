import AllEquipment from 'modules/dashboard/equipment/AllEquipment';
import CreateEquipment from 'modules/dashboard/equipment/CreateEquipment';
import AllLocation from 'modules/dashboard/location/AllLocation';
import CreateLocation from 'modules/dashboard/location/CreateLocation';
import AllOrganization from 'modules/dashboard/organization/AllOrganization';
import CreateOrganization from 'modules/dashboard/organization/CreateOrganization';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function DashboardRouter() {
  return (
    <div>
      <Routes>
        <Route path="/createorganization" element={<CreateOrganization />} />
        <Route path="/allorganization" element={<AllOrganization />} />
        <Route path="/createlocation" element={<CreateLocation />} />
        <Route path="/alllocation" element={<AllLocation />} />
        <Route path="/createequipment" element={<CreateEquipment />} />
        <Route path="/allequipment" element={<AllEquipment />} />
      </Routes>
    </div>
  );
}
