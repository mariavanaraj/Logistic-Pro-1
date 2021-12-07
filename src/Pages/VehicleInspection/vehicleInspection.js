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
  CFormTextarea,
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
    borderColor: '#b1b7c1',
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
            <CForm className="container p-3" onSubmit={handleSubmit}>
              <CRow className="">
                <CCol md={3}>
                  <CFormLabel htmlFor="vType">Vehicle Type</CFormLabel>
                  <CFormInput
                    name="vType"
                    size="sm"
                    id=""
                    value="Contract"
                    placeholder=""
                    readOnly
                  />
                </CCol>

                <CCol md={3}>
                  <CFormLabel htmlFor="vNum">Vehicle Number</CFormLabel>
                  <CFormInput
                    name="vNum"
                    size="sm"
                    id=""
                    value="TN90AE3902"
                    placeholder=""
                    readOnly
                  />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vCap">Vehicle Capacity In MTS</CFormLabel>
                  <CFormInput name="vCap" size="sm" id="" value="10" placeholder="10" readOnly />
                </CCol>

                {/* <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vaNum">VA Number</CFormLabel>
                  <CFormInput name="vaNum" size="sm" id="" value="11113" placeholder="" readOnly />
                </CCol> */}

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">
                    Driver Name*
                    {errors.vehicleType && (
                      <span className="help text-danger">{errors.vehicleType}</span>
                    )}
                  </CFormLabel>
                  <CFormSelect
                    size="sm"
                    name="vehicleType"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className={`${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option value="" hidden>
                      Select...
                    </option>

                    <option value="1">Mari</option>

                    <option value="2">Selvan</option>

                    <option value="3">Muthu</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dMob">Driver Contact Number</CFormLabel>
                  <CFormInput name="dMob" size="sm" id="" value="9443194657" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="dMob">Odometer KM</CFormLabel>
                  <CFormInput name="dMob" size="sm" id="" value="189736" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="odoImg">Odometer Photo</CFormLabel>
                  <CButton
                    onClick={() => setVisible(!visible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    style={border}
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                  </CButton>
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
                    </CModalFooter>
                  </CModal>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="gateInDateTime">Gate-In Date & Time*</CFormLabel>
                  <CFormInput
                    name="gateInDateTime"
                    size="sm"
                    id=""
                    value="21 Sep 2021 12:00:00 PM"
                    readOnly
                  />
                </CCol>
              </CRow>
              <CRow className="">
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
              <CRow className="">
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
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vFitLoad">Vehicle Fit For Loading *</CFormLabel>
                  <CFormInput name="vFitLoad" size="sm" id="" value="No" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks*</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="1"></CFormTextarea>
                </CCol>
              </CRow>

              <CRow className="mt-2">
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
                  className="pull-right"
                  xs={12}
                  sm={12}
                  md={3}
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                  <CButton size="sm" color="warning" className="mx-1 px-2 text-white" type="submit">
                    Accept
                  </CButton>

                  <CButton size="sm" color="warning" className="mx-1 px-2 text-white" type="submit">
                    Reject
                  </CButton>

                  <CButton size="sm" color="warning" className="mx-1 px-2 text-white" type="submit">
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
