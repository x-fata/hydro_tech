import React, { useState } from 'react';

function Upload() {
  const [formData, setFormData] = useState({ title: '', category: 'Residential', budget: '', scale: '1:50' });

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      
      {/* Mini Title Banner */}
      <div style={{ 
        padding: '35px 20px', 
        background: 'linear-gradient(135deg, #2b303a 0%, #4a5262 100%)', 
        color: '#ffffff',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
      }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '300', letterSpacing: '1.5px', margin: 0 }}>
          ENGINEERING ENGINE UPLOAD
        </h3>
        <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '4px 0 0 0' }}>
          Publish high-end schematics, CAD nodes, and 3D specifications.
        </p>
      </div>

      <div style={{ padding: '20px 15px' }}>
        {/* Main Complex Form Container */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '16px', 
          background: '#ffffff', 
          padding: '25px 20px', 
          borderRadius: '16px', 
          boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
          border: '1px solid #e2e8f0'
        }}>
          
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#475569', letterSpacing: '0.5px' }}>
              PROJECT STRUCTURAL TITLE
            </label>
            <input 
              type="text" 
              placeholder="e.g., SMART SOLAR SWITCHING COMPLEX" 
              style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', boxSizing: 'border-box', outline: 'none', backgroundColor: '#f8fafc' }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#475569' }}>
                CATEGORY TAG
              </label>
              <select style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', background: '#fff', boxSizing: 'border-box', outline: 'none' }}>
                <option>Residential Blueprint</option>
                <option>Commercial Concept</option>
                <option>Industrial Plant Grid</option>
              </select>
            </div>

            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#475569' }}>
                DRAWING SCALE
              </label>
              <select style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', background: '#fff', boxSizing: 'border-box', outline: 'none' }}>
                <option>1:50 Scale</option>
                <option>1:100 Scale</option>
                <option>1:250 Scale</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#475569' }}>
              ESTIMATED PROJECT BUDGET
            </label>
            <input 
              type="text" 
              placeholder="e.g., $450,000" 
              style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', boxSizing: 'border-box', outline: 'none', backgroundColor: '#f8fafc' }} 
            />
          </div>

          {/* Premium Vector Drag-Drop Upload Area */}
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '6px', color: '#475569' }}>
              CAD SCHEMATIC FILE SOURCE
            </label>
            <div style={{
              border: '2px dashed #4a5262',
              borderRadius: '12px',
              padding: '30px 15px',
              textAlign: 'center',
              backgroundColor: '#f8fafc',
              cursor: 'pointer'
            }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '5px' }}>📁</span>
              <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#334155', display: 'block' }}>
                Drag and drop drawing layout here
              </span>
              <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>
                Supports DWG, PDF, PNG or BIM models up to 50MB
              </span>
              <input type="file" style={{ display: 'none' }} />
            </div>
          </div>

          {/* Large Publishing Button with Slate Style */}
          <button style={{ 
            background: '#2b303a', 
            color: '#ffffff', 
            border: 'none', 
            padding: '14px', 
            fontSize: '0.85rem', 
            fontWeight: '700', 
            letterSpacing: '1px',
            borderRadius: '10px', 
            cursor: 'pointer', 
            boxShadow: '0 4px 10px rgba(43,48,58,0.2)',
            marginTop: '8px' 
          }}>
            PUBLISH TO MASTER MATRIX
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;