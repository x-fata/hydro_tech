import React from 'react';

function App() {
  return (
    <div>
      {/* Sehemu ya Juu / Navigation */}
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '20px 50px', 
        background: '#fff', 
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ color: '#0b69a3' }}>Hydro-Tech</h2>
        <div>
          <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#334e68', fontWeight: '600' }}>Nyumbani</a>
          <a href="#" style={{ margin: '0 15px', textDecoration: 'none', color: '#334e68', fontWeight: '600' }}>Dashboard</a>
        </div>
      </nav>

      {/* Sehemu ya Ujumbe Mkuu / Hero Section */}
      <div style={{ textAlign: 'center', padding: '100px 20px', background: '#e1f5fe' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f2d4a', marginBottom: '20px' }}>
          Usimamizi wa Maji kwa Teknolojia ya Kisasa
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#486581', maxWidth: '600px', margin: '0 auto 30px' }}>
          Fuatilia kiwango cha maji, dhibiti pampu, na uchambue matumizi kwa urahisi ukiwa mahali popote.
        </p>
        <button style={{ 
          background: '#0b69a3', 
          color: '#fff', 
          border: 'none', 
          padding: '12px 30px', 
          borderRadius: '5px', 
          fontSize: '1rem', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Anza Sasa
        </button>
      </div>
    </div>
  );
}

export default App;