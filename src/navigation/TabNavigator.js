import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import EstatisticasScreen from "../screens/EstatisticasScreen";
import ExerciciosScreen from "../screens/ExerciciosScreen";
import VideoScreen from "../screens/VideoScreen";
import Exercicio from "../screens/Exercicio";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false, // Ocultar o título da tela
				tabBarActiveTintColor: "#32620e", // Cor do ícone ativo
				tabBarInactiveTintColor: "gray", // Cor do ícone inativo
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name="home" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Estatísticas"
				component={EstatisticasScreen}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name="bar-chart" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Exercícios"
				component={ExerciciosScreen}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name="calculate" color={color} size={size} />,
				}}
			/>
			<Tab.Screen
				name="Video Aulas"
				component={VideoScreen}
				options={{
					tabBarIcon: ({ color, size }) => <MaterialIcons name="tv" color={color} size={size} />,
				}}
			/>
		</Tab.Navigator>
	);
}
