<div align="center">
  <img src="./Assets/marta_caula.jpeg" alt="Marta Caula" width="320" />
</div>

# Portfolio — Marta Caula

Portfolio web interactivo para presentar proyectos, fotografía y piezas visuales.

## Stack

- React + TypeScript + Vite
- Animaciones: Framer Motion
- Iconos: Lucide

## Ejecutar en local

**Requisitos:** Node.js (recomendado 18+)

1. Instalar dependencias:

```bash
pnpm install
```

2. Arrancar en desarrollo:

```bash
pnpm dev
```

La app se sirve por defecto en `http://localhost:3000`.

## Build y preview

```bash
pnpm build
pnpm preview
```

## Variables de entorno (opcional)

Si activas funcionalidades que consumen APIs externas, puedes definir variables en `.env.local`.

- `GEMINI_API_KEY`: clave para funciones basadas en Gemini (si se usan en la app).
