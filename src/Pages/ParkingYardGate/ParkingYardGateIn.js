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

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur, onClick } =
    useForm(login, validate, formValues)

  function login() {
    alert('No Errors CallBack Called')
  }

  const columns = [
    {
      name: 'S.No',
      selector: (row) => row.sno,
      sortable: true,
      center: true,
    },
    {
      name: 'VA No',
      selector: (row) => row.VA_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Tripsheet No',
      selector: (row) => row.Tripsheet_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle Type',
      selector: (row) => row.Vehicle_Type,
      sortable: true,
      center: true,
    },
    {
      name: 'Vehicle No',
      selector: (row) => row.Vehicle_No,
      sortable: true,
      center: true,
    },
    {
      name: 'Driver Name',
      selector: (row) => row.Driver_Name,
      sortable: true,
      center: true,
    },
    {
      name: 'Waiting At',
      selector: (row) => row.Waiting_At,
      sortable: true,
      center: true,
    },
    {
      name: 'Screen Duration',
      selector: (row) => row.Screen_Duration,
      center: true,
    },
    {
      name: ' Overall Duration',
      selector: (row) => row.Overall_Duration,
      center: true,
    },
    {
      name: 'Action',
      selector: (row) => row.Action,
      center: true,
    },
  ]

  const data = [
    {
      id: 1,
      sno: 1,
      VA_No: 12000,
      Tripsheet_No: 102556,
      Vehicle_Type: 'own',
      Vehicle_No: 'TN45AT8417',
      Driver_Name: 'Saravana',
      Waiting_At: <span className="badge rounded-pill bg-info">DI Creation</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Vehicle Insp
        </CButton>
      ),
    },
    {
      id: 2,
      sno: 2,
      VA_No: 12070,
      Tripsheet_No: 102501,
      Vehicle_Type: 'contract',
      Vehicle_No: 'TN54AT8417',
      Driver_Name: 'David',
      Waiting_At: <span className="badge rounded-pill bg-info">Waiting</span>,
      Screen_Duration: '0 Hrs 07 Mins',
      Overall_Duration: '0 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate In
        </CButton>
      ),
    },
    {
      id: 3,
      sno: 3,
      VA_No: 12018,
      Tripsheet_No: 102501,
      Vehicle_Type: 'Hire',
      Vehicle_No: 'TN54CT8417',
      Driver_Name: 'Alvin',
      Waiting_At: <span className="badge rounded-pill bg-info">Ts Creation</span>,
      Screen_Duration: '1 Hrs 07 Mins',
      Overall_Duration: '2 Hrs 55 Mins',
      Action: (
        <CButton className="badge text-white" color="warning">
          Gate Out
        </CButton>
      ),
    },
  ]

  return (
    <>
      <CContainer>
        <CCard>
          <CTabContent>
            <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
              <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                <CRow className="mb-md-2">
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
                      <option value="own">Own</option>
                      <option value="contract">Contract</option>
                      <option value="hire">Hire</option>
                    </CFormSelect>
                  </CCol>

                  <CCol md={3}>
                    <CFormLabel htmlFor="vNum">Vehicle Number*</CFormLabel>
                    <CFormSelect
                      size="sm"
                      name="vNum"
                      className=""
                      aria-label="Small select example"
                    >
                      <option hidden>Select Vehicle No</option>

                      <option value="1">TN45AT8614</option>

                      <option value="2">TN45AT8612</option>

                      <option value="3">TN45AT9687</option>
                    </CFormSelect>
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS*</CFormLabel>

                    <CFormInput name="vCap" size="sm" id="inputAddress" value="" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dName">Driver Name*</CFormLabel>
                    <CFormSelect
                      name="dName"
                      size="sm"
                      className=""
                      aria-label="Small select example"
                    >
                      <option hidden>Select Driver</option>

                      <option value="1">Mari Muthu</option>

                      <option value="2">Mani Kandan</option>

                      <option value="3">Velu Chamy</option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="dMob">Driver Contact Number*</CFormLabel>
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
                      placeholder=""
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

                <CRow className="mb-mt-2">
                  <CCol
                    className="offset-md-9 text-right"
                    xs={12}
                    sm={12}
                    md={3}
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                  >
                    <CButton
                      size="sm"
                      color="warning"
                      // disabled={enableSubmit}
                      className="mx-1 text-white"
                      type="submit"
                    >
                      Wait OutSide
                    </CButton>
                    <CButton
                      size="sm"
                      // disabled={enableSubmit}
                      color="warning"
                      className="mx-1 text-white"
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
            <CustomTable columns={columns} data={data} />
          </CContainer>
        </CCard>
      </CContainer>
    </>
  )
}

export default ParkingYardGate
