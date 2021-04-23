import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import axios from '../../services/axios';

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResources = async () => {
    setLoading(true);
    const res = await axios.get('/link/view/all');
    setLoading(false);
    setResources(res.data.data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  if (loading) {
    return (
      <p>Loading ...</p>
    );
  }

  const deleteLink = async (id) => {
    try {
      setLoading(true);
      const delLink = await axios.delete(`/link/delete/${id}`);
      const { message, status } = delLink.data;
      if (status === '200') { alert.success(message); }
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div>
      {resources.map((item) => (
        <div key={item.id}>
          <ul>
            <li>{item.id}</li>
            <li>{item.title}</li>
            <hr />
            <li>{item.link}</li>
          </ul>
          <button
            type="submit"
            aria-label="delete"
            onClick={() => {
              const r = window.confirm('Do you really want to delete this link?');
              if (r === true) deleteLink(item.id);
            }}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
}
