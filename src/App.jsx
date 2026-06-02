import React, { useState } from 'react';
import Portfolio from './components/Portfolio';
import Upload from './components/Upload';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [currentTab, setCurrentTab] = useState('portfolio');
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Universal Premium Navigation Menu */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '16px 20px', 
        background: '#2b303a', 
        borderBottom: '1px solid #4a5262',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '300', letterSpacing: '2px', margin: 0 }}>
        HYDRO_TECH
        </h2>
        
        <div style={{ display: 'flex', gap: '8px', background: '#343a40', padding: '4px', borderRadius: '10px' }}>
          {[
            { id: 'portfolio', label: 'Portfolio' },
            { id: 'upload', label: 'Upload' },
            { id: 'dashboard', label: 'Dashboard' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => { setCurrentTab(tab.id); if(tab.id === 'portfolio') setSelectedProject(null); }}
              style={{ 
                background: currentTab === tab.id ? '#4a5262' : 'none', 
                border: 'none', 
                fontSize: '0.75rem', 
                fontWeight: '700',
                color: '#ffffff',
                padding: '6px 14px', 
                borderRadius: '8px',
                cursor: 'pointer', 
                outline: 'none',
                transition: 'all 0.2s'
              }}>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Render Pages Dynamically */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {currentTab === 'portfolio' && (
          selectedProject ? (
            <ProjectDetails onBack={() => setSelectedProject(null)} />
          ) : (
            <Portfolio onViewProject={(id) => setSelectedProject(id)} />
          )
        )}
        {currentTab === 'upload' && <Upload />}
        {currentTab === 'dashboard' && <Dashboard onViewProject={(id) => { setCurrentTab('portfolio'); setSelectedProject(id); }} />}
      </div>

    </div>
  );
}

export default App;