import React from 'react';

const TopNavbar = () => (
  <nav id='nav-top'>
    <div className='logo-container'>
      <img src='/img/logo.png' alt='logo' />
      <h4>Türkiye'nin Yeni Düğün Platformu</h4>
    </div>

    <div className='auth'>
      <a href='#'>Giriş Yap</a> | <a href='#'>Üye Ol (Ücretsiz)</a>
    </div>
  </nav>
);

export default TopNavbar;
