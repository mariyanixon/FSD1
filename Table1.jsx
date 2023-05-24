import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {
    var[names,setNames]=useState(["Tiya","Riya","Meera"])
    var[age,setAge]=useState(["12","13","14"])
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"red",fontFamily:"cursive",fontSize:"30px"}}>Name</TableCell>
                        <TableCell style={{color:"green",fontFamily:"cursive",fontSize:"30px"}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                        )
                    })}
                    

                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table1