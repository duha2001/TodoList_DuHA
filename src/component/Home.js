import React, { useEffect } from "react";
import { motion } from "framer-motion";
function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thông tin";
  }, []);

  return (
    <div className="Home">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo List - DuHA HCMUE
      </motion.h1>
      <h3 className="home-name">Huỳnh Anh Dự - 4501104041</h3>
    </div>
  );
}

export default Home;
