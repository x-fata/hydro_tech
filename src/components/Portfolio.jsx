import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projectService } from '../services/projectService'; // 1. Import service

function Portfolio({ onViewProject }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [activeQuickTab, setActiveQuickTab] = useState('All');
  
  // 2. Data State ya Firebase
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Data Fetching Pattern
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getAllProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Logic ya kuchuja data (Inabaki vilevile kwa sababu data itatoka Firebase)
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    const matchesQuickTab = activeQuickTab === 'All' || 
                            (activeQuickTab === 'Completed' && project.status === 'Completed') ||
                            (activeQuickTab === 'Active' && project.status !== 'Completed');
    return matchesSearch && matchesCategory && matchesQuickTab;
  });

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      
      {/* Hero Section */}
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
      
      {/* Search & Filter Interface */}
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
        <input 
          type="text" 
          placeholder="Search blueprints, structural tags..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '12px 12px 12px 35px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: '#f8fafc' }} 
        />
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} style={{ padding: '11px', borderRadius: '10px' }}>
          <option value="All">All Structural Types</option>
          <option value="Residential">Residential Spaces</option>
          <option value="Commercial">Commercial Infrastructure</option>
          <option value="Industrial">Industrial & Electrical Plants</option>
        </select>
      </div>

      {/* Main Complex Gallery Preview */}
      <div style={{ padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', fontSize: '0.8rem' }}>Loading structural data...</p>
        ) : filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onViewProject={onViewProject} 
            />
          ))
        ) : (
          <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>No structural designs match your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;