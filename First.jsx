import { Typography,TextField } from "@mui/material";

const First = () => {
  return (
    <div>
    
    <h1>Mariya Nixon</h1>
    <input placeholder='Name'></input>
    <br></br>
    <input placeholder='Password'></input>
    <br></br>
    <button>Submit</button>
    <br></br>

    <Typography variant = 'h1'>Mariya</Typography>
    
    
    
    
    <br></br>
    
    <TextField variant='outlined' label='Name'></TextField>
    </div>
  );
}

export default First