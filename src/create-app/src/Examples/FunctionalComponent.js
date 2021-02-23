import React, {useEffect, useState} from 'react';

export default function FunctionalComponent() {
  const [value, setValue] = useState('default value');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then((result) => {
        setValue(result[0].title);
        }
      )
  }, []);

  return <p>{value ? value : 'not received'}</p>
}
