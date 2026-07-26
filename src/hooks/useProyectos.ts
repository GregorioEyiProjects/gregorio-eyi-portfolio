// src/hooks/useProyectos.ts

//import { useState, useEffect } from "react";
import { getProyectos, type Proyecto } from "../services/proyectosService";
import { useQuery } from "@tanstack/react-query";

// Con QueryClientProvider para manejar el estado de la consulta y el almacenamiento en caché
const useProyectos = () => {
  return useQuery<Proyecto[], Error>({
    queryKey: ["proyectos"],
    queryFn: getProyectos,
    staleTime: 1000 * 60 * 5, // 5 minutos
  });
};

/* 
// Sin QueryClientProvider
const useProyectosWithoutQueryClient = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const proyectosData: Proyecto[] = await getProyectos();
        setProyectos(proyectosData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchProyectos();
  }, []);

  return { proyectos, loading, error };
};
*/
export default useProyectos;
