import { TextField , Button} from '@mui/material'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useFormik } from 'formik'
import * as yup from 'yup';
import React from 'react'
import { Box } from '@mui/system';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8,'Password should be of minimum 8 characters length')
        .required('Password is required')
});

const Signin = () => {

    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)       
        },
    });

    return (
        <div>
        <Box sx={{
            width: 300,
            height: 300,
            pl:75,
            pt:25,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: 'primary.dark',
        }}>
            <Box sx={{pl:14}}>
                <Avatar sx={{m:1, bgcolor: 'secondary.main' }}/>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
            </Box>
            <Box>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                    margin='normal'
                    fullWidth
                    id='email'
                    name='email'
                    label='Email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                    <TextField
                        fullWidth
                        id='password'
                        name='password'
                        label='Password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <Button type='submit' fullWidth variant='contained'>
                        Sign In
                    </Button>
                </form>
            </Box>
        </Box>
        </div>
    )
    }

export default Signin