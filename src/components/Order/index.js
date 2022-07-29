import React from 'react'
import OrderForm from './OrderForm'
import USeForm from '../../hooks/USeForm'
 const generateOrderNumber=() =>Math.floor(100000 + Math.random()* 900000).toString()
    const getFreshModelObject=() => ({
        orderMasterId:0,
        orderNumber:generateOrderNumber(),
        customerId:0,
        pMethod:"none",
        gTotal:0,
        deletedOrderItemIds:'',
        orderDetails:[]
    })

function Order() {
     const{
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetFormControls
  }=USeForm(getFreshModelObject)
    
  return (
    <div>
        <OrderForm 
        {...{values,errors, handleInputChange}}
        />
    </div>
  )
}

export default Order