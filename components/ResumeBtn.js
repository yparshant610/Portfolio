import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

const ResumeBtn = () => {
  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('/Resume_c.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.button
      onClick={handleResumeClick}
      className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative select-none active:scale-95 whitespace-nowrap min-h-[48px] z-10 cursor-pointer"
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
    </motion.button>
  );
};

export default ResumeBtn;
