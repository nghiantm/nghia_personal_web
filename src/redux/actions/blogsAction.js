import { getAllPost } from "../../api/apiClient";
import { 
    getBlogsFailure, 
    getBlogsStart, 
    getBlogsSuccess, 
    getPortfolioFailure, 
    getPortfolioStart, 
    getPortfolioSuccess 
} from "../slices/blogsSlice"

export const getBlogsAsync = () => async (dispatch) => {
    try {
        dispatch(getBlogsStart());
        const data = await getAllPost();
        dispatch(getBlogsSuccess(data));
    } catch (err) {
        dispatch(getBlogsFailure(err.message));
    }
};

export const getPortfolioAsync = () => async (dispatch) => {
    try {
        dispatch(getPortfolioStart());
        const data = await getAllPost();
        dispatch(getPortfolioSuccess(data[0].content));
    } catch (err) {
        dispatch(getPortfolioFailure(err.message));
    }
};