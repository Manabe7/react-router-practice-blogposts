import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({item, error}) => {
    if (error) return <p>Error: {error}</p>;
    if (!item) return <p>Loading...</p>;
    return (
        <div className='show-list-item'>
            <ul>
                {item.map((item) => (
                    <li className='list-item' key={item.id}>
                        <p className='title'>{item.title}</p>
                        <p className='date-time'>{item.datetime}</p>
                        <Link className='link-item' to={`/Post/${item.id}`} >
                            <p className='sample-body'>{item.body.slice(0, 50)}...</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
