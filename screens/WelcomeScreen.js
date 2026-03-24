import react from 'react'; // React es la librería base — siempre se importa primero
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; // / Estos son componentes nativos de React Native
// View = un contenedor (como un <div> en web)
// Text = para mostrar texto (como un <p> en web)
// TouchableOpacity = un botón que se opaca al tocarlo
// StyleSheet = para escribir estilos (como CSS pero en JS)

const WelcomeScreen = ({navigation}) =>{
    return (
        // View principal - Ocupa toda la pantalla
        <View style={styles.container}>
            {/* Titulo de Bienvenida */}
            <Text style={styles.titulo}>Bienvenido a</Text>
            <Text style={styles.banco}>MiBanco</Text>
            <Text style={styles.subtitulo}>Tu cushqui en buenas manos</Text>

            
            {/* Boton para ir al  Login*/}
            {/* navigation.navigate('Login') le dice a React Navigator 
                que queremos ir a la pantalla login */}
            <TouchableOpacity
                style={styles.boton}
                onPress={()=>navigation.navigate('Login')}
                >
                    <Text style={styles.botonTexto}>sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

// Los estilos van separados del componente
// StyleSheet.create() valida y optimiza los estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,                      // ocupa toda la pantalla
    backgroundColor: '#1a1a2e',   // fondo oscuro azul
    alignItems: 'center',         // centra horizontalmente
    justifyContent: 'center',     // centra verticalmente
  },
  titulo: {
    fontSize: 18,
    color: '#a0a0b0',             // gris claro
    marginBottom: 8,
  },
  banco: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 14,
    color: '#a0a0b0',
    marginBottom: 60,
  },
  boton: {
    backgroundColor: '#4f8ef7',   // azul
    paddingVertical: 14,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  botonTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

// Exportamos el componente para poder usarlo en otros archivos
export default WelcomeScreen;