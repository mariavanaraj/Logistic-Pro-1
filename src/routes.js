import React from 'react'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
]

export default routes
