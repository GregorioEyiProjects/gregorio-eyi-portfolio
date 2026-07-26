// src/components/sections/ContactSection.tsx

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import useContactForm from "../../hooks/useContact";
import InputComponent from "../common/InputComponent";
import ButtonComponent from "../common/ButtonComponent";

const LINKS = [
  {
    label: "Email",
    value: "gregorioeyi@gmail.com",
    href: "mailto:gregorioeyi@gmail.com",
    icon: <Mail size={20} />,
  },
  {
    label: "LinkedIn",
    value: "in/gregorio-eyi",
    href: "https://www.linkedin.com/in/gregorio-eyi-ipico-ngui-973301192/",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    label: "GitHub",
    value: "GregorioEyiProjects",
    href: "https://github.com/GregorioEyiProjects",
    icon: <FaGithub size={20} />,
  },
];

const ContactSection = () => {
  const { status, errors, formData, handleChange, handleSubmit } =
    useContactForm();

  return (
    <div className="mt-6 space-y-4 ">
      {LINKS.map(({ label, value, href, icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="group flex items-center gap-4 bg-surface border border-border rounded-card p-4 hover:border-accent transition-colors duration-200"
        >
          <span className="text-text-secondary group-hover:text-accent transition-colors">
            {icon}
          </span>
          <div className="flex flex-col">
            <p className="text-base font-medium text-text-primary">{label}</p>
            <p className="text-sm text-text-secondary ">{value}</p>
          </div>
        </a>
      ))}

      <div className="mt-10">
        <p className="mb-4 text-text-secondary">
          O también puedes dejarme un mensaje directamente!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputComponent
            label="Nombre"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />
          <InputComponent
            label="Email"
            name="email"
            placeholder="Tu email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputComponent
            label="Mensaje"
            name="message"
            type="textarea"
            placeholder="Tu mensaje"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          {status === "success" && (
            <p className="text-accent text-sm">Mensaje enviado con éxito.</p>
          )}
          {status === "error" && (
            <p className="text-accent text-sm">
              Ocurrió un error al enviar el mensaje. Por favor, inténtalo de
              nuevo.
            </p>
          )}

          {status === "loading" ? (
            <div className="flex items-center gap-2 border-accent text-text-secondary text-sm">
              <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <span className="">Enviando mensaje...</span>
            </div>
          ) : (
            <ButtonComponent
              className="bg-surface border border-border rounded-card px-4 py-2 text-sm font-mono hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
              text="Enviar mensaje"
              type="submit"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
