import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/constants/colors";

import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        <Text style={styles.text}>Ready to stream?</Text>
        <View style={styles.inputWrapper}>
          <AppTextInput placeholder="Email" placeholderTextColor="#4b4b4b" />
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#4b4b4b"
          />
          <Text style={styles.forget}>Forget Password?</Text>
          <AppButton
            onPress={() => router.push("/(tabs)/(home)")}
            title="Login"
            style={{
              backgroundColor: Colors.primary,
              width: "100%",
              height: 50,
              marginRight: 0,
            }}
          />
          <Text style={styles.createAccount}>
            Haven&apos;t signed up yet?{"  "}
            <Text
              onPress={() => router.push("/sign-up")}
              style={{ color: Colors.primary }}
            >
              Create Account
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.text,
    fontWeight: 600,
    fontSize: 26,
  },
  inputWrapper: {
    width: "100%",
    marginVertical: 26,
  },
  createAccount: {
    color: Colors.gray,
    fontSize: 14,
    marginTop: 14,
    textAlign: "center",
  },
  forget: {
    fontSize: 12,
    color: Colors.gray,
    alignSelf: "flex-end",
    marginBottom: 14,
  },
});
