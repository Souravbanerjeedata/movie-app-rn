import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Colors from "@/constants/colors";

import AppButton from "@/components/AppButton";
import AppTextInput from "@/components/AppTextInput";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={styles.container}>
        <Text style={styles.text}>Start Streaming Now?</Text>
        <Text style={styles.subText}>Join thousands of movie lovers</Text>
        <View style={styles.inputWrapper}>
          <AppTextInput placeholder="Email" placeholderTextColor="#4b4b4b" />
          <AppTextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#4b4b4b"
          />
          <Text style={styles.subText}>I accept all terms & conditions</Text>
          <AppButton
            title="Create Account"
            style={{
              backgroundColor: Colors.primary,
              width: "100%",
              height: 50,
              marginRight: 0,
            }}
          />
          <Text style={styles.createAccount}>
            Already have an account?{"  "}
            <Text
              onPress={() => router.push("/(login)")}
              style={{ color: Colors.primary }}
            >
              Login
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
  subText: {
    color: Colors.gray,
    fontSize: 12,
    marginBottom: 14,
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
});
