# FamilyOS — despliegue desde Android (GitHub + Cloudflare)

Esta edición está preparada para subir desde el celular: **todos los archivos que debes subir a GitHub están en la raíz**. Durante el build, `prepare-project.mjs` crea automáticamente `public/` y `migrations/`.

## 1. Subir a GitHub
1. Descomprime `FamilyOS-GitHub-Mobile.zip` en Android.
2. Abre tu repositorio de GitHub.
3. Elimina los archivos incompletos del intento anterior o usa un repositorio nuevo.
4. Toca **Add file → Upload files**.
5. Selecciona **todos los archivos extraídos** de una sola vez y confirma el commit.
6. Comprueba que en la raíz aparezcan `worker.ts`, `App.tsx`, `main.tsx`, `package.json` y `wrangler.jsonc`.

## 2. Crear D1
En Cloudflare abre **Storage & databases → D1 → Create** y crea `familyos-db`.
Copia el `database_id`. En GitHub abre `wrangler.jsonc`, reemplaza `REPLACE_WITH_D1_DATABASE_ID` por ese ID y guarda el commit.

## 3. Crear R2
En Cloudflare abre **R2 Object Storage → Create bucket** y crea exactamente `familyos-files`.

## 4. Conectar GitHub a Workers
Cloudflare → **Workers & Pages → Create application → Import a repository** → selecciona tu repo.
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

## 5. Secrets
En el Worker: **Settings → Variables and Secrets**.
Crea como secretos:
- `NVIDIA_API_KEY` = tu clave NVIDIA
- `SESSION_SECRET` = una cadena aleatoria larga (mínimo 32 caracteres)

No pongas ninguna de esas claves en GitHub.

## 6. Migraciones
La forma más sencilla es usar Cloudflare D1 Console y ejecutar el contenido de `0001_initial.sql` una vez. `0002_categories.sql` no inserta datos y puede ejecutarse después.
Si tienes una terminal, también puedes usar `npm run db:migrate:remote`.

## 7. Deploy
Haz un nuevo commit o pulsa Retry deployment. Al terminar Cloudflare mostrará una URL `*.workers.dev`.
