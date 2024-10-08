import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Button.css'; 

// bu component olmasa react-router-dom'dan Link ile oluşturup çözebilirdim ama yinede butona özel bir component yapmak istedim. burada useHistory() de kullanıılmış oldu
function Button({ label, to }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
