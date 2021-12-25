import React from 'react'
// import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import Gateout from './Pages/Gateout/Gateout'
import AllCommonTable from './Pages/AllCommonTable/AllCommonTable'
// import ParkingYardGate from './Pages/ParkingYardGate/ParkingYardGate'
import RjSalesOrderCreation from './Pages/RjSalesOrderCreation/RjSalesOrderCreation'
import VehicleAssignmentFoods from './Pages/VehicleAssignmentFoods/VehicleAssignmentFoods'
import VehicleAssignmentConsumer from './Pages/VehicleAssignmentConsumer/VehicleAssignmentConsumer'
import AdvanceRequestCreation from './Pages/AdvanceRequestCreation/AdvanceRequestCreation'
import AdvancePayment from './Pages/AdvanceRequestCreation/AdvancePayment'
import AdvanceOwn from './Pages/AdvanceRequestCreation/AdvanceOwn'
import AdvanceHire from './Pages/AdvanceRequestCreation/AdvanceHire'
import DiCreation from './Pages/DiCreation/DiCreation'
import DieselIntentOwn from './Pages/DiCreation/DieselIntentOwn'
import DieselIntentHire from './Pages/DiCreation/DieselIntentHire'
import DieselIntentHome from './Pages/DiCreation/DieselIntentHome'
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
import TripSheetCreationOwnFG from './Pages/TripSheetCreation/TripSheetCreationOwnFG'
import TripSheetCreationHome from './Pages/TripSheetCreation/TripSheetCreationHome'
import TripSheetCreationSTO from './Pages/TripSheetCreation/TripSheetCreationSTO'
import TripSTO from './Pages/TripSheetCreation/TripSTO'
import TripSheetSettleMentFG from './Pages/TripSheetSettleMent/TripSheetSettleMentFG'
import TripSheetSettleMentNew from './Pages/TripSheetSettleMent/TripSheetSettleMentNew'
import TripSheetSettleMentHome from './Pages/TripSheetSettleMent/TripSheetSettleMentHome'
import TripSheetSettleMentSTO from './Pages/TripSheetSettleMent/TripSheetSettleMentSTO'
import VendorCreationApproval from './Pages/VendorCreationApproval/VendorCreationApproval'
import VendorCreationApprovalHome from './Pages/VendorCreationApproval/VendorCreationApprovalHome'
import VendorCreationConfrimation from './Pages/VendorCreationConfrimation/VendorCreationConfrimationHire'
import VendorCreationConfrimationHome from './Pages/VendorCreationConfrimation/VendorCreationConfrimation'
import VendorCreationHome from './Pages/VendorCreationRequest/VendorCreationHome'
import VendorCreationRequest from './Pages/VendorCreationRequest/VendorCreationRequest'
import TSClossure from './Pages/TripsheetClossure/TSClossure'
import TSClossureSto from './Pages/TripsheetClossure/TSClossureSto'
import VehicleMaster from './Pages/Master/VehicleMaster'
import DriverMaster from './Pages/Master/DriverMaster'
import ShedMaster from './Pages/Master/ShedMaster'
import DieselVendorMaster from './Pages/Master/DieselVendorMaster'
import UserLoginMaster from './Pages/UserLoginMaster/UserLoginMaster'
import DefectType from './Pages/Master/Submaster/DefectType'
import Department from './Pages/Master/Submaster/Department'
import Designation from './Pages/Master/Submaster/Designation'
import Division from './Pages/Master/Submaster/Division'
import MaterialDescription from './Pages/Master/Submaster/MaterialDescription'
import OtherCharges from './Pages/Master/Submaster/OtherCharges'
import PreviousLoadDetails from './Pages/Master/Submaster/PreviousLoadDetails'
import RejectReason from './Pages/Master/Submaster/RejectReason'
import Status from './Pages/Master/Submaster/Status'
import UOM from './Pages/Master/Submaster/UOM'
import VehicleCapacity from './Pages/Master/Submaster/VehicleCapacity'
import DesignationTable from './Pages/Master/Submaster/DesignationTable'
import DefectTypeTable from './Pages/Master/Submaster/DefectTypeTable'
import DepartmentTable from './Pages/Master/Submaster/DepartmentTable'
import StatusTable from './Pages/Master/Submaster/StatusTable'
import DivisionTable from './Pages/Master/Submaster/DivisionTable'
import MaterialDescriptionTable from './Pages/Master/Submaster/MaterialDescriptionTable'
import OtherChargesTable from './Pages/Master/Submaster/OtherChargesTable'
import PreviousLoadDetailsTable from './Pages/Master/Submaster/PreviousLoadDetailsTable'
import RejectReasonTable from './Pages/Master/Submaster/RejectReasonTable'
import VehicleCapacityTable from './Pages/Master/Submaster/VehicleCapacityTable'
import UOMTable from './Pages/Master/Submaster/UOMTable'
import ShedMasterTable from './Pages/Master/ShedMasterTable'
import VehicleMasterTable from './Pages/VehicleMasterTable'
import DriverMasterTable from './Pages/Master/DriverMasterTable'
import DieselVendorMasterTable from './Pages/Master/DieselVendorMasterTable'
import UserLoginMasterTable from './Pages/Master/UserLoginMasterTable'
import ShipmentCreation from './Pages/ShipmentCreation/ShipmentCreation'
import ShipmentCreationConsumer from './Pages/ShipmentCreation/ShipmentCreationConsumer'
import VendorCreationConfrimationOwn from './Pages/VendorCreationConfrimation/VendorCreationConfrimationOwn'
import DiApprovalHome from './Pages/DiApproval/DiApprovalHome'
import DiApproval from './Pages/DiApproval/DiApproval'
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
  { path: '/DiApprovalHome', exact: true, name: 'Test', component: DiApprovalHome },
  {
    path: '/DiApprovalHome/DiApprovalConfrimation',
    exact: true,
    name: 'Test',
    component: DiApproval,
  },
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
    path: '/TripSheetCreationHome/TripSheetCreationOwnFG',
    exact: true,
    name: '/TripSheetCreationOwnFG',
    component: TripSheetCreationOwnFG,
  },
  {
    path: '/TripSheetCreationSTO',
    exact: true,
    name: 'TripSheetCreationSTO',
    component: TripSheetCreationSTO,
  },
  {
    path: '/TripSTO',
    exact: true,
    name: 'TripSTO',
    component: TripSTO,
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
  {
    path: '/ShipmentCreation',
    exact: true,
    name: 'ShipmentCreation',
    component: ShipmentCreation,
  },
  {
    path: '/ShipmentCreationConsumer',
    exact: true,
    name: 'ShipmentCreationConsumer',
    component: ShipmentCreationConsumer,
  },
  { path: '/', exact: true, name: 'Home' },
  { path: '/TSClossure', exact: true, name: 'Test', component: TSClossure },
  { path: '/TSClossure-sto', exact: true, name: 'Test', component: TSClossureSto },
  { path: '/VehicleMaster', exact: true, name: 'VehicleMaster', component: VehicleMaster },
  { path: '/DriverMaster', exact: true, name: 'DriverMaster', component: DriverMaster },
  { path: '/ShedMaster', exact: true, name: 'ShedMaster', component: ShedMaster },
  {
    path: '/DieselVendorMaster',
    exact: true,
    name: 'DieselVendorMaster',
    component: DieselVendorMaster,
  },
  { path: '/UserLoginMaster', exact: true, name: 'UserLoginMaster', component: UserLoginMaster },
  { path: '/DefectType', exact: true, name: 'DefectType', component: DefectType },
  { path: '/Department', exact: true, name: 'Department', component: Department },
  { path: '/Designation', exact: true, name: 'Designation', component: Designation },
  { path: '/Division', exact: true, name: 'Division', component: Division },
  {
    path: '/MaterialDescription',
    exact: true,
    name: 'MaterialDescription',
    component: MaterialDescription,
  },
  { path: '/OtherCharges', exact: true, name: 'OtherCharges', component: OtherCharges },
  {
    path: '/PreviousLoadDetails',
    exact: true,
    name: 'PreviousLoadDetails',
    component: PreviousLoadDetails,
  },
  { path: '/RejectReason', exact: true, name: 'RejectReason', component: RejectReason },
  { path: '/Status', exact: true, name: 'Status', component: Status },
  { path: '/UOM', exact: true, name: 'UOM', component: UOM },
  { path: '/VehicleCapacity', exact: true, name: 'VehicleCapacity', component: VehicleCapacity },
  {
    path: '/VehicleMasterTable',
    exact: true,
    name: 'VehicleMasterTable',
    component: VehicleMasterTable,
  },
  { path: '/AdvancePayment', exact: true, name: 'AdvancePayment', component: AdvancePayment },
  { path: '/AdvancePayment/AdvanceOwn', exact: true, name: 'AdvanceOwn', component: AdvanceOwn },
  { path: '/AdvancePayment/AdvanceHire', exact: true, name: 'AdvanceHire', component: AdvanceHire },
  { path: '/ShedMasterTable', exact: true, name: 'ShedMasterTable', component: ShedMasterTable },
  {
    path: '/DriverMasterTable',
    exact: true,
    name: 'DriverMasterTable',
    component: DriverMasterTable,
  },
  {
    path: '/DieselVendorMasterTable',
    exact: true,
    name: 'DieselVendorMasterTable',
    component: DieselVendorMasterTable,
  },
  {
    path: '/UserLoginMasterTable',
    exact: true,
    name: 'UserLoginMasterTable',
    component: UserLoginMasterTable,
  },
  {
    path: '/VehicleCapacityTable',
    exact: true,
    name: 'VehicleCapacityTable',
    component: VehicleCapacityTable,
  },
  { path: '/DefectTypeTable', exact: true, name: 'DefectTypeTable', component: DefectTypeTable },
  { path: '/DepartmentTable', exact: true, name: 'DepartmentTable', component: DepartmentTable },
  { path: '/DesignationTable', exact: true, name: 'DesignationTable', component: DesignationTable },
  {
    path: '/MaterialDescriptionTable',
    exact: true,
    name: 'MaterialDescriptionTable',
    component: MaterialDescriptionTable,
  },
  {
    path: '/OtherChargesTable',
    exact: true,
    name: 'OtherChargesTable',
    component: OtherChargesTable,
  },
  {
    path: '/PreviousLoadDetailsTable',
    exact: true,
    name: 'PreviousLoadDetailsTable',
    component: PreviousLoadDetailsTable,
  },
  {
    path: '/RejectReasonTable',
    exact: true,
    name: 'RejectReasonTable',
    component: RejectReasonTable,
  },
  { path: '/UOMTable', exact: true, name: 'UOMTable', component: UOMTable },
  { path: '/StatusTable', exact: true, name: 'StatusTable', component: StatusTable },
  { path: '/DivisionTable', exact: true, name: 'DivisionTable', component: DivisionTable },
  {
    path: '/TripSheetSettleMentNew',
    exact: true,
    name: 'TripSheetSettleMentNew',
    component: TripSheetSettleMentNew,
  },
  {
    path: '/TripSheetSettleMentNew',
    exact: true,
    name: 'TripSheetSettleMentNew',
    component: TripSheetSettleMentNew,
  },
  { path: '/DieselIntentHome', exact: true, name: 'DieselIntentHome', component: DieselIntentHome },
  {
    path: '/DieselIntentHome/DieselIntentOwn',
    exact: true,
    name: 'DieselIntentOwn',
    component: DieselIntentOwn,
  },
  {
    path: '/DieselIntentHome/DieselIntentHire',
    exact: true,
    name: 'DieselIntentHire',
    component: DieselIntentHire,
  },
]
export default routes
