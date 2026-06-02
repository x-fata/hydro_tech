import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Upload from './components/Upload';
import Dashboard from './components/Dashboard';

function App() {
  // State management to switch between pages independently
  const [currentTab, setCurrentTab] = useState('portfolio');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8f9fa', color: '#212529' }}>
      
      {/* Universal Sticky Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '15px 20px', 
        background: '#ffffff', 
        borderBottom: '1px solid #dee2e6',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h2 style={{ color: '#1a1a1a', fontSize: '1.1rem', fontWeight: '700', letterSpacing: '1px', margin: 0 }}>ARCH_STUDIO</h2>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <button 
            onClick={() => setCurrentTab('portfolio')}
            style={{ 
              background: 'none', border: 'none', fontSize: '0.8rem', fontWeight: '600',
              color: currentTab === 'portfolio' ? '#1a1a1a' : '#6c757d',
              borderBottom: currentTab === 'portfolio' ? '2px solid #1a1a1a' : 'none',
              padding: '5px 0', cursor: 'pointer', outline: 'none'
            }}>Portfolio</button>
          
          <button 
            onClick={() => setCurrentTab('upload')}
            style={{ 
              background: 'none', border: 'none', fontSize: '0.8rem', fontWeight: '600',
              color: currentTab === 'upload' ? '#1a1a1a' : '#6c757d',
              borderBottom: currentTab === 'upload' ? '2px solid #1a1a1a' : 'none',
              padding: '5px 0', cursor: 'pointer', outline: 'none'
            }}>Upload</button>

          <button 
            onClick={() => setCurrentTab('dashboard')}
            style={{ 
              background: 'none', border: 'none', fontSize: '0.8rem', fontWeight: '600',
              color: currentTab === 'dashboard' ? '#1a1a1a' : '#6c757d',
              borderBottom: currentTab === 'dashboard' ? '2px solid #1a1a1a' : 'none',
              padding: '5px 0', cursor: 'pointer', outline: 'none'
            }}>Dashboard</button>
        </div>
      </nav>

      {/* Render Independent Interfaces Dynamically */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentTab === 'portfolio' && <Portfolio />}
        {currentTab === 'upload' && <Upload />}
        {currentTab === 'dashboard' && <Dashboard />}
      </div>

    </div>
  );
}

export default App;