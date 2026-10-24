import { useState } from 'react';
import FeedbackMessage from './FeedbackMessage.jsx';
import './Cadsatro.css';

function CadastroForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [modalidade, setModalidade] = useState('');

  const [feedback, setFeedback] = useState({ tipo: '', mensagem: '' });

  const [errosCampos, setErrosCampos] = useState({
    nome: false,
    email: false,
    telefone: false,
    modalidade: false,
  });

  const [clientes, setClientes] = useState([]);

  function formatarTelefone(valor) {
    const apenasDigitos = valor.replace(/\D/g, '');
    const digitosLimitados = apenasDigitos.slice(0, 11);

    if (digitosLimitados.length <= 2) {
      return digitosLimitados.length > 0 ? `(${digitosLimitados}` : '';
    }
    if (digitosLimitados.length <= 6) {
      return `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2)}`;
    }
    if (digitosLimitados.length <= 10) {
      return `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2, 6)}-${digitosLimitados.slice(6)}`;
    }
    return `(${digitosLimitados.slice(0, 2)}) ${digitosLimitados.slice(2, 7)}-${digitosLimitados.slice(7, 11)}`;
  }

  function handleTelefoneChange(event) {
    const valorFormatado = formatarTelefone(event.target.value);
    setTelefone(valorFormatado);

    if (errosCampos.telefone) {
      setErrosCampos((estadoAnterior) => ({ ...estadoAnterior, telefone: false }));
    }
  }

  function limparErroCampo(campo) {
    if (errosCampos[campo]) {
      setErrosCampos((estadoAnterior) => ({ ...estadoAnterior, [campo]: false }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    const emailLimpo = email.trim();
    const telefoneNumeros = telefone.replace(/\D/g, '');
    const modalidadeLimpa = modalidade.trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomeValido = nomeLimpo.length >= 3;
    const emailValido = regexEmail.test(emailLimpo);
    const telefoneValido = telefoneNumeros.length >= 10;
    const modalidadeValida = modalidadeLimpa !== '' && modalidadeLimpa !== 'Selecione uma modalidade';

    const novosErros = {
      nome: !nomeValido,
      email: !emailValido,
      telefone: !telefoneValido,
      modalidade: !modalidadeValida,
    };

    setErrosCampos(novosErros);

    if (!nomeValido || !emailValido || !telefoneValido || !modalidadeValida) {
      let mensagemErro = 'Por favor, preencha todos os campos corretamente.';

      if (!nomeValido) {
        mensagemErro = 'Por favor, informe seu nome completo (mínimo 3 letras).';
      } else if (!emailValido) {
        mensagemErro = 'Por favor, insira um endereço de e-mail válido.';
      } else if (!telefoneValido) {
        mensagemErro = 'Informe um telefone válido com DDD (mínimo de 10 dígitos).';
      } else if (!modalidadeValida) {
        mensagemErro = 'Por favor, selecione uma modalidade de seu interesse.';
      }

      setFeedback({
        tipo: 'erro',
        mensagem: mensagemErro,
      });
      return;
    }

    const novoCliente = {
      id: Date.now(),
      nome: nomeLimpo,
      email: emailLimpo,
      telefone: telefone,
      modalidade: modalidadeLimpa,
      dataCadastro: new Date().toLocaleTimeString('pt-BR'),
    };

    setClientes((clientesAnteriores) => [...clientesAnteriores, novoCliente]);

    setFeedback({
      tipo: 'sucesso',
      mensagem: 'Cadastro realizado com sucesso! Em breve entraremos em contato.',
    });

    setNome('');
    setEmail('');
    setTelefone('');
    setModalidade('');
    setErrosCampos({
      nome: false,
      email: false,
      telefone: false,
      modalidade: false,
    });
  }

  return (
    <section className="cadastro-secao" id="cadastro" aria-labelledby="titulo-cadastro">
      <div className="cadastro-container">
        <div className="cadastro-cabecalho">
          <span className="cadastro-selo">PRIMEIRO PASSO</span>
          <h2 id="titulo-cadastro" className="cadastro-titulo">
            Cadastre-se na Arena
          </h2>
          <p className="cadastro-subtitulo">
            Garanta sua aula experimental gratuita e venha vivenciar o esporte na areia.
          </p>
        </div>

        <div className="cadastro-card">
          <FeedbackMessage tipo={feedback.tipo} mensagem={feedback.mensagem} />

          <form className="cadastro-formulario" onSubmit={handleSubmit} noValidate>
            <div className="campo-grupo">
              <label htmlFor="campo-nome" className="campo-label">
                Nome Completo
              </label>
              <input
                id="campo-nome"
                type="text"
                name="nome"
                className={`campo-input ${errosCampos.nome ? 'campo-input--invalido' : ''}`}
                placeholder="Ex: Victor Silva"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  limparErroCampo('nome');
                }}
                autoComplete="name"
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="campo-email" className="campo-label">
                E-mail
              </label>
              <input
                id="campo-email"
                type="email"
                name="email"
                className={`campo-input ${errosCampos.email ? 'campo-input--invalido' : ''}`}
                placeholder="Ex: seuemail@exemplo.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  limparErroCampo('email');
                }}
                autoComplete="email"
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="campo-telefone" className="campo-label">
                Telefone / WhatsApp
              </label>
              <input
                id="campo-telefone"
                type="tel"
                name="telefone"
                className={`campo-input ${errosCampos.telefone ? 'campo-input--invalido' : ''}`}
                placeholder="Ex: (88) 99999-9999"
                value={telefone}
                onChange={handleTelefoneChange}
                autoComplete="tel"
              />
            </div>

            <div className="campo-grupo">
              <label htmlFor="campo-modalidade" className="campo-label">
                Modalidade de Interesse
              </label>
              <div className="select-container">
                <select
                  id="campo-modalidade"
                  name="modalidade"
                  className={`campo-select ${errosCampos.modalidade ? 'campo-input--invalido' : ''}`}
                  value={modalidade}
                  onChange={(e) => {
                    setModalidade(e.target.value);
                    limparErroCampo('modalidade');
                  }}
                >
                  <option value="">Selecione uma modalidade</option>
                  <option value="Beach Tennis">Beach Tennis</option>
                  <option value="Vôlei de Praia">Vôlei de Praia</option>
                  <option value="Futevôlei">Futevôlei</option>
                </select>
                <span className="select-seta" aria-hidden="true">▾</span>
              </div>
            </div>

            <div className="seguranca-aviso">
              <span className="seguranca-icone" aria-hidden="true">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <p className="seguranca-texto">
                Seus dados estão seguros e serão utilizados apenas para agendamento.
              </p>
            </div>

            <button type="submit" className="botao-submit">
              Concluir Cadastro
            </button>
          </form>

          {clientes.length > 0 && (
            <div className="contador-clientes">
              <span className="contador-ponto"></span>
              <span>
                {clientes.length} {clientes.length === 1 ? 'cliente cadastrado' : 'clientes cadastrados'} nesta sessão
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CadastroForm;
