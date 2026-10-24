import CadastroForm from './components/Cadastro/CadastroForm.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Modalidades /> */}
      {/* <Diferenciais /> */}

      <main className="app-main">
        <CadastroForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
