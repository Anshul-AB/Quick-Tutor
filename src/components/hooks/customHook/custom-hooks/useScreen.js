import { useEffect, useState } from "react";

export default function useScreen() {
  const [screenSize, setScreenSize] = useState("");

  const checkScreenSize = () => {
    if (window.innerWidth > 992) {
      return setScreenSize("Large");
    }
    if (window.innerWidth < 992 && window.innerWidth > 600) {
      return setScreenSize("Medium");
    }
    if (window.innerWidth < 600) {
      return setScreenSize("Small");
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  },[]);

  return [screenSize];
}
