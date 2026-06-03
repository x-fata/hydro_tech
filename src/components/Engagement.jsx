import React, { useState } from 'react';

function Engagement({ project }) {
  const [likes, setLikes] = useState(project.likes || 0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      setComments([...comments, { id: Date.now(), text: commentText, user: 'User' }]);
      setCommentText('');
    }
  };

  return (
    <div style={{ 
      marginTop: '20px', padding: '20px', background: '#ffffff', 
      borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' 
    }}>
      {/* Like Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <button 
          onClick={handleLike}
          style={{ 
            background: liked ? '#e11d48' : '#f1f5f9', 
            color: liked ? '#ffffff' : '#475569',
            border: 'none', padding: '10px 20px', borderRadius: '10px',
            fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.3s'
          }}>
          {liked ? '❤️ LIKED' : '🤍 LIKE PROJECT'}
        </button>
        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>{likes} Engineering Likes</span>
      </div>

      {/* Comments Section */}
      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
        <h4 style={{ fontSize: '0.85rem', color: '#1e293b', margin: '0 0 10px 0' }}>COMMUNITY FEEDBACK</h4>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
          <input 
            type="text" 
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a structural comment..."
            style={{ 
              flex: 1, padding: '10px', fontSize: '0.8rem', border: '1px solid #cbd5e1', 
              borderRadius: '8px', outline: 'none', backgroundColor: '#f8fafc' 
            }}
          />
          <button 
            onClick={handleAddComment}
            style={{ 
              background: '#4a5262', color: '#fff', border: 'none', borderRadius: '8px',
              padding: '0 15px', fontSize: '0.75rem', fontWeight: '700', cursor: 'pointer' 
            }}>
            POST
          </button>
        </div>

        {/* Comment List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {comments.map(c => (
            <div key={c.id} style={{ fontSize: '0.75rem', padding: '8px', background: '#f8fafc', borderRadius: '6px', color: '#334155' }}>
              <span style={{ fontWeight: '700', marginRight: '5px' }}>{c.user}:</span> {c.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Engagement;