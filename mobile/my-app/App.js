import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native'

export default function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Publicacao")
      .then(res => { return res.json() })
      .then(data => {
        setPosts(data)
      })
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerStyle}>- ASKTALK -</Text>
      </View>
      {
        posts.map((post, index) => {
          var date = new Date(post.data)
          var dataFormatadata = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
          const base64Image = post.foto_publi;
          return (
            <View key={index} style={styles.publi}>
              <Text style={styles.texto}>{post.titulo_post}</Text>
              <Text style={styles.texto}>{post.coment}</Text>
              <Image style={styles.image} source={{uri: `data:image/jpg;base64,${base64Image}`}} />
              <Text style={styles.texto}>{post.categoria}</Text>
              <Text style={styles.texto}>{post.subCategoria}</Text>
              <Text style={styles.texto}>{dataFormatadata}</Text>
            </View>
          )
        })
      }
    </View>
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
  publi: {
    height: '230px',
    width: '370px',
    border: '1px solid white',
    marginTop: '30px',
    backgroundColor: '#a9a9a9a9',
    textAlign: 'center',
    justifyContent: 'center'
  },
  header: {
    height: '7vh',
    width: '100%',
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    fontSize: '35px',
    fontFamily: 'Arial',
  },
  image:{
    height:'20px',
    width:'20px'
  }
})