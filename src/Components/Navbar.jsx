import React, {useState} from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, useMediaQuery  } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles'
function Navbar() {

 const [open, setOpen] = useState(false);
 const Theme = useTheme();
 const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
 const MenuItems = ["About", "Services","Projects","Contact" ];

  return (
    <>
      <AppBar elevation={0} className='Navbar' position='static' sx={{backgroundColor:"white",color:"black"}} >
        <Toolbar>
            {IsMobile ? (
                <div>
                    <IconButton color='inherit' onClick={()=>setOpen(true)}>
                        <MenuIcon/>
                    </IconButton>
                </div>
            ) : (

                <>
                 <Typography sx={{flexGrow:1}}>
                    <img className='img-size'  src='/logo.png' alt="Logo"/>
                 </Typography>

                 {MenuItems.map((item)=>(
                    <Button color='inherit' key={item}>
                        {item}
                    </Button>
                 ))
                 }

                <Button variant='outline' sx={{
                    backgroundColor:"white",
                    color:"#2AB691",
                    borderRadius:"10px",
                    "&:hover":{
                        backgroundColor:"#2AB666",
                        color:"white"
                    }
                }}>
                    Sign Up
                </Button> 
                </>
            )
        }
        </Toolbar>
      </AppBar>

      <Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>
        <List>
            {MenuItems.map((item)=>(
                <ListItem Button key={item} onClick={()=> setOpen(false)}>
                    <ListItemText>
                        {item}
                    </ListItemText>
                </ListItem>
            ))
            }

            <ListItem button > 
                <ListItemText primary="Sign Up"/>
            </ListItem>
        </List>
      </Drawer>




    </>
  )
}

export default Navbar
