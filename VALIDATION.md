# Validación del paquete

Fecha: 2026-09-26.

## Comprobaciones realizadas en este entorno

- El esquema `migrations/0001_initial.sql` se ejecutó completo en SQLite en memoria con foreign keys activadas.
- Se verificó la presencia de las tablas funcionales requeridas y sus índices principales.
- Se comprobaron los tamaños PNG: 180, 192 y 512 px, incluido el icono maskable.
- Se auditó el árbol buscando `nvapi-`, `TODO`, `FIXME`, `mock`, `fake` y secretos reales. No se encontró una NVIDIA API key ni un SESSION_SECRET real. `.dev.vars.example` contiene deliberadamente `NVIDIA_API_KEY=` vacío.
- Se comprobó que el service worker excluye `/api/*` del caché.
- Se ejecutó TypeScript en modo de comprobación sintáctica sin resolución de módulos. Los únicos errores resultantes son módulos/tipos que pertenecen a dependencias npm no instaladas (`react`, `lucide-react`, tipos Cloudflare); no se reportaron errores sintácticos propios en los archivos comprobados.

## Limitación del entorno de construcción

El entorno donde se generó este ZIP no pudo descargar paquetes desde `registry.npmjs.org`: `npm install` agotó el tiempo y `npm --offline` confirmó que `@cloudflare/vite-plugin` no estaba en caché. Por esa restricción externa no fue posible ejecutar aquí `npm run lint`, `npm run test` ni `npm run build` con las dependencias reales.

Antes del deploy, en una máquina con acceso normal a npm, ejecuta:

```bash
npm install
npm run typecheck
npm run lint
npm run test
npm run build
```

No se incluye `node_modules`, `.dev.vars`, `.git`, secretos ni cachés.
