import axios from "axios"
import { secureData } from "../Constraints";
export const getNews = (category)=>async (dispatch)=>{
    try{
        dispatch({type:"getNewsRequest"});
        const {
          data: {articles},
        } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${secureData.apiKey}`,
        );
        dispatch({type: 'getNewsSuccess',payload:articles});
    }catch(err){
        console.log("error",err);
        dispatch({type:"getNewsFailure",payload:err.response.data});
    }
}