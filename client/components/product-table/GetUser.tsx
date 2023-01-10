import { useEffect, useState } from 'react'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { contacts: data },
    }
}

const GetUser = ({ contacts }) => {

    // @ts-ignore
    return (
        <>
            <table>
                <tr>
                    <th className='topnav'>Users!!!</th>
                </tr>
                {contacts && contacts.map(( {id, name, email}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                ))}
            </table>

            {/*<br/>*/}

            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <th className='topnav'>Rendered By Next JS | Server side rendered</th>*/}
            {/*    </tr>*/}
            {/*    {users?.map((user, index) => (*/}
            {/*        <tr>*/}
            {/*            <td>{user.name}</td>*/}
            {/*            <td>{user.username}</td>*/}
            {/*            <td>{user.email}</td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*</table>*/}
        </>
    )
}
export default GetUser;
// export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
//     console.log('Logging : '+res);
//     const data = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await data.json();
//     return { props: { users } }
// }


// const[reactData, setReactData] = useState([]);
// useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => {
//             setReactData(data);
//         }).catch((e) => {console.log(e)});
// }, []);