import * as React from 'react';
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

import { ADD_FOOD } from '../../utils/mutations';


export default function FoodInputForm() {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    servings: '',
    imageUrl:'',
    public_id:'',
    ingredients:'',
    expiry: '',

  })
  const [addFood, { error, data }] = useMutation(ADD_FOOD);

  const handleInputChange = (e) => {
    console.log(e)
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value,
    })
    console.log(formState)
  };
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addFood({
        variables: { ...formState },
      });
      console.log(data)
      // Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDateChange = (newValue) => {
    
    setFormState({
      ...formState,
      expiry: newValue
    })
    console.log(newValue)
    
  };
console.log(formState)
  return (
   
    
      <Box
      component="form" 
      action="" 
      method="POST" 
      enctype="multipart/form-data"
      sx={{
        '& .MuiTextField-root': { m: 2, Width: '50ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      < >

       <TextField
          required
          // value={formState.name}
          name="name"
          id="outlined-required"
          label="Food Name"
          fullWidth
          // defaultValue={formState.name}
          onChange={handleInputChange}

        /> <br/>

        <TextField
          required
          // value={formState.description}
          name="description"
          id="outlined-required"
          label="Food Description"
          fullWidth
          // defaultValue={formState.name}
          onChange={handleInputChange}
        /> <br/>

        <TextField
          required
          // value={formState.servings}
          name="servings"
          id="outlined-required"
          label="Servings"
          fullWidth
          // defaultValue={formState.servings}
          onChange={handleInputChange}
        /> <br/>

        <TextField
          required
          // value={formState.ingredients}
          name="ingredients"
          id="outlined-required"
          label="Ingredients"
          fullWidth
          // defaultValue={formState.ingredients}
          onChange={handleInputChange}
        /> <br/>

        <input
          required
          
          value={formState.imageUrl}
          type="file"
          id="outlined-required"
          label="image file"
          // defaultValue="public ID"
          onChange={handleInputChange}
        /> <br/>


          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="expiry"
                inputFormat="MM/dd/yyyy"
                value={formState.expiry}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params}/>}
              />
            </Stack>
          </LocalizationProvider>

          <button
            className="btn btn-block btn-info"
            style={{ cursor: 'pointer' }}
            type="submit"
            >
            Submit
          </button>
      </>
        
    </Box>
  );
}



