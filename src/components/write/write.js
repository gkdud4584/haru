import {useState} from 'react';
import './write.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Write() {
  const [write, setWrite] = useState({
    title: '',
    content: ''
  })

  const getValue = e => {
    const { name, value } = e.target;
    setWrite({
      ...write,
      [name]: value
    })
    console.log(write);
  };  
  return (

    <div className="App">
      <h1>게시글 작성</h1>

      <div className='form-wrapper'>
        <input className="title-input" type='text' name='title' onChange={getValue} placeholder='제목' />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
          //   console.log('Editor is ready to use!', editor);
          // }}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   console.log({ event, editor, data });
          // }}
          // onBlur={(event, editor) => {
          //   console.log('Blur.', editor);
          // }}
          // onFocus={(event, editor) => {
          //   console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button">입력</button>
    </div>
  );
}


export default Write;