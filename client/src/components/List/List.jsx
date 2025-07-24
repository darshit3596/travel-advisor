import React from "react";
import { useState } from "react";
import { CircularProgress, setRef } from "@mui/material";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { useEffect,createRef } from "react";

 
const List = ({places,loding,Type,rating,setType,setrating,childclick}) => {

 
const [elRefs,setElRefs] = useState([]);

useEffect(() => { const refs = Array(places?.length).fill().map((_,i) => elRefs[i] || createRef());  
   setElRefs(refs);
}, [places]);
console.log(places);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" margin={{}}>
          Restaurants,Hotels, & Attraction Around You
        </Typography>

        {loding?(
            <div style={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',}} >
               <CircularProgress size="5rem" />
            </div>
        ):(
          <>
         
           <InputLabel id="type" >Type</InputLabel>
           <FormControl style={{ minWidth: 120, marginBottom: "10px" }}>
             <Select id="type" value={Type} onChange={(e) => setType(e.target.value)}>
                 <MenuItem value="restaurants">Restaurants</MenuItem>
                 <MenuItem value="hotels">Hotels</MenuItem>
                 <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
           </FormControl>

           
           <InputLabel id="type" >Rating</InputLabel>
           <FormControl style={{ minWidth: 120, marginBottom: "30px" ,marginLeft:"0px"}}>
             <Select id="rating" value={rating} onChange={(e) => setrating(e.target.value)}>
                 <MenuItem value="0">All</MenuItem>
                 <MenuItem value="3">Above 3.0</MenuItem>
                 <MenuItem value="4">Above 4.0</MenuItem>
                 <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
           </FormControl> 
        
        
        <Grid container spacing={3} style={{ height: "75vh", overflow: "auto",width:"600px" }}>
          {places?.map((place, i) => (
            <Grid ref={elRefs[i]} item key={i} xs={12}>
              <PlaceDetails 
                  places={place}
                  selected={Number(childclick)===i}
                  refprop={elRefs[i]}
              />
            </Grid>
          ))}
        </Grid>
      </>
      )}
      </div>
    </>
  );
};

export default List;
