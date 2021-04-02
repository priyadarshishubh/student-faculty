import React, { Component } from 'react'
import axios from 'axios'
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

class Counter extends Component {
    

    render() {
        
        return (
            
            <div>
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
                            <Link to ="/RequestConsultation" href="RequestConsultation">
                            <Typography color="primary" variant="h6"  >
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
                            <Link to ="/RequestConsultation" href="RequestConsultation">
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
                            <Link to ="/RequestConsultation" href="RequestConsultation">
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
                            <Link to ="/RequestConsultation" href="RequestConsultation">
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
            {/* <tr>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Consultation Scheduling</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Prof</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Department</h5></a></th>
                    <th><a href="#"><h5 style={{color: 'rgb(60, 60, 255)'}}>Dep. code</h5></a></th>
                    </tr>
                    <br/><br/>
                    <label for="ime">Time:</label>
                    <input type="time" value="time" name="time" />
                    <br/><br/>
                    <label for="date">Date:</label>
                    <input type="date" value="date" name="date" />
                    <br/><br/>
                    <div className="form-floating">
                    <textarea className="form-control" placeholder="Enter the purpose of meeting" id="floatingTextarea"></textarea>
                    <br/>
                    </div>
                    <button className="btn btn-primary">Submit</button> */}
            </div>
        )
    }
}

export default Counter
