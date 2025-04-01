/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMemberCard = ({ name, role, experience, image }: any) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
  >
    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>
    <h3 className="text-xl font-bold text-center">{name}</h3>
    <p className="text-gray-600 text-center">{role}</p>
    <p className="text-blue-500 text-center mt-2">{experience}</p>
  </motion.div>
);

export default TeamMemberCard;
