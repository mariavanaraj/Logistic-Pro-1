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
                                <CCol md={3}>
                                    <CFormLabel htmlFor="inputAddress">Vehicle No*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select Vehicle No</option>

                                        <option value="1">TN45AT8614</option>

                                        <option value="2">TN45AT8612</option>

                                        <option value="3">TN45AT9687</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Tripsheet No*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Driver Name*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select Driver</option>

                                        <option value="1">Mari Muthu</option>

                                        <option value="2">Mani Kandan</option>

                                        <option value="3">Velu Chamy</option>
                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Customer code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Material description*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select Driver</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">
                                        Order Qty*{' '}
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

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">UOM*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">
                                        Freight Income*{' '}
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

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">HSN Code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Material Code*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Rate Base*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Last Delivery Point*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Loading Point*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Empty Km*</CFormLabel>

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

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Loading Point*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Unloading Point*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Load Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Topay/shed*</CFormLabel>
                                    <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                        <option hidden>Select</option>

                                        <option value="1">select</option>

                                        <option value="2">select Lp</option>

                                    </CFormSelect>
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Unloading Point*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Shed*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
                                </CCol>

                                <CCol xs={12} md={3}>
                                    <CFormLabel htmlFor="inputAddress">Empty Km*</CFormLabel>

                                    <CFormInput size="sm" id="inputAddress" value="" readOnly />
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