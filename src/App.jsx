import React from 'react';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa', color: '#212529' }}>
      {/* Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '15px 20px', 
        background: '#ffffff', 
        borderBottom: '1px solid #dee2e6',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <h2 style={{ color: '#1a1a1a', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '1px', margin: 0 }}>ARCH_STUDIO</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#495057', fontWeight: '600', fontSize: '0.85rem' }}>Portfolio</a>
          <a href="#" style={{ textDecoration: 'none', color: '#495057', fontWeight: '600', fontSize: '0.85rem' }}>Dashboard</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ 
        padding: '50px 20px', 
        background: '#1a1a1a', 
        color: '#ffffff',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: '300', letterSpacing: '2px', marginBottom: '15px' }}>
          MINIMALIST ARCHITECTURE
        </h1>
        <p style={{ fontSize: '0.9rem', color: '#adb5bd', maxWidth: '300px', margin: '0 auto 20px', lineHeight: '1.5' }}>
          Discover curated architectural blueprints, 3D renderings, and modern spatial designs.
        </p>
        <button style={{ 
          background: 'none', 
          color: '#ffffff', 
          border: '1px solid #ffffff', 
          padding: '10px 24px', 
          fontSize: '0.8rem', 
          letterSpacing: '1px',
          cursor: 'pointer'
        }}>
          EXPLORE PROJECTS
        </button>
      </div>

      {/* Main Interface / Content Area */}
      <div style={{ padding: '25px 20px', flex: 1 }}>
        {/* Quick Analytics Dashboard View */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '25px' }}>
          <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
            <span style={{ fontSize: '0.75rem', color: '#6c757d', display: 'block', marginBottom: '5px' }}>TOTAL PROJECTS</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#212529' }}>24</span>
          </div>
          <div style={{ background: '#ffffff', padding: '15px', borderRadius: '4px', border: '1px solid #e9ecef' }}>
            <span style={{ fontSize: '0.75rem', color: '#6c757d', display: 'block', marginBottom: '5px' }}>TOTAL VIEWS</span>
            <span style={{ fontSize: '1.4rem', fontWeight: '700', color: '#212529' }}>1.2k</span>
          </div>
        </div>

        {/* Project Gallery Preview Section */}
        <h3 style={{ fontSize: '1rem', letterSpacing: '1px', marginBottom: '15px', color: '#343a40' }}>RECENT WORKS</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Project Item 1 */}
          <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e9ecef', overflow: 'hidden' }}>
            <div style={{ height: '140px', background: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d', fontSize: '0.85rem' }}>
              [ Blueprint / Rendering Placeholder ]
            </div>
            <div style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '0.9rem', margin: '0 0 4px 0', color: '#212529' }}>Modern Eco-Villa</h4>
              <p style={{ fontSize: '0.75rem', color: '#6c757d', margin: 0 }}>Residential • 2026</p>
            </div>
          </div>

          {/* Project Item 2 */}
          <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e9ecef', overflow: 'hidden' }}>
            <div style={{ height: '140px', background: '#dee2e6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6c757d', fontSize: '0.85rem' }}>
              [ Urban Concept Placeholder ]
            </div>
            <div style={{ padding: '12px' }}>
              <h4 style={{ fontSize: '0.9rem', margin: '0 0 4px 0', color: '#212529' }}>The Pavilion Center</h4>
              <p style={{ fontSize: '0.75rem', color: '#6c757d', margin: 0 }}>Commercial • Concept</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;