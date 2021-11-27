import React from 'react'
// import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import Gateout from './Pages/Gateout/Gateout'
import AllCommonTable from './Pages/AllCommonTable/AllCommonTable'
// import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import RjSalesOrderCreation from './Pages/RjSalesOrderCreation/RjSalesOrderCreation'
import VehicleAssignmentFoods from './Pages/VehicleAssignmentFoods/VehicleAssignmentFoods'
import VehicleAssignmentConsumer from './Pages/VehicleAssignmentConsumer/VehicleAssignmentConsumer'
import AdvanceRequestCreation from './Pages/AdvanceRequestCreation/AdvanceRequestCreation'
import DiCreation from './Pages/DiCreation/DiCreation'
import DiConfirmation from './Pages/DiConfirmation/DiConfirmation'
import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGateIn'
import hire from './Pages/ParkingYardGate/hire'
import vInspection from './Pages/VehicleInspection/vInspection'
import vehicleInspection from './Pages/VehicleInspection/vehicleInspection'
import vehicleMaintainence from './Pages/VehicleMaintainence/vehicleMaintainence'
import VMain from './Pages/VehicleMaintainence/VMain'

import DocVerify from './Pages/DocumentVerification/DocsVerify'
import DocVerifyVendorAvail from './Pages/DocumentVerification/DocVerifyVendorAvail'
import DocVerifyVendorNotAvail from './Pages/DocumentVerification/DocVerifyVendorNotAvail'
// import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import TripSheetCreationFG from './Pages/TripSheetCreation/TripSheetCreationFG'
import TripSheetCreationHome from './Pages/TripSheetCreation/TripSheetCreationHome'
import TripSheetCreationSTO from './Pages/TripSheetCreation/TripSheetCreationSTO'
import TripSheetSettleMentFG from './Pages/TripSheetSettleMent/TripSheetSettleMentFG'
import TripSheetSettleMentHome from './Pages/TripSheetSettleMent/TripSheetSettleMentHome'
import TripSheetSettleMentSTO from './Pages/TripSheetSettleMent/TripSheetSettleMentSTO'
import VendorCreationApproval from './Pages/VendorCreationApproval/VendorCreationApproval'
import VendorCreationApprovalHome from './Pages/VendorCreationApproval/VendorCreationApprovalHome'
import VendorCreationConfrimation from './Pages/VendorCreationConfrimation/VendorCreationConfrimation'
import VendorCreationConfrimationHome from './Pages/VendorCreationConfrimation/VendorCreationConfrimationHome'
import VendorCreationHome from './Pages/VendorCreationRequest/VendorCreationHome'
import VendorCreationRequest from './Pages/VendorCreationRequest/VendorCreationRequest'
import TSClossure from './Pages/TripsheetClossure/TSClossure'
import TSClossureSto from './Pages/TripsheetClossure/TSClossureSto'


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/ParkingYardGateIn', exact: true, name: 'Test', component: ParkingYardGate },
  { path: '/Gateout', exact: true, name: 'Test', component: Gateout },
  { path: '/AllCommonTable', exact: true, name: 'Test', component: AllCommonTable },
  {
    path: '/vInspection',
    exact: true,
    name: 'vInspection',
    component: vInspection,
  },
  {
    path: '/vInspection/vehicleInspection',
    exact: true,
    name: 'vehicleInspection',
    component: vehicleInspection,
  },
  {
    path: '/VMain',
    exact: true,
    name: 'VMain',
    component: VMain,
  },
  {
    path: '/VMain/vehicleMaintainence',
    exact: true,
    name: 'vehicleMaintainence',
    component: vehicleMaintainence,
  },
  {
    path: '/DocsVerify',
    exact: true,
    name: 'DocVerify',
    component: DocVerify,
  },
  {
    path: '/DocsVerify/DocVerifyVendorAvail',
    exact: true,
    name: 'DocVerifyVendorAvail',
    component: DocVerifyVendorAvail,
  },
  {
    path: '/DocsVerify/DocVerifyVendorNotAvail',
    exact: true,
    name: 'DocVerifyVendorNotAvail',
    component: DocVerifyVendorNotAvail,
  },
  { path: '/RjSalesOrderCreation', exact: true, name: 'Test', component: RjSalesOrderCreation },
  { path: '/VehicleAssignmentFoods', exact: true, name: 'Test', component: VehicleAssignmentFoods },
  {
    path: '/VehicleAssignmentConsumer',
    exact: true,
    name: 'Test',
    component: VehicleAssignmentConsumer,
  },
  { path: '/AdvanceRequestCreation', exact: true, name: 'Test', component: AdvanceRequestCreation },
  { path: '/DiCreation', exact: true, name: 'Test', component: DiCreation },
  { path: '/DiConfirmation', exact: true, name: 'Test', component: DiConfirmation },
  { path: '/hire', exact: true, name: 'Test', component: hire },

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
  {
    path: '/VendorCreationApprovalHome',
    exact: true,
    name: 'VendorCreationApprovalHome',
    component: VendorCreationApprovalHome,
  },
  {
    path: '/VendorCreationApprovalHome/VendorCreationApproval',
    exact: true,
    name: 'VendorCreationApprovalHome',
    component: VendorCreationApproval,
  },
  {
    path: '/VendorCreationConfrimationHome',
    exact: true,
    name: 'VendorCreationConfrimationHome',
    component: VendorCreationConfrimationHome,
  },
  {
    path: '/VendorCreationConfrimationHome/VendorCreationConfrimation',
    exact: true,
    name: 'VendorCreationConfrimation',
    component: VendorCreationConfrimation,
  },
  {
    path: '/TripSheetCreationHome',
    exact: true,
    name: 'TripSheetCreationHome',
    component: TripSheetCreationHome,
  },
  {
    path: '/TripSheetCreationHome/TripSheetCreationFG',
    exact: true,
    name: 'TripSheetCreationFG',
    component: TripSheetCreationFG,
  },
  {
    path: '/TripSheetCreationHome/TripSheetCreationSTO',
    exact: true,
    name: 'TripSheetCreationFG',
    component: TripSheetCreationSTO,
  },
  {
    path: '/TripSheetSettleMentHome',
    exact: true,
    name: 'TripSheetSettleMentHome',
    component: TripSheetSettleMentHome,
  },
  {
    path: '/TripSheetSettleMentHome/TripSheetSettleMentFG',
    exact: true,
    name: 'TripSheetSettleMentFG',
    component: TripSheetSettleMentFG,
  },
  {
    path: '/TripSheetSettleMentHome/TripSheetSettleMentSTO',
    exact: true,
    name: 'TripSheetSettleMentSTO',
    component: TripSheetSettleMentSTO,
  },

  { path: '/', exact: true, name: 'Home' },
  { path: '/TSClossure', exact: true, name: 'Test', component: TSClossure },
  { path: '/TSClossure-sto', exact: true, name: 'Test', component: TSClossureSto },
]

export default routes
