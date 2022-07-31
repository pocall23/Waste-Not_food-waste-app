import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';


export default function FoodInputForm() {
  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
   
    
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, Width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Food name"
        /> <br/>

      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Description"
        /> <br/>

<TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Ingredients"
        /> <br/>
  

    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    </Box>
  );
}



