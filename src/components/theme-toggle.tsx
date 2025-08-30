'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isLight = theme === 'light';
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        'p-2 rounded-full shadow bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white transition-colors',
        className,
      )}
      onClick={() => setTheme(isLight ? 'dark' : 'light')}
      aria-label="Toggle theme"
    >
      {isLight ? '🌙' : '☀️'}
    </motion.button>
  );
}
