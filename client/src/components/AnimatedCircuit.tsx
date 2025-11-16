import { motion } from "framer-motion";
import bmsImage from "@assets/generated_images/BMS_circuit_board_product_25789d1d.png";

export default function AnimatedCircuit() {
  // Circuit node positions
  const nodes = [
    { x: "20%", y: "30%", delay: 0 },
    { x: "80%", y: "40%", delay: 0.3 },
    { x: "50%", y: "70%", delay: 0.6 },
    { x: "30%", y: "60%", delay: 0.9 },
    { x: "70%", y: "20%", delay: 1.2 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background animated grid */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* BMS Product Image with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-4/5 max-w-md"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={bmsImage}
            alt="Battery Management System"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>
        
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              "0 0 20px rgba(var(--primary-rgb), 0.3)",
              "0 0 40px rgba(var(--primary-rgb), 0.5)",
              "0 0 20px rgba(var(--primary-rgb), 0.3)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Animated circuit nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          className="absolute w-3 h-3 bg-primary rounded-full"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: node.delay,
            ease: "easeInOut",
          }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 2.5],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <motion.path
          d="M 20% 30% Q 50% 40%, 80% 40%"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M 80% 40% Q 65% 55%, 50% 70%"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 1 }}
        />
        <motion.path
          d="M 50% 70% Q 40% 65%, 30% 60%"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
        />
      </svg>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
