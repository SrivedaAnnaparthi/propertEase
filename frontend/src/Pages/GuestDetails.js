import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Guest() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      
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

const rows= [
  {
    
   
  
    
      id :1,
      fullName: "veda",
      contactNumber:"65698657654",
      fatherName:"ujyhgfvcrfvc",
      fatherNumber:"07876455",
      dob:"23-08-1999",
      bloodGroup:"trf",
      checkInDate:"56-78-99", 
      email:"nddasdjkkd",
      occupation:"kiuyjthgfdv",
      workAddress:"yjhgtrdfdcc",
      workNumber:"2022098765",
      permanentAddress:"ujhntrfd",
      idProof:'ythg',
      roomRent:'75445',
      securityDeposit:'6554',
      transactionId:'7654',
      signOfResident:'uyhgrds',
      signOfManager:'sfgsdwersd'
      },
    
]


   
   
  const columns = [
    { headerName: "Name", field: "fullName" ,type:'string',width: 180, editable: true},
    { headerName: "Contact Number", field: 'contactNumber',type:"number" ,width: 180, editable: true},
    { headerName: "Father Name", field: 'fatherName',type:"string",width: 180, editable: true },
    { headerName: "Father Number", field: 'fatherNumber',type:"number",width: 180, editable: true },
    { headerName: "DOB", field: 'dob',type:"string",width: 180, editable: true },
    { headerName: "Blood Group", field: ' bloodGroup',type:"string",width: 180, editable: true },
    { headerName: "Check In Date", field: 'checkInDate',type:"string",width: 180, editable: true },
    { headerName: "Email", field: 'email',type:"string",width: 180, editable: true },
    { headerName: "Occupation", field: 'occupation',type:"string",width: 180, editable: true },
    { headerName: "Work Address", field: 'workAddress',type:"string",width: 180, editable: true },
    { headerName: "Work Number", field: 'workNumber',type:"number",width: 180, editable: true },
    { headerName: "Permanent Address", field: 'permanentAddress',type:"string",width: 180, editable: true },
    { headerName: "ID Proof", field: 'idProof',type:"string",width: 180, editable: true },
    { headerName: "Room Rent", field: 'roomRent',type:"currency",width: 180, editable: true },
    { headerName: "Security Deposit", field: 'securityDeposit',type:"currency",width: 180, editable: true },
    { headerName: "Transcation ID", field: 'transactionId',type:"string",width: 180, editable: true },
    { headerName: "Sign of Resident", field: 'signOfResident',type:"string",width: 180, editable: true },
    { headerName: "Sign of Manager", field: 'signOfManager',type:"string",width: 180, editable: true },
    
    
  ]
    