import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const screenWidth = Dimensions.get("window").width

const Landing = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/landing-image.png")} // Replace with your image path
        style={styles.image}
      />
      <Text style={styles.header}>Student Management System</Text>
      <Text style={styles.subHeader}>Made for you by Aizat Nazran</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signInButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: screenWidth,
    height: 300,
    resizeMode: "cover",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Helvetica",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 16,
    fontFamily: "Helvetica",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 30,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  signInButton: {
    backgroundColor: "#000000",
  },
  registerButton: {
    backgroundColor: "#6C63FF",
  },
  signInButtonText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  registerButtonText: {
    fontFamily: "Helvetica",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
})

export default Landing
