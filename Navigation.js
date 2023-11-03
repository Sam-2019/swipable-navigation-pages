import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Settings from "./Screens/Settings";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={() => ({
          tabBarStyle: { display: "none" },
        })}
      />
    </Tab.Navigator>
  );
}
