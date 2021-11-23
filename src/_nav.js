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
  cilSpreadsheet,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
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
]

export default _nav
