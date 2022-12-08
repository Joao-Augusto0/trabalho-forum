import { StyleSheet, TextInputView, Image, Text, TouchableOpacity, } from "react-native";
import { useEffect, useState } from 'react'

export default function Login({ navigation }) {

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => { return res.json() })
      .then(data => {
        setPosts(data)
      })
  })


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const data = [
    {
      email: "fulano",
      senha: "umdois",
    },
    {
      email: "beltrano@ig.com.br",
      senha: "s3nh4",
    },
  ];

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
            data.forEach((user) => {
              if (user.email === email && user.senha === senha)
                navigation.navigate("Home");
            });
          }}
        >
          <Text style={styles.title}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            data.forEach((user) => {
              if (user.email === email && user.senha === senha)
                navigation.navigate("Home");
            });
          }}
        >
          <Text style={styles.title2}>ENTRAR SEM CADASTRO</Text>
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
