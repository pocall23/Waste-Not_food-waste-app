import { FilledInput, Stack } from "@mui/material"
import "./registrationForm.css"


export default function RegistrationForm() {
const [values, setValues] = useState({
    email:'',
    password:'',
    repeatPassword:'',
    showRepeatPassword:false,
});
})
  
const handleChange = (fieldName) => (event => {
    setValues({
        ...values, [fieldName]:
        event.target.value })
    });
const handleSubmit = aync (event) => {
    event.preventDefault()

    try{
        const res = await fetch('/api/register',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                email:values.email,
                password:values.password,
            })
        })
        if(!res.ok){
            return console.log('fetch error')
        }
        const data = await res.json()

        setValues({
            email:'',
            password:'',
            repeatPassword:'',
            showPassword: false,
            showRepeatPassword: false,
        })
        // return
    } catch(error){
        return console.log('fetch error')
    }
}

return (
    <Stack
        component='form'
        onSubmit={handleSubmit}
        noValidatespacing={6}
        sx={{ bgcolor : 'f5f5f6', padding: '40px'}}>

        <TextField
        variant = 'filled'
        type='email'
        label='Email'
        value={values.email}  
        onChange={handleChange('email')}
        />

        <FormControl
         variant = 'filled'>
        <InputLabel htmlFor='password-field'>Password</InputLabel>
        <FilledInput
        id='password-field'
        type={'password'}
        value={values.password}
        onChange={handleChange('password')}/>
        <FormHelperText>
            Password must be at least 8 characters, 1 symbol, 1 uppercase letter, 1 lowercase letter and 1 digit
        </FormHelperText>
            </FormControl>  

            <FormControl variant="filled">
                <InputLabel htmlFor='password-repeat-field'>
                    Repeat password
                </InputLabel>
                <FilledInput
                id='password-repeat-field'
                type={'password'}
                value={values.repeatPassword}
                onChange={handleChange('repeatPassword')}/>
            </FormControl>
            <Button 
            variant='contained'
            size='large'
            type="submit"
            sx={{
                minWidth: '70%',
            }}>Register</Button>
        </Stack>
)
}
