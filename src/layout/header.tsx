import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

type AppBarProps = {
  className?: string
}

function ButtonAppBar(props: AppBarProps) {
  return (
    <div className={props.className}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const StyleBar = styled(ButtonAppBar)`
  color: red;
  h6 {
    flex: 1;
  }
`

export default StyleBar
