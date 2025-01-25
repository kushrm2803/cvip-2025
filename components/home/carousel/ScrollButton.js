"use client";

const ScrollButton = ({ targetId, children, className }) => {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={`bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold ${className}`}
      onClick={scrollToSection}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
