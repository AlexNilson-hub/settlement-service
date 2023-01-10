import type {PropsWithChildren} from 'react'
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";


const MainLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Navbar/>
            <Box>
                {children}
            </Box>
        </>
    )
}

export default MainLayout;