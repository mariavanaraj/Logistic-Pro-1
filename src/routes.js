import React from 'react';
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGateIn';
import hire from './Pages/ParkingYardGate/hire';
import vehicleInspection from './Pages/VehicleInspection/vehicleInspection';
import vehicleMaintainence from './Pages/VehicleMaintainence/vehicleMaintainence';
import DocVerifyVendorAvail from './Pages/DocumentVerification/DocVerifyVendorAvail';
import DocVerifyVendorNotAvail from './Pages/DocumentVerification/DocVerifyVendorNotAvail';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  { path: '/hire', exact: true, name: 'Test', component: hire },
  { path: '/vehicleInspection', exact: true, name: 'vehicleInspection', component: vehicleInspection },
  { path: '/vehicleMaintainence', exact: true, name: 'vehicleMaintainence', component: vehicleMaintainence },
  { path: '/DocVerifyVendorAvail', exact: true, name: 'DocVerifyVendorAvail', component: DocVerifyVendorAvail },
  { path: '/DocVerifyVendorNotAvail', exact: true, name: 'DocVerifyVendorNotAvail', component: DocVerifyVendorNotAvail },
]

export default routes
