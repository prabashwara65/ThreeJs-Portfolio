import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLayout = ({ id, name, description, date, demoLink, imageUrl, isSelected, onClick }) => {
  return (
    <motion.div 
      className={`text-sm md:text-base flex flex-col items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg transition-transform duration-300 cursor-pointer ${
        isSelected ? "scale-110" : ""
      }`}
      onClick={onClick}
      layout
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
              <Image src={imageUrl} alt={`${name} image`} width={600} height={400} className="rounded-lg" />
            </div>
          )}
          <p className="text-muted sm:inline-block">{description}</p>
          <Link href={demoLink} target="_blank" className="text-blue-500 underline">
            View Demo
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectLayout;
