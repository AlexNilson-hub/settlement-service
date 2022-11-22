import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import InputComplete from "../product-table/InputComplete";



const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);

const MainTable = () => {
    // const [todos, setTodos] = useState([])
    // const [page, setPage] = useState(1)
    // const limit = 1
    //
    // const fetchTodos = (page, limit) => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
    //         .then(response => response.json())
    //         .then(json => setTodos(json))
    // }
    //
    // useEffect(() => {
    //     fetchTodos(page, limit)
    // },[])
    // const dispatch = useDispatch()
    // const titles = useSelector((state: RootState) => state.products.titles)
    // const todos = useSelector((state: RootState) => state.products.todos)

    return (
        <Box sx={{flexGrow: 1, mx: 'auto', p: 1, m: 1,}} >
            <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                    <Item elevation={8}>
                        <Typography sx={{fontSize: 20}} color="text.inline" gutterBottom>
                            Таблица расчетов
                        </Typography>
                        <Typography variant="h5" component="div">
                            И{bull}В{bull}И
                        </Typography>
                    </Item>
                </Grid>
                <Grid mt={2} container rowSpacing={1} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                    <Grid item xs={12}>
                        <Item elevation={8}>
                            <InputComplete />
                        </Item>
                    </Grid>
                    {/*<Grid>*/}
                    {/*    <Item>*/}
                    {/*        <InputComplete />*/}
                    {/*        /!*<AddProductForm />*!/*/}
                    {/*        /!*<PostList />*!/*/}
                    {/*        /!*Вывод пропс: {props.d}*!/*/}
                    {/*    </Item>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
        </Box>
    );
}

export default MainTable;
