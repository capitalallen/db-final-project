import React,{useState,useEffect} from 'react'
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    MenuItem,
    Select,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {get_top_insurance} from '../../../util';
const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const TopSellingTable = () => {
    const classes = useStyles()
    const [topInsurance,SetTopInsurance]=useState([]);
    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Top Insurance Sold</span>
                <Select size="small" defaultValue="this_month" disableUnderline>
                    <MenuItem value="this_month">This Month</MenuItem>
                    <MenuItem value="last_month">This Year</MenuItem>
                </Select>
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="px-6" colSpan={4}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Revenue
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productList.map((product, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                >
                                    <div className="flex items-center">
                                        <p className="m-0 ml-8">
                                            {product.name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    $
                                    {product.price > 999
                                        ? (product.price / 1000).toFixed(1) +
                                          'k'
                                        : product.price}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}

const productList = [
    {
        imgUrl: '/assets/images/products/headphone-2.jpg',
        name: 'earphone'
    },
    {
        imgUrl: '/assets/images/products/headphone-3.jpg',
        name: 'earphone'
    },
    {
        imgUrl: '/assets/images/products/iphone-2.jpg',
        name: 'iPhone x'
    }
]

export default TopSellingTable
