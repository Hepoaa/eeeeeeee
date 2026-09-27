# Desplegar FamilyOS en Cloudflare — paso a paso

## Paso 1. Instala Node.js

Instala Node.js 22 LTS o una versión más nueva desde el sitio oficial de Node.js.

## Paso 2. Descomprime FamilyOS

Descomprime `FamilyOS-Cloudflare.zip` en una carpeta fácil de encontrar.

## Paso 3. Abre una terminal en la carpeta

En Windows puedes abrir PowerShell dentro de la carpeta. Comprueba:

```bash
node -v
npm -v
```

## Paso 4. Instala dependencias

```bash
npm install
```

## Paso 5. Inicia sesión en Cloudflare

```bash
npx wrangler login
```

Se abrirá el navegador. Autoriza Wrangler.

## Paso 6. Crea la base de datos D1

```bash
npx wrangler d1 create familyos-db
```

Copia el `database_id` que aparezca.

Abre `wrangler.jsonc` y reemplaza exactamente:

```text
REPLACE_WITH_D1_DATABASE_ID
```

por el ID que Cloudflare te dio. No cambies el binding `DB`.

## Paso 7. Crea el bucket R2 privado

```bash
npx wrangler r2 bucket create familyos-files
```

No habilites acceso público. El binding `FAMILYOS_FILES` ya está configurado.

## Paso 8. Configura los secrets

### NVIDIA

```bash
npx wrangler secret put NVIDIA_API_KEY
```

Cuando Wrangler lo solicite, pega **tu propia** NVIDIA API key. La clave no debe guardarse en ningún archivo del proyecto.

### Sesiones

Genera un valor aleatorio:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

Copia el resultado y ejecuta:

```bash
npx wrangler secret put SESSION_SECRET
```

Pega el valor cuando Wrangler lo pida.

## Paso 9. Aplica las migraciones

```bash
npm run db:migrate:remote
```

Confirma cuando Wrangler pregunte.

## Paso 10. Verifica el proyecto

```bash
npm run typecheck
npm run test
npm run build
```

Si todo termina correctamente, continúa.

## Paso 11. Despliega

```bash
npm run deploy
```

Al final Wrangler mostrará la URL del Worker, normalmente parecida a:

```text
https://familyos.<tu-subdominio>.workers.dev
```

Abre esa URL. La primera visita mostrará el onboarding para crear la familia y el propietario.

## Paso 12. Instálalo como app

Dentro de FamilyOS usa **Instalar FamilyOS** cuando esté disponible. En iPhone/iPad la app mostrará la guía de “Agregar a pantalla de inicio”.

## Actualizaciones futuras

Después de modificar el código:

```bash
npm run typecheck
npm run test
npm run build
npm run deploy
```

Si agregas una nueva migración, aplícala antes del deploy:

```bash
npm run db:migrate:remote
```
