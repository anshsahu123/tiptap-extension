import React from 'react';
import TiptapEditor from './components/TiptapEditor';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-center mt-4 text-4xl tracking-tighter"><strong> Tiptap <strong className='text-red-600'>Custom</strong> Extension</strong></h1>
      <TiptapEditor />
    </div>
  );
};

export default App;
