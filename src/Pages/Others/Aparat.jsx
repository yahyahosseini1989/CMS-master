import React, { useEffect, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import Layout from './../Layout/Layout'
import { AparatService } from '../../Services/Service.Aparat';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Aparat = () => {
    const [rowData, setRowData] = useState(null);
    let AllVideos = new AparatService()
    const GetVideos = async () => {
        try {
            let res = await AllVideos.readApi()
            setRowData(res.data.mostviewedvideos)
            console.log(rowData);
        } catch (error) {
            console.log('error')
        }
    }
    useEffect(() => {
        GetVideos()
    }, [])
    // get videos


    return (
        <Layout>
            <div className="ag-theme-alpine" style={{ 'height': '450px' }}>
                <AgGridReact
                    rowData={rowData}>
                    <AgGridColumn field="title" headerName="عنوان"></AgGridColumn>
                    <AgGridColumn field="username" headerName="فرستنده"></AgGridColumn>
                    <AgGridColumn field="visit_cnt" headerName="تعداد نمایش"></AgGridColumn>
                    <AgGridColumn field="small_poster" headerName="پوستر فیلم"></AgGridColumn>
                    <AgGridColumn field="sdate" headerName="تاریخ ارسال"></AgGridColumn>
                    <AgGridColumn field="frame" headerName="نمایش"></AgGridColumn>
                    <AgGridColumn field="duration" headerName="مدت زمان"></AgGridColumn>
                </AgGridReact>
            </div>
        </Layout>
    );
};
export default Aparat;