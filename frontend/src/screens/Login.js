import React from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
const Login = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's Sign you in</Text>
      <Text style={styles.welcomeText}>Welcome Back,</Text>
      <Text style={styles.missedText}>You have been missed</Text>

      <TextInput
        style={styles.input}
        placeholder="Email, phone & username"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View style={styles.divider} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerPrompt}>
          Don’t have an account?{" "}
          <Text style={styles.registerLink}>Register Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 10,
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
  },
  missedText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    fontSize: 16,
  },
  forgotPassword: {
    fontSize: 14,
    textAlign: "right",
    marginBottom: 20,
    color: "#0000ff",
  },
  signInButton: {
    backgroundColor: "#6C63FF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  registerPrompt: {
    fontSize: 16,
    textAlign: "center",
  },
  registerLink: {
    color: "#0000ff",
    fontWeight: "bold",
  },
})

export default Login
