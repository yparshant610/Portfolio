import { Sora } from "@next/font/google";
import { useState, useEffect, useRef } from 'react';
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const layoutRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = layoutRef.current;
      if (!container) return;

      const currentScrollY = container.scrollTop;

      if (window.innerWidth < 1280) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    const container = layoutRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={layoutRef}
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative overflow-y-auto`}
    >
      <TopLeftImg />
      <Nav visible={visible} />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
