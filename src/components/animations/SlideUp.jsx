import { motion } from "framer-motion";

const SlideUp = ({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once }}
    transition={{
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    }}
    className={`will-change-transform transform-gpu ${className}`}
  >
    {children}
  </motion.div>
);

export default SlideUp;
