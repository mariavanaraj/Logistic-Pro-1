import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilBrowser,
  cilCalculator,
  cilChartPie,
  cilCheck,
  cilCursor,
  cilDrop,
  cilGauge,
  cilInput,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
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
    name: 'Vendor Creation Home',
    to: '/VendorCreationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Approval',
    to: '/VendorCreationApprovalHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Confrimation',
    to: '/VendorCreationConfrimationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TripSheet Creation Home',
    to: '/TripSheetCreationHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TripSheet SettleMent Home',
    to: '/TripSheetSettleMentHome',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
]

export default _nav
