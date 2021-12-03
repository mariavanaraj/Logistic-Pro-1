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
  CModal,
  CModalHeader,
  CModalTitle,
  CTabPane,
  CModalBody,
  CModalFooter,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CFormFloating,
  CNavbar,
  CTableRow,
} from '@coreui/react'
import { React, useState } from 'react'
// import CModal from '@coreui/react/src/components/modal/CModal'
import useForm from 'src/Hooks/useForm'
import validate from 'src/Validations/FormValidation'
import CustomTable from '../../components/customComponent/CustomTable'
const TSClossure = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
  }

  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    validate,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }

  const [mainKey, setMainKey] = useState(1)
  const [activeKey, setActiveKey] = useState(1)
  const [activeKey_2, setActiveKey_2] = useState(1)
  const [visible, setVisible] = useState(false)

  return (
    <>
      <CCard className="p-1">
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={mainKey === 1}
              onClick={() => setMainKey(1)}
            >
              For Hire Vehicle
            </CNavLink>
          </CNavItem>

          <CNavItem>
            <CNavLink
              href="javascript:void(0);"
              active={mainKey === 2}
              onClick={() => setMainKey(2)}
            >
              For Own & Contract Vehicle
            </CNavLink>
          </CNavItem>
        </CNav>

        <CTabContent className="p-3">
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={mainKey === 1}>
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  General Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Delivery Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Expenses
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="RMIASR182100000024" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Tripsheet No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="700012" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="TN48DE3902" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="10 TON" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="Own" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="NAGARAJ" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Cell No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8525097921" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="189736" readOnly />
                  </CCol>
                </CRow>
                <CModal visible={visible} onClose={() => setVisible(false)}>
                  <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Modal title</CModalTitle>
                  </CModalHeader>
                  <CModalBody>
                    <h2>Odometer Photo View</h2>
                  </CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={() => setVisible(false)}>
                      Close
                    </CButton>
                  </CModalFooter>
                </CModal>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>
                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Inspection Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Doc. Verify Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Shed Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="AAAAA" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="BBBBB" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Cell No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234567890" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate Out Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 02:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="24 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="198625" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Closing Odometer KM</CFormLabel>

                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budgeted KM*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8800" />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8880" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="80" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Idle Hrs*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="4" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budgeted Mileage*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="25" />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="27" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Consume*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>

              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date</CFormLabel>

                    <CFormInput size="sm" type="date" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Time</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="time" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">Shortage</option>
                      <option value="2">Rain Damage</option>
                      <option value="3">Sales Diversion</option>
                      <option value="4">Sales Return</option>
                      <option value="4">Halting</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>

                <CRow className="" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123459" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="444444" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date</CFormLabel>

                    <CFormInput size="sm" type="date" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Time</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="time" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod2" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType2">
                      Defect Type*{' '}
                      {errors.DefectType2 && (
                        <span className="help text-danger">{errors.DefectType2}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType2"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType2}
                      className={`mb-3 ${errors.DefectType2 && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="" hidden selected>
                        Select...
                      </option>
                      <option value="1">Shortage</option>
                      <option value="2">Rain Damage</option>
                      <option value="3">Sales Diversion</option>
                      <option value="4">Sales Return</option>
                      <option value="4">Halting</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>

              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges (Excess)*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Subdelivery Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Weighment Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Low Tonnage*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Freight Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">To Location*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">
                      Stock Diversion / Return Charges*
                    </CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diverted POD*</CFormLabel>

                    <CFormInput type="file" name="divortedPod" size="sm" id="formFileSm" />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Halting Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Halt Days*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol
                    className="offset-md-9"
                    xs={12}
                    sm={12}
                    md={3}
                    // style={{ display: 'flex', justifyContent: 'space-between' }}
                    style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                  >
                    <CButton
                      size="sm"
                      color="warning"
                      // disabled={enableSubmit}
                      className="mx-3 text-white"
                      // className="align-self-end ml-auto"
                      type="submit"
                    >
                      Close Tripsheet
                    </CButton>
                  </CCol>
                </CRow>
              </CTabPane>
            </CTabContent>
          </CTabPane>

          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={mainKey === 2}>
            <CNav variant="tabs" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 1}
                  onClick={() => setActiveKey_2(1)}
                >
                  General Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 2}
                  onClick={() => setActiveKey_2(2)}
                >
                  Delivery Information
                </CNavLink>
              </CNavItem>

              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 3}
                  onClick={() => setActiveKey_2(3)}
                >
                  Expenses
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey_2 === 4}
                  onClick={() => setActiveKey_2(4)}
                >
                  Return Journey
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey_2 === 1}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">VA Number</CFormLabel>
                    <CFormInput size="sm" id="inputAddress" value="RMIASR182100000024" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Tripsheet No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="700012" readOnly />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Number</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="TN48DE3902" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="10 TON" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Vehicle Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="Own" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="NAGARAJ" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Driver Cell No</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8525097921" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="189736" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Odometer Opening KM</CFormLabel>

                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Inspection Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Doc. Verify Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Shed Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="AAAAA" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="BBBBB" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Owner Cell No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="1234567890" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate Out Date & Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="21 Sep 2021 02:00:00 PM"
                      readOnly
                    />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Gate-In Time</CFormLabel>

                    <CFormInput
                      size="sm"
                      id="inputAddress"
                      value="24 Sep 2021 12:00:00 PM"
                      readOnly
                    />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="198625" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Closing Odometer KM</CFormLabel>

                    <div className="d-grid gap-2">
                      <CButton
                        className="text-justify"
                        color="info"
                        size="sm"
                        onClick={() => setVisible(!visible)}
                      >
                        <span className="float-start">
                          <i className="fa fa-eye"></i> &nbsp; View
                        </span>
                      </CButton>
                    </div>
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Trip KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8889" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budgeted KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8800" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="8880" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="80" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Idle Hrs</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="4" readOnly />
                  </CCol>
                </CRow>

                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Budged Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="25" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Actual Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="27" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Diff. Mileage</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Total Diesel Consume</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>

              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey_2 === 2}>
                <CRow className="mt-2" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>

                <CRow className="" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonnage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>

                <CRow className="mb-md-1" hidden>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Customer No</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="111111" readOnly />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date & Time</CFormLabel>

                    <CFormInput size="sm" type="datetime-local" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">Unloading Charges</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={2}>
                    <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                    {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                  </CCol>
                  <CCol md={2}>
                    <CFormLabel htmlFor="DefectType">
                      Defect Type*{' '}
                      {errors.DefectType && (
                        <span className="help text-danger">{errors.DefectType}</span>
                      )}
                    </CFormLabel>

                    <CFormSelect
                      size="sm"
                      name="DefectType"
                      onFocus={onFocus}
                      onBlur={onBlur}
                      onChange={handleChange}
                      value={values.DefectType}
                      className={`${errors.DefectType && 'is-invalid'}`}
                      aria-label="Small select example"
                    >
                      <option value="">Select Types</option>

                      <option value="1">Unloading Charges</option>

                      <option value="2">Subdelivery Charges</option>

                      <option value="3">Halting Charges</option>

                      <option value="4">Low Tonage</option>
                    </CFormSelect>
                  </CCol>
                  <CCol xs={12} md={2} hidden>
                    <CFormLabel htmlFor="inputAddress">Defect Type</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>

              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 3}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Halting Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Halt Days*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Toll Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Bata*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Municipal Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Enroute Diesel Ltr*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Enroute Diesel Amount*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Enroute Diesel Invoice*</CFormLabel>

                    <CFormInput type="file" size="sm" id="inputAddress" />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Port Entry Fee*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Misc Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Fine Amount*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Fine Bill*</CFormLabel>

                    <CFormInput type="file" size="sm" id="inputAddress" />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Subdelivery Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Maintenance Cost* </CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Loading Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Tarpaulin Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Weighment Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Low Tonnage Charges*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" />
                  </CCol>

                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Trip Expense Sheet*</CFormLabel>

                    <CFormInput type="file" size="sm" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Bunk Diesel in Ltr.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Bunk Diesel Amount</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey_2 === 4}>
                <CRow className="mt-2">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Customer Name</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Customer Code</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Material Description</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Material Code</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">HSN Code</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Order Qty.</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">UOM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Freight Income</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Advance Amt</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Topay / Shed</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Last Delivery Point</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">RJ Shed </CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Loading Point</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Empty KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Unloading Point</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Load KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow className="">
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Delivery Date*</CFormLabel>

                    <CFormInput size="sm" type="date" id="inputAddress" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">Delivery Time*</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" type="time" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">RJ POD Copy*</CFormLabel>
                    <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />
                  </CCol>
                  <CCol xs={12} md={3}>
                    <CFormLabel htmlFor="inputAddress">RJ KM</CFormLabel>

                    <CFormInput size="sm" id="inputAddress" value="2500" readOnly />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol
                    className="mt-2 offset-md-9"
                    xs={12}
                    sm={12}
                    md={3}
                    // style={{ display: 'flex', justifyContent: 'space-between' }}
                    style={{ display: 'flex', flexDirection: 'row-reverse', cursor: 'pointer' }}
                  >
                    <CButton
                      size="sm"
                      color="warning"
                      disabled={enableSubmit}
                      className="mx-3 text-white"
                      // className="align-self-end ml-auto"
                      type="submit"
                    >
                      Close Tripsheet
                    </CButton>
                  </CCol>
                </CRow>
              </CTabPane>
            </CTabContent>
          </CTabPane>
        </CTabContent>
      </CCard>
    </>
  )
}

export default TSClossure
