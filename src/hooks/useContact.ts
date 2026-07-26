//src/hooks/useContact.ts

import {
  useState,
  useEffect,
  type ChangeEvent,
  type SyntheticEvent,
} from "react";
import { validateForm } from "../utils/formMethods";
import { sendContactEmail } from "../services/sendContactEmail";

type FormStatus = "idle" | "loading" | "success" | "error";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const useContact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const timer = setTimeout(() => {
      setStatus("idle");
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Clear previous errors
    setErrors({});
    setStatus("loading");

    //send email
    try {
      await sendContactEmail(formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";
      setErrors({ form: errorMessage });
      setStatus("error");
    }
  };

  return {
    status,
    errors,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContact;
