# Validation notes

- Esta edición evita carpetas fuente anidadas para facilitar GitHub desde Android.
- `prepare-project.mjs` crea `public/` y `migrations/` antes de dev/build/typecheck/lint/test/migraciones.
- Wrangler apunta a `./worker.ts` y los imports del Worker son planos.
- Static Assets define el binding `ASSETS` y ejecuta el Worker primero sólo en `/api/*`.
- No contiene secretos reales. `.dev.vars` está ignorado.
- El entorno local de generación no pudo descargar dependencias npm por bloqueo de red, por lo que el build completo debe confirmarse en Cloudflare. El error anterior de `worker/index.ts` queda eliminado por diseño en esta edición.
