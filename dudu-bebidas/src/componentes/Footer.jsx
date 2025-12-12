import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="contato" className="footer-custom text-white py-5 mt-5">
      <div className="container">
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <h5 className="logo mb-4">Dudu <span>Bebidas</span></h5>
            <p className="text-light mb-4" style={{ lineHeight: 1.8, fontSize: '14px', opacity: 0.9 }}>
              As melhores bebidas com entrega rápida e preços imbatíveis. Sua satisfação é nossa prioridade!
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="d-flex align-items-center justify-content-center" style={{
                width: '45px',
                height: '45px',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '12px',
                color: '#ffd700',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="d-flex align-items-center justify-content-center" style={{
                width: '45px',
                height: '45px',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '12px',
                color: '#ffd700',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="d-flex align-items-center justify-content-center" style={{
                width: '45px',
                height: '45px',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '12px',
                color: '#ffd700',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}>
                <i className="bi bi-whatsapp fs-5"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-4" style={{ color: '#ffd700', fontSize: '18px' }}>
              Links Rápidos
            </h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a href="#hero" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.9 
                }}>
                  <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                  Início
                </a>
              </li>
              <li className="mb-3">
                <a href="#produtos" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.9 
                }}>
                  <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                  Produtos
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.9 
                }}>
                  <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                  Sobre Nós
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="text-light text-decoration-none d-flex align-items-center" style={{ 
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: 0.9 
                }}>
                  <i className="bi bi-chevron-right me-2" style={{ color: '#ffd700' }}></i>
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="fw-bold mb-4" style={{ color: '#ffd700', fontSize: '18px' }}>
              Entre em Contato
            </h6>
            <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
              <i className="bi bi-whatsapp me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
              <div style={{ opacity: 0.9 }}>
                <div className="fw-semibold mb-1">WhatsApp</div>
                <div>(11) 99999-9999</div>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
              <i className="bi bi-envelope me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
              <div style={{ opacity: 0.9 }}>
                <div className="fw-semibold mb-1">Email</div>
                <div>contato@dudububebidas.com.br</div>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-start" style={{ fontSize: '14px' }}>
              <i className="bi bi-geo-alt me-3 mt-1" style={{ color: '#ffd700', fontSize: '18px' }}></i>
              <div style={{ opacity: 0.9 }}>
                <div className="fw-semibold mb-1">Localização</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-4" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="col text-center">
            <p className="mb-0" style={{ fontSize: '14px', opacity: 0.8 }}>
              &copy; 2024 Dudu Bebidas. Todos os direitos reservados. | Beba com Moderação.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
