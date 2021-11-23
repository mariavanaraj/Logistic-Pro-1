import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilInput,
  cilDescription,
  cilCheckCircle,
  cilCog
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
]

export default _nav
