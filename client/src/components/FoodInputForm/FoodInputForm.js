import * as React from 'react';
import { useState } from 'react'
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

import "./FoodInput.css";

import { ADD_FOOD } from '../../utils/mutations';
import { QUERY_FOODS } from '../../utils/queries';

import Auth from '../../utils/auth'

export default function FoodInputForm() {
  const [formState, setFormState] = useState({
    name: '',
    description: '',
    servings: '',
    imageUrl:'',
    ingredients:'',
    expiry: '',

  });

  const [addFood, { error }] = useMutation(ADD_FOOD, {
    update(cache, { data: { addFood }}) {
      try {
        const { foods } = cache.readQuery({query: QUERY_FOODS});
        
        cache.writeQuery({
          query: QUERY_FOODS,
          data: { foods: [addFood, ...foods] },
        })
      } catch (e) {
        console.error(e);
      }
    }
  });

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
    console.log(typeof newValue)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      
      console.log(Auth.getProfile().data.username)
      const { data } = await addFood({
        variables: { 
          ...formState,
          donatedBy: Auth.getProfile().data.username,
        },

      });

      console.log(data)
      setFormState('');
      console.log(Auth.loggedIn())
      
    } catch (e) {
      console.error(e);
    }
  };



  return (
    <div className='box'>
      {Auth.loggedIn() ? (
      <Box
      component="form" 
      // action="" 
      method="POST" 
      // enctype="multipart/form-data"
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


        <input className='choose' id="fileInput" type="file" onChange={handleInputImage} accept="image/*"/>
        
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
            className="btn"
            style={{ cursor: 'pointer' }}
            type="submit"
            >
            Submit
          </button>
      </>
        
    </Box>
   ):(
      <p>
          You need to be logged in to donate food. Please{' '}
          <Link className='link' to="/login">login</Link> or <Link className='link' to="/signup">signup.</Link>
        </p>
    )}
    </div>
   
  );

}



