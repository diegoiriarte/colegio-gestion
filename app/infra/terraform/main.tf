# Ejemplo mínimo y opcional: construye y ejecuta el backend con Docker.
# Está pensado para equipos chicos que quieren una base reproducible sin sobreingeniería.
resource "docker_image" "backend" {
  name = var.backend_image_name

  build {
    context = "${path.module}/../../backend"
  }
}

resource "docker_container" "backend" {
  name  = "colegio-backend-tf"
  image = docker_image.backend.image_id

  ports {
    internal = 8080
    external = var.backend_port
  }

  env = [
    "SPRING_DATASOURCE_URL=jdbc:postgresql://host.docker.internal:5432/colegio_gestion",
    "SPRING_DATASOURCE_USERNAME=colegio",
    "SPRING_DATASOURCE_PASSWORD=colegio123",
    "APP_CORS_ALLOWED_ORIGIN=http://localhost:3000"
  ]
}
