import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Portfolio({ onViewProject }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [activeQuickTab, setActiveQuickTab] = useState('All');

  // Seti kubwa ya data yenye maelezo mengi na changamano ya kihandisi
  const projects = [
    { 
      id: 'eco-villa', 
      title: 'Modern Eco-Villa', 
      category: 'Residential', 
      year: '2026', 
      likes: 24, 
      status: 'Completed',
      progress: 100,
      scale: '1:50 Scale',
      estimatedBudget: '$320K',
      placeholder: '📐 3D BENTLEY VIEW • INTEGRATED SOLAR ROOF' 
    },
    { 
      id: 'pavilion', 
      title: 'The Pavilion Center', 
      category: 'Commercial', 
      year: '2026', 
      likes: 58, 
      status: 'In Progress',
      progress: 65,
      scale: '1:100 Scale',
      estimatedBudget: '$1.2M',
      placeholder: '🏢 URBAN GLASS FACADE • SUSTAINABLE HVAC' 
    },
    { 
      id: 'smart-solar-station', 
      title: 'Smart Solar Plant Grid', 
      category: 'Industrial', 
      year: '2026', 
      likes: 89, 
      status: 'Concept',
      progress: 25,
      scale: '1:250 Scale',
      estimatedBudget: '$850K',
      placeholder: '⚡ SMART SOLAR GRID • AUTOMATED SWITCHING' 
    }
  ];

  // Logic ya kuchuja kwa kutumia Search, Select Box na Quick Tabs zote kwa pamoja
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    const matchesQuickTab = activeQuickTab === 'All' || 
                            (activeQuickTab === 'Completed' && project.status === 'Completed') ||
                            (activeQuickTab === 'Active' && project.status !== 'Completed');
    return matchesSearch && matchesCategory && matchesQuickTab;
  });

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      
      {/* Hero Section yenye rangi za Slate Gray na Charcoal za Kisasa */}
      <div style={{ 
        padding: '55px 20px', 
        background: 'linear-gradient(135deg, #2b303a 0%, #4a5262 100%)', 
        color: '#ffffff', 
        textAlign: 'center',
        borderBottomRightRadius: '24px',
        borderBottomLeftRadius: '24px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
      }}>
        <h1 style={{ fontSize: '1.7rem', fontWeight: '300', letterSpacing: '3px', marginBottom: '8px', margin: 0 }}>
          ARCH_STUDIO PORTFOLIO
        </h1>
        <div style={{ width: '35px', height: '3px', background: '#a5b4fc', margin: '10px auto' }}></div>
        <p style={{ fontSize: '0.85rem', color: '#e2e8f0', maxWidth: '300px', margin: '0 auto', lineHeight: '1.6' }}>
          Explore precise architectural frameworks, high-end 3D models, and schematic layouts.
        </p>
      </div>
      
      {/* Search & Filter Interface - Advanced Controls */}
      <div style={{ 
        margin: '-20px 15px 0 15px', 
        padding: '20px', 
        background: '#ffffff', 
        borderRadius: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        boxShadow: '0 8px 24px rgba(0,0,0,0.04)' 
      }}>
        <div style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="Search blueprints, structural tags..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', padding: '12px 12px 12px 35px', fontSize: '0.85rem', 
              border: '1px solid #cbd5e1', borderRadius: '10px', outline: 'none',
              backgroundColor: '#f8fafc', color: '#334155'
            }} 
          />
          <span style={{ position: 'absolute', left: '12px', top: '12px', fontSize: '0.9rem', color: '#94a3b8' }}>🔍</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569', letterSpacing: '0.5px' }}>CATEGORY:</span>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ 
              flex: 1, padding: '11px', fontSize: '0.85rem', border: '1px solid #cbd5e1', 
              borderRadius: '10px', background: '#ffffff', color: '#334155', outline: 'none', fontWeight: '600'
            }}>
            <option value="All">All Structural Types</option>
            <option value="Residential">Residential Spaces</option>
            <option value="Commercial">Commercial Infrastructure</option>
            <option value="Industrial">Industrial & Electrical Plants</option>
          </select>
        </div>

        {/* Quick Filter Tabs - Vitu Vingi Zaidi */}
        <div style={{ display: 'flex', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
          {['All', 'Active', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveQuickTab(tab)}
              style={{
                flex: 1, padding: '6px 10px', fontSize: '0.75rem', fontWeight: '600',
                borderRadius: '8px', border: 'none', cursor: 'pointer',
                backgroundColor: activeQuickTab === tab ? '#4a5262' : '#f1f5f9',
                color: activeQuickTab === tab ? '#ffffff' : '#64748b',
                transition: 'all 0.2s'
              }}
            >
              {tab === 'Active' ? '⚡ Development' : tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Complex Gallery Preview */}
      <div style={{ padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
          <h3 style={{ fontSize: '0.85rem', letterSpacing: '0.5px', margin: 0, color: '#475569', fontWeight: '700' }}>
            INDEXED BLUEPRINTS ({filteredProjects.length})
          </h3>
          <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '600' }}>RENDER ENGINE v2.6</span>
        </div>
        
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewProject={onViewProject} 
            />
          ))
        ) : (
          <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            <p style={{ fontSize: '0.8rem', color: '#64748b', margin: 0 }}>No structural designs match your criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Portfolio;