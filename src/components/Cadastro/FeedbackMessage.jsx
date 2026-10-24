function FeedbackMessage({ tipo, mensagem }) {
  if (!mensagem) {
    return null;
  }

  const ehSucesso = tipo === 'sucesso';
  const classeTipo = ehSucesso ? 'feedback-mensagem--sucesso' : 'feedback-mensagem--erro';

  return (
    <div
      className={`feedback-mensagem ${classeTipo}`}
      role="alert"
      aria-live="polite"
    >
      <span className="feedback-icone" aria-hidden="true">
        {ehSucesso ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        )}
      </span>

      <p className="feedback-texto">{mensagem}</p>
    </div>
  );
}

export default FeedbackMessage;
