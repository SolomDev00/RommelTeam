"use client";

import { motion } from "framer-motion";
import SkillCard from "./SkillsCard";
import PartnerLogo from "./PartnerLogo";
import TeamMemberCard from "./TeamMemberCard";
import Logo from "@/../public/images/logo.png";

const LandingSection = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Rommel Technical Team
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            فريق تقني متخصص يجمع بين الذكاء الاصطناعي والمهارات التقنية
            والقيادية
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              انضم إلينا
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">المؤسسون</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="إسلام وائل"
              role="مؤسس الفريق - مهندس برمجيات"
              experience="5+ سنوات خبرة"
              image={Logo}
            />
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">شركاؤنا</h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <PartnerLogo src={Logo} alt="جامعة حورس" width={180} height={80} />
            <PartnerLogo src={Logo} alt="مايكروسوفت" width={180} height={80} />
            <PartnerLogo
              src={Logo}
              alt="كلية الذكاء الاصطناعي"
              width={180}
              height={80}
            />
          </div>
        </div>
      </div>
      <div className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">ما نقدمه</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard
            title="المهارات التقنية"
            skills={["تطوير الويب", "الذكاء الاصطناعي", "تحليل البيانات"]}
            icon="💻"
          />
          <SkillCard
            title="المهارات القيادية"
            skills={["العمل الجماعي", "إدارة المشاريع", "التواصل الفعال"]}
            icon="👥"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
