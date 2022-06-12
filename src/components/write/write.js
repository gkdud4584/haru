import {useState} from 'react';
import './write.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

function Write() {
  const [write, setWrite] = useState({
    title: '',
    content: ''
  })

  const [view, setView] = useState([]);

  const getValue = e => {
    const { name, value } = e.target;
    setWrite({
      ...write,
      [name]: value
    })
    console.log(write);
  };  

  const submitReview = ()=>{
    axios.post('http://localhost:3003/dashboard', {
      title: write.title,
      content: write.content
    }).then(()=>{
      alert('등록 완료!');
    })
  };

  return (

    <div className="App">
      <h1>Write</h1>
      <div className='form-wrapper'>
        <input className="title-input" type='text' name='title' onChange={getValue} placeholder='제목' />
        <CKEditor name ="content"
          editor={ClassicEditor}
          config={{
            placeholder: "작성하시오"
          }}
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({event,editor,data});
            setWrite({
              ...write,
              content: data
            })
          }}
        />
      </div>
      <button className="submit-button"
      onClick={submitReview}
      >입력</button>
    </div>
  );
}


export default Write;