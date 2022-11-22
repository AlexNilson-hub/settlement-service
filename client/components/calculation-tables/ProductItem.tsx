import {NextPage} from 'next'
import {IProducts} from "../../types/products"
import Card from "@mui/material/Card"
// import styles from "../../styles/MainTable.module.scss"
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import {CardActionArea} from "@mui/material";



const ProductItem: NextPage<IProducts> = ({_id, name, text, price, photo}) => {
    return (
        <Box sx={{height: 300, display: 'flex', justifyContent: 'center', alignSelf : 'center'}}>
        <Card elevation={0} sx={{height: 300, width: '70%', display: 'flex', justifyContent: 'center', align: 'center'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={photo}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card></Box>
    );
};

export default ProductItem;
