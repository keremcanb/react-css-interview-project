import React from 'react';

const BottomNavbar = () => (
  <nav id='nav-bottom'>
    <div className='btn-group-left'>
      <button className='btn-left'>ARAMA NASIL ÇALIŞIR?</button>
      <button className='btn-left'>İHALE SİSTEMİ NEDİR?</button>
      <button className='btn-left'>E-MENÜ NEDİR?</button>
    </div>

    <div className='btn-group-right'>
      <button className='btn-right'>e-düğün nedir?</button>
      <button className='btn-right'>Avantajlar-Fırsatlar</button>
      <button className='btn-right btn-active'>Sektörün İlkleri</button>
    </div>
  </nav>
);

export default BottomNavbar;
