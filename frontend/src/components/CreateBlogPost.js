
import React, { useState } from 'react';

function CreateBlogPost() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual logged in user ID
    const authorId = '60d21b4667d0d8992e610c85'; // Hardcoded for now

    try {
      const response = await fetch('http://localhost:5000/api/blogposts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, author: authorId }),
      });

      if (response.ok) {
        alert('Blog post created successfully!');
        setFormData({
          title: '',
          content: '',
          image: ''
        });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to create blog post.');
      }
    } catch (error) {
      console.error('Create blog post error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="create-blog-post-container">
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreateBlogPost;
