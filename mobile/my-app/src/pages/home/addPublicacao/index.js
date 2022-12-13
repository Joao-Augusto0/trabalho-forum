import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function addPubli() {

    const [lida, setLida] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem("id");
            console.log(value);
            setLida(JSON.parse(value))
        } catch (err) {
            console.log(err);
        }
    }

    if (lida.length == 0) getData();

    const [titulo, setTitulo_post] = useState("")
    const [categoria, setCategoria] = useState("");
    const [subCategoria, setSubCategoria] = useState("");
    const [coment, setComent] = useState("");

    let data = new Date();
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));

    var dados = {
        titulo_post: titulo,
        id_user: lida,
        categoria: categoria,
        subCategoria: subCategoria,
        coment: coment,
        data: dataFormatada,
        curtidas: 1,
        foto_publi: null,
    }

    console.log(dados)

    const addPubli = () => {
        fetch("http://10.87.207.12:3000/Publicacao"
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
                console.log(res)
                if (res == 201) {
                    navigation.navigate("Home")
                } else {
                    alert('Erro: ' + res)
                }
            })
            .then(data => {
                return data

            })
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={(value) => {
                        setTitulo_post(value);
                    }}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    value={categoria}
                    onChangeText={(value) => {
                        setCategoria(value);
                    }}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    value={subCategoria}
                    onChangeText={(value) => {
                        setSubCategoria(value);
                    }}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    value={coment}
                    onChangeText={(value) => {
                        setComent(value);
                    }}
                ></TextInput>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addPubli()
                    }}
                >
                    <Text style={styles.title}>enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
    },
    texto: {
        marginBottom: 5,
        fontSize: 22,
        color: 'white',
        fontFamily: 'Arial',
    },
    input: {
        backgroundColor: "#fff",
        margin: 5,
    },
    button: {
        backgroundColor: "#001B6B",
    },
    scroll:{
        flex: 1,
        backgroundColor:''
    }
})