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
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Table',
    to: '/AllCommonTable',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
  },
]

export default _nav
