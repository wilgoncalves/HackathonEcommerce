import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollingBanner = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      x: -scrollY,
      transition: { type: "tween", ease: "linear" },
    });
  }, [scrollY, controls]);

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        animate={controls}
        className="flex whitespace-nowrap text-xl font-bold text-whiteNormal"
      >
        <span>
          {" "}
          PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS - QUALIDADE -
        </span>
        <span>
          {" "}
          PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS - QUALIDADE -
        </span>
        <span>
          {" "}
          PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS - QUALIDADE -
        </span>
        <span>
          {" "}
          PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS - QUALIDADE -
        </span>
        <span>
          {" "}
          PEDIDO ONLINE - ENTREGA RÁPIDA - PRODUTOS FRESCOS - QUALIDADE -
        </span>
      </motion.div>
    </div>
  );
};

export default ScrollingBanner;
