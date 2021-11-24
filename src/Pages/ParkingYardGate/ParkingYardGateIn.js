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
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const ParkingYardGate = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',

  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur,onClick } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  // document.title=('Parking Yard Gate-In');

  return (
    <>
      <CContainer>
        <CCard>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
              <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                <CRow>
                  <CCol md={3}>
                    <CFormLabel htmlFor="vType">
                      Vehicle Type*{' '}
                      {errors.vehicleType && (
                        <span className="help text-danger">{errors.vehicleType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="vType"
                      onChange={onClick}
                      aria-label="Small select example"
                    >
                      <option value="ownContract">Own or Contract</option>
                      <option value="hire">Hire</option>
                    </CFormSelect>
                  </CCol>

                  <CCol md={3}>
                    <CFormLabel htmlFor="vNum">Vehicle No*</CFormLabel>
                    <CFormSelect size="sm" name="vNum" className="mb-3" aria-label="Small select example">
                      <option hidden>Select Vehicle No</option>

                      <option value="1">TN45AT8614</option>

                      <option value="2">TN45AT8612</option>

                      <option value="3">TN45AT9687</option>
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="vCap">Vehicle Capacity*</CFormLabel>

                    <CFormInput name="vCap" size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                    <CFormSelect name="dName" size="sm" className="mb-3" aria-label="Small select example">
                      <option hidden>Select Driver</option>

                      <option value="1">Mari Muthu</option>

                      <option value="2">Mani Kandan</option>

                      <option value="3">Velu Chamy</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dMob">Driver Mobile No*</CFormLabel>
                    <CFormInput name="dMob" size="sm" id="inputAddress" value="" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="odoMeter">
                      Odometer Km*{' '}
                      {errors.OdometerKm && (
                        <span className="help text-danger">{errors.OdometerKm}</span>
                      )}
                    </CFormLabel>
                    <CFormInput
                      name="odoMeter"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      className={`${errors.OdometerKm && 'is-invalid'}`}
                      size="sm"
                      id="inputAddress"
                      placeholder="Km on Odometer"
                    />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="odoImg">
                      Odometer Photo*{' '}
                      {errors.odometerPhoto && (
                        <span className="help text-danger">{errors.odometerPhoto}</span>
                      )}
                    </CFormLabel>
                    <CFormInput
                      type="file"
                      name="odoImg"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.odometerPhoto}
                      className={`${errors.odometerPhoto && 'is-invalid'}`}
                      size="sm"
                      id="formFileSm"
                    />
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
                    <CButton
                      size="sm"
                      color="warning"
                      disabled={enableSubmit}
                      className="mx-3 text-white"
                      type="submit"
                    >
                      Wait OutSide
                    </CButton>
                    <CButton
                      size="sm"
                      disabled={enableSubmit}
                      color="warning"
                      className="mx-3 text-white"
                      type="submit"
                    >
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
      </CContainer>
    </>
  )
}

export default ParkingYardGate
