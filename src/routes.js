import React from 'react'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import RjSalesOrderCreation from './Pages/RjSalesOrderCreation/RjSalesOrderCreation'
import VehicleAssignmentFoods from './Pages/VehicleAssignmentFoods/VehicleAssignmentFoods'
import VehicleAssignmentConsumer from './Pages/VehicleAssignmentConsumer/VehicleAssignmentConsumer'
import AdvanceRequestCreation from './Pages/AdvanceRequestCreation/AdvanceRequestCreation'
import DiCreation from './Pages/DiCreation/DiCreation'
import DiConfirmation from './Pages/DiConfirmation/DiConfirmation'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  { path: '/RjSalesOrderCreation', exact: true, name: 'Test', component: RjSalesOrderCreation },
  { path: '/VehicleAssignmentFoods', exact: true, name: 'Test', component: VehicleAssignmentFoods },
  { path: '/VehicleAssignmentConsumer', exact: true, name: 'Test', component: VehicleAssignmentConsumer },
  { path: '/AdvanceRequestCreation', exact: true, name: 'Test', component: AdvanceRequestCreation },
  { path: '/DiCreation', exact: true, name: 'Test', component: DiCreation },
  { path: '/DiConfirmation', exact: true, name: 'Test', component: DiConfirmation },
]

export default routes
