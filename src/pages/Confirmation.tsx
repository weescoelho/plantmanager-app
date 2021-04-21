import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Button/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

const Confirmation = () => {

  const navigation = useNavigation();

  function handleMoveOn(){
    navigation.navigate('PlantSelect')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>
      </View>
      <View style={styles.footer}>
        <Button text="Começar" onPress={handleMoveOn}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  content:{
    justifyContent: "center",
    alignItems: "center",
    marginBottom:40,
  },
  emoji: {
    fontSize: 96,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginBottom: 20,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  footer:{
    width: "100%",
    paddingHorizontal: 75,
  }
});

export default Confirmation;
