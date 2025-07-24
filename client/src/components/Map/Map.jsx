import React from "react";
import GoogleMapReact from "google-map-react";
import { Rating, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Paper from "@mui/material/Paper";
import mapStyles from "./mapStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Map = ({ Cordinater, setCordinater, setBounds, places,setchildclick}) => {
  
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
     <>
      
      <div style={{ height: "90vh", width: "600px", margin: "20px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAH_iEsi4Ir2wGeXSWaVWUizZ9sK064gl8"}}
          defaultCenter={Cordinater}
          center={Cordinater}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{disableDefaultUI:true,zoomControl:true,styles:mapStyles}}
          onChange={(e) => {
            setCordinater({ lat: e.center.lat, lng: e.center.lng });
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={(child)=>setchildclick(child)}               
        > 
        

          {places?.map((place, i) => (
            <div style={{position: "absolute",transform: "translate(-50%, -50%)",zIndex: 1,"&:hover": { zIndex: 2 },}}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              
              {
                   !isDesktop ? (
                    <LocationOnIcon color="primary" fontSize="large" />
                ) 
                :
                (
                  <Paper elevation={3} style={{padding: "10px",display: "flex", flexDirection: "column",justifyContent: "center",width: "100px",}}>
                     <Typography variant="subtitle2" gutterBottom>
                       {place.name}
                     </Typography>
                    
                    <img  style={{ cursor: "pointer" }}src={place.photo? place.photo.images.large.url: "://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"}
                     alt={place.name}
                     />
                     <Rating size="small" value={Number(place.rating)} readOnly/>
                  </Paper>
                 )
              }

            </div>
          ))}

        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;

// const handleMapChange = ( center ) => {
//   console.log(center);
//   setCordinater({ lat: center.lat, lng: center.lng });
//   console.log(Cordinater);
// };
