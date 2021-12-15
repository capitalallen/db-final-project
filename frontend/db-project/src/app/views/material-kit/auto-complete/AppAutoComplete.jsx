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
            <h1>Invoice</h1>
            {/* <div style={{ display: 'flex', paddingBottom: 30 }}>
                <TextField
                    style={{ paddingRight: 10 }}
                    size="small"
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={number}
                    onChange={(e)=>{
                        setNumber(e.target.value)
                    }}
                />
                <h3 style={{ paddingRight: 10 }}>invoice</h3>
                <Button variant="outlined" size="small" onClick={()=>{
                    get_invoice(number).then(res=>{
                        setInvoiceDetail(res)
                    });
                }}>
                    Show
                </Button>
            </div> */}
            <div>
                {invoiceDetail ? <InvoiceTable data={invoiceDetail} /> : null}
            </div>
            <div>
                <div style={{ marginLeft: 250, marginTop: 20 }}>
                    <h3>Number of Invoice by Date</h3>
                </div>
                {invoiceDate ? <InvoiceDateChart data={invoiceDate} /> : null}
            </div>
            <div>
                <div style={{ marginLeft: 120, marginTop: 20 }}>
                    <h3>Number of Invoice by Insurance</h3>
                </div>
                {invoiceDate ? (
                    <InvoiceInsuranceChart data={invoiceInsurance} />
                ) : null}
            </div>
        </div>
    )
}

export default AppAutoComplete
