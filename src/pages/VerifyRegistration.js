import {Typography} from '@mui/material';
import Cookies from 'js-cookie';
import { Paper, FormControl, MenuItem, Select, InputLabel, CardHeader, TextField } from '@mui/material';


const VerifyRegistration = () => {
    const firstName = Cookies.get('firstName')
    const lastName = Cookies.get('lastName')
    const stack = Cookies.get('stack')
    const team = Cookies.get('team')

    return (
        <div className='text-center d-flex flex-column justify-content-center align-items-center'>
            <Typography variant='h6'>
                Thank you {firstName} for Registration with us 
            </Typography>
            <Typography variant='body1'>
                Here is a summary of the details you provided during your registration 
            </Typography>
            <Paper elevation={2} className='p-4 mt-5 w-50'>
                <CardHeader title={'Registration Form'} className='text-center mb-1'/>
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='First Name'
                    value={firstName}
                    className='mb-4'
                    required
                />
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='Last Name'
                    value={lastName}
                    className='mb-4'
                    required
                />
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='Stack'
                    value={stack}
                    className='mb-4'
                    required
                />
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Team</InputLabel>
                    <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={team}
                        label="Select your team"
                    >
                        <MenuItem value={10}>Pragma</MenuItem>
                        <MenuItem value={20}>Eros</MenuItem>
                        <MenuItem value={30}>Ludus</MenuItem>
                        <MenuItem value={40}>Philia</MenuItem>
                        <MenuItem value={50}>Agape</MenuItem>
                        <MenuItem value={60}>Philautia</MenuItem>
                        <MenuItem value={70}>Storge</MenuItem>
                        <MenuItem value={80}>Mania</MenuItem>
                    </Select>
                </FormControl>
            </Paper>
        </div>
    )
}

export default VerifyRegistration

