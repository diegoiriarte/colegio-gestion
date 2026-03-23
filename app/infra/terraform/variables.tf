variable "backend_image_name" {
  description = "Nombre de la imagen Docker del backend."
  type        = string
  default     = "colegio-backend"
}

variable "backend_port" {
  description = "Puerto expuesto para la API."
  type        = number
  default     = 8080
}
