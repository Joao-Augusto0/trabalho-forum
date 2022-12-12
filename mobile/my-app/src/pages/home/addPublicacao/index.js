import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function addPubli() {

    const [titulo_post, setTitulo_post] = useState('');
    const [categoria, setCategoria] = useState('');
    const [subCategoria, setSubCategoria] = useState('');
    const [coment, setComent] = useState('');

    const [lida, setLida] = useState([]);

    const getData = async () => {
        try {
            const value2 = await AsyncStorage.getItem("id");
            setLida(JSON.parse(value2))
        } catch (err) {
            console.log(err);
        }
    }

    let data = new Date();
    let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate()));
    console.log(dataFormatada)

    let dados = {
        titulo_post: titulo_post,
        id_user: lida,
        categoria: categoria,
        subCategoria: subCategoria,
        coment: coment,
        data: dataFormatada,
        curtidas: 1,
        foto_publi: null,
    }

    const addPubli = () => {
        fetch("http://192.168.1.7:3000/Publicacao"
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
                    navigation.navigate("Home")
                } else {
                    alert('Erro: ' + res)
                }
            })
            .then(data => {
                return data
            })
    }

    if (lida.length == 0) getData();

    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={titulo_post}
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
})