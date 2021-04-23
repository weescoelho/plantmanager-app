import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import AsyncStorage from '@react-native-async-storage/async-storage' 
import colors from "../../styles/colors";
import userImg from "../../assets/profile.png";
import fonts from "../../styles/fonts";

const Header = () => {

  const [userName, setUserName] = React.useState<string>()


// Captura o nome do usuário no dispositivo e seta na tela
  React.useEffect(() => {
    const loadStorageUserName = async () => {
     const user = await AsyncStorage.getItem('@plant_manager:user')
     setUserName(user || '')
    }
    loadStorageUserName()
  },[userName])


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{userName}</Text>
      </View>
      <Image style={styles.image} source={userImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: getStatusBarHeight(),
    paddingVertical: 30,
  },
  image:{
    width: 70,
    height:70,
    borderRadius:40
  },
  greeting:{
    fontSize:32,
    color: colors.heading,
    fontFamily: fonts.text
  },
  username:{
    fontSize:32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight:40,
  }
});

export default Header;
