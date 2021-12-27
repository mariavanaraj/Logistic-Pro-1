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
  cilTruck,
  cilDotcircle,
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
    name: 'Trip STO',
    to: '/TripSTO',
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip STO',
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
    icon: <CIcon icon={cilThumbUp} customClassName="nav-icon" />,
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
    name: 'TS Creation',
    to: '/TripSheetCreationHome',
    icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Creation',
  },
  // {
  //   component: CNavItem,
  //   name: 'TS Creation - STO',
  //   to: 'TripSheetCreationSTO',
  //   icon: <CIcon icon={cilNewspaper} customClassName="nav-icon" />,
  //   dataToggle: 'tooltip',
  //   title: 'Trip Sheet Creation - STO',
  // },
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
    name: 'RJ Customer Creation',
    to: '/RJcustomerCreationHome',
    icon: <CIcon icon={cilChevronDoubleLeft} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Return Journey Customer Creation',
  },

  {
    component: CNavItem,
    name: 'RJ Customer Creation Confrimation',
    to: '/RJcustomerCreationConfrimationHome',
    icon: <CIcon icon={cilChevronDoubleLeft} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'RJ Customer Creation Confrimation',
  },
  {
    component: CNavItem,
    name: 'RJ Customer Creation Approval',
    to: '/RJcustomerCreationApprovalHome',
    icon: <CIcon icon={cilChevronDoubleLeft} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'RJ Customer Creation Approval',
  },
  // {
  //   component: CNavItem,
  //   name: 'VH. Assign',
  //   to: '/VehicleAssignmentFoods',
  //   icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
  //   dataToggle: 'tooltip',
  //   title: 'Vehicle Assignment',
  // },
  {
    component: CNavItem,
    name: 'Vehicle Assignment',
    to: '/ShipmentCreation',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Assignment',
  },
  {
    component: CNavItem,
    name: 'Advance Payment',
    to: '/AdvancePayment',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Advance Payment',
  },
  {
    component: CNavItem,
    name: 'VH.Assign Consumer',
    to: '/ShipmentCreationConsumer',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Vehicle Assignment Consumer',
  },
  {
    component: CNavItem,
    name: 'DI Creation',
    to: '/DieselIntentHome',
    icon: <CIcon icon={cilPenNib} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Diesel Indent Creation',
  },

  {
    component: CNavItem,
    name: 'DI Aprroval',
    to: '/DiApprovalHome',
    icon: <CIcon icon={cilPenNib} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Diesel Indent Approval',
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
    name: 'TS Closure',
    to: '/TSClossure',
    icon: <CIcon icon={cilFactorySlash} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Closure',
  },
  // {
  //   component: CNavItem,
  //   name: 'TS Closure - STO',
  //   to: '/TSClossure-sto',
  //   icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  //   dataToggle: 'tooltip',
  //   title: 'Trip Sheet Closure - STO',
  // },
  {
    component: CNavItem,
    name: 'TS Settlement',
    to: '/TripSheetSettleMentNew',
    icon: <CIcon icon={cilBrowser} customClassName="nav-icon" />,
    dataToggle: 'tooltip',
    title: 'Trip Sheet Settlement',
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
            to: '/VehicleMasterTable',
            title: 'Vehicle Master',
          },
          {
            component: CNavItem,
            name: 'Driver Master',
            to: '/DriverMasterTable',
            title: 'Driver Master',
          },
          {
            component: CNavItem,
            name: 'Shed Master',
            to: '/ShedMasterTable',
            title: 'Shed Master',
          },
          {
            component: CNavItem,
            name: 'Diesel Vendor Master',
            to: '/DieselVendorMasterTable',
            title: 'Diesel Master',
          },
          {
            component: CNavItem,
            name: 'User Login Master',
            to: '/UserLoginMasterTable',
            title: 'User Login Master',
          },
        ],
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
            to: '/DivisionTable',
            title: 'Division',
          },
          {
            component: CNavItem,
            name: 'Department',
            to: '/DepartmentTable',
            title: 'Department',
          },
          {
            component: CNavItem,
            name: 'Designation',
            to: '/DesignationTable',
            title: 'Designation',
          },
          {
            component: CNavItem,
            name: 'Vehicle Capacity',
            to: '/VehicleCapacityTable',
            title: 'Vehicle Capacity',
          },
          {
            component: CNavItem,
            name: 'Rejection Reason',
            to: '/RejectReasonTable',
            title: 'Rejection Reason',
          },
          {
            component: CNavItem,
            name: 'Material Description',
            to: '/MaterialDescriptionTable',
            title: 'Material Description',
          },
          {
            component: CNavItem,
            name: 'Unit of Measurement',
            to: '/UOMTable',
            title: 'UOM',
          },
          {
            component: CNavItem,
            name: 'Defect Type',
            to: '/DefectTypeTable',
            title: 'Defect Type',
          },
          {
            component: CNavItem,
            name: 'Other Charges',
            to: '/OtherChargesTable',
            title: 'Other Charges',
          },
          {
            component: CNavItem,
            name: 'Previous Load Details',
            to: '/PreviousLoadDetailsTable',
            title: 'Previous Load Details',
          },
          {
            component: CNavItem,
            name: 'Status',
            to: '/StatusTable',
            title: 'Status',
          },
        ],
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Gate-out',
  //   to: '/Gateout',
  //   icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
  // },
]
export default _nav
