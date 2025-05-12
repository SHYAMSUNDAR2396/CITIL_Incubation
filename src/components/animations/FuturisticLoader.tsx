
import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticLoaderProps {
  size?: number;
  color?: string;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ size = 40, color = '#AD163A' }) => {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        variants={containerVariants}
        animate="animate"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            style={{
              width: `${size * 0.9}px`,
              height: `${size * 0.9}px`,
              borderRadius: '50%',
              borderTop: `${size/10}px solid ${color}`,
              borderLeft: `${size/10}px solid transparent`,
              borderRight: `${size/10}px solid transparent`,
              borderBottom: `${size/10}px solid transparent`,
            }}
          />
        </div>
        
        <div className="absolute inset-0 flex justify-center items-center">
          <motion.div
            animate={{
              rotate: -360,
              transition: { duration: 3, ease: "linear", repeat: Infinity }
            }}
            style={{
              width: `${size * 0.7}px`,
              height: `${size * 0.7}px`,
              borderRadius: '50%',
              borderBottom: `${size/15}px solid ${color}`,
              borderLeft: `${size/15}px solid transparent`,
              borderRight: `${size/15}px solid transparent`,
              borderTop: `${size/15}px solid transparent`,
            }}
          />
        </div>
        
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
            transition: { duration: 2, repeat: Infinity }
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `${size * 0.3}px`,
            height: `${size * 0.3}px`,
            backgroundColor: color,
            borderRadius: '50%'
          }}
        />
      </motion.div>
    </div>
  );
};

export default FuturisticLoader;
