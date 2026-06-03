import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../services/firebaseConfig'; // Import db instance

function Dashboard({ onViewProject }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Real-time listener ya miradi yote
  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const stats = [
    { title: 'TOTAL PLATFORMS', value: `${projects.length} Active` },
    { title: 'LIKES INDEXED', value: projects.reduce((acc, p) => acc + (p.likes || 0), 0) },
    { title: 'SYSTEM STATUS', value: 'OPTIMIZED' }
  ];

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      <div style={{ padding: '40px 20px', background: 'linear-gradient(135deg, #2b303a 0%, #4a5262 100%)', color: '#ffffff', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px' }}>
        <h1 style={{ fontSize: '1.4rem', fontWeight: '300', letterSpacing: '2px', margin: 0 }}>CONTROL DASHBOARD</h1>
        <p style={{ fontSize: '0.75rem', color: '#e2e8f0', margin: '4px 0 0 0' }}>Real-time analytics engine (Firestore Live).</p>
      </div>

      <div style={{ padding: '20px 15px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{ flex: 1, background: '#ffffff', padding: '14px 10px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <span style={{ fontSize: '0.6rem', fontWeight: '700', color: '#94a3b8' }}>{stat.title}</span>
              <span style={{ fontSize: '0.95rem', fontWeight: '800', color: '#1e293b', display: 'block' }}>{stat.value}</span>
            </div>
          ))}
        </div>

        <div style={{ background: '#ffffff', borderRadius: '16px', padding: '20px 15px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '0.85rem', fontWeight: '700', color: '#475569', margin: '0 0 15px 0' }}>PROJECT MATRIX STATUS LOGS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {loading ? <p style={{ fontSize: '0.8rem' }}>Loading logs...</p> : projects.map((log) => (
              <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f8fafc', borderRadius: '10px' }}>
                <div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700' }}>{log.title}</span>
                  <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>{log.category}</span>
                </div>
                <button onClick={() => onViewProject(log.id)} style={{ background: '#4a5262', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '0.65rem', padding: '6px 10px' }}>MANAGE</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;