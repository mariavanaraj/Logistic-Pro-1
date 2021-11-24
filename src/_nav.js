import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilInput,
  cilDescription,
  cilCheckCircle,
  cilCog,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSpreadsheet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

//*This page is added by Exciteon - David
const _nav = [
  {
    component: CNavItem,
    name: 'Yard Gate-In',
    to: '/ParkingYardGateIn',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vehicle Inspection',
    to: '/vehicleInspection',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vehicle Maintainence',
    to: '/vehicleMaintainence',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },    
  {
    component: CNavItem,
    name: 'Document Verify',
    to: '/DocVerifyVendorAvail',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Document Verify Not',
    to: '/DocVerifyVendorNotAvail',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  //*This page is added by Exciteon - David
  {
    component: CNavItem,
    name: 'Vendor Creation Req.',
    to: '/VendorCreationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation App.',
    to: '/VendorCreationApprovalHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Conf.',
    to: '/VendorCreationConfrimationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Creation',
    to: '/TripSheetCreationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Closure - FG',
    to: '/TSClossure',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Closure - STO',
    to: '/TSClossure-sto',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS SettleMent',
    to: '/TripSheetSettleMentHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
]

export default _nav
