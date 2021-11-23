import React from 'react'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import VendorCreationHome from './Pages/VendorCreationRequest/VendorCreationHome'
import VendorCreationRequest from './Pages/VendorCreationRequest/VendorCreationRequest'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  {
    path: '/VendorCreationHome',
    exact: true,
    name: 'VendorCreationHome',
    component: VendorCreationHome,
  },
  {
    path: '/VendorCreationHome/VendorCreationRequest',
    exact: true,
    name: 'VendorCreationRequest',
    component: VendorCreationRequest,
  },
]

export default routes
