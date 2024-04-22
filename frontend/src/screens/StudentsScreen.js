import React, { useState, useEffect } from "react"
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native"

const StudentsScreen = () => {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetch("http://192.168.0.27:3000/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to fetch students:", err)
        setError("Failed to fetch data")
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>Error: {error}</Text>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Grade: {item.grade}</Text>
            <Text>Email: {item.email}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})

export default StudentsScreen
