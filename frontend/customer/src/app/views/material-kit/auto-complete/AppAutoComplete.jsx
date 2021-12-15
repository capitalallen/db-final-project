import React, { useState, useEffect } from 'react'
import InvoiceTable from './InvoiceTable'
import InvoiceDateChart from './InvoiceDateChart'
import InvoiceInsuranceChart from './InvoiceInsuranceChart'
import {
    get_invoice,
    get_invoice_date,
    get_invoice_insurance,
} from '../../../util'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const AppAutoComplete = () => {
    const [invoiceDetail, setInvoiceDetail] = useState(null)
    const [invoiceDate, setInvoiceDate] = useState([])
    const [invoiceInsurance, setInvoiceInsurance] = useState([])
    const [number, setNumber] = useState("")
    useEffect(() => {
        get_invoice().then((res) => {
            setInvoiceDetail(res)
        })
    }, [])
    useEffect(() => {
        get_invoice_date().then((res) => {
            setInvoiceDate(res)
        })
        return () => {
            setInvoiceDate({})
        }
    }, [])
    useEffect(() => {
        get_invoice_insurance().then((res) => {
            setInvoiceInsurance(res)
        })
        return () => {
            setInvoiceInsurance({})
        }
    }, [])
    return (
        <div className="m-sm-30">
            <h1>Account Detail</h1>
        </div>
    )
}

export default AppAutoComplete
