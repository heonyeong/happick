import React, { Component, useState, useEffect } from 'react';
import Product from '../components/Product';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit *3,
      overflowX: "auto"
    },
    table: {
      minWidth: 1080
    }
  });

//class ProductList extends Component { 
const ProductList = (props) => {
    
    const { classes } = props;
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8081/api/v1/seller/andy/products');
                setProducts(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    // 대기 중일 때
    if (loading) {
        return (
            <Paper className={classes.root}>
              <p>대기 중</p>
            </Paper>
          );
    }
    // 아직 products 값이 설정되지 않았을 때
    if (!products) {
        return (
            <Paper className={classes.root}>
              <p>아직</p>
            </Paper>
          );
    }

    return (
    <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>키워드</TableCell>
            <TableCell>라이브예약</TableCell>
            <TableCell>판매자</TableCell>
            <TableCell>지역</TableCell>
            <TableCell>가격</TableCell>
            <TableCell>물건상태</TableCell>
            <TableCell>등록일자</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {// map을 이용해서 반복문 사용
            products.map(product =>{
                return (
                <Product product = {product}/>
                )
            })       
            }
        </TableBody>
        </Table>
    </Paper>
    );
};
  
export default withStyles(styles)(ProductList);