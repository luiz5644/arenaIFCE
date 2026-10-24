import './Footer.css';

function Footer() {
  const horariosFuncionamento = [
    { dias: 'Seg a Sex', horario: '06h às 23h' },
    { dias: 'Sáb e Dom', horario: '07h às 21h' },
    { dias: 'Feriados', horario: '07h às 20h' },
  ];

  const linksLegais = [
    { id: 1, texto: 'Regulamento das Quadras', href: '#regulamento' },
    { id: 2, texto: 'Política de Privacidade', href: '#privacidade' },
    { id: 3, texto: 'Locação de Eventos', href: '#locacao' },
  ];

  return (
    <footer className="footer-principal" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">
          
          <div className="footer-coluna footer-coluna--marca">
            <div className="footer-logo-bloco">
              <h3 className="footer-logo-nome">Arena Sunset</h3>
              <span className="footer-logo-tag">BEACH SPORTS CLUB</span>
            </div>
            <p className="footer-descricao">
              Infraestrutura contemporânea com 6 quadras de areia profissional para Beach Tennis,
              Futevôlei e Vôlei de Praia na orla.
            </p>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-coluna-titulo">Endereço</h4>
            <div className="footer-conteudo-texto">
              <p>Av. Beira Mar, 1500</p>
              <p>Praia dos Esportes</p>
              <p>CEP 60000-000</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-destaque"
              >
                Ver localização no mapa →
              </a>
            </div>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-coluna-titulo">Funcionamento</h4>
            <ul className="footer-lista-horarios">
              {horariosFuncionamento.map((item, index) => (
                <li key={index} className="footer-item-horario">
                  <span className="footer-horario-dias">{item.dias}:</span>
                  <span className="footer-horario-horas">{item.horario}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-coluna-titulo">Contato</h4>
            <div className="footer-conteudo-contato">
              <a href="mailto:contato@arenasunset.com.br" className="footer-contato-link">
                contato@arenasunset.com.br
              </a>
              <a href="tel:+558832221000" className="footer-contato-link">
                (88) 3222-1000
              </a>
              
              <div className="footer-redes-sociais" aria-label="Redes Sociais">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Instagram da Arena Sunset"
                  title="Instagram"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                <a
                  href="https://whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="WhatsApp da Arena Sunset"
                  title="WhatsApp"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label="Facebook da Arena Sunset"
                  title="Facebook"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <hr className="footer-divisor" />

        <div className="footer-inferior">
          <p className="footer-copyright">
            © 2026 Arena Sunset - Beach Sports. Todos os direitos reservados.
          </p>

          <nav className="footer-links-legais" aria-label="Links informativos">
            {linksLegais.map((link) => (
              <a key={link.id} href={link.href} className="footer-link-legal">
                {link.texto}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
