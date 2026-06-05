import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>TIM MAIA- Ela partiu</Text>
        <Text>Ela partiu, partiu{"\n"} 
E nunca mais voltou{"\n"} 
Ela sumiu, sumiu{"\n"} 
E nunca mais voltou{"\n"} 
{"\n"} 
Ela partiu (partiu), partiu (partiu)
E nunca mais voltou (não voltou, não, uh)
Ela sumiu (sumiu), sumiu (sumiu)
E nunca mais voltou (não voltou, não, uh)

Se souberem onde ela está, digam-me
E eu vou lá buscá-la
Pelo menos telefone em seu nome
Me dê uma dica, uma pista, insista

Yeah, yeah, yeah, yeah
E nunca mais voltou (não voltou, não, uh)
Ela sumiu (sumiu), sumiu (sumiu)
E nunca mais voltou (não voltou, não, uh)

Ela sumiu (sumiu), sumiu (sumiu)
E nunca mais voltou (não voltou, não, uh)
Ela partiu (partiu), partiu (partiu)
E nunca mais voltou (não voltou, não, uh)

Se eu soubesse onde ela foi, iria atrás
Mas não sei mais nem direção
Várias noites que eu não durmo um segundo
Estou cansado, magoado, exausto

Ei, yeah, yeah
E nunca mais voltou (não voltou, não, uh)
Ela partiu (partiu), partiu (partiu)
E nunca mais voltou (não voltou, não, uh)

Ela sumiu (sumiu), sumiu (sumiu)
E nunca mais voltou (não voltou, não, uh)
Ela partiu (partiu), partiu (partiu)
E nunca mais voltou (não voltou, não, uh)

Se souberem onde ela está, digam-me
E eu vou lá buscá-la
Pelo menos telefone em seu nome
Me dê uma dica, uma pista, insista

Ei, yeah, yeah, yeah
E nunca mais voltou
Ei, yeah, ela sumiu</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },

  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    paddingHorizontal: 10,
  },
});