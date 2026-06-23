import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default function App() {
  const plantas = [
    {
      nome: 'Samambaia',
      imagem: '',
    },
    {
      nome: 'Costela-de-Adão',
      imagem: 'COLE_O_LINK_DA_IMAGEM',
    },
    {
      nome: 'Jiboia',
      imagem: 'COLE_O_LINK_DA_IMAGEM_AQUI',
    },
    {
      nome: 'Espada-de-São-Jorge',
      imagem: 'COLE_O_LINK_DA_IMAGEM_AQUI',
    },
    {
      nome: 'Suculenta',
      imagem: 'COLE_O_LINK_DA_IMAGEM_AQUI',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌿 Catálogo de Plantas</Text>

      <ScrollView contentContainerStyle={styles.lista}>
        {plantas.map((planta, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.fotoContainer}>
              <Image
                source={{ uri: planta.imagem }}
                style={styles.imagem}
                resizeMode="cover"
              />
            </View>

            <Text style={styles.nome}>{planta.nome}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    paddingTop: 50,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },

  lista: {
    alignItems: 'center',
    paddingBottom: 30,
  },

  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 5,
  },

  fotoContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#C8E6C9',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    overflow: 'hidden',
  },

  imagem: {
    width: '100%',
    height: '100%',
  },

  nome: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
});