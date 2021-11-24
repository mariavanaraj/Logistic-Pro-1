import React from 'react'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import Gateout from './Pages/Gateout/Gateout'
import AllCommonTable from './Pages/AllCommonTable/AllCommonTable'
const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  { path: '/Gateout', exact: true, name: 'Test', component: Gateout },
  { path: '/AllCommonTable', exact: true, name: 'Test', component: AllCommonTable },
]

export default routes
