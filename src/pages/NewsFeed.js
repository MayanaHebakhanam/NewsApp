import React, { useState } from 'react';
import Card from '../pages/Card';
import '../css/NewsFeed.css'; 
import '../css/Card.css'


const NewsFeed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [publishedNews, setPublishedNews] = useState([]);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNews = {
      title,
      content,
      category,
      image: URL.createObjectURL(image) // Use image URL for preview
    };
    setPublishedNews([...publishedNews, newNews]);
    // Reset form fields
    setTitle('');
    setContent('');
    setCategory('');
    setImage(null);
  };

  return (
    <div className="news-feed-container">
      <h2>Create a New News Feed</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="criminal">Criminal</option>
          <option value="entertainment">Entertainment</option>
          <option value="festives">Festives</option>
          <option value="technical">Technical</option>
          <option value="beauty">Beauty</option>
          <option value="food">Food</option>
          <option value ="viral">Viral</option>
        </select>
        <label>Upload Image:</label>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Publish</button>
      </form>

      <div className="mobile-preview-container">
        <h2>Mobile Preview</h2>
        {publishedNews.map((news, index) => (
          <Card key={index} imageUrl={news.image} text={news.content} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
