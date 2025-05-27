import { motion } from "framer-motion";

const StaggerList = ({
  children,
  stagger = 0.1,
  once = true,
  className = "",
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        when: "beforeChildren",
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "0px 0px -100px 0px" }}
      className={`space-y-2 ${className}`}
    >
      {React.Children.map(children, (child, i) => (
        <motion.li key={i} variants={item} className="will-change-transform">
          {child}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default StaggerList;
