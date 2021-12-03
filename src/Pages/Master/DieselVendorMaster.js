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
} from '@coreui/react'
import { React, useState } from 'react'
import useForm from 'src/Hooks/useForm.js'
import validate from 'src/Validations/FormValidation'


const ShedMaster = () => {
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
                        <CForm className="row g-3 m-2 p-1" onSubmit={handleSubmit}>
                            <CRow className="mb-md-3">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Name*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Code*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mobile Number 1*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mobile Number 2*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-3">
                                <CCol md={3}>
                                    <CFormLabel htmlFor="vNum">Diesel Vendor Mail ID*</CFormLabel>
                                    <CFormInput
                                        name="vNum"
                                        size="sm"
                                        id=""
                                        placeholder=""
                                    />
                                </CCol>
                            </CRow>
                            <CRow className="mb-md-2">
                                <CCol>
                                    <CButton
                                        md={9}
                                        size="sm"
                                        color=""
                                        disabled=""
                                        className="text-white"
                                        type="submit"
                                    >

                                    </CButton>
                                </CCol>

                                <CCol
                                    className="pull-right"
                                    xs={12}
                                    sm={12}
                                    md={3}
                                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                                >
                                    <CButton
                                        size="s-lg"
                                        color="warning"
                                        className="mx-1 px-2 text-white"
                                        type="submit"
                                    >
                                        Submit
                                    </CButton>

                                    <CButton
                                        size="s-lg"
                                        color="warning"
                                        className="mx-1 px-2 text-white"
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
        </>
    )
}

export default ShedMaster
