import  React, { useState } from 'react';
import {Button, Paper, FormControl, MenuItem, Select, InputLabel, CardHeader, TextField } from '@mui/material';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';



const Form = () => {
    const [team, setTeam] = React.useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [stack, setStack] = useState('');
    
    const handle = () => { 
        Cookies.set('firstName', firstName)
        Cookies.set('lastName', lastName)
        Cookies.set('stack', stack)
        Cookies.set('team', team)
    };

    return (
        <div className="w-50 mx-auto">
        {/* {JSON.stringify(team)} */}
            <Paper elevation={2} className='p-4'>
                <CardHeader title={'Registration Form'} className='text-center mb-1'/>
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='mb-4'
                    required
                />
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='mb-4'
                    required
                />
                <TextField 
                    fullWidth
                    id="demo-helper-text-misaligned"
                    label='Stack'
                    value={stack}
                    onChange={(e) => setStack(e.target.value)}
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
                        onChange={(e) => setTeam(e.target.value)}
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
                <Link to='/verify-registration'>
                    <Button fullWidth variant="contained" className='mt-4' id='submitBtn' onClick={handle} disabled={ firstName === "" || lastName === "" || stack === "" || team === ""}>Submit</Button>
                </Link>
            </Paper>
        </div>
    )
}

export default Form
