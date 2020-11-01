import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import { withRouter } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PostAddIcon from "@material-ui/icons/PostAdd";
import CloseIcon from '@material-ui/icons/Close';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // [theme.breakpoints.down("xs")]:{
    flexGrow: 1,
    // }
  },
  headerOption: {
    color: "white"
  },
  closeIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(4, 10, 0, 0),
  },
  link: {
    textDecoration: "none"
  },
  listItem: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "flex-start",
    width: "300px",

    // padding: theme.spacing(20, '70px', 0, 20),
  }
}));

const Header = (props) => {
  // console.log(props)
  const { history } = props;
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));


  const handleMenu = (event) => {
    setDrawerOpen(true)
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleMobileMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Website
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton edge="start" onClick={handleMenu} className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <Drawer open={drawerOpen}  >
                  <div className={classes.closeIcon}>
                    <CloseIcon color="primary" onClick={handleDrawerClose} />
                  </div>
                  <List className={classes.listItem}>
                    <Link className={classes.link} to="/">
                      <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                          <PlaylistAddCheckIcon style={{ color: "#66ccff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItem>
                    </Link>

                    <Link className={classes.link} to="/about">
                      <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                          <RecentActorsIcon style={{ color: "#66ff99" }} />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                      </ListItem>
                    </Link>

                    <Link className={classes.link} to="/contact">
                      <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                          <PostAddIcon style={{ color: "#ffb399" }} />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                      </ListItem>
                    </Link>

                    <Link className={classes.link} to="/login">
                      <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                          <PlaylistAddCheckIcon style={{ color: "#66ccff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                      </ListItem>
                    </Link>

                    <Link className={classes.link} to="/register">
                      <ListItem button onClick={handleDrawerClose}>
                        <ListItemIcon>
                          <PlaylistAddCheckIcon style={{ color: "#66ccff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                      </ListItem>
                    </Link>

                  </List>
                </Drawer>

              </>
            ) : (
                <div className={classes.headerOption}>

                  <Button onClick={() => handleMobileMenuClick("/")} >HOME</Button>
                  <Button onClick={() => handleMobileMenuClick("/about")} >ABOUT</Button>
                  <Button onClick={() => handleMobileMenuClick("/contact")} >CONTACT</Button>
                  <Button onClick={() => handleMobileMenuClick("/login")} >Sign In</Button>
                  <Button onClick={() => handleMobileMenuClick("/register")} >Sign Up</Button>
                </div>

              )
            }

          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header)
