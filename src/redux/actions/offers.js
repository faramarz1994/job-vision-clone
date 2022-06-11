import { toast } from "react-toastify";
import { offersListForInfo } from "../../constants/offerListForInfo";
import { offersList } from "../../constants/OffersList";

const offerActions = {
    getOffersList: (pageNum) => dispatch => {

        try {
            const data = offersList.splice(pageNum * 20, pageNum * 20 + 20);
            dispatch({type: 'GET_OFFER_LIST', data})
        } catch (error) {
            toast.error('مشکلی پیش آمده است')
        }
    },
    setOfferInfo: (id) => dispatch => {
        const data = offersListForInfo.find(itm => itm.id == id);
        dispatch({type: 'SET_OFFER_INFO', data})
    },
};
   
export default offerActions;
   