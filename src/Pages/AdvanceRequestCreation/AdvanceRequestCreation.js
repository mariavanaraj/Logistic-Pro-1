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
const ParkingYardGate = () => {
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
    return (
        <>
            <CCard>
                <CTabContent>
                    <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={true}>
                        <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                            <CRow>
                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vehicle Type*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vehicle Number*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>


                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vehicle Capacity*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">VA Number*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Driver Name*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Driver Cell No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Odometer Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">odometer Photo*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Gate-In Time*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Inspection Time*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Doc. Verify Time*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Tripsheet No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Shed Name*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Owner Name*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Owner Cell No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vendor code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Driver Outstanding*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">
                                        Advance Amt*{' '}
                                        {errors.OdometerKm && (
                                            <span className="help text-danger">{errors.OdometerKm}</span>
                                        )}
                                    </CFormLabel>
                                    <CFormInput
                                        name="Order Qty"
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        className={`${errors.OdometerKm && 'is-invalid'}`}
                                        size="sm"
                                        id="inputAddress"
                                        placeholder=""
                                    />
                                </CCol>

                            </CRow>

                            <CRow>
                                <CCol
                                    className="mt-3 offset-md-9 py-2"
                                    xs={12}
                                    sm={12}
                                    md={3}
                                    style={{ display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <CButton
                                        size="sm"
                                        color="warning"
                                        disabled={enableSubmit}
                                        className="mx-3 text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </CButton>
                                    <CButton
                                        size="sm"
                                        disabled={enableSubmit}
                                        color="warning"
                                        className="mx-3 text-white"
                                        type="submit"
                                    >
                                        Cancel
                                    </CButton>
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

export default ParkingYardGate
