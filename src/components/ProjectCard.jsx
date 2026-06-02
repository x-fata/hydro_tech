import React from 'react';

function ProjectCard({ project, onViewProject }) {
  // Logic ya kubadili rangi za kisasa za baridi (Premium Slate Colors)
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Completed':
        return { backgroundColor: '#d1fae5', color: '#065f46', label: '✓ Ready' };
      case 'In Progress':
        return { backgroundColor: '#e0f2fe', color: '#0369a1', label: '⚙ Building' };
      default:
        return { backgroundColor: '#f1f5f9', color: '#475569', label: '✎ Draft' };
    }
  };

  const badgeStyle = getStatusBadgeStyle(project.status);

  return (
    <div style={{ 
      background: '#ffffff', 
      borderRadius: '12px', // Edges zilizolainishwa (Rounded badala ya Angle)
      overflow: 'hidden',
      boxShadow: '0 4px 18px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e2e8f0',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Top Architectural Banner Overlay */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        backgroundColor: 'rgba(43, 48, 58, 0.85)',
        color: '#ffffff',
        fontSize: '0.65rem',
        fontWeight: '700',
        padding: '4px 8px',
        borderRadius: '6px',
        backdropFilter: 'blur(4px)'
      }}>
        {project.scale || '1:100'}
      </div>

      {/* Premium Status Badge (Mduara Laini) */}
      <span style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        fontSize: '0.65rem',
        fontWeight: '700',
        padding: '4px 10px',
        borderRadius: '6px',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        backgroundColor: badgeStyle.backgroundColor,
        color: badgeStyle.color
      }}>
        {badgeStyle.label}
      </span>

      {/* Blueprint Visual Canvas Box (Slate Gray Mix) */}
      <div style={{ 
        height: '145px', 
        background: 'linear-gradient(45deg, #334155 0%, #475569 100%)', 
        color: '#f8fafc',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '0.75rem', 
        fontWeight: '500',
        letterSpacing: '0.5px',
        padding: '0 20px',
        textAlign: 'center',
        fontFamily: 'monospace',
        borderBottom: '1px solid #e2e8f0'
      }}>
        {project.placeholder}
      </div>
      
      {/* Advanced Information Metrics Grid */}
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
          <h4 style={{ fontSize: '0.95rem', margin: 0, color: '#1e293b', fontWeight: '700' }}>
            {project.title}
          </h4>
          <span style={{ fontSize: '0.85rem', color: '#475569', fontWeight: '700' }}>
            {project.estimatedBudget || 'N/A'}
          </span>
        </div>
        
        {/* Project Tag Labels */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          <span style={{ fontSize: '0.65rem', background: '#f1f5f9', color: '#64748b', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>
            {project.category}
          </span>
          <span style={{ fontSize: '0.65rem', background: '#f1f5f9', color: '#64748b', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>
            System Year: {project.year}
          </span>
        </div>

        {/* Live Project Progress Indicator Bar */}
        <div style={{ marginBottom: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: '600' }}>ENGINEERING INTEGRATION</span>
            <span style={{ fontSize: '0.65rem', color: '#475569', fontWeight: '700' }}>{project.progress}%</span>
          </div>
          <div style={{ width: '100%', height: '5px', backgroundColor: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{ width: `${project.progress}%`, height: '100%', backgroundColor: '#4f46e5', borderRadius: '3px' }}></div>
          </div>
        </div>
        
        {/* Bottom Interactive Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingTop: '12px',
          borderTop: '1px solid #f1f5f9'
        }}>
          <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
            🔥 {project.likes} Engineering Likes
          </span>
          
          <button 
            onClick={() => { if(typeof onViewProject === 'function') onViewProject(project.id); }}
            style={{ 
              padding: '8px 14px', 
              background: '#2b303a', 
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '8px',
              fontSize: '0.75rem', 
              fontWeight: '700', 
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(43,48,58,0.15)',
              outline: 'none'
            }}>
            ANALYSIS →
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;