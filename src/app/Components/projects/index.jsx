"use client"
import React, { useState } from 'react';
import ProjectLayout from './ProjectLayout';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

const ProjectList = ({ projects }) => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(selectedProjectId === projectId ? null : projectId);
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className='w-full max-w-4xl px-16 space-y-8 flex flex-col items-center z-20'
    >
      {projects.map((project, index) => (
        <ProjectLayout 
          key={index}
          {...project}
          isSelected={selectedProjectId === project.id}
          onClick={() => handleProjectClick(project.id)}
        />
      ))}
    </motion.div>
  );
}

export default ProjectList;
