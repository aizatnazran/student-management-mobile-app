const express = require("express")
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const router = express.Router()

// Endpoint to get all students
router.get("/students", async (req, res) => {
  const students = await prisma.student.findMany()
  res.json(students)
})

module.exports = router
