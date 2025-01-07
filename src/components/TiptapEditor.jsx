import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import HighlightText from "./CustomExtension"; 

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Image,
      HighlightText, 
    ],
    content: "<p>Start editing!</p>", 
  });

  if (!editor) return null;

  // Function to reset the editor
  const resetEditor = () => {
    editor.commands.setContent("<p>Start editing!</p>"); 
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-4 py-2 font-bold rounded ${
            editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-4 py-2 rounded ${
            editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          <i>Italic</i>
        </button>
        <button
          onClick={() => editor.chain().focus().highlight().run()}
          className="px-4 py-2 bg-yellow-300 rounded"
        >
          Highlight
        </button>
        
        <button
          onClick={resetEditor}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear All
        </button>
      </div>
      
      <EditorContent editor={editor} className="border border-gray-300 p-4" />
    </div>
  );
};

export default TiptapEditor;
