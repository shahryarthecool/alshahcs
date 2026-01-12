
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

const Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Product, 'id'>>({
    name: '',
    model: '',
    category: 'Hardware',
    description: '',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    const saved = localStorage.getItem('alshah_products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  const saveProducts = (updated: Product[]) => {
    setProducts(updated);
    localStorage.setItem('alshah_products', JSON.stringify(updated));
  };

  const handleResetToDefaults = () => {
    if (window.confirm('This will replace all current items with the original default catalog. Continue?')) {
      saveProducts(INITIAL_PRODUCTS);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'alshahadmin') {
      setIsAuthenticated(true);
    } else {
      alert('Wrong password');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      const updated = products.map(p => p.id === editingId ? { ...formData, id: editingId } : p);
      saveProducts(updated as Product[]);
      setEditingId(null);
    } else {
      const newProduct: Product = { ...formData, id: Date.now().toString() } as Product;
      saveProducts([...products, newProduct]);
    }
    setFormData({
      name: '',
      model: '',
      category: 'Hardware',
      description: '',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'
    });
  };

  const deleteProduct = (id: string) => {
    if (window.confirm('Delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      saveProducts(updated);
    }
  };

  const editProduct = (p: Product) => {
    setEditingId(p.id);
    setFormData({
      name: p.name,
      model: p.model,
      category: p.category,
      description: p.description,
      image: p.image
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-blue-900 mb-2">Admin Panel</h1>
            <p className="text-gray-400">Manage your catalog items</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="Admin Password" 
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-lg shadow-blue-200 hover:scale-[1.02] transition-transform">
              Access Dashboard
            </button>
          </form>
          <div className="mt-8 text-center text-xs text-gray-400">
            Hint: default password is <b>alshahadmin</b>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-100 py-8 mb-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Catalog Manager</h1>
            <p className="text-gray-500 font-medium">Hello Admin, manage your tech inventory here.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={handleResetToDefaults} className="text-sm font-bold text-gray-500 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Reset to Defaults</button>
            <button onClick={() => setIsAuthenticated(false)} className="text-sm font-bold text-red-500 bg-red-50 px-4 py-2 rounded-lg">Logout</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-plus-circle text-blue-600"></i>
              {editingId ? 'Update Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Product Name</label>
                <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500" placeholder="e.g. 65 Inch Smart Screen" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Model Number</label>
                <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500" placeholder="e.g. AS-L5-88" value={formData.model} onChange={e => setFormData({...formData, model: e.target.value})} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Category</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value as any})}>
                  <option>Switches</option>
                  <option>Interactive Screens</option>
                  <option>Access Control</option>
                  <option>Hardware</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Image URL (Unsplash/Link)</label>
                <input required className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500" placeholder="Image link..." value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Short Description</label>
                <textarea required rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-500" placeholder="Key features..." value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
              </div>
              <div className="flex gap-3">
                <button type="submit" className="flex-1 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-100">
                   {editingId ? 'Save Changes' : 'Create Item'}
                </button>
                {editingId && (
                  <button type="button" onClick={() => {setEditingId(null); setFormData({name: '', model: '', category: 'Hardware', description: '', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800'})}} className="px-6 py-4 bg-gray-100 text-gray-500 rounded-xl font-bold">Cancel</button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
               <h2 className="text-xl font-bold">Product Inventory ({products.length})</h2>
               <div className="text-xs text-gray-400 italic">Saved to browser storage</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-8 py-5 text-left">Product</th>
                    <th className="px-8 py-5 text-left">Category</th>
                    <th className="px-8 py-5 text-left">Model</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <img src={p.image} className="w-12 h-12 rounded-lg object-cover" alt="" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=200'; }} />
                          <span className="font-bold text-gray-900">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                         <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500 uppercase">{p.category}</span>
                      </td>
                      <td className="px-8 py-6 text-gray-500 text-sm font-medium">{p.model}</td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-2">
                           <button onClick={() => editProduct(p)} className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"><i className="fa-solid fa-pen"></i></button>
                           <button onClick={() => deleteProduct(p.id)} className="p-2 hover:bg-red-100 text-red-500 rounded-lg transition-colors"><i className="fa-solid fa-trash"></i></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr><td colSpan={4} className="p-20 text-center text-gray-400 font-medium">No products found. Add your first item.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
