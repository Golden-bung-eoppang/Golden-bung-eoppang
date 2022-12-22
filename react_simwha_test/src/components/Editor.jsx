import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {
  const [value, setValue] = useState('');

  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={setValue}
      style={{height: 700}}
      placeholder={'내용을 입력해주세요.'}
    />
  );
}
