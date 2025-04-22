import React from 'react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const PostPage = ({item, handleDelete, handleEdit, submitEdit, discardEdit, title, body, setTitle, setBody}) => {
    const {id} = useParams();
    const post = item.find(p => Number(p.id) === Number(id));
    return (
        <main>
            {post.editState ?
                <>
                <div className='post-template-box'>
                    <form onSubmit={(e)=> e.preventDefault()}>
                        <p>Title :</p>
                        <input 
                            className='title-input-box'
                            type="text" 
                            required
                            placeholder={post.title}
                            value={title}
                            onChange={(e)=> setTitle(e.target.value)}
                            />
                        <p>Post :</p>
                        <textarea 
                            className='post-input-box'
                            type="text" 
                            required
                            placeholder={post.body}
                            value={body}
                            onChange={(e)=> setBody(e.target.value)}
                            />
                        <p className='delete-line'>
                            <button className='Update-button' onClick={() => submitEdit(post.id)}>
                                UpdatePost
                            </button>
                            <button className='Discard-button' onClick={() => discardEdit(post.id)}>
                                <Link className='link-item' to='/react-router-practice-blogposts' >
                                    DiscardUpdate
                                </Link>
                            </button>
                        </p>
                    </form>
                </div>
                </>
                :
                <>
                <form className='posted-form' onSubmit={(e)=> e.preventDefault()}>
                    <p className='title'>{post.title}</p>
                    <p className='date-time'>{post.datetime}</p>
                    <p className='body'>{post.body}</p>
                    <p className='delete-line'>
                        <button className='edit-button' onClick={() =>handleEdit(post.id)}>
                            Edit post
                        </button>
                        <button className='delete-button' onClick={() =>handleDelete(post.id)}>
                            <Link className='link-item' to='/react-router-practice-blogposts' >
                                Delete
                            </Link>
                        </button>
                    </p>
                    </form>
                </>
            }
        </main>

        
    )
}

export default PostPage
