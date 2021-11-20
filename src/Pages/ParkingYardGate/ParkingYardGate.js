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
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
  const { values, errors, handleChange, handleSubmit, onChange, onBlurOut } = useForm(
    login,
    validate
  )
  function login() {
    //request section to API And Call Back
    alert('submited')
  }
  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
              <CRow>
                <CCol md={3}>
                  <CFormLabel htmlFor="vehicleType">Vehicle Type*</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vehicleType"
                    value={values.vehicleType || ''}
                    onChange={handleChange}
                    className={`mb-3 ${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option value="">Select Vehicle Types</option>

                    <option value="1">Own</option>

                    <option value="2">Contract</option>

                    <option value="3">Hire</option>
                  </CFormSelect>
                  {errors.vehicleType && <p className="help text-danger">{errors.vehicleType}</p>}
                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle No*</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option hidden>Select Vehicle No</option>

                    <option value="1">TN45AT8614</option>

                    <option value="2">TN45AT8612</option>

                    <option value="3">TN45AT9687</option>
                  </CFormSelect>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity*</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Name*</CFormLabel>
                  <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                    <option hidden>Select Driver</option>

                    <option value="1">Mari Muthu</option>

                    <option value="2">Mani Kandan</option>

                    <option value="3">Velu Chamy</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Cell No*</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Odometer Km*</CFormLabel>
                  <CFormInput
                    onChange={handleChange}
                    name="OdometerKm"
                    value={values.OdometerKm || ''}
                    className={`${errors.OdometerKm && 'is-invalid'}`}
                    size="sm"
                    id="inputAddress"
                    placeholder="Km on Odometer"
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="formFileSm">Odometer Photo*</CFormLabel>
                  <CFormInput type="file" size="sm" id="formFileSm" />
                </CCol>
                <CCol
                  xs={12}
                  md={3}
                  className="mt-3 pt-1"
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                ></CCol>
              </CRow>
              <CRow>
                <CCol
                  className="mt-3 offset-md-9 py-2"
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <CButton size="sm" color="warning" className="mx-3 text-white" type="submit">
                    Wait OutSide
                  </CButton>
                  <CButton size="sm" color="warning" className="mx-3 text-white" type="submit">
                    Gate In
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CTabPane>
        </CTabContent>
      </CCard>
      <CCard className="mt-4">
        <CContainer className="mt-2">
          <CustomTable />
        </CContainer>
      </CCard>
    </>
  )
}

export default ParkingYardGate
