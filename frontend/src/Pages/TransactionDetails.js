import React, { useState,useEffect } from 'react';
import MaterialTable from 'material-table'
import {Checkbox,Select,MenuItem} from '@material-ui/core'
import XLSX from 'xlsx'
const studentData = [
  {
    
    id: 1,
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
    {
    
      id: 1,
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
      year:"2022",
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
function TransactionDetails() {
  const [filteredData,setFilteredData]=useState(studentData)
  const [filter, setFilter]=useState(true)
  const [year,setYear]=useState('all')

   
    const [month,setMonth]=useState('all')
  const columns = [
    { title: "Name", field: "name" },
    { title: "Building no.", field: "buildingno" },
    { title: "Room no.", field: "roomno",type:"numeric" },
    { title: "Bed no.", field: 'bedno',type:"numeric" },
    { title: "Transaction Amount", field: 'transactionamount',type:"number" },
    { title: "Due Amount", field: 'dueamount',type:"number" },
    { title: "Transaction Type", field: 'transactiontype',type:"string" },
    { title: "Transaction Id", field: 'transactionid',type:"string" },
    { title: "Transaction Date", field: 'transactiondate',type:"number" },
    { title: "Transaction Month", field: 'month',type:"number" },
    { title: "Transaction Year", field: 'year',type:"number" }]
    const handleChange=()=>{
      setFilter(!filter)
     }

   
     useEffect(()=>{
   setFilteredData(year==='all'?studentData:studentData.filter(dt=>dt.year===year))
   
     },[year])
     
     useEffect(()=>{
   setFilteredData(month==='all'?studentData:studentData.filter(dt=>dt.month===month))
   
     },[month])

    const downloadExcel=()=>{
      const newData=studentData.map(row=>{
        delete row.tableData
        return row
      })
      const workSheet=XLSX.utils.json_to_sheet(newData)
      const workBook=XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workBook,workSheet,"students")
      //Buffer
      let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
      //Binary string
      XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
      //Download
      XLSX.writeFile(workBook,"StudentsData.xlsx")


    }
  return (
   
   
      <div>
      <MaterialTable
        title="Transaction Details"
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

export default TransactionDetails;