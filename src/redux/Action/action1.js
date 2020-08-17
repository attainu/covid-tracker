import { sortData } from "../../util";
import Reducer1 from "../Reducers/reducer1";

export const firstdata =()=> async dispatch => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        let sortedData = sortData(data)
        console.log(sortedData)
        dispatch({type:"SET_ALL_COUNTRY",payload:sortedData,payload2:data})
       
        
      });
  }


export const  firstdatallCountries=() => async (dispatch,State) => {
    const code=State().countrydata.countrycode
    let url = code === "worldwide" ? "https://disease.sh/v3/covid-19/all" :
      "https://disease.sh/v3/covid-19/countries/"+code
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type:"SET_CURRENT_COUNTRY",payload:data})
        console.log(data)
      });
  }  

export const update=(value,map)=> dispatch => {
    dispatch({type:"UPDATE",payload:value,payload2:map});
   
   
}
export const news=()=>async (dispatch) => {
    console.log("news")
    await fetch("https://newsapi.org/v2/everything?q=coronavirus%20corona%20covid-19%20in%20english&from=2020-08-16&sortBy=publishedAt&apiKey=c16df77238224768a3852f5f547d793d&pageSize=100&page=1")
      .then((response) => response.json())
      .then((data) => {
        
       
        dispatch({type:"NEWS",payload9:data.articles.slice(0,6)});
       
        
      });
   
   
}
