import { faker } from "@faker-js/faker/locale/ar";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  transactionOptions: {
    maxWait: 30000,
  },
});

async function main() {
  await prisma.student.deleteMany({});

  const students = Array.from({ length: 50 }, () => {
    const techStack = faker.helpers.arrayElements(
      [
        "React",
        "Node.js",
        "Python",
        "TypeScript",
        "MongoDB",
        "Express",
        "Next.js",
        "TailwindCSS",
        "Docker",
        "AWS",
        "GraphQL",
        "Flutter",
      ],
      { min: 2, max: 6 }
    );

    const skills = faker.helpers.arrayElements(
      [
        "العمل الجماعي",
        "القيادة",
        "حل المشكلات",
        "التواصل الفعال",
        "إدارة الوقت",
        "التفكير الإبداعي",
        "التحليل المنطقي",
        "المرونة",
        "التكيف مع التغيير",
        "الذكاء العاطفي",
        "التفاوض",
        "التخطيط الاستراتيجي",
      ],
      { min: 3, max: 8 }
    );

    return {
      name: faker.person.fullName(),
      studentId: `STD-${faker.number.int({ min: 1000, max: 9999 })}`,
      address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
      email: faker.internet.email(),
      faculty: faker.helpers.arrayElement([
        "الهندسة",
        "العلوم",
        "الحاسبات والمعلومات",
        "الطب",
        "الصيدلة",
        "التجارة",
        "الآداب",
      ]),
      department: faker.helpers.arrayElement([
        "علوم الحاسب",
        "هندسة البرمجيات",
        " الذكاء الاصطناعي",
        "أمن المعلومات",
        "علوم البيانات",
        "الشبكات",
        "قواعد البيانات",
      ]),
      techStack,
      field: faker.helpers.arrayElement([
        "تطوير الويب",
        "تطوير الموبايل",
        "علم البيانات",
        "الذكاء الاصطناعي",
        "الأمن السيبراني",
        "DevOps",
        "UI/UX",
      ]),
      phone: `01${faker.number.int({ min: 100000000, max: 999999999 })}`,
      academicYear: faker.helpers.arrayElement([
        "السنة الأولى",
        "السنة الثانية",
        "السنة الثالثة",
        "السنة الرابعة",
        "السنة الخامسة",
      ]),
      skills,
    };
  });

  await prisma.student.createMany({
    data: students,
  });

  console.log(`✅ تم إنشاء ${students.length} طالب بنجاح`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
