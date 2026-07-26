//src/services/experienciaService.ts

import { supabase } from "./supabaseClient";

export type Experiencia = {
  puesto: string;
  empresa: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin: string | null;
  orden: number;
};

export const getExperiencias = async (): Promise<Experiencia[]> => {
  const { data, error } = await supabase
    .from("experiencia")
    .select("*")
    .order("orden", { ascending: true });

  if (error) {
    console.error("Error fetching experiencias:", error);
    throw new Error(error.message);
  }

  return data as Experiencia[];
};
