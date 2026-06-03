import React, { useState } from 'react';
import { projectService } from '../services/projectService'; // 1. Tume-import service

function Upload() {
  const [formData, setFormData] = useState({ 
    title: '', 
    category: 'Residential Blueprint', 
    budget: '', 
    scale: '1:50 Scale' 
  });
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!formData.title) return alert("Tafadhali jaza jina la mradi!");
    
    setLoading(true);
    try {
      // 2. Tunatumia Service Pattern badala ya kuandika logic ya firebase hapa
      await projectService.addProject(formData);
      alert("Mradi umeingizwa kwenye Master Matrix!");
      setFormData({ title: '', category: 'Residential Blueprint', budget: '', scale: '1:50 Scale' });
    } catch (error) {
      console.error("Error publishing project:", error);
      alert("Imeshindikana kuchapisha mradi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#f1f3f5' }}>
      
      <div style={{ padding: '35px 20px', background: 'linear-gradient(135deg, #2b303a 0%, #4a5262 100%)', color: '#ffffff', borderBottomRightRadius: '20px', borderBottomLeftRadius: '20px' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '300', letterSpacing: '1.5px', margin: 0 }}>ENGINEERING ENGINE UPLOAD</h3>
      </div>

      <div style={{ padding: '20px 15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: '#ffffff', padding: '25px 20px', borderRadius: '16px' }}>
          
          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', marginBottom: '6px', color: '#475569' }}>PROJECT STRUCTURAL TITLE</label>
            <input 
              type="text" 
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: '#f8fafc', outline: 'none' }} 
            />
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569' }}>CATEGORY TAG</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                style={{ width: '100%', padding: '12px', fontSize: '0.85rem', borderRadius: '10px', background: '#fff' }}>
                <option>Residential Blueprint</option>
                <option>Commercial Concept</option>
                <option>Industrial Plant Grid</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569' }}>DRAWING SCALE</label>
              <select 
                value={formData.scale}
                onChange={(e) => setFormData({...formData, scale: e.target.value})}
                style={{ width: '100%', padding: '12px', fontSize: '0.85rem', borderRadius: '10px', background: '#fff' }}>
                <option>1:50 Scale</option>
                <option>1:100 Scale</option>
                <option>1:250 Scale</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.75rem', fontWeight: '700', color: '#475569' }}>ESTIMATED PROJECT BUDGET</label>
            <input 
              type="text" 
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              style={{ width: '100%', padding: '12px', fontSize: '0.85rem', border: '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: '#f8fafc' }} 
            />
          </div>

          <button 
            disabled={loading}
            onClick={handlePublish}
            style={{ 
              background: loading ? '#6c757d' : '#2b303a', 
              color: '#ffffff', 
              border: 'none', 
              padding: '14px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              borderRadius: '10px', 
              cursor: loading ? 'not-allowed' : 'pointer' 
            }}>
            {loading ? "PUBLISHING..." : "PUBLISH TO MASTER MATRIX"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;