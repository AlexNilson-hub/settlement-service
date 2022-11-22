// import {NextPage} from 'next'
import {IProducts} from "../../types/products";
import {AProducts} from "../../array-data/ArrayData"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ProductItem from "../../components/calculation-tables/ProductItem"



const ProductList = ({_id, name, price, text, photo}: IProducts) => {
    return(
        <Grid container >
            <Box p={2} sx={{display: 'flex', justifyContent: 'center', alignSelf : 'center', height: 300}}>
                 {AProducts.map(props =>
                     <ProductItem
                         key={props._id}
                         _id={props._id}
                         name={props.name}
                         price={props.price}
                         text={props.text}
                         photo={props.photo}
                     />
                 )}
            </Box>
        </Grid>
    );
}
export default ProductList;