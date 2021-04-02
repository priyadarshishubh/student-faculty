import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink
// } from './NavbarElements';
import {
  AppBar,
  Link,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Grid,
  Typography,
  Card,
  CardContent,
  Badge,
} from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import useStyles from "./styles";
import Box from "@material-ui/core/Box";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            Student-Faculty Consultation Portal
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <Typography>Faculty Information</Typography>
          </div>
          <div className={classes.button}>
            <Typography>My Consultations</Typography>
          </div>
          <div className={classes.button}>
            <Typography>Feed</Typography>
          </div>
          <div className={classes.button}>
            <Typography>Logout</Typography>
          </div>
        </Toolbar>
      </AppBar>

      <Grid container justify="center" spacing={2}>
        <Grid item xs={12}>
          <Box mt={9} ml={6} mr={6}>
            <Card>
              <CardContent>
                <Grid container justify="space-evenly">
                  <Grid item xs={2}>
                    <Link to="/login">
                      <Typography variant="h6">
                        Prof. Chitranjan Hota
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">CS Department</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">H100</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container justify="space-around" spacing={1}>
                      <Grid item xs={2}>
                        <Brightness1Icon
                          fontSize="small"
                          style={{ color: "#008000" }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h6">Available</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography color="primary" variant="h6">
                      Request Consultation
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={1} ml={6} mr={6}>
            <Card>
              <CardContent>
                <Grid container justify="space-evenly">
                  <Grid item xs={2}>
                    <Link to="/login">
                      <Typography variant="h6">
                        Prof. Chitranjan Hota
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">CS Department</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">H100</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container justify="space-around" spacing={1}>
                      <Grid item xs={2}>
                        <Brightness1Icon
                          fontSize="small"
                          style={{ color: "#008000" }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h6">Available</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Link to="/login">
                      <Typography color="primary" variant="h6">
                        Request Consultation
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mt={1} ml={6} mr={6}>
            <Card>
              <CardContent>
                <Grid container justify="space-evenly">
                  <Grid item xs={2}>
                    <Link to="/login">
                      <Typography variant="h6">
                        Prof. Chitranjan Hota
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">CS Department</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="h6">H100</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Grid container justify="space-around" spacing={1}>
                      <Grid item xs={2}>
                        <Brightness1Icon
                          fontSize="small"
                          style={{ color: "#008000" }}
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <Typography variant="h6">Available</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={2}>
                    <Link to="/login">
                      <Typography color="primary" variant="h6">
                        Request Consultation
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Box mt={1} ml={6} mr={6}>
          <Card>
            <CardContent>
              <Grid container justify="space-evenly">
                <Grid item xs={2}>
                  <Link to="/login">
                    <Typography variant="h6">Prof. Chitranjan Hota</Typography>
                  </Link>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">CS Department</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="h6">H100</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Grid container justify="space-around" spacing={1}>
                    <Grid item xs={2}>
                      <Brightness1Icon
                        fontSize="small"
                        style={{ color: "#FF3D00" }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="h6">Unvailable</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2}>
                  <Link to="/login">
                    <Typography color="primary" variant="h6">
                      Request Consultation
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default Navbar;
