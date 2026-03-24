import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>Juan Pérez</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Correo</Text>
        <Text style={styles.value}>juan@email.com</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.logout}>Cerrar sesión</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 24,
  },
  card: {
    backgroundColor: "#16213e",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: "#a0a0b0",
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: "#ffffff",
  },
  logout: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff6b6b",
    textAlign: "center",
  },
});

export default ProfileScreen;
