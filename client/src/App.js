import './App.css';
import { Customertablehead, Customertablebody } from './componenets/Customer'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '양준호',
  'birthday': '980327',
  'gender': '남자',
  'job': '대학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '양경선',
    'birthday': '630903',
    'gender': '남자',
    'job': '한의사'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '양진솔',
    'birthday': '950301',
    'gender': '여자',
    'job': '취준생'
  }
]

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customer table">
          <Customertablehead />
          <TableBody>
          {customers.map(c => {
            return <Customertablebody key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
