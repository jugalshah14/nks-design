import { motion } from "framer-motion";

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  once = true,
  className = "",
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once, margin: "-50px 0px -50px 0px" }}
    transition={{ duration, delay, ease: "easeOut" }}
    className={`will-change-opacity ${className}`}
  >
    {children}
  </motion.div>
);

export default FadeIn;
