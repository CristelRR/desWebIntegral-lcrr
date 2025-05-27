import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2>🏁 Bienvenido a la Página de Fórmula 1 🏎️</h2>
        <hr />
        <p>
          Esta aplicación está dedicada a los fanáticos de la F1. Aquí podrás encontrar información sobre:
        </p>
        <ul>
          <li>Calendario de carreras</li>
          <li>Equipos y pilotos</li>
          <li>Resultados en tiempo real</li>
          <li>Estadísticas y clasificaciones</li>
        </ul>
        <p>
          ¡Explora y mantente al día con toda la emoción del mundo del automovilismo!
        </p>
      </div>
    </>
  );
}

export default App;
