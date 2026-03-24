// App.js

// React siempre primero
import React from 'react';

// Importamos nuestro navegador — este contiene todas las pantallas
import AppNavigator from './navigation/AppNavigator';

// App es el componente raíz — el punto de entrada de toda la app
// Solo tiene una responsabilidad: renderizar el navegador
const App = () => {
  return <AppNavigator />;
};

export default App;