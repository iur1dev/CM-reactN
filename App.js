import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const [dolar, dolarSet] = useState(null);
  const [euro, euroSet] = useState(null);

  function dolarC() {
    let dolarV = 5.2;

    let final = dolar * dolarV;

    alert(final.toFixed(2).replace(".", ","));
  }

  function euroC() {
    let euroV = 5.09;

    let final = dolar * euroV;

    alert(final.toFixed(2).replace(".", ","));
  }

  fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL")
    .then((response) => response.json())
    .then((json) => json.USDBRL.bid)
    .catch((err) => console.log("Erro", err));

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./img/background.jpg")}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Text style={styles.h1}>Conversor de Moedas</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.h5}>Digite os Valores em Reais</Text>
          <View style={styles.linha}>
            <TextInput
              style={styles.input}
              onChangeText={dolarSet}
              placeholder="Dolar"
              keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity style={styles.botao} onPress={dolarC}>
              <AntDesign name="pluscircle" size={40} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.linha}>
            <TextInput
              style={styles.input}
              onChangeText={euroSet}
              placeholder="Euro"
              keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity style={styles.botao} onPress={euroC}>
              <AntDesign name="pluscircle" size={40} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.txt}>By Luric</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "snow",
    borderRadius: 10,
    marginHorizontal: 25,
    marginVertical: 120,
  },
  linha: {
    flexDirection: "row",
  },
  footer: {
    flex: 0.5,
    backgroundColor: "snow",
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "snow",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 2,
    textAlign: "center",
    width: 200,
    margin: 15,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  botao: {
    margin: 15,
  },
  txt: {
    fontWeight: "bold",
    textAlign: "center",
  },
  h5: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 50,
  },
});
