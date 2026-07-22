import React from 'react';

const Loader = ({ className = 'h-8 w-8 border-primary' }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div className={`animate-spin rounded-full border-t-2 border-b-2 ${className}`}></div>
    </div>
  );
};

export default Loader;