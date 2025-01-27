import TextEditor from './lib/editor.js';

const myEditor = new TextEditor('editor', 
    { placeholder: 'Escreva algo aqui...' });

let lorem = "Lorem ipsum dolor set amet";
myEditor.setContent(lorem);