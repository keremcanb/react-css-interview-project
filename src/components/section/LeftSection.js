import React from 'react';
import Footer from '../layout/Footer';

const SectionLeft = () => (
  <section id='section-left'>
    <div className='video'>
      <img src='/img/video.png' alt='video' />
    </div>

    <div className='box-container'>
      <div
        className='box box-1'
        style={{ backgroundImage: 'url(/img/heart.png)' }}
      >
        <p>e-düğün'e Üye Olmak Çok Kolay!</p>
      </div>

      <div
        className='box box-2'
        style={{ backgroundImage: 'url(/img/step1.png)' }}
      >
        <div className='box-text'>
          <i className='fas fa-user-alt'></i>
          <p>1. ADIM</p>
        </div>
        <p>Profilini Kolayca Oluştur</p>
      </div>

      <div
        className='box box-3'
        style={{ backgroundImage: 'url(/img/step2.png)' }}
      >
        <div className='box-text'>
          <i className='fas fa-lira-sign'></i>
          <p>2. ADIM</p>
        </div>
        <p>Sisteme Fiyatlarını Tanımla</p>
      </div>

      <div
        className='box box-4'
        style={{ backgroundImage: 'url(/img/step3.png)' }}
      >
        <div className='box-text'>
          <i className='far fa-snowflake'></i>
          <p>3. ADIM</p>
        </div>
        <p style={{ padding: '1px' }}>
          Yeniliklerle Tanış ve Dilersen Kullan{' '}
          <button className='btn-box'>Ücretsiz Heme Üye Ol!</button>
        </p>
      </div>
    </div>

    <Footer />
  </section>
);

export default SectionLeft;
