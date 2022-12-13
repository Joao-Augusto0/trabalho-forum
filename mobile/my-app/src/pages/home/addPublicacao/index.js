import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function addPubli() {

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
                if (res == 201) {
                    return null
                } else {
                    return null
                }
            })
            .then(data => {
                return data
            })
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.texto}>DIGITE UM TITULO PARA O POST</Text>
                <TextInput
                    style={styles.input}
                    value={titulo}
                    onChangeText={(value) => {
                        setTitulo_post(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>ESCOLHA A CATEGORIA DO POST</Text>
                <TextInput
                    style={styles.input}
                    value={categoria}
                    onChangeText={(value) => {
                        setCategoria(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>ESCOLHA A SUABCATEGORIA DO POST</Text>
                <TextInput
                    style={styles.input}
                    value={subCategoria}
                    onChangeText={(value) => {
                        setSubCategoria(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>ESCREVA SEU COMETÁRIO QUE IRÁ APARECER NO POST</Text>
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