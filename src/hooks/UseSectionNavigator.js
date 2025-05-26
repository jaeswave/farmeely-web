import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const UseSectionNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [pendingSection, setPendingSection] = useState(null);

  useEffect(() => {
    if (pendingSection && location.pathname === "/") {
      const id = pendingSection.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setPendingSection(null);
    }
  }, [location, pendingSection]);

  const handleNavigate = (path) => {
    if (path.startsWith("#")) {
      if (location.pathname === "/") {
        const id = path.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setPendingSection(path);
        navigate("/");
      }
    } else {
      navigate(path);
    }
  };

  return handleNavigate;
};

export default UseSectionNavigator;
