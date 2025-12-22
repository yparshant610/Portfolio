import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const ResumeBtn = () => {
  return (
    <motion.a
      href="/Resume_c.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
      }}
      initial="hidden"
      animate="show"
    >
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
        Resume
      </span>
      <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
    </motion.a>
  );
};

export default ResumeBtn;
