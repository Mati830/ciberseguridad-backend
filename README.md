# Ciberseguridad Backend

## Descripción general

Este proyecto es una API backend orientada a la ciberseguridad, diseñada para gestionar accesos, autenticación de usuarios, control de roles y seguridad de la aplicación. Su enfoque principal no es la creación de un sistema de streaming, sino la implementación de una infraestructura segura para proteger recursos, gestionar identidad y registrar actividades sensibles dentro de un entorno de software seguro.

La idea central del repositorio es ofrecer una base sólida para aplicaciones que requieren:

- autenticación segura de usuarios
- control de permisos por roles
- generación y renovación de tokens JWT
- protección contra ataques comunes
- auditoría de eventos y registros del sistema
- documentación de endpoints con Swagger

## ¿Qué hace este proyecto?

El backend implementa una capa de seguridad para una aplicación web o servicio interno. Incluye mecanismos para:

- registrar usuarios con rol definido
- iniciar sesión mediante credenciales seguras
- autenticar peticiones con JWT
- renovar sesiones con refresh tokens
- restringir acceso según permisos de usuario
- limitar intentos de login para prevenir fuerza bruta
- proteger la API con cabeceras HTTP y medidas de seguridad básicas
- registrar actividad y errores mediante logging

## Stack tecnológico

- Node.js
- Express
- MySQL
- Sequelize
- JWT
- bcrypt
- Helmet
- express-rate-limit
- Swagger
- Winston

## Características principales

### 1. Autenticación y autorización
- Login con email y contraseña
- Generación de access token y refresh token
- Validación de tokens en rutas protegidas
- Control de acceso por roles

### 2. Seguridad aplicada
- Encriptación de contraseñas con bcrypt
- Protección HTTP con Helmet
- Limitación de velocidad para evitar abuso
- Validación de entradas y manejo de errores
- Logs de seguridad y errores del sistema

### 3. Gestión de usuarios y roles
- Registro de nuevos usuarios
- Administración de roles
- Separación de permisos por tipo de usuario
- Estructura preparada para entornos con distintos niveles de acceso

### 4. Documentación de la API
- Swagger UI disponible en `/api-docs`
- Endpoints documentados con comentarios JSDoc
- Facilita la prueba y validación de la API

## Estructura del proyecto

```plaintext
/controllers
  - authController.js
  - usuarioController.js
  - rolController.js
  - contenidoController.js
/middlewares
  - authMiddleware.js
/models
  - usuario.js
  - rol.js
  - contenido.js
  - categoria.js
  - genero.js
  - actor.js
  - refreshToken.js
  - index.js
/routes
  - authRoutes.js
  - usuarioRoutes.js
  - rolesRoutes.js
  - contenidoRoutes.js
/conexion
  - database.js
  - sequelize.js
  - swagger.js
/utils
  - logger.js
/app.js
/api.http
/README.md
/SECURITY.md
```

## Instalación

1. Cloná el repositorio:

```bash
git clone <url-del-repositorio>
cd ciberseguridad-backend
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá las variables de entorno en un archivo `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_NAME=ciberseguridad
DB_USER=root
DB_PASSWORD=tu_contraseña
JWT_SECRET=tu_clave_secreta
JWT_REFRESH_SECRET=tu_refresh_secret
```

4. Iniciá la aplicación:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

## Endpoints principales

### Autenticación
- `POST /auth/register` - Registro de usuarios
- `POST /auth/login` - Inicio de sesión
- `POST /auth/refresh-token` - Renovación de sesión
- `POST /auth/logout` - Cierre de sesión

### Usuarios y roles
- `GET /usuarios`
- `GET /usuarios/:id`
- `POST /usuarios`
- `PUT /usuarios/:id`
- `DELETE /usuarios/:id`
- `GET /roles`

### Otros módulos
- `GET /contenido`
- `POST /contenido`
- `PUT /contenido/:id`
- `DELETE /contenido/:id`

## Seguridad implementada

Este proyecto aplica buenas prácticas de ciberseguridad en la capa backend, incluyendo:

- cifrado de contraseñas con `bcrypt`
- autenticación basada en JWT
- soporte a tokens de refresco
- limitación de intentos de acceso
- uso de `helmet` para reforzar cabeceras HTTP
- control de acceso por roles
- registro de eventos con `winston`
- separación de responsabilidades entre rutas, controladores y middlewares

## Documentación

La API está documentada con Swagger y puede consultarse en:

```text
http://localhost:3000/api-docs
```

También se incluye un archivo de ejemplo para pruebas HTTP en `api.http`.

## Seguridad y auditoría

La documentación detallada sobre buenas prácticas, autenticación, manejo de errores y auditoría de seguridad está en [SECURITY.md](SECURITY.md).

## Conclusión

Este backend está orientado a la ciberseguridad en el sentido de proteger la aplicación, controlar accesos, autenticar usuarios y reforzar la seguridad de los servicios expuestos. Si bien es una API en Node.js con arquitectura modular, su propósito principal es actuar como base segura para sistemas con requerimientos de identidad, permisos y protección de información.

---

El proyecto se mantiene con una estructura limpia, modular y preparada para crecer en funcionalidades de seguridad y administración del sistema.
