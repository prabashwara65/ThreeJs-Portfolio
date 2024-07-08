import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ id, name, description, date, demoLink, imageUrl }) => {
  const [isSelected, setIsSelected] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectRef.current && !projectRef.current.contains(event.target)) {
        setIsSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProjectClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <motion.div
      ref={projectRef}
      className={`text-sm md:text-base flex flex-col items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg transition-transform duration-300 cursor-pointer ${
        isSelected ? "scale-110" : ""
      }`}
      onClick={handleProjectClick}
      layout
      variants={item}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center justify-between w-full">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted sm:text-foreground">
          {new Date(date).toDateString()}
        </p>
      </div>
      {isSelected && (
        <div className="mt-2">
          {imageUrl && (
            <div className="mb-2">
              <Image
                src={imageUrl}
                alt={`${name} image`}
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          )}
          <p className="text-muted sm:inline-block">{description}</p>
          <Link href={demoLink} passHref>
            <motion.a
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
              layout
            >
              View Demo
            </motion.a>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectLayout;
