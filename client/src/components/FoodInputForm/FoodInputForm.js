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
    expiry: new Date ('2022-07-18T21:11:54'),

  })
  const [addFood, { error, data }] = useMutation(ADD_FOOD);

  const handleInputChange = (e) => {
    const { name, value } =e.target;
    
    setFormState({
      ...formState,
      [name]: value,
    })
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addFood({
        variables: { ...formState },
      });

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
          value={formState.name}
          name="foodName"
          id="outlined-required"
          label="Food Name"
          // defaultValue="Food name"
          onChange={handleInputChange}

        /> <br/>

        <TextField
          required
          value={formState.description}
          name="foodDescription"
          id="outlined-required"
          label="Food Description"
          // defaultValue="Food Description"
          onChange={handleInputChange}
        /> <br/>

        <TextField
          required
          value={formState.servings}
          name="foodServings"
          id="outlined-required"
          label="Servings"
          // defaultValue="Servings"
          onChange={handleInputChange}
        /> <br/>

        <TextField
          required
          value={formState.ingredients}
          id="outlined-required"
          label="Ingredients"
          // defaultValue="Ingredients"
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

        {/* <input
          required
          value={formState.public_id}
          type="file"
          id="outlined-required"
          label="Required"
          // defaultValue="public ID"
          onChange={handleInputChange}
        /> <br/> */}
  

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="expiry"
                inputFormat="MM/dd/yyyy"
                value={formState.expiry}
                onChange={handleInputChange}
                renderInput={(params) => <TextField {...params} />}
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



