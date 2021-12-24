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
  CButtonGroup,
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
                  <CFormLabel htmlFor="truckClean">Truck Clean *</CFormLabel><br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="badSmell">Bad Smell *</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio3"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio4"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="insectVevils">Insect or Vevils Presence *</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio5"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio6"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tarSRF">Tarpaulin – SRF</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio7"
                      autoComplete="off"
                      label="0"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio8"
                      autoComplete="off"
                      label="1"

                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio9"
                      autoComplete="off"
                      label="2"

                    />
                  </CButtonGroup>
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="Tarpaulin">Tarpaulin Non-SRF*</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio10"
                      autoComplete="off"
                      label="0"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio11"
                      autoComplete="off"
                      label="1"

                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio12"
                      autoComplete="off"
                      label="2"

                    />
                  </CButtonGroup>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="tarInsectVevils">
                    Insect or Vevils Presence (Tar.) *
                  </CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio13"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio14"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="trkPlat">Truck Platform *</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio15"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio16"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="prevLoad">Previous Load Details *</CFormLabel>
                  <br />
                  <CButtonGroup role="group" aria-label="Basic checkbox toggle button group" >
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio17"
                      autoComplete="off"
                      label="Yes"
                    />
                    <CFormCheck
                      type="radio"
                      button={{ color: 'primary', variant: 'outline' }}
                      name="btnradio"
                      id="btnradio18"
                      autoComplete="off"
                      label="No"

                    />
                  </CButtonGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="vFitLoad">Vehicle Fit For Loading *</CFormLabel>
                  <CFormInput name="vFitLoad" size="sm" id="" value="No" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="remarks">Remarks</CFormLabel>
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
                  {/*
                  <CButton size="sm" color="warning" className="mx-1 px-2 text-white" type="submit">
                    Cancel
                  </CButton> */}
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
