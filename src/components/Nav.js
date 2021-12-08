import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LegalAidLogo1 from "../LegalAidLogo1.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    background: "#205A3E",
  };

  function refreshPage() {
    window.location.reload(false);
  }

  //evt handler for when a new filter is selected from the form in this component
  const handleChange = (event) => {
    //setting the impact (displays the filter selected) to the selected field in the filter
    props.setSelectedCounty(event.target.value);
    props.setCountyStoryDisplay(true);
    props.setFeaturedDisplay(false);
    props.setNavCountySelect(event.target.value)
  };

  return (
    <AppBar style={{ backgroundColor: "#205A3E" }} position="static">
      <Toolbar>
        <img src={LegalAidLogo1} alt="logo" width="100" />

        <div id="nav-typography">
          <Typography variant="h4" className={classes.title}>
            Health Care Debt in Vermont
          </Typography>
          <Typography variant="h6" className={classes.subTitle}>
            Real People - Real Stories
          </Typography>
        </div>
        <div id="nav-buttons">
        <Button color="inherit" onClick={refreshPage}>
          Home
        </Button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="select-county" style={{color: "white"}}>Select A County</InputLabel>
          <Select
            value={props.navCountySelect}
            onChange={handleChange}
            label="Nav-County-Set"
            style={{backgroundColor: "white", color: "#5a203c"}}
          >
            <MenuItem value="Addison">Addison</MenuItem>
            <MenuItem value="Bennington">Bennington</MenuItem>
            <MenuItem value="Caledonia">Caledonia</MenuItem>
            <MenuItem value="Chittenden">Chittenden</MenuItem>
            <MenuItem value="Essex">Essex</MenuItem>
            <MenuItem value="Franklin">Franklin</MenuItem>
            <MenuItem value="Grand Isle">Grand Isle</MenuItem>
            <MenuItem value="Lamoille">Lamoille</MenuItem>
            <MenuItem value="Orange">Orange</MenuItem>
            <MenuItem value="Orleans">Orleans</MenuItem>
            <MenuItem value="Rutland">Rutland</MenuItem>
            <MenuItem value="Washington">Washington</MenuItem>
            <MenuItem value="Windham">Windham</MenuItem>
            <MenuItem value="Windsor">Windsor</MenuItem>
          </Select>
        </FormControl>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
