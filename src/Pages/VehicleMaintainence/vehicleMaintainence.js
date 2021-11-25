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
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'

const VehicleMaintainence = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  // document.title=('Vehicle Maintainence');

  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="row g-3 m-2 p-1" onSubmit={'handleSubmit'}>
              <CRow>
                <CCol md={3}>
                  <CFormLabel htmlFor="maintenenceType">
                    Maintenance Type *{' '}
                    {errors.vehicleType && (
                      <span className="help text-danger">{errors.vehicleType}</span>
                    )}
                  </CFormLabel>

                  <CFormSelect
                    size="sm"
                    name="maintenenceType"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className=""
                  >
                    <option value="" hidden>
                      Select Maintenance Type
                    </option>
                    <option value="scheduled">Scheduled Maintenance</option>
                    <option value="breakDown">Break Down Maintnenence</option>
                  </CFormSelect>
                </CCol>

                <CCol className="mb-3" md={3}>
                  <CFormLabel htmlFor="maintenenceBy">Maintenance By *</CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="maintenenceBy"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className=""
                  >
                    <option value="" hidden>
                      Select Maintenance By
                    </option>
                    <option value="inHouse">Inhouse</option>
                    <option value="outSide">Outside</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow>
                <CCol>
                  <CButton
                    md={6}
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
                  md={5}
                  style={{ display: 'flex-sm', justifyContent: 'right' }}
                >
                  <CButton
                    size="sm"
                    color="warning"
                    disabled=""
                    className="mx-3 text-white"
                    type="button"
                  >
                    Maintenence
                  </CButton>
                  <Link to="/Gateout">
                    <CButton
                      size="sm"
                      disabled=""
                      color="warning"
                      className="mx-3 text-white"
                      type="button"
                    >
                      Gate Out
                    </CButton>
                  </Link>
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

export default VehicleMaintainence
