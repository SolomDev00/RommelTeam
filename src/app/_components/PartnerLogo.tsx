/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import Image from "next/image";

const PartnerLogo = ({ src, alt, width, height }: any) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="opacity-80 hover:opacity-100 transition-opacity"
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="object-contain"
    />
  </motion.div>
);

export default PartnerLogo;
