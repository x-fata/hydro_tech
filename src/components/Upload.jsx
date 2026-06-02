import React from 'react';

function Upload() {
  return (
    <div style={{ padding: '25px 20px', flex: 1 }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', letterSpacing: '0.5px', color: '#1a1a1a' }}>
        UPLOAD DRAWINGS
      </h3>
      
      {/* Upload Form Container */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        background: '#ffffff', 
        padding: '20px 15px', 
        borderRadius: '4px', 
        border: '1px solid #e9ecef' 
      }}>
        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'block', marginBottom: '6px', color: '#495057' }}>
            Project Title
          </label>
          <input 
            type="text" 
            placeholder="e.g., Luxury Penthouse" 
            style={{ width: '100%', padding: '10px', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', boxSizing: 'border-box', outline: 'none' }} 
          />
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'block', marginBottom: '6px', color: '#495057' }}>
            Category
          </label>
          <select style={{ width: '100%', padding: '10px', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', background: '#fff', boxSizing: 'border-box', outline: 'none' }}>
            <option>Residential Blueprint</option>
            <option>Commercial Concept</option>
            <option>Interior 3D Render</option>
          </select>
        </div>

        <div>
          <label style={{ fontSize: '0.8rem', fontWeight: '600', display: 'block', marginBottom: '6px', color: '#495057' }}>
            Architectural File (CAD, Image, PDF)
          </label>
          <input 
            type="file" 
            style={{ fontSize: '0.8rem', color: '#6c757d', width: '100%' }} 
          />
        </div>

        <button style={{ 
          background: '#1a1a1a', 
          color: '#ffffff', 
          border: 'none', 
          padding: '12px', 
          fontSize: '0.85rem', 
          fontWeight: '600', 
          letterSpacing: '0.5px',
          borderRadius: '4px', 
          cursor: 'pointer', 
          marginTop: '5px' 
        }}>
          PUBLISH PROJECT
        </button>
      </div>
    </div>
  );
}

export default Upload;