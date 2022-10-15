import { View, Text, Button } from "react-native";

export default function ScreenA({ navigation }) {
    return (
        <View>
            <Text>I am a screen A</Text>
            <Button
                title="Go to ScreenB"
                onPress={() => navigation.navigate("ScreenB")}
            />
        </View>
    );
}
