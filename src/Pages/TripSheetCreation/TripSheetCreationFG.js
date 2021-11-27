import React, { useState } from "react";
import { CButton, CCard, CCardImage, CCol, CForm, CFormInput, CFormLabel, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from "@coreui/react";
import useForm from "src/Hooks/useForm";
import VendorRequestValidation from "src/Validations/VendorCreation/VendorRequestValidation";
import { Link } from "react-router-dom";

const TripSheetCreationFG = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }
  const [OdometerPhoto,setOdometerPhoto]=useState(false)
  const { values, errors, handleChange, onFocus, handleSubmit, enableSubmit, onBlur } = useForm(
    login,
    VendorRequestValidation,
    formValues
  )

  function login() {
    alert('No Errors CallBack Called')
  }
  return (
    <CCard>
    <CForm className="row m-2 p-1" onSubmit={handleSubmit}>
      <CRow className="mb-md-2">
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
            Vehicle Type
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Vehicle Number

            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Vehicle Capacity

            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          VA Number
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
      </CRow>
      <CRow className="mb-md-2">
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Driver Name
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Driver Cell No.


            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Odometer KM
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Odometer Photo
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput
              onClick={() => setOdometerPhoto(!OdometerPhoto)}
              size="sm"
              id="inputAddress"
              value="view"
              readOnly
            />
            <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
              <CModalHeader>
                <CModalTitle>Odometer Photo</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CCardImage
                  orientation="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8_NeahwoKut3zeWbVAhUWS59XaqVah0mYMotQ08scOqWrXWsZy39GGRedOzSV1Ao8qk&usqp=CAU"
                />
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                  Close
                </CButton>
                <CButton color="primary">Save changes</CButton>
              </CModalFooter>
            </CModal>
        </CCol>
      </CRow>
      <CRow className="mb-md-2">
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Gate-In Time

            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" type="time" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Inspection Time


            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" type="time" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Doc. Verify Time
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" type="time" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Shed Name
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
      </CRow>
      <CRow className="mb-md-2">
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Owner Name

            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" type="text" value="" readOnly />
        </CCol>
        <CCol xs={12} md={3}>
          <CFormLabel htmlFor="inputAddress">
          Owner Cell No
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" type="text" value="" readOnly />
        </CCol>
      </CRow>
      <CRow className="mt-md-3">
      <CCol
          className=""
          xs={12}
          sm={12}
          md={3}
        >
          <CButton
            size="sm"
            color="primary"
            className="text-white"
            type="button"
          >
            <Link className="text-white" to="/TripSheetCreationHome" >
            Previous
            </Link>
          </CButton>
        </CCol>
        <CCol
          className="offset-md-5 d-md-flex justify-content-end"
          xs={12}
          sm={12}
          md={4}
        >
          <CButton
            size="sm"
            color="warning"

            className="mx-3 text-white"
            type="submit"
          >
            Create TripSheet
          </CButton>
          <CButton
            size="sm"
            color="warning"
            className="text-white"
            type="submit"
          >
            Cancel
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  </CCard> );

}

export default TripSheetCreationFG;
