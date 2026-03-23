# Colegio Gestión

Monorepo simple y pragmático para la gestión web de un colegio. Incluye una landing pública, backoffice responsive en español, API Java con Spring Boot y una base de infraestructura mínima para desarrollo local y despliegues de bajo costo.

## Estructura

```text
app/
  frontend/   React + Vite + TypeScript + Tailwind
  backend/    Spring Boot + PostgreSQL + Flyway
  infra/      Docker Compose + Terraform mínimo
```

## Requisitos

- Docker y Docker Compose
- Node.js 22+ (opcional para desarrollo del frontend fuera de Docker)
- Java 21+ y Maven 3.9+ (opcional para desarrollo del backend fuera de Docker)

## Puesta en marcha rápida

1. Copiar los archivos de ejemplo de variables de entorno:

   ```bash
   cp app/frontend/.env.example app/frontend/.env
   cp app/backend/.env.example app/backend/.env
   ```

2. Levantar todo el entorno:

   ```bash
   docker compose up --build
   ```

3. Abrir:
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8080/api
   - PostgreSQL: localhost:5432

## Desarrollo local

### Frontend

```bash
cd app/frontend
npm install
npm run dev
```

### Backend

```bash
cd app/backend
mvn spring-boot:run
```

## Credenciales mock

- Email: `admin@colegio.local`
- Contraseña: cualquier valor no vacío

## Decisiones técnicas

- **Monolito modular**: suficiente para un solo colegio y más barato de operar.
- **Auth simple**: login mock con endpoint básico, listo para evolucionar a JWT si el colegio lo necesita.
- **Tailwind + componentes propios**: UI liviana y rápida de mantener.
- **Flyway**: esquema versionado y seed inicial para roles y contenido público.
- **Terraform opcional**: ejemplo mínimo con proveedor Docker para evitar sobreingeniería temprana.
