//----Necessary imports
import React from "react";
import "../App.css";
import Map from "./Map";
import Footer from "./Footer";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Featured from "./Featured";
import Story from "./Story"

//Home function to render page structural elements
export default function Home() {
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [featuredDisplay, setFeaturedDisplay] = useState(true);
  const [countyStoryDisplay, setCountyStoryDisplay] = useState(false);
  const [selectedCounty, setSelectedCounty] = useState("");

  const GreenTextTypography = withStyles({
    root: {
      color: "#5a203c",
    },
  })(Typography);

  return (
    //React fragment (instead of <div>)
    <>
      <Grid container spacing={2}>
        {featuredDisplay ? <Featured /> : null}
        {countyStoryDisplay ? <Story selectedCounty={selectedCounty} /> : null}
        <Grid item xs={12} sm={6} md={2}>
          <Paper>
            <Map
              center={center}
              setCenter={setCenter}
              zoom={zoom}
              setZoom={setZoom}
              setFeaturedDisplay={setFeaturedDisplay}
              setSelectedCounty={setSelectedCounty}
              setCountyStoryDisplay={setCountyStoryDisplay}
            />
          </Paper>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}