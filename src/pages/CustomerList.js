//import logo from './logo.svg';
import { Component } from 'react';
import Customer from '../components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';
import ProductList from '../pages/ProductList';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

// 고객정보 배열로 구성
const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/128/128/any',
  'name' : '김헌영(Scott)',
  'birthday' : '841225',
  'gender' : '남',
  'job' : '스피커'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/128/128/2',
  'name' : '진요한(JIN)',
  'birthday' : '900505',
  'gender' : '남',
  'job' : '진킨스'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/128/128/3',
  'name' : '김화진(KATE)',
  'birthday' : '841227',
  'gender' : '여',
  'job' : '예술가'
},
{
  'id' : 4,
  'image' : 'https://placeimg.com/128/128/4',
  'name' : 'Rex',
  'birthday' : '비밀',
  'gender' : '남',
  'job' : '스크럼마스터'
},
{
  'id' : 5,
  'image' : 'https://placeimg.com/128/128/5',
  'name' : 'Andy',
  'birthday' : '비밀',
  'gender' : '남',
  'job' : '행동대장'
},
{
  'id' : 6,
  'image' : 'https://placeimg.com/128/128/6',
  'name' : 'Tiffany',
  'birthday' : '비밀',
  'gender' : '여',
  'job' : '서기'
}
]

class CustomerList extends Component {
  render(){ 
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {// map을 이용해서 반복문 사용
              customers.map(c =>{
                return (
                  <Customer
                    key = {c.id}
                    id = {c.id}
                    image = {c.image}
                    name = {c.name}
                    birthday = {c.birthday}
                    gender = {c.gender}
                    job = {c.job}
                  />
                )
              })       
            }
          </TableBody>
        </Table>
       <ul>
        <li>
          <Link to="/productlist">내 물건들</Link>
        </li>
      </ul>
        <Route path="/productlist" component={ProductList} />
      </Paper>
    );
  }
}

export default withStyles(styles)(CustomerList);