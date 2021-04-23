import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from '../../services/axios';

export default function AddResource() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [link, setLink] = useState('');

  function Load() {
    return (
      <p>Loading ...</p>
    );
  }

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const userData = await axios.post('/link/add',
        {
          title, author, comment, tags, category, link,
        });
      console.log(userData);
      const { status } = userData.data;
      if (status === 201) {
        history.push('/resources');
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Load />}
      <form onSubmit={handleSubmit} align="center">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={comment}
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={tags}
          placeholder="Tags"
          onChange={(e) => setTags(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={link}
          placeholder="Link"
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <br />
        <input type="submit" value="Add" />
        <Link to={{ pathname: '/' }}>
          <h5 align="center"> Go Home.</h5>
        </Link>
      </form>
    </>
  );
}
