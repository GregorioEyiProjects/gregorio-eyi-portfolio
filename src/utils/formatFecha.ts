export const formatFecha = (fechaISO: string): string => {
  const fecha = new Date(fechaISO);
  return fecha.toLocaleDateString("es-ES", { month: "short", year: "numeric" });
};
