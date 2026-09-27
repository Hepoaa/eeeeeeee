# FamilyOS — GitHub Mobile Edition

> Si despliegas desde Android, empieza por `DEPLOY-ANDROID.md`. Esta variante mantiene los archivos fuente en la raíz para evitar que GitHub móvil omita carpetas.

# FamilyOS — Cloudflare

FamilyOS es una PWA privada para administrar dinero, pagos, metas, compras, tareas, eventos, documentos y un asistente familiar llamado Nemo. El frontend es React + TypeScript + Vite + Tailwind CSS y el backend es un Cloudflare Worker con D1 y R2.

## Arquitectura

- Navegador/PWA → Worker `/api/*` → D1/R2.
- Nemo: Navegador → FamilyOS Worker → NVIDIA API. La clave NVIDIA nunca llega al navegador.
- Sesiones: cookie `HttpOnly`, `Secure`, `SameSite=Strict`; el token sólo se guarda hasheado en D1.
- Contraseñas: PBKDF2-SHA-256 con salt aleatorio individual.
- Dinero: centavos enteros, nunca floating point en persistencia.
- Documentos: R2 privado; se sirven únicamente por una ruta autenticada del Worker.

## Requisitos

- Node.js 22 o superior recomendado.
- npm.
- Cuenta de Cloudflare.
- Wrangler (se instala como dependencia del proyecto).
- Una NVIDIA API key sólo si quieres Nemo/visión.

## Desarrollo local

```bash
npm install
cp .dev.vars.example .dev.vars
npm run db:migrate:local
npm run dev
```

En `.dev.vars` puedes colocar claves **sólo para desarrollo local**. Ese archivo está ignorado por Git.

## Crear D1

```bash
npx wrangler login
npx wrangler d1 create familyos-db
```

Cloudflare mostrará un `database_id`. Abre `wrangler.jsonc` y reemplaza:

```text
REPLACE_WITH_D1_DATABASE_ID
```

por ese ID.

Aplica migraciones remotas:

```bash
npm run db:migrate:remote
```

## Crear R2

```bash
npx wrangler r2 bucket create familyos-files
```

El binding ya se llama `FAMILYOS_FILES` en `wrangler.jsonc`.

## Secrets de producción

```bash
npx wrangler secret put NVIDIA_API_KEY
npx wrangler secret put SESSION_SECRET
```

Wrangler te pedirá el valor de cada secret. No pegues el valor dentro del comando, el código ni `wrangler.jsonc`.

Genera `SESSION_SECRET` con un gestor de contraseñas o con, por ejemplo:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Los modelos configurables están en variables no secretas de Wrangler:

- `NVIDIA_TEXT_MODEL=nvidia/nemotron-3.5-lightning-30b-a3b`
- `NVIDIA_VISION_MODEL=nvidia/nemotron-3-nano-omni-30b-a3b-reasoning`

Si tu cuenta no tiene acceso al modelo visual, la lectura de tickets fallará de forma aislada; el resto de FamilyOS y Nemo de texto seguirán funcionando. Puedes quitar o dejar vacío `NVIDIA_VISION_MODEL` para desactivar esa función.

## Calidad

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Deploy

```bash
npm run deploy
```

Consulta `DEPLOY-CLOUDFLARE.md` para una guía paso a paso.

## Demo local opcional

Después de aplicar la migración local puedes ejecutar:

```bash
npm run seed:demo
```

Credenciales locales del seed:

- Usuario: `demo@familyos.local`
- Contraseña: `DemoFamilyOS!`

**No ejecutes `seed:demo` en producción.** El script está separado y nunca corre automáticamente.

## Estructura

```text
src/             React/PWA
worker/          API Worker, auth, D1, IA y servicios
migrations/      Esquema D1 + seed local opcional
public/          Manifest, service worker e iconos PWA
tests/           Pruebas de lógica crítica
docs .md         Deploy, instalación y pruebas manuales
```

## Seguridad operativa

- FamilyOS no conecta bancos automáticamente.
- R2 no debe configurarse como bucket público.
- No expongas `.dev.vars` ni secrets.
- Usa HTTPS (Cloudflare lo hace en el dominio de Workers).
- Owner/Admin deben revisar periódicamente el historial de auditoría.
