import React from 'react';

function ProjectCard({ project, onViewProject }) {
  // Logic ndogo ya kuchagua rangi ya badge kulingana na hali ya mradi
  const getStatusStyle = (status) => {
    if (status === 'Completed') return { backgroundColor: '#e2f0d9', color: '#385723' };
    return { backgroundColor: '#fff2cc', color: '#7f6000' };
  };

  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: '0px', 
      border: '1px solid #1a1a1a', 
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      position: 'relative'
    }}>
      
      {/* Status Badge ya Kitaalamu juu ya picha */}
      <span style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '0.65rem',
        fontWeight: '700',
        padding: '3px 8px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        ...getStatusStyle(project.status)
      }}>
        {project.status || 'Active'}
      </span>

      {/* Project Image Placeholder yenye Muonekano wa Kichoraji */}
      <div style={{ 
        height: '150px', 
        background: '#1a1a1a', 
        color: '#ffffff',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '0.75rem', 
        fontWeight: '600',
        letterSpacing: '1px',
        borderBottom: '1px solid #1a1a1a',
        padding: '0 15px',
        textAlign: 'center'
      }}>
        {project.placeholder}
      </div>
      
      {/* Project Info Section */}
      <div style={{ padding: '15px' }}>
        <h4 style={{ fontSize: '1rem', margin: '0 0 6px 0', color: '#1a1a1a', letterSpacing: '0.5px' }}>
          {project.title}
        </h4>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '15px',
          borderBottom: '1px dashed #dee2e6',
          paddingBottom: '10px'
        }}>
          <span style={{ fontSize: '0.75rem', color: '#6c757d', fontWeight: '500' }}>
            📁 {project.category} • {project.year}
          </span>
          <span style={{ fontSize: '0.75rem', color: '#1a1a1a', fontWeight: '700' }}>
            ❤️ {project.likes} Likes
          </span>
        </div>
        
        {/* Action Button yenye muundo wa kibunifu */}
        <button 
          onClick={() => { if(typeof onViewProject === 'function') onViewProject(project.id); }}
          style={{ 
            width: '100%', 
            padding: '10px', 
            background: '#1a1a1a', 
            color: '#fff', 
            border: 'none', 
            fontSize: '0.75rem', 
            fontWeight: '700', 
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}>
          EXPLORE BLUEPRINT →
        </button>
      </div>

    </div>
  );
}

export default ProjectCard;