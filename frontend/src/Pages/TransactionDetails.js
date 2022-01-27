import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Transaction() {
  return (
    <div style={{ height: 300, width: 'autoWidth' }}>
      
      <DataGrid rows={rows} columns={columns}
       components={{
        Toolbar: GridToolbar,
      }}
      initialState={{
        pagination: {
          pageSize: 1000,
        },
      }}
        
       />

      
    </div>
  );
}

  const columns = [
    { field: 'name', headerName: 'Name', width: 180, editable: true },
    { field: 'buildingno', headerName: 'Building no.', type: 'number',width: 180, editable: true },
    { field: 'roomno', headerName: 'Room no.', type: 'number',width: 180, editable: true },
    { field: 'bedno', headerName: 'Bed no.', type: 'number',width: 180, editable: true },
    { field: 'transactionamount', headerName: 'Transaction Amount', type: 'number',width: 180, editable: true },
    { field: 'dueamount', headerName: 'Due Amount', type: 'number',width: 180, editable: true },
    { field: 'transactiontype', headerName: 'Transaction Type', type: 'number',width: 180, editable: true },
    { field: 'transactionid', headerName: 'Transaction Id', type: 'number',width: 180, editable: true },
    { field: 'transactiondate', headerName: 'Transaction Date', type: 'number',width: 180, editable: true },
    { field: 'month', headerName: 'Transaction Month', type: 'number',width: 180, editable: true },
    { field: 'year', headerName: 'Transaction Year', type: 'number',width: 180, editable: true },
   
  ]
 
  
  const rows = [
    {
    
      id :1,
      name: "khalid",
      buildingno:"02",
      roomno:"03",
      bedno:"07",
      transactionamount:"7000",
      dueamount:"700",
      transactiontype:"UPI",
      transactionid:"nddasdjkkd",
      transactiondate:"04",
      month:"MAY",
      year:"2021",
      },
      {
    
        id: 2,
        name: "khalid",
        buildingno:"02",
        roomno:"03",
        bedno:"07",
        transactionamount:"7000",
        dueamount:"700",
        transactiontype:"UPI",
        transactionid:"nddasdjkkd",
        transactiondate:"04",
        month:"APRIL",
        year:"2022",
        },
        {
    
          id: 3,
          name: "khalid",
          buildingno:"02",
          roomno:"03",
          bedno:"07",
          transactionamount:"7000",
          dueamount:"700",
          transactiontype:"UPI",
          transactionid:"nddasdjkkd",
          transactiondate:"04",
          month:"APRIL",
          year:"2021",
          },
          
  ];