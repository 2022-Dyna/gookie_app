import { View, Text, Button } from "react-native";

export default function Home({ navigation }) {
    return (
        <View>
            <View>
                <Text>
                    홈입니다.
                </Text>
                <Button
                    title="Go to ScreenA"
                    onPress={() => navigation.navigate("ScreenA")}
                />
            </View>
        </View>
    );
}
