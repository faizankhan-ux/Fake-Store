import React from 'react';

const Loader = () => {
     return (
          <div className="fixed inset-0 w-screen h-screen bg-[#777]/80 flex items-center justify-center z-[9999]">
               <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
     );
};

export default Loader;
