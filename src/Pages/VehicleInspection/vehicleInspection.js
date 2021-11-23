/* eslint-disable prettier/prettier */
import {
  CButton,
  CCard,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTabPane,
  CFormFloating,
  CFormCheck,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'

const VehicleInspection = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  const border = {
    borderColor:'#b1b7c1'
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  const [visible, setVisible] = useState(false)
  // document.title=('Vehicle Inspection');
  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
              <CRow className="mb-md-3">
                <CCol md={3}>
                  <CFormLabel htmlFor="vType">Vehicle Type*</CFormLabel>
                  <CFormInput name="vType" size="sm" id="" value="" readOnly />
                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number*</CFormLabel>
                  <CFormInput name="vNum" size="sm" id="" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS*</CFormLabel>
                  <CFormInput name="vCap" size="sm" id="" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vaNum">VA Number*</CFormLabel>
                  <CFormInput name="vaNum" size="sm" id="" value="" readOnly />
                </CCol>
              </CRow>

              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                  <CFormInput name="dName" size="sm" id="" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dMob">Driver Mobile No*</CFormLabel>
                  <CFormInput name="dMob" size="sm" id="" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="odoImg">Odometer Photo</CFormLabel>

                  <CButton
                    onClick={() => setVisible(!visible)}
                    className="w-100"
                    color="info"
                    size="sm"
                    style={border}
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                  </CButton>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Date & Time*</CFormLabel>
                  <CFormInput name="gateInDateTime" size="sm" id="" value="" readOnly />
                </CCol>
              </CRow>

              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                  <CModalTitle>Odometer Photo</CModalTitle>
                </CModalHeader>

                <CModalBody>
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C560BAQEhfRQblzW2Jw/company-logo_200_200/0/1597849191912?e=2159024400&v=beta&t=GfooSG4SaLjwT3-7D7uTYkhI_3ZT8q64wR-d0e_Ti_s"
                    alt=""
                  />
                </CModalBody>

                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>

                  {/* <CButton color="primary">Save changes</CButton> */}
                </CModalFooter>
              </CModal>

              <CRow className="mb-md-3">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="truckClean">Truck Clean *</CFormLabel>
                  <CFormSelect size="sm" name="truckClean" className="">
                    <option hidden>Select...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="badSmell">Bad Smell *</CFormLabel>
                  <CFormSelect size="sm" name="badSmell" className="">
                    <option hidden>Select...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="insectVevils">Insect or Vevils Presence *</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="insectVevils"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tarSRF">Tarpaulin – SRF</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="tarSRF"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-md-3">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="nonSRF">Non – SRF *</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="nonSRF"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tarInsectVevils">
                    Insect or Vevils Presence (Tar.) *
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="tarInsectVevils"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="trkPlat">Truck Platform *</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="trkPlat"
                    className="m"
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="prevLoad">Previous Load Details *</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="prevLoad"
                    className=""
                    aria-label="Small select example"
                  >
                    <option hidden>Select...</option>
                    <option value="0">Yes</option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-md-3">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vFitLoad">Vehicle Fit For Loading *</CFormLabel>
                  <CFormInput name="vFitLoad" size="sm" id="" value="No" />
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  <CButton
                    md={9}
                    size="sm"
                    color="primary"
                    disabled=""
                    className="text-white"
                    type="submit"
                  >
                    Previous
                  </CButton>
                </CCol>

                <CCol
                  className=""
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="text-white"
                    type="submit"
                  >
                    Accept
                  </CButton>
                  <CButton
                    size="sm"
                    disabled={enableSubmit}
                    color="warning"
                    className="text-white"
                    type="submit"
                  >
                    Reject
                  </CButton>

                  <CButton
                    size="sm"
                    disabled={enableSubmit}
                    color="warning"
                    className="text-white"
                    type="submit"
                  >
                    Cancel
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
    </>
  )
}

export default VehicleInspection
