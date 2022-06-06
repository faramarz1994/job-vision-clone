import axios from 'axios';
const publicApi = {
 setLang: (data) => (dispatch) => {
  localStorage.setItem('lang', data);
  dispatch({type: 'SET_LANG', data});
 },
 loadData: () => (dispatch) => {
   if(localStorage.getItem('lang')){
    dispatch({type: 'SET_LANG', data : localStorage.getItem('lang')});
   }
 },
 setHeaderSettings: (data) => (dispatch) =>{
    dispatch({type: 'SET_HEADER_SETTINGS', data});
 },
 getCompanies:  () => async dispatch => {
  //  try {
  //    let res = await axios.get('https://apiemployee.jobvision.ir/api/v1/CompanyList/Chosen');
  //    console.log(res.data)
  //  } catch (error) {
  //    console.log(error)
  //  }
 }
};

export default publicApi;
