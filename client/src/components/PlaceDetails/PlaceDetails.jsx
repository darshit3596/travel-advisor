import React from "react";

import Box from '@mui/material/Box';
import { Typography,Button,Card,CardMedia,CardContent,CardActions,Chip } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import Rating from '@mui/material/Rating';


const PlaceDetails = ({places,selected,refprop}) => {


 if(selected) refprop?.current?.scrollIntoView({behavior: "smooth",block:"start"})

  return(
  <>
{/* https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80 */}
    
    <Card elevation={6} >
       <CardMedia
         style={{height:350}}
         image={places.photo? places.photo.images.large.url : "Not found" }
         title={places.name}
        />
        
       <CardContent>

           <Typography gutterBottom variant="h5" >{places.name}</Typography>
           <Typography gutterBottom variant="h6" >{places.open_now_text}</Typography>


           <Box display="flex" justifyContent="space-between">
             <Rating size="small" value={Number(places.rating)} readOnly/>
             <Typography gutterBottom variant="subtitle1" >out of {places.num_reviews} reviews </Typography>
           </Box>

           <Box display="flex" justifyContent="space-between">
             <Typography  variant="subtitle1" >Price</Typography>
             <Typography gutterBottom variant="subtitle1" >{places.price_level}</Typography>
           </Box>

           <Box display="flex" justifyContent="space-between">
             <Typography variant="subtitle1">Ranking</Typography>
             <Typography gutterBottom variant="subtitle1" >{places.ranking}</Typography>
           </Box>

           {/* <Chip size="small" label="Pizza" style={{margin: '5px 5px 5px 0'}} />   */}
          
           {/* {places?.cuisine?.map((name)=(
            <Chip size="small" key={name} label={name} style={{margin: '5px 5px 5px 0'}} />
           ))}       
  */}
  
            <Typography gutterBottom variant="subtitle2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',}} >
              <LocationOnIcon/> {places.address}
            </Typography>

            <Typography gutterBottom variant="subtitle2" color="textSecondary" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} >
               <PhoneIcon/> {places.phone}
            </Typography>

           <CardActions>
              <Button size="small" color="primary" onClick={()=>window.open(places.web_url,'_blank')}  >
                 Trip Advicer
              </Button>
              <Button size="small" color="primary" onClick={()=>window.open(places.website,'_blank')}  >
                Website
              </Button>
           </CardActions>
       

       </CardContent>
    </Card>  
  </>
  );
};

export default PlaceDetails;







