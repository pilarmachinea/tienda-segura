# tienda-segura
# tienda-segura

Proyecto del taller de DevSecOps: una app mínima en Node.js con Express y un
pipeline de integración continua en GitHub Actions que revisa cada pull request
antes de permitir la fusión.

## Qué hace la app

Calcula el total de una compra aplicando un descuento.

- `total(precio, cant, desc)` devuelve `precio * cant * (1 - desc)`.
- La ruta `GET /total?p=<precio>&c=<cantidad>` responde con un JSON `{ "total": ... }`.

## Requisitos

- Node.js 20 o superior
- Git

## Cómo correrlo

```bash
git clone https://github.com/TU-USUARIO/tienda-segura.git
cd tienda-segura
npm ci
npm test
```

El resultado esperado es `pass 1` y `fail 0`.

Nota: `app.js` exporta la app pero no levanta un servidor (no llama a
`app.listen`). Por ahora la forma de ejecutarla es mediante los tests.

## Pipeline (GitHub Actions)

El archivo `.github/workflows/pipeline.yml` se ejecuta en cada pull request y
corre estos controles en orden:

| Paso | Qué comprueba | Concepto |
|------|---------------|----------|
| `npm test` | Que la lógica sigue funcionando | Pruebas automáticas |
| `npm audit` | Vulnerabilidades conocidas en las librerías | SCA |
| `semgrep` | Patrones peligrosos en el código fuente | SAST |
| `gitleaks` | Claves y contraseñas en el código y el historial | Detección de secretos |

Si cualquier paso falla, el pipeline queda en rojo y se ve en la pestaña
Actions de la pull request.
