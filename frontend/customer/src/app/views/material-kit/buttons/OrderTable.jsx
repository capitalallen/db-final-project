import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux'
import {get_c_orders} from '../../../util';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function OrderTable() {
  const u_id = useSelector((state) => state.ecommerce.u_id);
  const [data,setData]=useState([]);
  return (
    <TableContainer component={Paper}>
      <button onClick={()=>{
        console.log(u_id)
        if (u_id){
          get_c_orders(u_id.toString()).then(res=>{
            setData(res.data);
            console.log(res.data)
          })
        }
      }}>Refresh</button>
      {data?<Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice ID</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow
              key={d.inv_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {d.inv_id}
              </TableCell>
              <TableCell align="right">{d.inv_amt}</TableCell>
              <TableCell align="right">{d.inv_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>:null}
      
    </TableContainer>
  );
}