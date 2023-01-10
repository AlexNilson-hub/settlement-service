import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import {
    AParameters,
    AParameters2,
    AParameters3,
    AParameters4,
    AParameters5,
    AParameters6,
    AParameters7,
    AParameters8,
    AParameters9,
    AParameters10,
    AParameters11,
    AParameters12,
    AParameters13,
    AParameters14,
    AParameters15,
    AParameters16,
    AParameters17,
}
    from "../../array-data/ArrayData"
import {useEffect, useState} from "react";
import {Button, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import ProductList from "../calculation-tables/ProductList";
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import {getProducts} from "../../store/storeSlice/productsSlice";
import GetUser from "../../components/product-table/GetUser"

// Поставить данные с сервера бд вместо массива
// const parametersOptions = AParameters.map((val, index) => ({
//     id: index + 1,
//     label: val
// }))
// const labels = ALabelInput.map((val) => ({
//     id:val._id,
//     label: val.label,
// }))
// function joinValues(){
//     let value3 = value3;
//     let value2 = value2;
//     let value = value2 + value3
// }
// export const getServerSideProps = async (ctx) => {
//
//     // ctx is the context object which contains the request,
//     // response and props passed to the page.
//
//     // fetching data from jsonplaceholder.
//     const res = await fetch(
//         'https://jsonplaceholder.typicode.com/posts');
//     let allPosts = await res.json();
//
//     // Sending fetched data to the page component via props.
//     return {
//         props: {
//             allPosts: allPosts.map((post) => post.title)
//         }
//     }
// }

const InputComplete = ({users}) => {
    const router = useRouter()
    // const {product, loading} = useSelector((state: RootState ) => state.products)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     // @ts-ignore
    //     dispatch(getProducts())
    //     console.log(dispatch)
    // },[])

    // @ts-ignore
    // const [value, setValue] = useState([])
    // const [hasError, setHasError] = useState(false)
    // useEffect(() => {
    //     fetch("http://rvi.17bit.online:31700/api/types?&json_indent=4&bytarget=unf_product_t&title=1")
    //         .then(response => response.json())
    //         .then(res => setValue(res))
    //     return ({!!value.ok && value.map(res => {
    //         return(
    //             <div key={}>
    //
    //             </div>
    //         )
    //     }
    //     )}
    //
    //     )
    //
    //         }, [])
        // if (props) {
        //     props = JSON.parse(props)
        //     props.forEach(i =>
        //     return result.push(data[key]);
        //
        //         })
        //     )
        // }

            // .then(res => setValue(res))
            // .catch(error => setHasError(true))

    const [value2, setValue2] = useState<string | null>(AParameters2[''])
    const [value3, setValue3] = useState<number | null>(AParameters3[''])
    const [value4, setValue4] = useState<string | null>(AParameters4[''])

    const [value5, setValue5] = useState<number | null>(AParameters5[''])
    const [value6, setValue6] = useState<string | null>(AParameters6[''])
    const [value7, setValue7] = useState<number | null>(AParameters7[''])
    const [value8, setValue8] = useState<string | null>(AParameters8[''])
    const [value9, setValue9] = useState<number | null>(AParameters9[''])
    const [value10, setValue10] = useState<string | null>(AParameters10[''])
    const [value11, setValue11] = useState<number | null>(AParameters11[''])
    const [value12, setValue12] = useState<number | null>(AParameters12[''])
    const [value13, setValue13] = useState<number | null>(AParameters13[''])
    const [value14, setValue14] = useState<number | null>(AParameters14[''])
    const [value15, setValue15] = useState<number | null>(AParameters15[''])
    const [value16, setValue16] = useState<string | null>(AParameters16[''])
    const [value17, setValue17] = useState<string | null>(AParameters17[''])


    // const [params, setParams] = useState<IParameters | null>(AParameters[''])

    // const onChange = (event: any, newValue: []) => setValue(newValue)
    const onChange2 = (event: any, newValue2: string | null) => setValue2(newValue2)
    const onChange3 = (event: any, newValue3: number | null) => setValue3(newValue3)
    const onChange4 = (event: any, newValue4: string | null) => setValue4(newValue4)

    const onChange5 = (event: any, newValue5: number | null) => setValue5(newValue5)
    const onChange6 = (event: any, newValue6: string | null) => setValue6(newValue6)
    const onChange7 = (event: any, newValue7: number | null) => setValue7(newValue7)
    const onChange8 = (event: any, newValue8: string | null) => setValue8(newValue8)
    const onChange9 = (event: any, newValue9: number | null) => setValue9(newValue9)
    const onChange10 = (event: any, newValue10: string | null) => setValue10(newValue10)
    const onChange11 = (event: any, newValue11: number | null) => setValue11(newValue11)
    const onChange12 = (event: any, newValue12: number | null) => setValue12(newValue12)
    const onChange13 = (event: any, newValue13: number | null) => setValue13(newValue13)
    const onChange14 = (event: any, newValue14: number | null) => setValue14(newValue14)
    const onChange15 = (event: any, newValue15: number | null) => setValue15(newValue15)
    const onChange16 = (event: any, newValue16: string | null) => setValue16(newValue16)
    const onChange17 = (event: any, newValue17: string | null) => setValue17(newValue17)

    // const joinValues = () => {
    //     return new Promise((resolve) =>
    //         setTimeout(() => resolve([setValue, setValue2, setValue3, setValue4]), 2000)
    //     );
    //     async function Comments() {
    //         const comments = (await joinValues()) as string[];
    //         return(
    //             <div>
    //                 {comments.map((comments) => (
    //                     <li key={comments}>{comments}</li>
    //                 ))}
    //             </div>
    //         )
    //     }
    // }


    // const onChangeOptions = (event: any, newValue: IParameters | null) => setParams(newValue)
    // Поставить данные с сервера бд вместо массива
    // useEffect(() =>
    //     fetch("https://.............")
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // )
    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await fetch(`http://rvi.17bit.online:31700/api/types?&json_indent=4&bytarget=unf_product_t&title=1`)
    //         const data = await response.json()
    //         setValue(data)
    //     }
    //     getData()
    // }, [])


    // @ts-ignore
    // @ts-ignore
    return (<>
        <Box sx={{flexGrow: 1}}>
            <Grid container rowSpacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            {/*<GetUser />*/}
                            <h1>All Posts</h1>
                            {/*<table>*/}
                            {/*    <tr>*/}
                            {/*        <th className='topnav'>Rendered By Next JS | Server side rendered</th>*/}
                            {/*    </tr>*/}
                            {/*    {props?.map((user, index) => (*/}
                            {/*        <tr>*/}
                            {/*            <td>{user.name}</td>*/}
                            {/*            <td>{user.username}</td>*/}
                            {/*            <td>{user.email}</td>*/}
                            {/*        </tr>*/}
                            {/*    ))}*/}
                            {/*</table>*/}
                            {/*{props.map(product =>*/}
                            {/*    <div>*/}
                            {/*        {product.title}*/}
                            {/*    </div>*/}
                            {/*)}*/}
                            {/*{props.map((post, idx) => (*/}
                            {/*    <div key={idx} >{post.title}</div>))}*/}
                            {/*<Stack spacing={2} mt={2}>*/}
                            {/*    <Autocomplete*/}
                            {/*        disablePortal*/}
                            {/*        id="combo-box-demo"*/}
                            {/*        value={value}*/}
                            {/*        onChange={onChange}*/}
                            {/*        options={AParameters}*/}
                            {/*        sx={{width: 300}}*/}
                            {/*        renderInput={(params) =>*/}
                            {/*            <TextField {...params} label="Выбор типа изделия"/>}*/}
                            {/*    />*/}
                            {/*</Stack>*/}
                        </Item>
                    </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} mt={2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={value2}
                            onChange={onChange2}
                            options={AParameters2}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Тип стали"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={value3}
                            onChange={onChange3}
                            options={AParameters3}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Толщина стали, мм"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={value4}
                            onChange={onChange4}
                            options={AParameters4}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Вид проката"/>}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} mt={2}>
                        <ProductList/>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} mt={2}>
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value5}
                            onChange={onChange5}
                            options={AParameters5}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Сторона А, мм (50-4000)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value6}
                            onChange={onChange6}
                            options={AParameters6}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Класс герметичности"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value7}
                            onChange={onChange7}
                            options={AParameters7}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Сторона В, мм (50-4000)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value8}
                            onChange={onChange8}
                            options={AParameters8}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Окраска"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value9}
                            onChange={onChange9}
                            options={AParameters9}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Диаметр, мм (50-1600)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="10"
                            value={value10}
                            onChange={onChange10}
                            options={AParameters10}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Конец 2"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value11}
                            onChange={onChange11}
                            options={AParameters11}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Длина, мм (0-2500)"/>}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack spacing={2} mt={2}>
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value12}
                            onChange={onChange12}
                            options={AParameters12}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Сторона А1, мм (50-4000)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value13}
                            onChange={onChange13}
                            options={AParameters13}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Угол, градус (1-90)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value14}
                            onChange={onChange14}
                            options={AParameters14}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Сторона В1, мм (50-4000)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value15}
                            onChange={onChange15}
                            options={AParameters15}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Высота врезки, мм (20-500)"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value16}
                            onChange={onChange16}
                            options={AParameters16}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Конец 1"/>}
                        />
                        <Autocomplete
                            disablePortal
                            id="1"
                            value={value17}
                            onChange={onChange17}
                            options={AParameters17}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Конец 3"/>}
                        />
                        <Grid xs={8}>
                            <Button variant='contained' onClick={() => router.push('/user-profile')}>
                                Расчитать изделие
                            </Button>
                        </Grid>
                    </Stack>
                </Grid>
                {/*Поставить данные с сервера бд вместо массива*/}
                {/*<Autocomplete*/}
                {/*    disablePortal*/}
                {/*    id="combo-box-demo"*/}
                {/*    value={params}*/}
                {/*    onChange={onChangeOptions}*/}
                {/*    options={parametersOptions}*/}
                {/*    getOptionLabel={(option) => option.label}*/}
                {/*    sx={{width: 300}}*/}
                {/*    renderInput={(params) => <TextField {...params} label="Parameters"/>}*/}
                {/*/>*/}
                <Grid item xs={4}>
                    <Stack spacing={2} mt={2} sx={{textAlign: 'left'}}>
                        {/*<div>{`Выбор типа изделия: ${value !== null ? `${value}` : 'null'}`}</div>*/}
                        <div>{`Тип стали: ${value2 !== null ? `${value2}` : 'null'}`}</div>
                        <div>{`Толщина стали: ${value3 !== null ? `${value3}` : 'null'}`}</div>
                        <div>{`Вид проката: ${value4 !== null ? `${value4}` : 'null'}`}</div>

                        <div>{`Сторона А, мм (50-4000): ${value5 !== null ? `${value5}` : 'null'}`}</div>
                        <div>{`Класс герметичности: ${value6 !== null ? `${value6}` : 'null'}`}</div>
                        <div>{`Сторона В, мм (50-4000): ${value7 !== null ? `${value7}` : 'null'}`}</div>
                        <div>{`Окраска: ${value8 !== null ? `${value8}` : 'null'}`}</div>
                        <div>{`Диаметр, мм (50-1600): ${value9 !== null ? `${value9}` : 'null'}`}</div>
                        <div>{`Конец 2: ${value10 !== null ? `${value10}` : 'null'}`}</div>
                        <div>{`Длина, мм (0-2500): ${value11 !== null ? `${value11}` : 'null'}`}</div>

                        <div>{`Сторона А1, мм (50-4000): ${value12 !== null ? `${value12}` : 'null'}`}</div>
                        <div>{`Угол, градус (1-90): ${value13 !== null ? `${value13}` : 'null'}`}</div>
                        <div>{`Сторона В1, мм (50-4000): ${value14 !== null ? `${value14}` : 'null'}`}</div>
                        <div>{`Высота врезки, мм (20-500): ${value15 !== null ? `${value15}` : 'null'}`}</div>
                        <div>{`Конец 1: ${value16 !== null ? `${value16}` : 'null'}`}</div>
                        <div>{`Конец 3: ${value17 !== null ? `${value17}` : 'null'}`}</div>
                    </Stack>
                </Grid>
            </Grid>
        </Box></>
    );
}

// export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
//     console.log('Logging : '+res);
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json();
//     return { props: { users } }
// }

// export async function getServerSideProps() {
//     const response = await fetch("http://rvi.17bit.online:31700/api/types?&json_indent=4&bytarget=unf_product_t&title=1")
//     const data = await response.json()
//
//     // if (!product_name) {
//     //     return {
//     //
//     //         },
//     //     }
//     // }
//
//     return {
//         props: {
//             products: data.slice(0, 10),
//         }
//     }
// }

export default InputComplete;

// export async function getServerSideProps(context) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com`)
//     const product_name = await response.json()
//
//     if (!product_name) {
//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         }
//     }
//
//     return {
//         props: {
//             products: product_name,
//         }
//     }
// }