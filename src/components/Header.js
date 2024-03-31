import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';

const Container=styled(AppBar)`background:#060606;

`
export default function Header() {
  return (
    <div>
      <Container position='static'>
        <Toolbar>
            <p>Online Code Editor</p>


        </Toolbar>
      </Container>
    </div>
  )
}
