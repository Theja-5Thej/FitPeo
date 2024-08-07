import React from 'react'
import { StyledTableContainer, CustomHead, StyledTableWrapper } from './styledComponents/styleComponents';
import { Table, Tag } from 'antd';
import imageVal from '../assets/employe.jpg'
import { color } from 'chart.js/helpers';
const TableContainer = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
            imageUrl: imageVal,
            status: 'Delivered',
            amount: '$124.0',
            orderno: "124426959"
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            imageUrl: imageVal,
            status: 'Delivered',
            amount: '$124.0',
            orderno: "124425599"
        },
        {
            key: '3',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            imageUrl: imageVal,
            status: "Canceled",
            amount: '$124.0',
            orderno: "124426025"
        },
        {
            key: '4',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
            imageUrl: imageVal,
            status: "Canceled",
            amount: '$124.0',
            orderno: "124426025"
        },
    ];

    const columns = [
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={record.imageUrl}
                        alt={record.name}
                        style={{  borderRadius: '50%', marginRight: '10px' }}
                    />
                    <span>{record.name}</span>
                </div>
            ),
        },
        {
            title: 'Order No',
            dataIndex: 'orderno',
            key: 'orderno',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                let color, bgcolor
                text === "Delivered" ? color = "#0eee19" : color = '#d53030';
                text === "Delivered" ? bgcolor = "#69936B" : bgcolor = '#A57878'
                return (

                    <Tag style={{ fontSize: '7px', fontWeight: '700', borderRadius: "15px", padding: '0 5px', backgroundColor: bgcolor, color: color, border: "none" }} scroll={{ y: 100, x: '100%' }}>
                        {text.toUpperCase()}
                    </Tag>
                )
            }
        }
    ];
    return (
        <StyledTableContainer>
            <CustomHead ffontSize="18px" fontWeight="600">Recent Orders</CustomHead>
            <StyledTableWrapper>
            <Table dataSource={dataSource} columns={columns} style={{ backgroundColor: 'transparent', color: 'white', }} pagination={false} scroll={{ y: 250, x: 250 }} />
            </StyledTableWrapper>
        </StyledTableContainer>
    )
}

export default TableContainer
