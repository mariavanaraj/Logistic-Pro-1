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
const TSClossureSto = () => {
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

  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CForm className="row g-3 m-1 p-1" onSubmit={handleSubmit}>
        <CCard>
          <CTabContent className="m-3">
            {/* <CNav component="nav" > */}
            <CNav variant="pills" role="tablist">
              <CNavItem className="p-2">
                <CNavLink
                  href="javascript:void (0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Page1
                </CNavLink>
              </CNavItem>
              <CNavItem className="p-2">
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Page2
                </CNavLink>
              </CNavItem>
            </CNav>

            <CTabPane role="tabpanel" aria-labelledby="Page1-tab" visible={activeKey === 1}>
              <CRow className="mb-md-2 mt-3">
                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle No.*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
                    <option hidden>Select</option>

                    <option value="1">TN45AT8614</option>

                    <option value="2">TN45AT8612</option>

                    <option value="3">TN45AT9687</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Vehicle Capacity</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Tripsheet No.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">TS Date & Time</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>

              <CRow className="mb-md-2">
                <CCol md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Name*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
                    <option hidden>Select Vehicle No</option>

                    <option value="1">Arun</option>

                    <option value="2">Balu</option>

                    <option value="3">Kannan</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Code</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Cell No.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Opening KM</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>

              <CRow className="mb-md-2">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Opening Odometer Photo</CFormLabel>

                  {/* <CFormInput size="sm" id="inputAddress" value="View" readOnly /> */}
                  <CButton
                    // onClick={() => setVisible(!visible)}
                    className="w-100"
                    color="info"
                    size="sm"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Closing KM</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Closing Odometer Photo</CFormLabel>

                  <CFormInput type="file" size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Trip KM</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>

              <CRow className="mb-md-2">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Other Charges*</CFormLabel>
                  <CFormSelect size="sm" aria-label="Small select example">
                    <option hidden>Select Type</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Other Charges Amount</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Trip Expense Sheet</CFormLabel>

                  <CFormInput type="file" size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Driver Bata</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
              </CRow>

              <CRow className="mb-md-2">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Misc Exp.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Municipal charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Diesel Qty.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Diesel Rate</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="100" readOnly />
                </CCol>
              </CRow>

              <CRow className="mb-md-2">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Diesel Amount</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Diesel Invoice</CFormLabel>

                  <CFormInput type="file" size="sm" id="inputAddress" />
                </CCol>
              </CRow>
            </CTabPane>

            <CTabPane role="tabpanel" aria-labelledby="Page2-tab" visible={activeKey === 2}>
              <CRow className="mb-md-2 mt-3" hidden>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
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
                  <CFormLabel htmlFor="inputAddress">Load Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Tarpaulin Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                  <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                  {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                </CCol>
              </CRow>

              <CRow className="mb-md-2" hidden>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
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
                  <CFormLabel htmlFor="inputAddress">Load Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Tarpaulin Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                  <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                  {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                </CCol>
              </CRow>

              <CRow className="mb-md-2" hidden>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Invoice No.</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="123456" readOnly />
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
                  <CFormLabel htmlFor="inputAddress">Load Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">Tarpaulin Charges</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" />
                </CCol>
                <CCol xs={12} md={2}>
                  <CFormLabel htmlFor="inputAddress">FJ POD Copy</CFormLabel>
                  <CFormInput type="file" name="fjPod1" size="sm" id="formFileSm" />

                  {/* <CFormInput size="sm" id="inputAddress" value=" " readOnly /> */}
                </CCol>
              </CRow>
              <CRow>
                <CCol
                  className="mt-3 offset-md-9 py-2"
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
                  {/* <CButton
                                        size="sm"
                                        disabled={enableSubmit}
                                        color="warning"
                                        className="mx-3 text-white"
                                        type="submit"
                                    >
                                        Gate In
                                    </CButton> */}
                </CCol>
              </CRow>
            </CTabPane>
          </CTabContent>
        </CCard>
      </CForm>
    </>
  )
}

export default TSClossureSto
