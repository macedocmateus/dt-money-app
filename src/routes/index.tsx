import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '@/screens/Login';
import { Register } from '@/screens/Register';

export type PublicStackParamsList = {
    Login: undefined;
    Register: undefined;
};

function NavigationRoutes() {
    const PublicStack = createStackNavigator<PublicStackParamsList>();

    return (
        <NavigationContainer>
            <PublicStack.Navigator screenOptions={{ headerShown: false }}>
                <PublicStack.Screen name="Login" component={Login} />
                <PublicStack.Screen name="Register" component={Register} />
            </PublicStack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationRoutes;
