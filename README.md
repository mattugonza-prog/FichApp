# 📋 Sistema de Registro de Novedades Laborales

Aplicación web diseñada para que empleados puedan registrar novedades relacionadas con sus fichadas laborales de forma rápida, simple y autónoma.  
El sistema almacena automáticamente los registros y permite su gestión administrativa posterior.

---

## 🎯 Objetivo
Reducir carga administrativa manual y evitar inconsistencias en registros laborales permitiendo que cada empleado cargue sus propias novedades.

---

## 🚀 Funcionalidades principales

- Registro de novedades mediante link público
- Ingreso por legajo
- Selección de tipo de novedad
- Formularios dinámicos según tipo
- Edición y eliminación de registros (hasta 24h)
- Almacenamiento automático de datos
- Panel administrativo
- Exportación a Excel
- Notificaciones automáticas al administrador

---

## 📋 Tipos de novedades disponibles

- Cambio de horario
- Cambio de franco
- Fichada manual
- Retiro anticipado

---

## 🧠 Reglas de negocio

- Se permiten registros de fechas pasadas
- Se permiten múltiples registros por día
- No se requiere aprobación de supervisor
- No hay validación de horario laboral
- Fichada manual no permite fecha futura
- Edición disponible hasta 24 horas luego del envío

---

## 🏗 Arquitectura prevista

El sistema está diseñado para ser escalable y modular:


Frontend → Formulario dinámico
Backend → API de registros
Database → Tabla de novedades
Admin Panel → Gestión y exportación
Notificaciones → Servicio configurable


---

## 🗂 Estructura de datos

Campos almacenados por registro:

| Campo | Descripción |
|------|-------------|
ID | Identificador único |
Timestamp | Fecha y hora de envío |
Legajo | Identificador del empleado |
Tipo | Tipo de novedad |
Fecha | Fecha del evento |
Hora | Hora asociada |
Detalle | Información adicional |
Estado | Estado del registro |
Observación | Comentarios |

---

## ⚙️ Requisitos técnicos

- Responsive design (mobile first)
- Interfaz simple y rápida
- Código modular
- Bajo consumo de datos
- Escalable a múltiples sucursales

---

## 🔔 Sistema de notificaciones

Cada registro generado envía notificación automática al administrador mediante canal configurable:

- Email
- API
- Webhook
- WhatsApp (futuro)

---

## 📈 Escalabilidad futura prevista

El sistema está preparado estructuralmente para:

- múltiples sucursales
- autenticación de usuarios
- aprobaciones jerárquicas
- reportes avanzados

---

## 🧑‍💻 Estado del proyecto

> En fase de desarrollo inicial — arquitectura definida y lista para implementación.

---

## 📌 Roadmap inicial

- [ ] Setup base del proyecto
- [ ] Formulario dinámico
- [ ] API de guardado
- [ ] Base de datos
- [ ] Panel admin
- [ ] Sistema de notificaciones
- [ ] Testing
- [ ] Deploy

---

## 📄 Licencia
Uso interno.

---

## ✨ Autor
Proyecto diseñado por Matías González
