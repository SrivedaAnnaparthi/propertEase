import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
import XLSX from 'xlsx'

const guestData = [
  {
    
    id: 1,
    name: "veda",
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
    {
    
      
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
      {
    
        id: 1,
        name: "xyz",
        buildingno:"02",
        roomno:"03",
        bedno:"07",
        transactionamount:"7000",
        dueamount:"700",
        transactiontype:"UPI",
        transactionid:"nddasdjkkd",
        transactiondate:"01",
        month:"JUNE",
        year:"2019",
        }
]
function Guest() {
  const [filteredData,setFilteredData]=useState(guestData)
  const [filter, setFilter]=useState(true)
  const [year,setYear]=useState('all')

   
    const [month,setMonth]=useState('all')
  const columns = [
    { title: "Name", field: "fullName" ,type:'string'},
    { title: "Contact Number", field: 'contactNumber',type:"number" },
    { title: "Father Name", field: 'fatherName',type:"string" },
    { title: "Father Number", field: 'fatherNumber',type:"number" },
    { title: "DOB", field: 'dob',type:"string" },
    { title: "Blood Group", field: ' bloodGroup',type:"string" },
    { title: "Check In Date", field: 'checkInDate',type:"string" },
    { title: "Email", field: 'email',type:"string" },
    { title: "Occupation", field: 'occupation',type:"string" },
    { title: "Work Address", field: 'workAddress',type:"string" },
    { title: "Work Number", field: 'workNumber',type:"number" },
    { title: "Permanent Address", field: 'permanentAddress',type:"string" },
    { title: "ID Proof", field: 'idProof',type:"string" },
    { title: "Room Rent", field: 'roomRent',type:"currency" },
    { title: "Security Deposit", field: 'securityDeposit',type:"currency" },
    { title: "Transcation ID", field: 'transactionId',type:"string" },
    { title: "Sign of Resident", field: 'signOfResident',type:"string" },
    { title: "Sign of Manager", field: 'signOfManager',type:"string" },
    
    
  ]
    const handleChange=()=>{
      setFilter(!filter)
     }

   
     useEffect(()=>{
   setFilteredData(year==='all'?guestData:guestData.filter(dt=>dt.year===year))
   
     },[year])
     
     useEffect(()=>{
   setFilteredData(month==='all'?guestData:guestData.filter(dt=>dt.month===month))
   
     },[month])

    const downloadExcel=()=>{
      const newData=guestData.map(row=>{
        delete row.tableData
        return row
      })
      const workSheet=XLSX.utils.json_to_sheet(newData)
      const workBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workBook,workSheet,"guest")
      
      //Binary string
      XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
      //Download
      XLSX.writeFile(workBook,"GuestsData.xlsx")


    }
  return (
   
   
      <div>
      <MaterialTable
        title="Guest Details"
        columns={columns}
        data={filteredData}options={{
          filtering:filter
        }}onChange={handleChange}
        
        actions={[
          {icon:()=><button>Export</button>,// you can pass icon too
          tooltip:"Export to Excel",
        onClick:()=>downloadExcel(),
      isFreeAction:true},
      {
        icon:()=><Checkbox
        checked={filter}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />,
      tooltip:"Hide/Show Filter option",
      isFreeAction:true
      },
      {
        icon:()=><Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        style={{width:100}}
        value={year}
        onChange={(e)=>setYear(e.target.value)}
      >
         <MenuItem value={"all"}><em>All</em></MenuItem>
        <MenuItem value={"2019"}>2019</MenuItem>
        <MenuItem value={"2020"}>2020</MenuItem>
        <MenuItem value={"2021"}>2021</MenuItem>
        <MenuItem value={"2022"}>2022</MenuItem>
      </Select>,
      tooltip:"Filter Year",
      isFreeAction:true
      },
      {
        icon:()=><Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        style={{width:100}}
        value={month}
        onChange={(e)=>setMonth(e.target.value)}
      >
         <MenuItem value={"all"}><em>All</em></MenuItem>
        <MenuItem value={"JAN"}>JAN</MenuItem>
        <MenuItem value={"FEB"}>FEB</MenuItem>
        <MenuItem value={"MARCH"}>MARCH</MenuItem>
        <MenuItem value={"APRIL"}>APRIL</MenuItem>
        <MenuItem value={"MAY"}>MAY</MenuItem>
        <MenuItem value={"JUNE"}>JUNE</MenuItem>
        <MenuItem value={"JULY"}>JULY</MenuItem>
        <MenuItem value={"AUGUST"}>AUGUST</MenuItem>
        <MenuItem value={"SEPTEMBER"}>SEPTEMBER</MenuItem>
        <MenuItem value={"OCTOBER"}>OCTOBER</MenuItem>
        <MenuItem value={"NOV"}>NOV</MenuItem>
        <MenuItem value={"DEC"}>DECEMBER</MenuItem>

      </Select>,
      tooltip:"Filter Month",
      isFreeAction:true
      }
        ]}
        />
    </div>
  
  );
}
export default Guest;