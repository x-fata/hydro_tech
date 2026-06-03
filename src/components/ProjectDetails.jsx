import React from 'react';
import Contact from './Contact'; 
import Engagement from './Engagement'; // Imeongezwa

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

      {/* Integration ya Engagement Component - Hatua ya 3 ya Diagram */}
      <Engagement project={{ likes: 12 }} />

      {/* Integration ya Contact Component - Hatua ya 4 ya Diagram */}
      <Contact projectName="Modern Eco-Villa" />

    </div>
  );
}

export default ProjectDetails;