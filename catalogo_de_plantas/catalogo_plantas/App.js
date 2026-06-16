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
    { nome: 'Samambaia' },
    { nome: 'Costela-de-Adão' },
    { nome: 'Jiboia' },
    { nome: 'Espada-de-São-Jorge' },
    { nome: 'Suculenta' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌿 Catálogo de Plantas</Text>

      <ScrollView contentContainerStyle={styles.lista}>
        {plantas.map((planta, index) => (
          <View key={index} style={styles.card}>
            {/* Espaço para foto */}
            <View style={styles.fotoPlaceholder}>
              <Text style={styles.textoFoto}>Foto da Planta</Text>
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

  fotoPlaceholder: {
    width: '100%',
    height: 180,
    backgroundColor: '#C8E6C9',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textoFoto: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: 'bold',
  },

  nome: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
});