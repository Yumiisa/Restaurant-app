import { ButtonGroup, Grid, InputAdornment,makeStyles,Button as MuiButton } from '@material-ui/core'
import React, {useState} from 'react'
import Form from "../layouts/Form"
import {Input, Select,Button} from "../controls"
import ReplayIcon from '@mui/icons-material/Replay';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const pMethod=[
        {id:'none',title:'Select'},
         {id:'Cash',title:'Cash'},
          {id:'Card',title:'Card'}
    ]
    const useStyles=makeStyles(theme=>({
        adornmentText:{
            '& .MuiTypography-root':{
                color:'#f3b33d',
                fontWeight:"bolder",
                fontSize:'1.5em'
            }
        }
    }))
   
function OrderForm(props) {
    const {values,errors, handleInputChange}=props
    const classes= useStyles()
   
  return (
    
   <Form>
    <Grid container>
        <Grid item x6={6}>
            <Input disabled label="Order Number"
             name="orderName"
             value={values.orderNumber}
             InputProps={{startAdornment:<InputAdornment 
                className={classes.adornmentText}
                position="start">#</InputAdornment>}}
             />
            <Select label="Customer" 
            name="customerId"
            value={values.customerId}
            onChange={handleInputChange}
             options={[
                {id:0, title:"select"},
                {id:1, title:'customer 1'},
                {id:2, title:'customer 2'},
                {id:3, title:'customer 3'},
                {id:4, title:'customer 4'}
                ]}/>
        </Grid>
        
         <Grid item x6={6}>
            <Select label="Payment Method"
             name="pMethod" 
             value={values.pMethod}
             onChange={handleInputChange}
            options={pMethod}/>
            <Input disabled label="Grand Total" 
            name="gTotal"
            values={values.gTotal}
            InputProps={{startAdornment:<InputAdornment 
                className={classes.adornmentText}
                position="start">$</InputAdornment>}}
            />
            <ButtonGroup>
                <MuiButton size='large' endIcon={<RestaurantMenuIcon />} type='submit'>Submit</MuiButton>
                <MuiButton size='small' startIcon={<ReplayIcon/>}></MuiButton>
            </ButtonGroup>
         </Grid>
        </Grid>
   </Form>
  )
}

export default OrderForm