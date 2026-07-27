// src/components/sections/ProfilePhoto.tsx

import { useState, useEffect, useRef } from "react";

const ProfilePhoto = () => {
  const [ampliada, setAmpliada] = useState(false);

  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ampliada && lightboxRef.current) {
      lightboxRef.current.focus();
    }
  }, [ampliada]);

  return (
    <div className="w-full flex justify-center ">
      <button onClick={() => setAmpliada(true)} className="">
        <img
          src="/profile.png"
          alt="Gregorio Eyi"
          className="w-40 h-40 rounded-full object-cover"
        />
      </button>

      {/* Lightbox */}
      <div
        ref={lightboxRef}
        onClick={() => setAmpliada(false)}
        className={`fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4   transition-opacity duration-200 ${ampliada ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <img
          src="/profile.png"
          alt="Gregorio Eyi"
          className={`max-w-full max-h-full rounded-2xl transition-transform duration-200 ${
            ampliada ? "scale-100" : "scale-95"
          }`}
          onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el lightbox
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
