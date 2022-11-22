
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from '../../store/productSlice'

export const AddProductForm = () => {
    const [title, setTitle] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)

    const onSavePostClicked = () => {
        if (title) {
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                })
            )

            setTitle('')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <button type="button" onClick={onSavePostClicked}>
                    Save Post
                </button>
            </form>
        </section>
    )
}
export default AddProductForm;