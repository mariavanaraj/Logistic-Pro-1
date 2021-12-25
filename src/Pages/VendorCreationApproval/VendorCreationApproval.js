import {
  CButton,
  CCard,
  CCardImage,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
  CFormTextarea,
} from '@coreui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from 'src/Hooks/useForm'
import VendorRequestValidation from 'src/Validations/VendorCreation/VendorRequestValidation'
const VendorCreationApproval = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }
  const [adharvisible, setAdharVisible] = useState(false)
  const [BankPassbook, setBankPassbook] = useState(false)
  const [PanCard, setPanCard] = useState(false)
  const [Licence, setLicence] = useState(false)
  const [RcFront, setRcFront] = useState(false)
  const [RcBank, setRcBank] = useState(false)
  const [Insurance, setInsurance] = useState(false)
  const [TransporterShedSheet, setTransporterShedSheet] = useState(false)
  const [TDSFormFront, setTDSFormFront] = useState(false)
  const [TDSFormBack, setTDSFormBack] = useState(false)
  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    VendorRequestValidation,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }
  return (
    <>
      <CCard>
        <CForm className="container p-3" onSubmit={handleSubmit}>
          {/*Row One ------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Shed Name
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Owner Name
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Shed Mobile Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Shed Whatsapp Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" readOnly />
            </CCol>
          </CRow>
          {/* Row One------------------------- */}
          {/* Row Two------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                PAN Card Attatchment
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setAdharVisible(!adharvisible)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setAdharVisible(!adharvisible)}>
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
              <CFormLabel htmlFor="inputAddress">
                PAN Card Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Aadhar Card Attachemnt
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setAdharVisible(!adharvisible)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setAdharVisible(!adharvisible)}>
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
              <CFormLabel htmlFor="inputAddress">
                Aadhar Card Number
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
          </CRow>
          {/* Row Two------------------------- */}
          {/* Row Three------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                License Copy
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setLicence(!PanCard)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setLicence(!PanCard)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                RC Copy -Front
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setRcFront(!RcFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setRcFront(!RcFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                RC Copy Back
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setRcBank(!RcBank)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setRcBank(!RcBank)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Insurance Copy
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setInsurance(!Insurance)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setInsurance(!Insurance)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
          </CRow>
          {/* Row Three------------------------- */}
          {/* Row Four------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Transporter Shed Sheet
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span
                  className="float-start"
                  onClick={() => setTransporterShedSheet(!TransporterShedSheet)}
                >
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Bank Pass Book
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="TransporterShedSheet">Bank Name</CFormLabel>
              <CFormInput type="Text" name="TransporterShedSheet" size="sm" id="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="TransporterShedSheet">Bank Branch</CFormLabel>
              <CFormInput type="text" name="TransporterShedSheet" size="sm" id="" readOnly />
            </CCol>
          </CRow>
          {/* Row Four------------------------- */}
          {/* Row Five------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="TransporterShedSheet">Bank IFSC Code</CFormLabel>
              <CFormInput type="text" name="TransporterShedSheet" size="sm" id="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Bank Account Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Bank Account Holder Name*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Street
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
          </CRow>
          {/* Row Five------------------------- */}
          {/* Row Six------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Area
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                City
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                District
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                State
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
          </CRow>
          {/* Row Six------------------------- */}
          {/* Row Seven------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Postal Code
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Region
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                TDS Declaration Form Front
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                TDS Declaration Form Back
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CButton
                // onClick={() => setTDSFormFront(!TDSFormFront)}
                className="w-100 m-0"
                color="info"
                size="sm"
                id="inputAddress"
              >
                <span className="float-start" onClick={() => setTDSFormFront(!TDSFormFront)}>
                  <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>

                <span className="float-end">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </span>
              </CButton>
            </CCol>
          </CRow>
          {/* Row Seven------------------------- */}

          {/* Row Eight------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Registeration
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Registration Number*
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                GST Tax Code
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Payment Terms 3Days
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
          </CRow>
          {/* Row Eight------------------------- */}
          {/* Row Nine------------------------- */}
          <CRow className="">
            <CCol xs={12} md={3}>
              <CFormLabel htmlFor="inputAddress">
                Remarks
                {errors.vehicleType && (
                  <span className="help text-danger">{errors.vehicleType}</span>
                )}
              </CFormLabel>
              <CFormInput size="sm" id="inputAddress" value="" readOnly />
            </CCol>
          </CRow>
          {/* Row Nine------------------------- */}
          <CRow className="mb-md-1">
            <CCol className="" xs={12} sm={12} md={3}>
              <CButton size="sm" color="primary" className="text-white" type="button">
                <Link className="text-white" to="/VendorCreationHome">
                  Previous
                </Link>
              </CButton>
            </CCol>
            <CCol className="offset-md-6 d-md-flex justify-content-end" xs={12} sm={12} md={3}>
              <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
                Approved
              </CButton>
              <CButton size="sm" color="warning" className="mx-3 px-3 text-white" type="submit">
                Reject
              </CButton>
            </CCol>
          </CRow>
          {/* Row Eight------------------------- */}
        </CForm>
      </CCard>
    </>
  )
}

export default VendorCreationApproval
