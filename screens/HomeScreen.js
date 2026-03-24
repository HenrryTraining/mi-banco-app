// screens/HomeScreen.js

import React from 'react';

// ScrollView = contenedor que permite hacer scroll
// cuando el contenido es más largo que la pantalla
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    // ScrollView en lugar de View — por si el contenido crece
    <ScrollView style={styles.container}>

      {/* Header del dashboard */}
      <View style={styles.header}>
        <Text style={styles.saludo}>Hola, Juan 👋</Text>
        <Text style={styles.fecha}>Lunes, 23 de marzo</Text>
      </View>

      {/* Tarjeta de saldo */}
      <View style={styles.tarjeta}>
        <Text style={styles.tarjetaLabel}>Saldo disponible</Text>
        <Text style={styles.tarjetaSaldo}>$12,450.00</Text>
        <Text style={styles.tarjetaNumero}>**** **** **** 4291</Text>
      </View>

      {/* Acciones rápidas */}
      <Text style={styles.seccionTitulo}>Acciones rápidas</Text>
      <View style={styles.acciones}>

        <TouchableOpacity style={styles.accionBoton}>
          <Text style={styles.accionIcono}>↑</Text>
          <Text style={styles.accionTexto}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accionBoton}>
          <Text style={styles.accionIcono}>↓</Text>
          <Text style={styles.accionTexto}>Recibir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accionBoton}>
          <Text style={styles.accionIcono}>$</Text>
          <Text style={styles.accionTexto}>Pagar</Text>
        </TouchableOpacity>

      </View>

      {/* Últimos movimientos */}
      <Text style={styles.seccionTitulo}>Últimos movimientos</Text>

      <View style={styles.movimiento}>
        <Text style={styles.movimientoNombre}>Netflix</Text>
        <Text style={styles.movimientoMonto}>- $15.99</Text>
      </View>

      <View style={styles.movimiento}>
        <Text style={styles.movimientoNombre}>Salario</Text>
        <Text style={styles.movimientoMontoPositivo}>+ $3,200.00</Text>
      </View>

      <View style={styles.movimiento}>
        <Text style={styles.movimientoNombre}>Supermercado</Text>
        <Text style={styles.movimientoMonto}>- $87.50</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  saludo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  fecha: {
    fontSize: 13,
    color: '#a0a0b0',
  },
  tarjeta: {
    backgroundColor: '#4f8ef7',  // azul — es nuestra tarjeta bancaria
    marginHorizontal: 24,
    borderRadius: 20,
    padding: 24,
    marginBottom: 32,
  },
  tarjetaLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 8,
  },
  tarjetaSaldo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  tarjetaNumero: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
  seccionTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  acciones: {
    flexDirection: 'row',        // pone los botones en fila horizontal
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  accionBoton: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    width: 80,
  },
  accionIcono: {
    fontSize: 22,
    color: '#4f8ef7',
    marginBottom: 6,
  },
  accionTexto: {
    fontSize: 12,
    color: '#a0a0b0',
  },
  movimiento: {
    flexDirection: 'row',        // nombre y monto en la misma fila
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a4a',
  },
  movimientoNombre: {
    fontSize: 15,
    color: '#ffffff',
  },
  movimientoMonto: {
    fontSize: 15,
    color: '#ff6b6b',            // rojo para gastos
    fontWeight: '600',
  },
  movimientoMontoPositivo: {
    fontSize: 15,
    color: '#51cf66',            // verde para ingresos
    fontWeight: '600',
  },
});

export default HomeScreen;