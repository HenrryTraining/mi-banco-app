import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const MovementsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Movimientos</Text>

      {/* Movimiento ejemplo */}
      <View style={styles.movement}>
        <View>
          <Text style={styles.movementName}>Netflix</Text>
          <Text style={styles.movementDate}>24 de marzo</Text>
        </View>
        <Text style={styles.negative}>- $15.99</Text>
      </View>

      <View style={styles.movement}>
        <View>
          <Text style={styles.movementName}>Salario</Text>
          <Text style={styles.movementDate}>23 de marzo</Text>
        </View>
        <Text style={styles.positive}>+ $3,200.00</Text>
      </View>

      <View style={styles.movement}>
        <View>
          <Text style={styles.movementName}>Supermercado</Text>
          <Text style={styles.movementDate}>22 de marzo</Text>
        </View>
        <Text style={styles.negative}>- $87.50</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    marginVertical: 20,
  },
  movement: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a4a",
  },
  movementName: {
    fontSize: 16,
    color: "#ffffff",
  },
  movementDate: {
    fontSize: 12,
    color: "#a0a0b0",
    marginTop: 4,
  },
  positive: {
    fontSize: 16,
    fontWeight: "600",
    color: "#51cf66",
  },
  negative: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ff6b6b",
  },
});

export default MovementsScreen;
