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
  cilTruck,
  cilDotcircle
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
    to: '/vInspection',
    icon: <CIcon icon={cilAirplay} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Vehicle Maintainence',
    to: '/VMain',
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
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'RJ SO creation',
    to: '/RjSalesOrderCreation',
    icon: <CIcon icon={cilChevronDoubleLeft} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'V.Assign Foods',
    to: '/VehicleAssignmentFoods',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Adv. Req. Creation',
    to: '/AdvanceRequestCreation',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'V.Assign Consumer',
    to: '/VehicleAssignmentConsumer',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Di Creation',
    to: '/DiCreation',
    icon: <CIcon icon={cilPenNib} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Di Conf.',
    to: '/DiConfirmation',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Closure - FG',
    to: '/TSClossure',
    icon: <CIcon icon={cilFactorySlash} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS Closure - STO',
    to: '/TSClossure-sto',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'TS SettleMent',
    to: '/TripSheetSettleMentHome',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Master',
    to: '/Master',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Main Master',
        to: '/Master',
        icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Vehicle Master',
            to: '/VehicleMaster',
          },
          {
            component: CNavItem,
            name: 'Driver Master',
            to: '/DriverMaster',

          },
          {
            component: CNavItem,
            name: 'Shed Master',
            to: '/ShedMaster',

          },
          {
            component: CNavItem,
            name: 'Diesel Vendor Master',
            to: '/DieselVendorMaster',

          },
          {
            component: CNavItem,
            name: 'User Login Register',
            to: '/UserLoginMaster',
          },
        ]
      },
      {
        component: CNavGroup,
        name: 'Sub Master',
        to: '/Master',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Division',
            to: '/Division',
          },
          {
            component: CNavItem,
            name: 'Department',
            to: '/Department',
          },
          {
            component: CNavItem,
            name: 'Designation',
            to: '/Designation',
          },
          {
            component: CNavItem,
            name: 'Vehicle Capacity',
            to: '/VehicleCapacity',
          },
          {
            component: CNavItem,
            name: 'Rejection Reason',
            to: '/RejectReason',
          },
          {
            component: CNavItem,
            name: 'Material Description',
            to: '/MaterialDescription',
          },
          {
            component: CNavItem,
            name: 'UOM',
            to: '/UOM',
          },
          {
            component: CNavItem,
            name: 'Defect Type',
            to: '/DefectType',
          },
          {
            component: CNavItem,
            name: 'Other Charges',
            to: '/OtherCharges',
          },
          {
            component: CNavItem,
            name: 'Previous Load Details',
            to: '/PreviousLoadDetails',
          },
          {
            component: CNavItem,
            name: 'Status',
            to: '/Status',
          },
        ]
      },
    ]
  },
  // {
  //   component: CNavItem,
  //   name: 'Gate-out',
  //   to: '/Gateout',
  //   icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  // }, 
]
export default _nav
