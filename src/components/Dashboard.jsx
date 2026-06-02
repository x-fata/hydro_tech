import React from 'react';

function Dashboard({ onViewProject }) {
  // Mock Data ya maendeleo ya jumla ya miradi
  const stats = [
    { title: 'TOTAL PLATFORMS', value: '3 Active Grid' },
    { title: 'LIKES INDEXED', value: '171 Total' },
    { title: 'AVG INTEGRATION', value: '63.3%' }
  ];

  const ongoingLogs = [
    { id: 'eco-villa', name: 'Modern Eco-Villa', status: 'Completed', date: 'Just now' },
    { id: 'pavilion', name: 'The Pavilion Center', status: 'In Progress', date: '2 hours ago' },
    { id: 'smart-solar-station', name: 'Smart Solar Plant Grid', status: 'Concept', date: 'Yesterday' }
  ];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      
      {/* Dashboard Top Banner */}
      <div style={{ 
        padding: '40px 20px', 
        background: 'linear-gradient(135deg, #2b303a 0%, #4a5262 100%)', 
        color: '#ffffff', 
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: '300', letterSpacing: '2px', margin: 0 }}>
          CONTROL DASHBOARD
        </h1>
        <p style={{ fontSize: '0.75rem', color: '#e2e8f0', margin: '4px 0 0 0' }}>
          Real-time analytics engine and structural configuration node.
        </p>
      </div>

      <div style={{ padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Metric Cards Grid - High Complexity Grid View */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ 
              flex: 1, background: '#ffffff', padding: '14px 10px', 
              borderRadius: '12px', border: '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
            }}>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#94a3b8', display: 'block', letterSpacing: '0.5px' }}>
                {stat.title}
              </span>
              <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e293b', display: 'block', marginTop: '4px' }}>
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Live Tracking Status Logs Section */}
        <div style={{ 
          background: '#ffffff', borderRadius: '16px', padding: '20px 15px',
          border: '1px solid #e2e8f0', boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569', margin: '0 0 15px 0', letterSpacing: '0.5px' }}>
            PROJECT MATRIX STATUS LOGS
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {ongoingLogs.map((log) => (
              <div key={log.id} style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '12px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #f1f5f9'
              }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1e293b', display: 'block' }}>
                    {log.name}
                  </span>
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
                    Updated {log.date}
                  </span>
                </div>
                
                <button 
                  onClick={() => onViewProject(log.id)}
                  style={{
                    background: '#4a5262', color: '#fff', border: 'none', borderRadius: '6px',
                    fontSize: '0.65rem', fontWeight: '700', padding: '6px 10px', cursor: 'pointer'
                  }}
                >
                  MANAGE
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;