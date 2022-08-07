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


import axios from 'axios';

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

  });

  const [addFood, { error, data }] = useMutation(ADD_FOOD);

  const handleInputChange = (e) => {
    // console.log(e)
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value,
    })
    
  };
  
  const handleInputImage = (e) => {
    const uploadFileEle = document.getElementById("fileInput")
    console.log(uploadFileEle.files[0]);
    const file = uploadFileEle.files[0];
    const formData = new FormData();
    formData.set('file', file);

    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dqw6fjffy/image/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'ml_default';
    const image = document.querySelector('#fileInput');

    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then((data) => {
        if (data.secure_url !== '') {
          const uploadedFileUrl = data.secure_url;
          console.log(uploadedFileUrl);
          // console.log(typeof uploadedFileUrl);
          
          setFormState({
            ...formState,
            imageUrl: uploadedFileUrl,
          })
        }
      })
    .catch(err => console.error(err));

  }
  
  // console.log(formState)

  const handleDateChange = (newValue) => {

    setFormState({
      ...formState,
      expiry: newValue
    })
    console.log(newValue)
  };

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
        '& .MuiTextField-root': { m: 2, MaxWidth: '50ch' },
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

        <input id="fileInput" type="file" onChange={handleInputImage} accept="image/*"/>

        

        <br/>

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



