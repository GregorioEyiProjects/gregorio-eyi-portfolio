// src/components/sections/AboutSection.tsx
const AboutSection = () => {
  return (
    <div className="mt-6 pb-4 space-y-4 text-text-secondary leading-relaxed text-sm md:text-md">
      <div className="w-full flex justify-center">
        <img
          src="/profile.jpg"
          alt="Gregorio Eyi"
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>
      <div>
        <p className="text-text-primary font-semibold ">
          Soy Gregorio Eyi, desarrollador full-stack.
        </p>
        <p>
          Soy de Guinea Ecuatorial. Tuve mi primer contacto con la programación
          en España, y ahí entendí su potencial: no solo como profesión, sino
          como una herramienta para acercar la tecnología a personas con poco
          acceso a ella.
        </p>
        <p>
          Ahora busco consolidar lo aprendido y crecer dentro de un equipo donde
          pueda aportar de verdad y seguir mejorando.
        </p>
        <p>
          Estoy terminando un máster en mercados financieros, lo que me da una
          base para trabajar en productos donde la tecnología y las finanzas se
          cruzan
        </p>
        <p>
          Me interesa especialmente el desarrollo web y móvil. Actualmente
          trabajo con React, React Native, TypeScript y Supabase.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
