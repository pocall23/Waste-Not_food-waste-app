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
    
  };
  console.log(formState)

  const handleDateChange = (newValue) => {

    setFormState({
      ...formState,
      expiry: newValue
    })
    console.log(newValue)
  };

  const handleImageChange = (event) => {
    console.log(event.target.value)
    const image = event.target.value
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addFood({
        variables: { ...formState },
      });
      console.log(data)
      window.location.reload();
      // Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };


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
          
          name="servings"
          id="outlined-required"
          label="Servings"
          fullWidth
          
          onChange={handleInputChange}
        /> <br/>

        <TextField
          required
        
          name="ingredients"
          id="outlined-required"
          label="Ingredients"
          fullWidth
          
          onChange={handleInputChange}
        /> <br/>

        <input
          required
          type="file"
          id="outlined-required"
          label="image file"
          // defaultValue="public ID"
          onChange={handleImageChange}
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



