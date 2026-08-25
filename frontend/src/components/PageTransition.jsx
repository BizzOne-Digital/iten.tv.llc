import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0, transition: { delay: 0.5 } }}
        exit={{ scaleX: 1 }}
        style={{ originX: 0 }}
        className="fixed inset-0 z-[999] bg-brand-red pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
