import { Box } from "@mui/material";
import Loading from "react-loading";

const MyLoading = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Loading type="bubbles" height={"10%"} width={"10%"} color="#7F7F7F"/>
        </Box>
    )
}

export default MyLoading;