// src/utils/formMethods.ts
import { type FormData } from "../hooks/useContact";

export const validateForm = ({ name, email, message }: FormData) => {
  const errors = {} as Record<string, string>;

  // Validar nombre
  if (!name.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "El email no es válido";
  }

  if (!message.trim()) {
    errors.message = "El mensaje es obligatorio";
  }

  return errors;
};
