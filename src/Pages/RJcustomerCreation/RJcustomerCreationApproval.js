import {
  CButton,
  CCard,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTabContent,
  CTabPane,
} from '@coreui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const RJcustomerCreationApproval = () => {
  return (
    <>
      <CCard>
        <CTabContent>
          <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
            <CForm className="container p-3">
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Customer Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Customer Mobile Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">PAN Card Attatchment</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">PAN Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Adhar Card</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Adhar Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Passbook</CFormLabel>
                  <CButton
                    // onClick={() => setAdharVisible(!adharvisible)}
                    className="w-100 m-0"
                    color="info"
                    size="sm"
                    id="inputAddress"
                  >
                    <span className="float-start">
                      <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                    </span>
                    <span className="float-end">
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"
                        // onMouseOver={changeBackground}
                        // onMouseLeave={changeBackground1}
                      ></i>
                    </span>
                  </CButton>
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Branch</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank IFCS Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Bank Account Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>

                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Street Name</CFormLabel>

                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Area Name</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">City</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">District</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">State</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Postal Code</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Region</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="Auto" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">GST Number</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Payment Terms</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>

              <CRow className="">
                <CCol xs={12} md={3}>
                  <CFormLabel htmlFor="inputAddress">Remarks</CFormLabel>
                  <CFormInput size="sm" id="inputAddress" value="" readOnly />
                </CCol>
              </CRow>
              <CRow className="mt-3">
                <CCol>
                  <CButton
                    size="sm"
                    color="primary"
                    // disabled={enableSubmit}
                    className="px-3 text-white"
                    type="button"
                  >
                    <Link to="/RJcustomerCreationApprovalHome"> Previous</Link>
                  </CButton>
                </CCol>
                <CCol className="offset-md-6 d-md-flex justify-content-end" xs={12} sm={12} md={3}>
                  <CButton
                    size="sm"
                    color="warning"
                    // disabled={enableSubmit}
                    className="mx-3 px-3 text-white"
                    type="submit"
                  >
                    Approve
                  </CButton>
                  <CButton
                    size="sm"
                    // disabled={enableSubmit}
                    color="warning"
                    className="px-3 text-white"
                    type="submit"
                  >
                    Reject
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

export default RJcustomerCreationApproval
