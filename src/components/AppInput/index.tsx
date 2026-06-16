import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import type { MaterialIconsIconName } from "@react-native-vector-icons/material-icons";
import { colors } from "@/shared/colors";

interface AppInputParams<T extends FieldValues> extends TextInputProps {
    control: Control<T>;
    name: Path<T>;
    leftIconName?: MaterialIconsIconName;
    label?: string
}

export function AppInput<T extends FieldValues>({ control, name, label, leftIconName, ...rest}: AppInputParams<T>) {
    return (
        <Controller
            control={control}
            name={name}
            render={({field: {onChange, value}}) => {
                return (
                    <View className="w-full">
                        {label && <Text className="text-white">{label}</Text>}
                        <TouchableOpacity className="flex-row items-center justify-between border-b border-gray-600 px-3 py-2 h-16">
                            <TextInput value={value} onChangeText={onChange} {...rest} placeholderTextColor={colors.gray["700"]}></TextInput>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    );
}
