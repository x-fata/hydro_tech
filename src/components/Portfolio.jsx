import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

function Portfolio({ onViewProject }) {
  // State za kudhibiti neno linalotafutwa na aina ya mradi
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Data ya miradi inayolishwa kwenye ProjectCard
  const projects = [
    { 
      id: 'eco-villa', 
      title: 'Modern Eco-Villa', 
      category: 'Residential', 
      year: '2026', 
      likes: 12, 
      status: 'Completed',
      placeholder: '📐 3D BENTLEY VIEW • RESIDENTIAL' 
    },
    { 
      id: 'pavilion', 
      title: 'The Pavilion Center', 
      category: 'Commercial', 
      year: '2026', 
      likes: 45, 
      status: 'Concept',
      placeholder: '🏢 URBAN GLASS FACADE • CONCEPT' 
    }
  ];

  // Logic ya kuchuja miradi kulingana na kile mtumiaji anachochapa au kuchagua
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      
      {/* Hero Section ya Kitaalamu */}
      <div style={{ padding: '50px 20px', background: 'linear-gradient(135deg, #1a1a1a 0%, #343a40 100%)', color: '#ffffff', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.6rem', fontWeight: '300', letterSpacing: '2px', marginBottom: '10px', margin: 0 }}>
          MINIMALIST ARCHITECTURE
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#adb5bd', maxWidth: '280px', margin: '10px auto 0', lineHeight: '1.5' }}>
          Explore blueprints and professional 3D renderings.
        </p>
      </div>
      
      {/* Search & Filter Interface - Premium Style */}
      <div style={{ padding: '20px', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <input 
          type="text" 
          placeholder="Search projects..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #1a1a1a', borderRadius: '0px', outline: 'none' }} 
        />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#1a1a1a' }}>FILTER:</span>
          <select 
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={{ flex: 1, padding: '10px', fontSize: '0.85rem', border: '1px solid #ced4da', borderRadius: '0px', background: '#fff', outline: 'none' }}>
            <option value="All">All Types</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>
      </div>

      {/* Project Gallery Preview */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#f8f9fa' }}>
        <h3 style={{ fontSize: '0.85rem', letterSpacing: '1px', margin: 0, color: '#343a40', fontWeight: '700' }}>
          RECENT WORKS ({filteredProjects.length})
        </h3>
        
        {/* Hapa tunaita kadi moja baada ya nyengine kutoka ProjectCard.jsx */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewProject={onViewProject} 
            />
          ))
        ) : (
          <p style={{ fontSize: '0.8rem', color: '#6c757d', textAlign: 'center', marginTop: '20px' }}>
            No architectural projects match your search.
          </p>
        )}

      </div>
    </div>
  );
}

export default Portfolio;