import React from 'react';
import MilkteaList from './Components/MilkteaList';
import img1 from './assets/images/imga.jpg';
import img2 from './assets/images/imgb.jpg';
import img3 from './assets/images/imgc.jpg';


function App() {
  return (
      <div style={{ 
          display: 'flex',
          gap: '20px'
        }}>
          
      <MilkteaList
        title="Matcha"
        imgURL={img1}
        description="This is a sample milktea description."
        price={99.99}
        rating="4.8"
      />

      <MilkteaList
        title="Strawberry"
        imgURL={img2}
        description="This is a sample milktea description."
        price={99.99}
        rating="4.9"
      />

      <MilkteaList
        title="Okinawa"
        imgURL={img3}
        description="This is a sample milktea description."
        price={99.99}
        rating="5"
      />
    </div>
  );
}

export default App;
