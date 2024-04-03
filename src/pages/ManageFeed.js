import React, { useContext, useState } from 'react';
import { NewsContext } from '../Context';
import '../css/ManageFeed.css';


export const ManageFeed = () => {
  const { newsFeeds, deleteNewsFeed, editNewsFeed} = useContext(NewsContext);
  const [selectedFeed, setSelectedFeed] = useState(null);
  const [editableFeed, setEditableFeed] =useState(null);


  const viewNewsFeed = (selectedFeed) => {
    setSelectedFeed(selectedFeed);
  };

  const handleEditFeed = (feed) => {
    setEditableFeed(feed);
  };

  const handleChange = (e, field) => {
    setEditableFeed({
      ...editableFeed,
      [field]: e.target.value
    });
  };

  const handleSaveFeed = () => {
    editNewsFeed(editableFeed.id, editableFeed);
    setEditableFeed(null);
  };

  const handleViewDetail = (feed) => {
    setSelectedFeed(feed);
  };

  return (
    <div>
      <h2>Manage News Feeds</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Creation Date</th>
            <th>Status</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsFeeds.map(feed => (
            <tr key={feed.id}>
              <td>{editableFeed && editableFeed.id === feed.id ? <input type="text" value={editableFeed.title} onChange={(e) => handleChange(e, 'title')} /> : feed.title}</td>
              <td>{editableFeed && editableFeed.id === feed.id ? <input type="text" value={editableFeed.category} onChange={(e) => handleChange(e, 'category')} /> : feed.category}</td>
              <td>{editableFeed && editableFeed.id === feed.id ? <input type="text" value={editableFeed.CreationDate} onChange={(e) => handleChange(e, 'CreationDate')} /> : feed.CreationDate}</td>
              <td>{editableFeed && editableFeed.id === feed.id ? <input type="text" value={editableFeed.status} onChange={(e) => handleChange(e, 'status')} /> : feed.status}</td>
               <td>
                {editableFeed && editableFeed.id === feed.id ?
                  <div>
                    <button onClick={handleSaveFeed}>Save</button>
                    <button onClick={() => deleteNewsFeed(feed.id)}>Delete</button>
                    <button onClick={() => viewNewsFeed(feed)}>View Detail</button>
                  </div>
                  :
                  <div>
                    <button onClick={() => handleEditFeed(feed)}>Edit</button>
                    <button onClick={() => deleteNewsFeed(feed.id)}>Delete</button>
                    <button onClick={() => viewNewsFeed(feed)}>View Detail</button>
                  </div>
                }
              </td>
     
            </tr>
          ))}
        </tbody>
      </table>
      {/* Render selected feed details */}
      <br/> <br/><br/>
      {selectedFeed && (
        <div className="selected-feed-details">
          <h2>Selected Feed Details</h2>
          <pre>Title:          {selectedFeed.title}</pre>
          <pre>Category:       {selectedFeed.category}</pre>
          <pre>Creation Date:  {selectedFeed.CreationDate}</pre>
          <pre>Status:         {selectedFeed.status}</pre>
          <h4>Description: </h4>
          <p>{selectedFeed.text}</p>
          <img src={selectedFeed.imageUrl}/> <br/>
          <button onClick={() => setSelectedFeed(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ManageFeed;
