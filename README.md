# Gregorio Eyi — Portfolio

Portfolio personal con un concepto propio: la interfaz imita la pantalla de inicio de un smartphone. Cada "app" es una sección de navegación (Sobre mí, Proyectos, Experiencia, Stack, Contacto) que se abre con una transición, manteniendo la metáfora sin sacrificar usabilidad ni accesibilidad.

**En producción:** [https://www.gregorioeyi.dev]

---

## Sobre el proyecto

Web personal construida desde cero: concepto, diseño, sistema de tokens, arquitectura, base de datos y despliegue. El contenido de Proyectos y Experiencia se sirve dinámicamente desde Supabase, de modo que actualizarlo no requiere volver a desplegar. El formulario de contacto envía emails reales.

La metáfora de "home screen" se sostiene con patrones de interacción (grid de iconos, dock, transición de apertura) en lugar de dibujar la carcasa física de un móvil, lo que permite que el contenido de cada sección se lea con comodidad tanto en móvil como en escritorio.

---

## Stack técnico

| Área               | Tecnología                              |
| ------------------ | --------------------------------------- |
| Frontend           | React + TypeScript + Vite               |
| Estilos            | Tailwind CSS v4 (tokens propios)        |
| Datos              | Supabase (PostgreSQL con RLS)           |
| Estado de servidor | TanStack Query (React Query)            |
| Email              | EmailJS                                 |
| Iconos             | lucide-react, simple-icons, react-icons |
| Hosting            | Vercel                                  |

---

## Funcionalidades

- Home screen tipo smartphone con grid de iconos y dock inferior fijo
- Modo claro/oscuro con toggle, persistencia y detección de la preferencia del sistema
- Secciones que se abren en un overlay con transición, navegables por teclado (Tab, Escape) y con gestión de foco
- Proyectos y Experiencia cargados dinámicamente desde Supabase
- Relación muchos-a-muchos entre proyectos y tecnologías
- Formulario de contacto con validación y envío real de emails
- Widget de "proyecto destacado" y widget de disponibilidad
- Descarga de CV en PDF
- Diseño responsive, del móvil al escritorio

---

## Arquitectura

El proyecto sigue una separación de responsabilidades por capas:

```
src/
├── components/
│   ├── layout/      # cáscara de la home: Identity, Dock, SectionOverlay, widgets
│   ├── sections/    # contenido de cada sección
│   └── common/      # AppIcon, InputComponent, ThemeToggle, TechIcon...
├── hooks/           # useSectionNavigation, useTheme, useProyectos, useExperiencia, useContact
├── services/        # acceso a datos y APIs (supabaseClient, servicios por entidad, EmailJS)
├── utils/           # funciones auxiliares (formateo de fechas, validación)
└── index.css        # tokens de diseño y estilos globales
```

**Criterio seguido:** los servicios no conocen React, los hooks no hablan directamente con las APIs externas desde los componentes, y los componentes no contienen lógica de datos. La cáscara de interacción (`layout/`) se separa del contenido (`sections/`), de modo que la metáfora del móvil y las secciones evolucionan de forma independiente.

---

## Modelo de datos

Tablas en Supabase, todas con Row Level Security y política de lectura pública:

| Tabla                 | Campos principales                                                               |
| --------------------- | -------------------------------------------------------------------------------- |
| `proyectos`           | id, titulo, descripcion, descripcion_corta, url_repo, url_demo, orden, destacado |
| `tecnologias`         | id, nombre (único)                                                               |
| `proyecto_tecnologia` | proyecto_id (FK), tecnologia_id (FK) — PK compuesta                              |
| `experiencias`        | id, puesto, empresa, descripcion, fecha_inicio, fecha_fin, orden                 |

Un proyecto puede usar varias tecnologías y una tecnología aparece en varios proyectos: es una relación muchos-a-muchos, resuelta con una tabla intermedia y clave primaria compuesta que impide vínculos duplicados.

---

## Decisiones técnicas

**Tokens de diseño en dos capas.** Las variables "crudas" cambian de valor según el tema (`:root` y `[data-theme="light"]`); el bloque `@theme` de Tailwind apunta a ellas con `var()`. Así las clases de utilidad funcionan igual en ambos modos, porque quien cambia es la variable de abajo, no la clase.

**Modo claro/oscuro sin parpadeo.** Un script inline en el `<head>` lee la preferencia guardada (o la del sistema) y aplica el tema antes del primer pintado, evitando el flash de tema incorrecto (FOUC) al recargar.

**Estado de servidor con React Query.** Las consultas a Supabase se cachean con revalidación controlada por `staleTime`, en lugar de repetir la petición cada vez que se abre una sección. Los servicios se mantienen como funciones puras que devuelven datos o lanzan, sin acoplarse a React.

**Relación muchos-a-muchos normalizada.** El nombre único en `tecnologias` garantiza integridad (no hay "React" y "react" duplicados) y el modelo permite filtrar proyectos por tecnología en el futuro.

**Seguridad en la capa de datos.** Las políticas RLS se definen en la base de datos, no en el cliente. La clave anónima de Supabase es pública por diseño; lo que protege los datos es el RLS.

**Accesibilidad.** Navegación por teclado en las secciones (foco gestionado al abrir, cierre con Escape), etiquetas ARIA en los controles solo-icono, y respeto por `prefers-reduced-motion`.

---

## Desarrollo local

```bash
npm install
npm run dev
```

Requiere un archivo `.env` con:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

---

## Autor

**Gregorio Eyi** — [GitHub](https://github.com/GregorioEyiProjects) · [LinkedIn](https://www.linkedin.com/in/gregorio-eyi-ipico-ngui-973301192/)
