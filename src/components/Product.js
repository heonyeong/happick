import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

/*
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

class Product extends React.Component {
    render() {
        const product = this.props.product;
        return(
            <TableRow>
                <TableCell>{product.id} </TableCell>
                <TableCell><img src={product.image.path+product.image.fileName} alt="profile"/> </TableCell>
                <TableCell>{product.title} </TableCell>
                <TableCell>{product.description} </TableCell>
                <TableCell>{product.keywords} </TableCell>
                <TableCell>{product.liveBooking.liveId}/{product.liveBooking.liveDateTime}/{product.liveBooking.liveStatus} </TableCell>
                <TableCell>{product.seller.sellerId}/{product.seller.name} </TableCell>
                <TableCell>{product.location} </TableCell>
                <TableCell>{product.price} </TableCell>
                <TableCell>{product.productStatus} </TableCell>
                <TableCell>{product.regDateTime} </TableCell>
            </TableRow>
        );
    }
};

export default Product;