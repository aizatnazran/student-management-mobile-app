const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const studentRoutes = require("./routes/studentRoutes")

app.use("/api", studentRoutes)
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
