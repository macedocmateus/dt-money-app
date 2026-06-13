import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native";

export function Login() {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>()
    
    return(
        <View className="flex-1 justify-center items-center">
            <Text className="text-red-500">Tela de Login</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text className="text-blue-500">Registrar</Text>
                </TouchableOpacity>
        </View>
    )
}
