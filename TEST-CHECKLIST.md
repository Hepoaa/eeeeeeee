# FamilyOS — checklist manual antes de producción

## Móvil

- [ ] Probar 320 px de ancho.
- [ ] Probar Android/Chrome.
- [ ] Probar iPhone/Safari.
- [ ] Verificar safe areas y navegación inferior.
- [ ] Teclado no tapa controles críticos.
- [ ] Botones táctiles principales son cómodos (~44 px o más).

## Desktop / tablet

- [ ] Sidebar visible en desktop.
- [ ] Navegación sin solapamientos.
- [ ] Tablas/listas se adaptan sin cortar contenido esencial.

## Auth

- [ ] Onboarding sólo aparece antes de crear el primer usuario.
- [ ] Login correcto.
- [ ] Login incorrecto muestra mensaje claro.
- [ ] Muchos intentos fallidos activan bloqueo temporal.
- [ ] Logout invalida la sesión.
- [ ] “Mantener sesión iniciada” funciona.
- [ ] Cambiar contraseña cierra otras sesiones.

## Roles y aislamiento

- [ ] Owner puede gestionar roles.
- [ ] Admin no puede modificar Owner.
- [ ] Adult no accede a auditoría ni roles.
- [ ] Member no puede crear gastos.
- [ ] Verificar con dos familias de prueba que Familia A no puede leer/editar IDs de Familia B.

## Gastos e ingresos

- [ ] Crear gasto.
- [ ] Editar gasto.
- [ ] Eliminar gasto exige confirmación.
- [ ] Buscar y filtrar gastos.
- [ ] Adjuntar foto/PDF a un gasto.
- [ ] Crear ingreso.
- [ ] Exportar gastos/ingresos CSV.
- [ ] Importar CSV usando mapeo y preview.

## Presupuestos

- [ ] Guardar presupuesto mensual.
- [ ] Ver porcentaje y restante.
- [ ] Ver estado cerca del límite / sobrepasado.
- [ ] Ver proyección mensual con lenguaje no garantizado.

## Pagos / suscripciones / cuentas / deudas

- [ ] Crear pago recurrente.
- [ ] Marcar pagado.
- [ ] Crear gasto automáticamente al pagar.
- [ ] Próxima fecha cambia correctamente.
- [ ] Crear suscripción y verificar anual equivalente.
- [ ] Crear cuenta y ajustar saldo.
- [ ] Crear deuda y marcarla pagada.

## Familia

- [ ] Lista de compras: crear/completar/eliminar.
- [ ] Convertir compra a gasto.
- [ ] Tareas: crear/completar/eliminar.
- [ ] Eventos: crear/eliminar y ver calendario.
- [ ] Añadir miembro sin login.
- [ ] Añadir miembro con login/rol.

## Documentos / R2

- [ ] Subir imagen.
- [ ] Subir PDF.
- [ ] Rechazar archivo >10 MB.
- [ ] Rechazar MIME no permitido.
- [ ] Abrir documento sólo autenticado.
- [ ] URL de R2 no es pública.
- [ ] Eliminar documento borra objeto R2 y metadatos D1.

## PWA

- [ ] Manifest carga sin errores.
- [ ] Iconos 192/512/maskable cargan.
- [ ] `beforeinstallprompt` funciona en navegador compatible.
- [ ] Guía iOS sólo aparece cuando corresponde.
- [ ] Abre en modo standalone.
- [ ] Offline shell abre si el navegador ya lo cacheó.
- [ ] `/api/*` no aparece en Cache Storage.

## Dark mode / accesibilidad

- [ ] Sistema / claro / oscuro.
- [ ] Focus visible con teclado.
- [ ] Modales se cierran con Escape.
- [ ] Labels presentes.
- [ ] Reduced motion respetado.
- [ ] Contraste legible.

## Nemo / NVIDIA

- [ ] Pregunta de gasto mensual devuelve datos reales.
- [ ] Comparación de meses usa herramienta de lectura.
- [ ] Crear gasto muestra preview y no guarda antes de confirmar.
- [ ] Cancelar preview no modifica D1.
- [ ] “¿Nos alcanza?” usa agregados y aclara límites de datos.
- [ ] Desactivar IA bloquea Nemo pero no el resto de FamilyOS.
- [ ] Sin NVIDIA_API_KEY, FamilyOS sigue usable.
- [ ] Fallo de NVIDIA muestra mensaje amigable.
- [ ] Visión no guarda lectura de ticket sin confirmación.

## Seguridad

- [ ] Cookies de sesión son HttpOnly/Secure/SameSite.
- [ ] No hay token de sesión en localStorage.
- [ ] Mutaciones exigen CSRF y Origin válido.
- [ ] D1 usa parámetros/bindings.
- [ ] Secret NVIDIA no aparece en build/frontend.
- [ ] No se exportan hashes, sesiones ni secrets.
- [ ] Audit log registra operaciones sensibles.
