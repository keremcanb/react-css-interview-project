import React from 'react';

const Footer = () => (
  <footer id='footer'>
    <div className='footer-container'>
      <p>
        e-dugun.com'da yer alan kullanıcıların oluşturduğu tüm içerik, görüş ve
        bilgilerin doğruluğu, eksiksiz ve değişmez olduğu, yayınlanması ile
        ilgili yasal yükümlülükler içeriği oluşturan kullanıcıya aittir. Bu
        içeriğin, görüş ve bilgilerin yanlışlık, eksiklik veya yasalarla
        düzenlenmiş kurallara aykırılığından e-dugun.com hiçbir şekilde sorumlu
        değildir. Sorularınız için ilan sahibi ile irtibata geçebilirsiniz. Yer
        Sağlayıcı Belge No : ….
      </p>
    </div>

    <img className='footer-image' src='/img/barcode.png' alt='barcode' />
  </footer>
);

export default Footer;
