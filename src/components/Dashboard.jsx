import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '25px 20px', flex: 1 }}>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', letterSpacing: '0.5px', color: '#1a1a1a' }}>
        ARCHITECT DASHBOARD
      </h3>
      
      {/* Analytics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
        <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
          <span style={{ fontSize: '0.75rem', color: '#6c757d', display: 'block', marginBottom: '5px' }}>TOTAL DRAWINGS</span>
          <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#212529' }}>14</span>
        </div>
        <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
          <span style={{ fontSize: '0.75rem', color: '#6c757d', display: 'block', marginBottom: '5px' }}>TOTAL LIKES</span>
          <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#212529' }}>342</span>
        </div>
      </div>

      {/* More Complex Interface: Project List & Actions */}
      <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef', marginBottom: '20px' }}>
        <h4 style={{ fontSize: '0.85rem', margin: '0 0 12px 0', letterSpacing: '0.5px' }}>MANAGE PROJECTS</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {/* Item 1 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid #f1f3f5' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', display: 'block' }}>Modern Eco-Villa</span>
              <span style={{ fontSize: '0.7rem', color: '#6c757d' }}>Active • 12 Likes</span>
            </div>
            <button style={{ background: 'none', border: '1px solid #dc3545', color: '#dc3545', padding: '4px 8px', fontSize: '0.7rem', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>

          {/* Item 2 */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', display: 'block' }}>The Pavilion Center</span>
              <span style={{ fontSize: '0.7rem', color: '#6c757d' }}>Concept • 45 Likes</span>
            </div>
            <button style={{ background: 'none', border: '1px solid #dc3545', color: '#dc3545', padding: '4px 8px', fontSize: '0.7rem', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
        <h4 style={{ fontSize: '0.85rem', margin: '0 0 10px 0', letterSpacing: '0.5px' }}>RECENT ACTIVITY</h4>
        <p style={{ fontSize: '0.75rem', color: '#495057', margin: '0 0 6px 0', lineHeight: '1.4' }}>• Uploaded "Modern Eco-Villa" blueprint file.</p>
        <p style={{ fontSize: '0.75rem', color: '#495057', margin: 0, lineHeight: '1.4' }}>• Visitor liked "The Pavilion Center" rendering.</p>
      </div>

    </div>
  );
}

export default Dashboard;