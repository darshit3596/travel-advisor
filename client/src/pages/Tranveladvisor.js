import React from "react";

import Map from "../components/Map/Map";
import { getplacedata } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";

const List = React.lazy(() => import("../components/List/List"));
const Header = React.lazy(() => import("../components/Header/Header"));

const Traveladvisor =()=>{

  //place and setplace starting empty array
  const [places, setplaces] = useState([]);

  //filter places restaurants , hotels ,and attraction
  const [filterplaces,setfilterplaces] =  useState([]);
 
  //for latitude and longitude
  const [Cordinater, setCordinater] = useState({});
  const [Bounds, setBounds] = useState({ lat: 0, lng: 0 });

  // search in list for particuler card 
  const [childclick, setchildclick] = useState(null);

  //for loading 
  const [loding, setloding] = useState(false);

  //for type filter
  const [Type, setType] = useState('restaurants');
  //for rating filter
  const [rating, setrating] = useState('');

 //get lat and lng for cuurent location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        setCordinater({ lat: latitude, lng: longitude });
      }
    );
  }, []); 


// for rating filter
  useEffect(() => {
    const filterplace = places.filter((place)=>place.rating > rating);
    setfilterplaces(filterplace);
  }, [rating]);


  //for api data and cordinater,Bounds
  useEffect(() => {
    setloding(true);
    getplacedata(Type,Bounds.sw, Bounds.ne).then((data) => {
      // console.log(data);
      setplaces(data);
      console.log(places);
      setfilterplaces([]);
      setloding(false);
    }); 
  }, [Cordinater, Bounds]);


  return (
    <>

      <CssBaseline />
      {/* <Header /> */}

      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>

          <List
            places={filterplaces.length ? filterplaces: places}
            childclick={childclick}
            loding={loding}
            Type={Type}
            setType={setType}
            rating={rating}
            setrating={setrating}
          />

        </Grid>

        <Grid item xs={12} md={8}>

          <Map
            setBounds={setBounds}
            setCordinater={setCordinater}
            Cordinater={Cordinater}
            Bounds={Bounds}
            places={filterplaces.length ? filterplaces: places}
            setchildclick={setchildclick}
          />
          
        </Grid>
      </Grid>
    </>
  );
};

export default Traveladvisor;