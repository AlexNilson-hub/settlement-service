import type {PropsWithChildren} from 'react'
import Navbar from "../components/Navbar";
import {Box, Container} from "@mui/material";


const MainLayout = ({children}: PropsWithChildren) => {
    return (
        <>
            <Navbar/>
            <div>
                <Box/>
                {children}
            </div>
        </>
    )
}


export default MainLayout;