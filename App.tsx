import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: input, 
        completed: false,
        timestamp: new Date().toLocaleString()
      }]);
      setInput('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Application App
        </h1>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="Add new item..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addItem}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <div className="space-y-2">
          {items.map(item => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                  className="mr-3 h-4 w-4 text-blue-600"
                />
                <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                  {item.text}
                </span>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No items yet. Add one above!</p>
        )}
      </div>
    </div>
  );
}