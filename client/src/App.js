import './App.css';
import { Customertablehead, Customertablebody } from './componenets/Customer'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function getCustomers() {
  return fetch('api/customers')
    .then(data => data.json())
}

function App() {
  const classes = useStyles();
  const [customers, setCustomers] = useState('');

  useEffect(() => {
    let mounted = true;
    getCustomers()
      .then(items => {
        if(mounted) {
          setCustomers(items)
        }
      })
    return () => mounted =false;
  }, [])

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customer table">
          <Customertablehead />
          <TableBody>
          { customers ? customers.map(c => {
              return ( <Customertablebody key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
          }) : 
          <TableRow>
            <TableCell colSpan="6" align="center">
              <CircularProgress />
            </TableCell>
          </TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
