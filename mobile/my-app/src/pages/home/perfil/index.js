import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>- ASKTALK -</Text>
      </View>
      <View style={styles.perfil}></View>

      <View>
        <Text style={styles.texto}>Favoritos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
    texto: {
      marginBottom: 5,
      fontSize: 22,
      color: "white",
      fontFamily: "Arial",
    },
  perfil: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginTop: "30px",
    backgroundColor: "#a9a9a9a9",
    justifyContent: "center",
  },
  header: {
    height: "7vh",
    width: "100%",
    backgroundColor: "#a9a9a9",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    fontSize: "35px",
    fontFamily: "Arial",
  },
  //   image: {
  //     height: "20px",
  //     width: "20px",
  //   },
});
