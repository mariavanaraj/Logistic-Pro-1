import React, { useState } from 'react'
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
  cilOpentype,
  cilInbox,
  cilNewspaper,
  cil3d,
  cilRecycle,
  cilBackspace,
  cilChevronLeft,
  cilChevronDoubleLeft,
  cilFastfood,
  cilWeightlifitng,
  cilAssistiveListeningSystem,
  cilReload,
  cilAperture,
  cilDataTransferDown,
  cilMoney,
  cilCash,
  cilAccountLogout,
  cilPaw,
  cilPenNib,
  cilCheckAlt,
  cilFactorySlash,
  cilAddressBook,
  cil4k,
  cibPlaystation4,
  cilLevelDown,
  cibOpenCollective,
  cilControl,
  cilBattery5,
  cilInfo,
  cilAirplay,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

//*This page is added by Exciteon - David

const _nav = [
  {
    component: CNavItem,
    name: 'Yard Gate-In / Out',
    to: '/ParkingYardGateIn',
    icon: <CIcon icon={cilInput} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Parking Yard Gate-In / Out',
  },
  {
    component: CNavItem,
    name: 'Vehicle Inspection',
    to: '/vInspection',
    icon: <CIcon icon={cilAirplay} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Inspection',
  },

  {
    component: CNavItem,
    name: 'Vehicle Maintenance',
    to: '/VMain',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Maintenance',
  },
  {
    component: CNavItem,
    name: 'Doc. Verification',
    to: '/DocsVerify',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Document Verification',
  },

  {
    component: CNavItem,
    name: 'Vendor Creation Req.',
    to: '/VendorCreationHome',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vendor Creation Request',
  },
  {
    component: CNavItem,
    name: 'Vendor Creation App.',
    to: '/VendorCreationApprovalHome',
    icon: <CIcon icon={cilPenAlt} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vendor Creation Approval',
  },
  {
    component: CNavItem,
    name: 'Vendor Creation Conf.',
    to: '/VendorCreationConfrimationHome',
    icon: <CIcon icon={cilThumbUp} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vendor Creation Confirmation',
  },
  {
    component: CNavItem,
    name: 'TS Creation - FG',
    to: '/TripSheetCreationHome/TripSheetCreationFG',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Creation - FG',
  },
  {
    component: CNavItem,
    name: 'TS Creation - STO',
    to: '/TripSheetCreationHome/TripSheetCreationSTO',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Creation - STO',
  },
  {
    component: CNavItem,
    name: 'RJ SO Creation',
    to: '/RjSalesOrderCreation',
    icon: <CIcon icon={cilChevronDoubleLeft} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Return Journey Sales Order Creation',
  },
  {
    component: CNavItem,
    name: 'VH. Assign',
    to: '/VehicleAssignmentFoods',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Assignment Foods',
  },
  {
    component: CNavItem,
    name: 'Adv. Req. Creation',
    to: '/AdvanceRequestCreation',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Advance Request Creation',
  },
  {
    component: CNavItem,
    name: 'VH.Assign Consumer',
    to: '/VehicleAssignmentConsumer',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Assignment Consumer',
  },
  {
    component: CNavItem,
    name: 'DI Creation',
    to: '/DiCreation',
    icon: <CIcon icon={cilPenNib} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Diesel Indent Creation',
  },
  {
    component: CNavItem,
    name: 'DI Confirm.',
    to: '/DiConfirmation',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Diesel Indent Confirmation',
  },
  {
    component: CNavItem,
    name: 'TS Closure - FG',
    to: '/TSClossure',
    icon: <CIcon icon={cilFactorySlash} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Closure - FG',
  },
  {
    component: CNavItem,
    name: 'TS Closure - STO',
    to: '/TSClossure-sto',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Closure - STO',
  },
  {
    component: CNavItem,
    name: 'TS SettleMent',
    to: '/TripSheetSettleMentHome',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet SettleMent',
  },
]

export default _nav
