import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function addPubli() {

    const [nome_user, setNome_user] = useState()
    const [nick, setNick] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [telefone, setTelefone] = useState();

    var dados = {
        id_user: null,
        nome_user: nome_user,
        nick: nick,
        role: "usuario",
        email: email,
        senha: senha,
        telefone: telefone,
        foto_user: null,
    }

    console.log(dados)

    const addConta = () => {
        fetch("http://10.87.207.12:3000/Usuarios"
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
                return data
            })
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.texto}>DIGITE SEU NOME</Text>
                <TextInput
                    style={styles.input}
                    value={nome_user}
                    onChangeText={(value) => {
                        setNome_user(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>ESCOLHA O SEU NICK</Text>
                <TextInput
                    style={styles.input}
                    value={nick}
                    onChangeText={(value) => {
                        setNick(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>DIGITE SEU EMAIL</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(value) => {
                        setEmail(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>ESCOLHA UMA SENHA</Text>
                <TextInput
                    style={styles.input}
                    value={senha}
                    onChangeText={(value) => {
                        setSenha(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>DIGITE SEU TELEFONE PARA VERIFICAÇÕES FUTURAS</Text>
                <TextInput
                    style={styles.input}
                    value={telefone}
                    onChangeText={(value) => {
                        setTelefone(value);
                    }}
                ></TextInput>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addConta()
                    }}
                >
                    <Text style={styles.title}>enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'rgba(191, 233, 246, 0.802)'

    },
    container: {
        backgroundColor: "#3299CC",
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '15vh',
        border: '1px solid #000066',
        height: '40vh',
        width: '45vh'
    },
    texto: {
        marginBottom: 5,
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: '2vh',
        color: 'black'
    },
    button: {
        backgroundColor: "white",
    },
    title: {
        color: 'black'
    }
})