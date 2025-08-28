'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedText() {
  const words = ['drives revenue', 'scales easily'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 6000); // 每6秒切换一次（原来为3秒）

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.span
      key={currentWordIndex}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 1.2, ease: 'easeOut' }} // 延长淡入淡出时长
      className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
    >
      {words[currentWordIndex]}
    </motion.span>
  );
}