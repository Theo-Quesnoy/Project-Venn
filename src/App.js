import { useState } from "react";
import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Identification from "./screens/Identification";
import Home from "./screens/Home";
import ColorContext from "./ColorContext";
import CreateProject from "./screens/CreateProject";
import Mail from "./screens/Mail";
import CreateMember from "./screens/CreateMember";
import UpdateProject from "./screens/UpdateProject";

const Stack = createNativeStackNavigator();

export default function App() {
  console.disableYellowBox = true;
  const [color, setColor] = useState(null);
  return (
    <ColorContext.Provider value={[color, setColor]}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Identification" component={Identification} />
          <Stack.Screen name="Accueil" component={Home} />
          <Stack.Screen name="Creer" component={CreateProject} />
          <Stack.Screen name="Mail" component={Mail} />
          <Stack.Screen name="CreateMember" component={CreateMember} />
          <Stack.Screen name="Update" component={UpdateProject} />
        </Stack.Navigator>
      </NavigationContainer>
    </ColorContext.Provider>
  );
}

registerRootComponent(App);
