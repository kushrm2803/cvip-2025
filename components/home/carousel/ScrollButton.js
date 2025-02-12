"use client";

const ScrollButton = ({ targetId, children, className, color }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  let bgColorClass, hoverBgColorClass, textColorClass;

  if (color === "white") {
    bgColorClass = "bg-white";
    hoverBgColorClass = "hover:bg-gray-400";
    textColorClass = "text-black";
  } else {
    bgColorClass = `bg-${color}-600`;
    hoverBgColorClass = `hover:bg-${color}-500`;
    textColorClass = "text-white";
  }

  return (
    <button
      onClick={scrollToSection}
      className={`${bgColorClass} ${textColorClass} px-6 py-3 rounded-lg text-lg font-semibold ${hoverBgColorClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
