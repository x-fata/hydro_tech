import React from 'react';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '15px 20px', 
        background: '#ffffff', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <h2 style={{ color: '#0b69a3', fontSize: '1.4rem', margin: 0 }}>Hydro-Tech</h2>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#334e68', fontWeight: '600', fontSize: '0.9rem' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#334e68', fontWeight: '600', fontSize: '0.9rem' }}>Dashboard</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        background: 'linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{ 
          fontSize: '1.8rem', 
          color: '#0f2d4a', 
          marginBottom: '15px',
          lineHeight: '1.3',
          maxWidth: '90%'
        }}>
          Advanced Water Management Systems
        </h1>
        <p style={{ 
          fontSize: '0.95rem', 
          color: '#486581', 
          maxWidth: '320px', 
          margin: '0 auto 25px',
          lineHeight: '1.5'
        }}>
          Monitor water levels, control pumps, and analyze usage data seamlessly from anywhere.
        </p>
        <button style={{ 
          background: '#0b69a3', 
          color: '#ffffff', 
          border: 'none', 
          padding: '12px 28px', 
          borderRadius: '25px', 
          fontSize: '0.9rem', 
          cursor: 'pointer',
          fontWeight: '600',
          boxShadow: '0 4px 6px rgba(11, 105, 163, 0.2)'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;