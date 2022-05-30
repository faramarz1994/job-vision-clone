
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
};

export default publicApi;
