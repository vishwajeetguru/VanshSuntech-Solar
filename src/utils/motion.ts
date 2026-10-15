import { motion, AnimatePresence } from 'motion/react';

/**
 * Reusable motion configuration and animation variants for VNSH SunTech
 * Standardized easing, timings, and viewport triggers
 */

export const transitionStandard = {
  duration: 0.5,
  ease: [0.16, 1, 0.3, 1], // Custom smooth cubic bezier
};

export const transitionFast = {
  duration: 0.25,
  ease: [0.16, 1, 0.3, 1],
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionStandard,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionStandard,
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionStandard,
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionStandard,
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionStandard,
  },
};

export const defaultViewport = {
  once: true,
  margin: '-60px',
};
