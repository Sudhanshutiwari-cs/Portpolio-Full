import React from 'react';
import CanvasCursor from '../components/mage-ui/cursor-effects/canvas-cursor-effect';
import Vault1 from '../components/Vault1';
import Vault2 from '../components/ui/Vault2';
import Vault3 from '../components/Vault3';
import TypingText from '../components/mage-ui/text/typing-text';

const Vault = () => {
  return (
    <>
      {/* Canvas Cursor Effect */}
      <div className="hidden md:block fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <CanvasCursor />
      </div>
<div className="absolute inset-0 bg-[url('public/images/hero.png')] opacity-10 z-0 bg-center bg-cover"></div>
      {/* Main Content Area */}
      <div className="w-screen min-h-[90vh] absolute top-20 flex flex-col items-center justify-between pt-6 px-4">
        
        {/* Vault Components - Responsive Flex Layout */}
        <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-center gap-6">
          <Vault1 />
          <Vault2 />
          <Vault3 />
        </div>

        {/* Full-width Footer */}
        <footer className="w-screen bg-gray-800 py-4 mt-10">
          <div className="flex justify-center">
            <p className="text-center text-yellow-400 text-sm">
              <TypingText text="> © 2025 All Copyright Reserved|Sudhanshu Tiwari" />
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Vault;
