import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { useEffect, useRef } from "react";

function App() {
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Força o repaint antes de iniciar a animação
    if (shadowRef.current) {
      void shadowRef.current.offsetWidth;
      shadowRef.current.style.animation = 'slideIn 1.5s ease-out forwards, pulseShadow 2s 1.5s infinite ease-in-out';
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
        <div className="w-full z-50 flex justify-between relative">
          {/* Elemento esquerdo */}
          <div className="w-72 h-10 bg-[#021017] relative overflow-hidden">
            <div className="absolute -bottom-7 -right-3 w-12 h-17 bg-[#ffffff] rotate-45"></div>
          </div>
          
          {/* Elemento central */}
          <div 
            ref={shadowRef}
            className="w-[1390px] h-[0.1px] relative overflow-hidden mr-4 z-10"
            style={{
              transform: 'translateX(-100%)',
              opacity: 0,
              boxShadow: '0 0 15px 5px rgba(251, 191, 36, 0.7)',
            }}
          ></div>
          
          {/* Elemento direito */}
          <div className="w-72 h-10 bg-[#021017] relative overflow-hidden">
            <div className="absolute -bottom-3 -left-5 w-16 h-10 bg-[#ffffff] rotate-45"></div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>

      <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 15px 5px rgba(251, 191, 36, 0.7);
          }
          50% {
            box-shadow: 0 0 25px 15px rgba(251, 191, 36, 0.9);
          }
        }
        
        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}

export default App;