import React from 'react' 
import { useState } from 'react'  
import { makeStyles, makestyles } from '@material-ui/core/styles' 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; 
import './Screen.css'; 
import CheckIcon from '@material-ui/icons/Check'; 
import CloseIcon from '@material-ui/icons/Close';
const Screen = ({arr,query}) => { 
    return ( 
        <div className="Table">   
          <Paper elevation={3} className="paper">  
            <TableContainer>  
                <Table className="" aria-label="simple table"> 
                  <TableHead> 
                    <TableRow> 
                      <TableCell align="center">Stops</TableCell>
                      <TableCell align="center" >Bus</TableCell>
                      <TableCell align="center">Tram</TableCell>
                      <TableCell align="center">Ferry</TableCell>
                      <TableCell align="center">Suburban</TableCell>
                      <TableCell align="center">Express</TableCell>
                      <TableCell align="center">Regional</TableCell>
                      
                    </TableRow> 
                  </TableHead>  
                  <TableBody>
                        {arr.filter(value => value.name.toLowerCase().includes(query.toLowerCase())).map(row => ( 
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="center" >{row.products?.bus === true ? <CheckIcon/> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products?.tram === true ? <CheckIcon />: <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products?.ferry === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products?.suburban === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center"> {row.products?.express === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
                            <TableCell align="center">{row.products?.regional === true ? <CheckIcon /> : <CloseIcon />}</TableCell>
    
                        </TableRow>   
                        ))}                                          
                  </TableBody>
                </Table>
            </TableContainer>
          </Paper>

        </div>  
    )
}

export default Screen

