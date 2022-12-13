import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function Main() {
  const [busca, setBusca] = useState("");
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://192.168.1.7:3000/Publicacao")
      .then(res => { return res.json() })
      .then(data => {
        setPosts(data)
      })
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerStyle}>- ASKTALK -</Text>
        </View>
        <TextInput style={styles.inp} placeholder='Digite para buscar...' onChangeText={(post) => setBusca(post)} />
        {
          posts.map((post, index) => {
            var date = new Date(post.data)
            var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
            if (post.subCategoria.toLowerCase().includes(busca.toLowerCase()) || post.categoria.toLowerCase().includes(busca.toLowerCase()) || dataFormatadata.toLowerCase().includes(busca.toLowerCase())) {
              const base64Image = post.foto_publi;
              return (
                <View key={index} style={styles.publi}>
                  <Text style={styles.texto}>{post.titulo_post}</Text>
                  <Text style={styles.texto}>{post.coment}</Text>
                  <Image style={styles.image} source={{ uri: 'data:image/png;base64,' + { base64Image } }} />
                  <Text style={styles.texto}>{post.categoria}</Text>
                  <Text style={styles.texto}>{post.subCategoria}</Text>
                  <Text style={styles.texto}>{dataFormatadata}</Text>
                </View>
              )
            }
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'rgba(191, 233, 246, 0.802)',
    alignItems: 'center',
  },
  texto: {
    marginBottom: 5,
    fontSize: 22,
    color: 'white',
    fontFamily: 'Arial',
  },
  publi: {
    height: '230px',
    width: '370px',
    border: '1px solid white',
    marginTop: '30px',
    backgroundColor: 'rgb(7, 2, 30)',
    textAlign: 'center',
    justifyContent: 'center'
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
  image: {
    height: '50px',
    width: '50px'
  },
  inp: {
    height: '45px',
    width: '320px',
    marginTop: '2vh',
    border: '1px solid white',
    borderRadius: '10px',
    backgroundColor: "#EFEFEF"
  },
  botao: {
    height: '40px',
    width: '40px',
    marginTop: '2vh',
    border: '1px solid white',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EFEFEF",
    fontSize: '35px'
  },
})