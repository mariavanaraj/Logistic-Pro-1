import { CButton, CCard, CCol, CForm, CFormInput, CFormLabel, CFormSelect, CRow } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useForm from "src/Hooks/useForm";
import VendorRequestValidation from "src/Validations/VendorCreation/VendorRequestValidation";
const TripSheetCreationSTO = () => {
  const formValues = {
    vehicleType: '',
    OdometerKm: '',
    odometerPhoto: '',
  }

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
    <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
      <CRow>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
            Vechile Type
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormSelect
                    size="sm"
                    name="vehicleType"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className={`mb-3 ${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option value="">Select Vehicle Types</option>

                    <option value="1">Own</option>

                    <option value="2">Contract</option>

                    <option value="3">Hire</option>
                  </CFormSelect>
        </CCol>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Vehicle Number
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormSelect
                    size="sm"
                    name="vehicleType"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className={`mb-3 ${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option value="">Select Vehicle Number</option>

                    <option value="1">Own</option>

                    <option value="2">Contract</option>

                    <option value="3">Hire</option>
                  </CFormSelect>
        </CCol>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Vehicle Capacity In MTS
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
      </CRow>
      <CRow>
      <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Driver Name
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormSelect
                    size="sm"
                    name="vehicleType"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.vehicleType}
                    className={`mb-3 ${errors.vehicleType && 'is-invalid'}`}
                    aria-label="Small select example"
                  >
                    <option value="">Select Driver Name</option>

                    <option value="1">Own</option>

                    <option value="2">Contract</option>

                    <option value="3">Hire</option>
                  </CFormSelect>
        </CCol>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Driver Code
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Driver Cell No
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" value="" readOnly />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
          Opening KM
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput size="sm" id="inputAddress" type="number" value="" />
        </CCol>
        <CCol xs={12} md={4}>
          <CFormLabel htmlFor="inputAddress">
Opening Odometer Photo
            {errors.vehicleType && <span className="help text-danger">{errors.vehicleType}</span>}
          </CFormLabel>
          <CFormInput
                    type="file"
                    name="odometerPhoto"
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={handleChange}
                    value={values.odometerPhoto}
                    className={`${errors.odometerPhoto && 'is-invalid'}`}
                    size="sm"
                    id="formFileSm"
                  />
        </CCol>
      </CRow>
      <CRow>
      <CCol
          className="mt-3 py-2"
          xs={12}
          sm={12}
          md={3}
        >
          <CButton
            size="sm"
            color="warning"

            className="mx-3 text-white"
            type="button"
          >
            <Link className="text-white" to="/TripSheetCreationHome" >
            Pervious
            </Link>
          </CButton>
        </CCol>
        <CCol
          className="mt-3 offset-md-5  py-2"
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
            className="mx-3 text-white"
            type="submit"
          >
            Cancel
          </CButton>
        </CCol>
      </CRow>
    </CForm>
  </CCard>
  );
}

export default TripSheetCreationSTO;
