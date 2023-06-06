import React from 'react';
import WhatsappButton from './WhatsappButton';


function App() {
  return (
    <div className="App">
     <WhatsappButton phoneNumber={7278033333} message={`Hello`} />
    </div>
  );
}

export default App;
