import React from 'react';

function ProjectDetails({ onBack }) {
  return (
    <div style={{ padding: '20px', flex: 1, backgroundColor: '#ffffff' }}>
      
      {/* Back Button */}
      <button 
        onClick={onBack}
        style={{ 
          background: 'none', border: '1px solid #1a1a1a', padding: '6px 12px', 
          fontSize: '0.75rem', fontWeight: '600', borderRadius: '4px', cursor: 'pointer', marginBottom: '15px' 
        }}>
        ← BACK TO GALLERY
      </button>

      {/* Project Main Showcase */}
      <div style={{ background: '#e9ecef', height: '180px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: '#6c757d', marginBottom: '15px' }}>
        [ High-Resolution Architectural Blueprint View ]
      </div>

      {/* Technical Specifications */}
      <h3 style={{ fontSize: '1.2rem', margin: '0 0 5px 0', color: '#1a1a1a' }}>Modern Eco-Villa</h3>
      <span style={{ fontSize: '0.75rem', color: '#6c757d', display: 'block', marginBottom: '15px' }}>Category: Residential • Status: Completed (2026)</span>
      
      <div style={{ background: '#f8f9fa', padding: '12px', borderRadius: '4px', border: '1px solid #e9ecef', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '0.8rem', margin: '0 0 8px 0', letterSpacing: '0.5px' }}>SPECIFICATIONS</h4>
        <p style={{ fontSize: '0.75rem', margin: '0 0 4px 0', color: '#495057' }}>• <strong>Total Area:</strong> 450 sqm</p>
        <p style={{ fontSize: '0.75rem', margin: '0 0 4px 0', color: '#495057' }}>• <strong>Location:</strong> Coastal Zone Plot</p>
        <p style={{ fontSize: '0.75rem', margin: 0, color: '#495057' }}>• <strong>Features:</strong> Solar Smart System, Water Recycling</p>
      </div>

      {/* Engagement Stats */}
      <div style={{ display: 'flex', gap: '20px', paddingBottom: '12px', borderBottom: '1px solid #dee2e6', marginBottom: '15px' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>❤️ 12 Likes</span>
        <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#495057' }}>💬 2 Comments</span>
      </div>

      {/* Complex Comments Interface */}
      <div>
        <h4 style={{ fontSize: '0.85rem', margin: '0 0 10px 0' }}>VISITOR COMMENTS</h4>
        
        {/* Mock Comments List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '15px' }}>
          <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block' }}>Eng. David</span>
            <p style={{ fontSize: '0.75rem', margin: '2px 0 0 0', color: '#212529' }}>The structural alignment on the solar roof integration is genius.</p>
          </div>
          <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block' }}>Sarah M.</span>
            <p style={{ fontSize: '0.75rem', margin: '2px 0 0 0', color: '#212529' }}>Beautiful minimalist presentation! Love the open space concept.</p>
          </div>
        </div>

        {/* Add Comment Input Form */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <input 
            type="text" 
            placeholder="Write a professional comment..." 
            style={{ flex: 1, padding: '8px 10px', fontSize: '0.8rem', border: '1px solid #ced4da', borderRadius: '4px', outline: 'none' }} 
          />
          <button style={{ background: '#1a1a1a', color: '#fff', border: 'none', padding: '0 12px', fontSize: '0.75rem', fontWeight: '600', borderRadius: '4px', cursor: 'pointer' }}>
            Send
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProjectDetails;