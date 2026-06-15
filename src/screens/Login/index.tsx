import { DismissKeyboardView } from "@/components/DismisskeyboardView";
import { View } from "react-native";
import { LoginForm } from "./LoginForm";

export function Login() {
    
    return(
        <DismissKeyboardView>
            <View className="flex-1 w-[82%] self-center">
                <LoginForm/>
            </View>
        </DismissKeyboardView>
    )
}
