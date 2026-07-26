// src/services/proyectosService.ts

import { supabase } from "./supabaseClient";

export type Proyecto = {
  id: number;
  titulo: string;
  descripcion: string;
  descripcion_corta: string;
  url_repo: string | null;
  url_demo: string | null;
  orden: number;
  tecnologias: { nombre: string }[];
  destacado: boolean;
};

export const getProyectos = async (): Promise<Proyecto[]> => {
  const { data, error } = await supabase
    .from("proyectos")
    .select("*, tecnologias(nombre)")
    .order("orden", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data as Proyecto[];
};
