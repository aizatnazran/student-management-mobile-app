const { PrismaClient } = require("@prisma/client")

require("dotenv").config()
const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
})

async function main() {
  const students = [
    {
      name: "Alice Johnson",
      age: 20,
      grade: "Sophomore",
      email: "alice.johnson@example.com",
    },
    {
      name: "Bob Smith",
      age: 22,
      grade: "Senior",
      email: "bob.smith@example.com",
    },
    {
      name: "Charlie Brown",
      age: 19,
      grade: "Freshman",
      email: "charlie.brown@example.com",
    },
    {
      name: "Dana Scully",
      age: 21,
      grade: "Junior",
      email: "dana.scully@example.com",
    },
  ]

  console.log(`Start seeding ...`)
  for (const student of students) {
    const studentRecord = await prisma.student.create({
      data: student,
    })
    console.log(`Created student with id: ${studentRecord.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
