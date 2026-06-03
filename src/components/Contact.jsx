import React from 'react';

function Contact({ projectName }) {
  return (
    <div style={{ 
      marginTop: '20px', padding: '20px', background: '#2b303a', 
      borderRadius: '16px', color: '#ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
    }}>
      <h4 style={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', margin: '0 0 15px 0', color: '#cbd5e1' }}>
        CONNECT & COLLABORATE
      </h4>
      <p style={{ fontSize: '0.75rem', marginBottom: '15px', color: '#94a3b8' }}>
        Send a direct inquiry regarding {projectName} to the lead architect.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="email" 
          placeholder="Your professional email" 
          style={{ padding: '10px', borderRadius: '8px', border: 'none', fontSize: '0.8rem' }}
        />
        <textarea 
          placeholder="Detailed inquiry or collaboration proposal..." 
          style={{ padding: '10px', borderRadius: '8px', border: 'none', fontSize: '0.8rem', height: '80px', resize: 'none' }}
        />
        <button style={{ 
          background: '#4a5262', color: '#ffffff', border: 'none', 
          padding: '10px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', cursor: 'pointer' 
        }}>
          SEND INQUIRY
        </button>
      </div>
    </div>
  );
}

export default Contact;