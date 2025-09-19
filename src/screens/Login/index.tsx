import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { DismissKeyboardView } from '@/components/DismissKeyboardView';
import type { PublicStackParamsList } from '@/routes/PublicRoutes';

export function Login() {
    const navigation =
        useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return (
        <DismissKeyboardView>
            <Text>Tela de login!</Text>
            <TextInput className="bg-gray-500 w-full" />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text>Registrar</Text>
            </TouchableOpacity>
        </DismissKeyboardView>
    );
}
