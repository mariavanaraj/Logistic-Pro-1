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
  cilDescription,
  cilCheckCircle,
  cilCog,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilSpreadsheet,
  cilBoltCircle,
  cilPen,
  cilPenAlt,
  cilThumbUp,
  cilOpentype
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  // {
  //   component: CNavItem,
  //   name: 'Yard Gate-In',
  //   to: '/ParkingYardGateIn',
  //   icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Gate-out',
    to: '/Gateout',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  }, {
    component: CNavItem,
    name: 'Yard Gate-In',
    to: '/ParkingYardGateIn',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vehicle Maintainence',
    to: '/vehicleMaintainence',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Doc. Verification',
    to: '/DocsVerify',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Req.',
    to: '/VendorCreationHome',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation App.',
    to: '/VendorCreationApprovalHome',
    icon: <CIcon icon={cilPenAlt} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Conf.',
    to: '/VendorCreationConfrimationHome',
    icon: <CIcon icon={cilThumbUp} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Creation',
    to: '/TripSheetCreationHome',
    icon: <CIcon icon={cilOpentype} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'RJ SO creation',
    to: '/RjSalesOrderCreation',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'V.Assign-Foods',
    to: '/VehicleAssignmentFoods',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Adv. Req. Creation',
    to: '/AdvanceRequestCreation',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'V.Assign-Consumer',
    to: '/VehicleAssignmentConsumer',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Di Creation',
    to: '/DiCreation',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Di Conf.',
    to: '/DiConfirmation',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
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
