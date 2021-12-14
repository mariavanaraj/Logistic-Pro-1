import { CButton, CCard, CContainer, CCol, CRow, CModal, CModalHeader, CModalTitle, CModalBody, CCardImage, CModalFooter } from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomTable from "src/components/customComponent/CustomTable";
const VehicleMasterTable = () => {
    const [OdometerPhoto, setOdometerPhoto] = useState(false)

    const columns = [
        {
            name: 'S.No',
            selector: (row) => row.sno,
            sortable: true,
            center: true,
        },
        {
            name: 'Creation Date',
            selector: (row) => row.Creation_Date,
            sortable: true,
            center: true,
        },

        {
            name: 'Vehicle Type',
            selector: (row) => row.Vehicle_Type,
            sortable: true,
            center: true,
        },
        {
            name: 'Vehicle Capacity',
            selector: (row) => row.Vehicle_Capacity,
            sortable: true,
            center: true,
        },
        {
            name: 'Vehicle Body Type',
            selector: (row) => row.Vehicle_Bodytype,
            sortable: true,
            center: true,
        },
        {
            name: 'RC Copy Front',
            selector: (row) => row.RC_Copy_Front,
            sortable: true,
            center: true,
        },
        {
            name: 'RC Copy Back',
            selector: (row) => row.RC_Copy_Back,
            sortable: true,
            center: true,
        },
        {
            name: 'Insurance Copy Front',
            selector: (row) => row.Insuranance_Copy_Front,
            center: true,
        },
        {
            name: ' Insurance Copy Back',
            selector: (row) => row.Insuranance_Copy_Back,
            center: true,
        },
        {
            name: 'Insurance Validity',
            selector: (row) => row.Insurance_Validity,
            center: true,
        },
        {
            name: 'FC Validity',
            selector: (row) => row.FC_Validity,
            center: true,
        },
        {
            name: 'Status',
            selector: (row) => row.Status,
            center: true,
        },
        {
            name: 'Action',
            selector: (row) => row.Action,
            center: true,
        },
    ]

    const data = [
        {
            sno: 1,
            Creation_Date: '12.12.2021',
            Vehicle_Type: 'Own',
            Vehicle_Capacity: '15',
            Vehicle_Bodytype: (<span><CButton
                onClick={() => setOdometerPhoto(!OdometerPhoto)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                    <CModalHeader>
                        <CModalTitle>Odometer Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal></span>),
            RC_Copy_Front: (<span><CButton
                onClick={() => setOdometerPhoto(!OdometerPhoto)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                    <CModalHeader>
                        <CModalTitle>Odometer Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal></span>),
            RC_Copy_Back: (<span><CButton
                onClick={() => setOdometerPhoto(!OdometerPhoto)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                    <CModalHeader>
                        <CModalTitle>Odometer Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                            Close
                        </CButton>
                        <CButton color="primary">Save changes</CButton>
                    </CModalFooter>
                </CModal></span>),
            Insuranance_Copy_Front: (<span><CButton
                onClick={() => setOdometerPhoto(!OdometerPhoto)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                    <CModalHeader>
                        <CModalTitle>Odometer Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal></span>),
            Insuranance_Copy_Back: (<span><CButton
                onClick={() => setOdometerPhoto(!OdometerPhoto)}
                className="w-100 m-0"
                color=""
                size="sm"
                id="inputAddress"
            >
                <span className="float-start">
                    <i className="fa fa-eye" aria-hidden="true"></i> &nbsp;View
                </span>
            </CButton>
                <CModal visible={OdometerPhoto} onClose={() => setOdometerPhoto(false)}>
                    <CModalHeader>
                        <CModalTitle>Odometer Photo</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <CCardImage
                            orientation="top"
                            src=""
                        />
                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setOdometerPhoto(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal></span>),
            Insurance_Validity: '10.01.2022',
            FC_Validity: '10.01.2022',
            Status: <span className="badge rounded-pill bg-info">Active</span>,
            Action: (
                <CButton className="badge text-white" color="warning">
                    <Link className="text-white" to="/VendorCreationConfrimationHome/VendorCreationConfrimation">
                        Vendor Creation Confrimation
                    </Link>
                </CButton>
            ),
        },
    ]

    return (

        <CCard className="mt-4">
            <CContainer className="mt-2">
                <CustomTable columns={columns} data={data} />
                <hr></hr>
                <CRow className="mt-3">
                    <CCol
                        className="offset-md-6"
                        xs={15}
                        sm={15}
                        md={6}
                        style={{ display: 'flex', justifyContent: 'end' }}
                    >
                        <CButton
                            size="sm"
                            color="warning"
                            // disabled={enableSubmit}
                            className="px-3 text-white"
                            type="submit"
                        >
                            <Link className="text-white" to="/AdvancePayment">
                                New
                            </Link>
                        </CButton>
                    </CCol>
                </CRow>

            </CContainer>
        </CCard>
    );
}

export default VehicleMasterTable;
