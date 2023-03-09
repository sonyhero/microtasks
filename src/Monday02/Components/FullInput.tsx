import {useState} from 'react';

export const FullInput = () => {
    let [title, setTitle] = useState()
  return (
      <div>
          <input/>
          <button>+</button>
      </div>
  )
}