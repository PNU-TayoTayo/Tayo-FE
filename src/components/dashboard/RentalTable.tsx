import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    bookingNum: string,
    car: string,
    carLocation: string,
    rentalDate: string,
    owner: string,
    status: string,
) {
    return { bookingNum, car, carLocation, rentalDate, owner, status };
}

const rows = [
    createData('T1234-5678', 'Jeep Wrangler Rubicon ', '부산광역시 남구 범일5동 두산위브 더제니스 하버시티', '2023.06.11', '타요타요', '사용 완료'),
    createData('T3454-2548', 'Jeep Wrangler Rubicon ', '부산광역시 남구 범일5동 두산위브 더제니스 하버시티', '2023.07.11', '사과당근', '사용 완료'),
    createData('T6476-8563', 'Jeep Wrangler Rubicon ', '부산광역시 남구 범일5동 두산위브 더제니스 하버시티', '2023.08.11', '딩댕동', '사용 완료'),
    createData('T3345-7543', 'Jeep Wrangler Rubicon ', '부산광역시 남구 범일5동 두산위브 더제니스 하버시티', '2023.09.29', '둥딩동', '예약 완료'),
    createData('T6347-8865', 'Jeep Wrangler Rubicon ', '부산광역시 남구 범일5동 두산위브 더제니스 하버시티', '2023.10.11', '군고구마', '예약 대기'),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, minHeight:400 }} aria-label="rental table">
                <TableHead >
                    <TableRow sx={{backgroundColor: '#f0f0f0'}}>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }}>예약 번호</TableCell>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }} align="right">차량</TableCell>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }} align="right">차량 위치</TableCell>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }} align="right">대여 일자</TableCell>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }} align="right">차주</TableCell>
                        <TableCell sx={{fontSize: 18, fontWeight: 'bold' }} align="right">상태</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.bookingNum}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{fontSize: 18}} component="th" scope="row">
                                {row.bookingNum}
                            </TableCell>
                            <TableCell sx={{fontSize: 18}} align="right">{row.car}</TableCell>
                            <TableCell sx={{fontSize: 18}} align="right">{row.carLocation}</TableCell>
                            <TableCell sx={{fontSize: 18}} align="right">{row.rentalDate}</TableCell>
                            <TableCell sx={{fontSize: 18}} align="right">{row.owner}</TableCell>
                            <TableCell sx={{fontSize: 18}} align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}