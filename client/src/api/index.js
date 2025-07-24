import axios from "axios";
// const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getplacedata = async (Type,sw,ne) => {
  try {          
     const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${Type}/list-in-boundary`,
      {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '0180479dc8msh2152902878d66c5p16fc9cjsn2bf6e3afc739',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
     });

    return  data;

  } catch (error) {
    console.log(error);
  }
};


