import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
    return (
    <ScrollView style = {{backgroundColor: 'black'}}>
      <View style={styles.titulo}>
        <Text style={styles.text}>MOSTER HIGH</Text>
      </View>
      <ScrollView style ={styles.cont_texto}>
        <Text>
          As Monster High são uma franquia de bonecas criada pela Mattel em 2010. A série apresenta personagens inspiradas em monstros clássicos do cinema, da literatura e do folclore, mostrando como seria a vida dos filhos e filhas dessas criaturas em uma escola chamada Monster High.

Entre as personagens mais conhecidas estão Draculaura, filha do Conde Drácula; Frankie Stein, filha do monstro de Frankenstein; Clawdeen Wolf, filha de um lobisomem; e Lagoona Blue, inspirada em criaturas marinhas. Cada personagem possui uma personalidade única, estilo próprio e histórias que abordam amizade, aceitação e respeito às diferenças.

O grande diferencial de Monster High foi mostrar que ser diferente não é algo negativo. A franquia incentiva os jovens a valorizarem sua individualidade e a respeitarem as características de cada pessoa. Esse tema ficou conhecido pelo slogan "Be Yourself. Be Unique. Be a Monster" ("Seja você mesma. Seja única. Seja um monstro").

Além das bonecas, Monster High expandiu-se para desenhos animados, filmes, livros, jogos e diversos produtos licenciados. Ao longo dos anos, a marca conquistou fãs em todo o mundo graças ao seu visual criativo, personagens carismáticas e mensagens positivas sobre inclusão e amizade.

Atualmente, Monster High continua popular entre crianças, adolescentes e colecionadores, mantendo seu lugar como uma das franquias de bonecas mais reconhecidas da cultura pop.


        </Text>
      </ScrollView>
        <View>
          <TextInput style={styles.input}>

            </TextInput>
        </View>
        <View style ={styles.caixa1}>
          <Text>
            Caixa
          </Text>
        </View>
    </ScrollView> 
   
  );
}

const styles = StyleSheet.create({
  titulo: {
    width: '20%',
    marginTop: 20,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  cont_texto: {
    marginTop: 20,
    height: 500,
    width: '90%',
    backgroundColor: '#a39d9d',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 20,
    
  },

  text: {
    fontSize: 28,
    fontFamily: 'bold',
    color: '#700f40',
    textAlign: 'center',
  },

  input: {
    height: 50,
    borderWidth: 5,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: '#ebd4d4',
    borderColor:'#700f40',
  },

  caixa1: {
    backgroundColor: '#a39d9d',
    height: '20%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    margin: 10,

  }


  
});