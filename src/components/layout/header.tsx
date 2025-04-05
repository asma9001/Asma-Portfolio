import { useEffect, useState } from "react";
import { useTheme } from "next-themes"; // Import theme hook
import Image from "next/image";
import logoLight from "../../../public/images/logos/asma-logo.png";
import logoDark from "../../../public/images/logos/black-logo.png"; // Import the black logo

const Logo = () => {
  const { theme, resolvedTheme } = useTheme(); // Use the resolvedTheme to handle system preference
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until mounted

  const logoSrc = (theme === "light" || resolvedTheme === "light") ? logoLight : logoDark;

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={160} // Adjust as needed
      height={160}
      style={{ width: "40%", height: "40%" }}
    />
  );
};

export default Logo;
