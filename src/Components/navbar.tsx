import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Features', 'Pricing', 'Blogs', 'AboutUs', 'Contact'];
const navIds: string[] = ['features', 'pricing', 'blogs', 'aboutus', 'contact'];

export default function DrawerAppBar(props: Props) {
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    // Scroll to section by id
    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src="/logo.png" alt="Logo" className='w-10 h-10 drop-shadow-md drop-shadow-[#3FA11B] mx-auto' />
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, idx) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavClick(navIds[idx])}>
                            <ListItemText primary={
                                <Typography sx={{ fontSize: '14px' }}>
                                    {item}
                                </Typography>
                            } />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar component="nav" className="max-w-9xl mx-auto px-0 md:px-20 bg-[var(--blackColor)]! ">
                <Toolbar>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, }}
                    >
                        <img src="/logo.png" alt="Logo" className='w-10 h-10 drop-shadow-md drop-shadow-[#3FA11B]' />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, idx) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={() => handleNavClick(navIds[idx])}>
                                <Typography sx={{ fontSize: '14px' }} className=' capitalize! hover:text-[var(--darkGreenColor)] duration-300 mx-3! '>
                                    {item}
                                </Typography>
                            </Button>
                        ))}
                        <Button variant="outlined" className='rounded-full! border-white! hover:border-[var(--darkGreenColor)]! hover:bg-[var(--darkGreenColor)]!'>
                            <Typography sx={{ fontSize: '14px' }} className='text-white capitalize! duration-300!'>
                                Login
                            </Typography>
                        </Button>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}