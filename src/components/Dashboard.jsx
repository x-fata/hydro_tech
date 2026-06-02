import React from 'react';

function Portfolio({ onViewProject }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section */}
      <div style={{ padding: '40px 20px', background: '#1a1a1a', color: '#ffffff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: '300', letterSpacing: '2px', marginBottom: '10px', margin: 0 }}>
          MINIMALIST ARCHITECTURE
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#adb5bd', maxWidth: '280px', margin: '10px auto 0', lineHeight: '1.5' }}>
          Explore blueprints and professional 3D renderings.
        </p>
      </div>
      
      {/* Search & Filter Interface */}
      <div style={{ padding: '15px 20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Search projects..." 
          style={{ flex: 1, padding: '10px 12px', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', outline: 'none' }} 
        />
        <select style={{ padding: '10px', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '4px', background: '#fff', outline: 'none' }}>
          <option>All Types</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>

      {/* Project Gallery Preview */}
      <div style={{ padding: '0 20px 25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h3 style={{ fontSize: '0.95rem', letterSpacing: '1px', margin: '10px 0 5px 0', color: '#343a40' }}>RECENT WORKS</h3>
        
        {/* Project Card 1 */}
        <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e9ecef', overflow: 'hidden' }}>
          <div style={{ height: '140px', background: '#dee2e6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#6c757d' }}>
            [ Modern Eco-Villa Blueprint ]
          </div>
          <div style={{ padding: '12px' }}>
            <h4 style={{ fontSize: '0.85rem', margin: '0 0 4px 0', color: '#212529' }}>Modern Eco-Villa</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>Residential • 2026</span>
              <span style={{ fontSize: '0.75rem', color: '#1a1a1a', fontWeight: '600' }}>❤️ 12 Likes</span>
            </div>
            <button 
              onClick={() => onViewProject('eco-villa')}
              style={{ width: '100%', padding: '8px', background: '#1a1a1a', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>
              VIEW DETAILS
            </button>
          </div>
        </div>

        {/* Project Card 2 */}
        <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e9ecef', overflow: 'hidden' }}>
          <div style={{ height: '140px', background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#6c757d' }}>
            [ Urban Pavilion Concept ]
          </div>
          <div style={{ padding: '12px' }}>
            <h4 style={{ fontSize: '0.85rem', margin: '0 0 4px 0', color: '#212529' }}>The Pavilion Center</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.75rem', color: '#6c757d' }}>Commercial • Concept</span>
              <span style={{ fontSize: '0.75rem', color: '#1a1a1a', fontWeight: '600' }}>❤️ 45 Likes</span>
            </div>
            <button 
              onClick={() => onViewProject('pavilion')}
              style={{ width: '100%', padding: '8px', background: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600', cursor: 'pointer' }}>
              VIEW DETAILS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;