import React from 'react'
import { Link } from 'react-router-dom'

const NewPost = ({ title, setTitle, body, setBody, handleSubmit}) => {
    return (
        <div className='post-template-box'>
            <form onSubmit={(e)=> e.preventDefault()}>
                <p>Title :</p>
                <input 
                    className='title-input-box'
                    type="text" 
                    required
                    placeholder=''
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                <p>Post :</p>
                <textarea 
                    className='post-input-box'
                    type="text" 
                    required
                    placeholder=''
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    />
                                    
                <button className='submit-button' onClick={handleSubmit}>
                    <Link className='link-item' to='http://Manabe7.github.io/react-router-practice-blogposts'>
                        Submit
                    </Link>
                </button>
            </form>
        </div>
    )
}

export default NewPost
