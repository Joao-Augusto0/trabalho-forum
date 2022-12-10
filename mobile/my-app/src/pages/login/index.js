import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from 'react'

export default function Login({ navigation }) {

  const [email, setEmail] = useState("josefina@gmail");
  const [senha, setSenha] = useState("1234");


  let dados = {
    email: email,
    senha: senha
  }

  const userLogin = () => {
    fetch("http://192.168.0.4:3000/Login"
      , {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      }
    )
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (data.email !== undefined) {
          navigation.navigate("Home")
        } else {
          alert('Erro')
        }
      })
  }



  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.titulo}>ENTRAR NA CONTA ASKTALK</Text>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(value) => {
            setEmail(value);
          }}
        ></TextInput>
        <Text>Senha</Text>

        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={(value) => {
            setSenha(value);
          }}
        ></TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            userLogin()
          }}
        >
          <Text style={styles.title}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0C153C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 280,
    width: 280,
    backgroundColor: "#cdcdd4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  input: {
    backgroundColor: "#fff",
    margin: 5,
  },
  titulo: {
    margin: 10,
  },
  title: {
    color: "#fff",
  },
  title2: {
    color: "#070227",
    margin: 10
  },
  button: {
    backgroundColor: "#001B6B",
  },
});
