import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {RootState} from "../../store";
import { AComplete } from '../autocomplete/AComplete';
import AddProductForm from "./AddProductForm";


const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts.post)


    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            {/*<p className="post-content">{post.content.substring(0, 100)}</p>*/}
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList;