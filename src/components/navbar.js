import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar(props) {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alexandre Pokhodoun
          </Typography>
          <Button href="https://github.com/sashalex007" target="_blank" color="inherit">Github</Button>
          <Button href="https://www.linkedin.com/in/alexandrepokhodoun/" target="_blank" color="inherit">LinkedIn</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
