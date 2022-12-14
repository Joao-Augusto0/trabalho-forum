import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Main() {

  const [perfil, setPerfil] = useState([])
  const [lida, setLida] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("id");
      setLida(JSON.parse(value))
    } catch (err) {
      console.log(err);
    }
  }

  if (lida.length == 0) getData();

  useEffect(() => {
    fetch(`http://10.87.207.12:3000/Usuarios/${lida}`)
      .then(res => { return res.json() })
      .then(data => {
        
        setPerfil(data)
      })
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>- ASKTALK -</Text>
      </View>
      <View style={styles.perfil}></View>
      {
        perfil.map((item, indice) => {
          return (
            <View style={styles.perfilInfo}>
              <Text style={styles.infos}>Nick: {item.nick}</Text>
              <Text style={styles.infos}>Nome: {item.nome_user}</Text>
              <Text style={styles.infos}>Email: {item.email}</Text>
              <Text style={styles.infos}>Telefone: {item.telefone}</Text>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(191, 233, 246, 0.802)',
    alignItems: "center",
  },
  texto: {
    marginBottom: 5,
    fontSize: 22,
    color: "black",
    fontFamily: "Arial",
  },
  perfil: {
    height: 150,
    width: 150,
    borderRadius: 100,
    marginTop: "30px",
    backgroundColor: "#a9a9a9a9",
    justifyContent: "center",
    textAlign: 'center'
  },
  infos: {
    paddingLeft: '2vh',
    color: 'black',
    fontSize: '30px',
    marginTop: '2px'
  },
  header: {
    height: '7vh',
    width: '100%',
    backgroundColor: 'rgb(7, 2, 39)',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  headerStyle: {
    fontSize: '35px',
    fontFamily: 'Arial',
    color: 'white',
  },
  perfilInfo: {
    marginTop: '3vh',
    justifyContent: 'center',
    textAlign: 'center',
  }
  //   image: {
  //     height: "20px",
  //     width: "20px",
  //   },
});
