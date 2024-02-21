import { getAllPost, getAllPortfolio } from "../../api/apiClient";
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
        const data = await getAllPortfolio();
        dispatch(getPortfolioSuccess(data));
    } catch (err) {
        dispatch(getPortfolioFailure(err.message));
    }
};