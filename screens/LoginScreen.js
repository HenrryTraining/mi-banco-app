import react from "react";

// TextInput = campo de texto (como un <input> en web)
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";


const LoginScreen = ({ navigation }) => {
    return (
        <View>
            {/** Encabezado */}
            <Text style={styles.titulo}>Iniciar sesión</Text>
            <Text style={styles.subtitulo}>Ingrea tus datos para continuar</Text>

            {/* Campo de email */}
            {/* keyboardType='email-address' abre el teclado correcto en móvil */}
            {/* autoCapitalize='none' evita que autocorrija el email */}
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="a0a0b0"
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* Campo de contraseña */}
            {/* secureTextEntry oculta el texto con puntos */}
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="a0a0b0"
                secureTextEntry
            />
            {/* Botón principal — navega al Home */}
            {/* Recuerda: no validamos credenciales, solo navegamos */}
            <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.botonTexto}>Entrar</Text>
            </TouchableOpacity>

            {/* Link para volver — navigation.goBack() regresa a la pantalla anterior */}
            {/* Es como el botón atrás pero controlado desde el código */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>← Volver</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a2e',
        paddingHorizontal: 32,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: '#a0a0b0',
        marginBottom: 40,
    },
    input: {
        backgroundColor: '#16213e',  // fondo del input
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 18,
        color: '#ffffff',
        fontSize: 15,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#2a2a4a',      // borde sutil
    },
    boton: {
        backgroundColor: '#4f8ef7',
        paddingVertical: 14,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    botonTexto: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    link: {
        color: '#4f8ef7',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default LoginScreen;