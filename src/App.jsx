import { useState, useEffect, useHistory } from 'react';
import About from './About';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import api from './api/posts';


function App() {
  const [item, setItem] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState('');
  const [editState, setEditState] = useState(false);
  
  useEffect(() => {
    /* axios.get('http://localhost:3500/item')
      .then((response) => setItem(response.data))
      .catch((error) => setError(error.message)); */

      const fetchApi = async () => {
        try {
          const response = await api.get('/item');
          setItem(response.data);
          
        } catch (err) {
            if(err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
            } else {
              console.log(`Error : ${err.message}`);
            }
        } 
      }
      fetchApi();
  }, []);

  console.log(item);

  useEffect(()=> {
    const filterResults = item.filter((item)=> 
      ((item.body).toLowerCase()).includes(search.toLowerCase()) || ((item.title).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filterResults.reverse());
  },[item, search]);

  const addItem = async (title, body) => {
    const newID = item.length? Number(item[item.length-1].id)+1: 1;
    const toStringNewID = newID.toString();
    const newItem = {id: toStringNewID , title, datetime: Date(), body, editState};

    try {
      const  response = await api.post('/item', newItem);
      const newListItem = [...item, response.data];
      setItem(newListItem);
    }catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' || body === '') {
      alert('input field is require!')
    }else {
      addItem(title, body);
      setTitle('');
      setBody('');
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`/item/${id}`);
      const newList = item.filter(item => item.id !== id );
      setItem(newList);
    }catch (err) {
      console.log(`Error : ${err.message}`);
    }
    console.log(newList);
  }

  const handleEdit = (id) => {
    const post = item.map(item => item.id === id ? { ...item, editState : !item.editState } : item);
    setEditState(true);
    setItem(post)
  }

  const updatePost = (title, body, id) => {
    const newItem = {id, title, datetime: Date(), body, editStatet: !editState};
    return  newItem;
  }

  const submitEdit = async (id) => {
    if (title === '' || body === '') {
      alert('input field is require!')
    }else {
      setTitle('');
      setBody('');
      try {
        const  response = await api.put(`/item/${id}`, updatePost(title, body, id));
        const newList = item.filter(item => item.id !== id );
        const newListItem = [...newList, response.data];
        setItem(newListItem);
        setEditState(false);
      }catch (err) {
        console.log(`Error : ${err.message}`);
      }
    }
  }


  const discardEdit = (id) => {
    const post = item.map(item => item.id === id ? { ...item, editState : !item.editState } : item);
    setEditState(true);
    setItem(post)
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Nav search={search} setSearch={setSearch} />
        <main>
          <Routes>
              <Route path="/react-router-practice-blogposts" element={
                <Home 
                  item={searchResults}
                  error={error}
                />
                } />
              <Route path="/post" element={
                <NewPost 
                  title={title}
                  setTitle={setTitle}
                  body={body}
                  setBody={setBody}
                  handleSubmit={handleSubmit}
                />
              } />
              <Route path="/post/:id" element={
                <PostPage 
                  item={item}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  editState={editState}
                  title={title}
                  setTitle={setTitle}
                  body={body}
                  setBody={setBody}
                  handleSubmit={handleSubmit}
                  submitEdit={submitEdit}
                  discardEdit={discardEdit}
                />
                } />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<Missing />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
