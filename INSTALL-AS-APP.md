# Instalar FamilyOS como app

FamilyOS es una PWA. Debe abrirse desde una URL HTTPS desplegada en Cloudflare.

## Android / Chrome

1. Abre FamilyOS en Chrome.
2. Dentro de FamilyOS toca **Instalar FamilyOS** cuando aparezca.
3. Acepta **Instalar**.
4. Ábrelo desde tu pantalla de inicio.

Si Chrome no muestra el botón todavía, abre el menú `⋮` y busca **Instalar app** o **Agregar a pantalla principal**.

## iPhone / iPad / Safari

Safari no usa `beforeinstallprompt`. FamilyOS detecta iPhone/iPad y muestra estas instrucciones:

1. Toca **Compartir**.
2. Toca **Agregar a pantalla de inicio**.
3. Confirma **Agregar**.

Después se abrirá en modo independiente, sin la barra normal del navegador.

## Windows

1. Abre FamilyOS con Chrome o Edge.
2. Usa el botón **Instalar FamilyOS**, o el icono de instalación de la barra de direcciones.
3. Confirma la instalación.
4. FamilyOS aparecerá como una aplicación en Inicio.

## macOS

En Chrome/Edge usa **Instalar FamilyOS**. En Safari compatible, utiliza **Agregar al Dock** si esa opción está disponible.

## Offline

El service worker sólo cachea el shell y recursos estáticos apropiados. No guarda en caché respuestas privadas de `/api/*`, sesiones, tokens ni datos financieros.
