import React from "react";
import AppLoading from "expo-app-loading";
import Routes from './src/routes'
import * as Notifications from 'expo-notifications'

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { PlantProps } from "./src/libs/storage";


export default function App() {

  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  React.useEffect(() => {
     // Coleta os dados de dentro da notificação
     const subscription = Notifications.addNotificationReceivedListener(
       async notification => {
         const data = notification.request.content.data.plant as PlantProps;
         console.log(data)
       }
     )
     return ()  => subscription.remove();

    //async function notifications(){

    // retorna todas as notificações agendadas
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log(data)

    // cancela todas as notificações
    //const data = await Notifications.cancelAllScheduledNotificationsAsync();

    //}
    //notifications();


  },[])

  if (!fontsLoaded) return <AppLoading />;
  return (
    <Routes/>
  )
}
