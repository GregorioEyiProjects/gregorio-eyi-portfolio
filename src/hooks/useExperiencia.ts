//src/hooks/useExperiencia.ts

import { useQuery } from "@tanstack/react-query";
import {
  getExperiencias,
  type Experiencia,
} from "../services/experienciaService";

//QueryClientProvider
const useExperiencia = () => {
  return useQuery<Experiencia[], Error>({
    queryKey: ["experiencia"],
    queryFn: getExperiencias,
    staleTime: 1000 * 60 * 5,
  });
};

export default useExperiencia;
