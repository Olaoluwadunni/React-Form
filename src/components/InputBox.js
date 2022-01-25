import { TextField } from '@mui/material';

const InputBox = (props) => {
    return (
        <>
            <TextField
                fullWidth
                id="demo-helper-text-misaligned"
                label={props.label}
                value={props.value}
                className={`mb-4 ${props.textId}`} 
                required
            />
        </>
    )
}

export default InputBox
