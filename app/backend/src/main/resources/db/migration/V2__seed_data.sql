INSERT INTO roles (name) VALUES
    ('ADMIN'),
    ('STAFF');

INSERT INTO divisions (name, level) VALUES
    ('Sala de 5 A', 'JARDIN'),
    ('3° A', 'PRIMARIA'),
    ('2° Naturales', 'SECUNDARIA');

INSERT INTO users (name, email, role_id) VALUES
    ('Administrador General', 'admin@colegio.local', 1),
    ('Secretaría Académica', 'staff@colegio.local', 2);

INSERT INTO students (name, last_name, division_id) VALUES
    ('Ana', 'Pérez', 2),
    ('Tomás', 'Gómez', 3);

INSERT INTO posts (title, content) VALUES
    (
        'Bienvenidos al nuevo portal institucional',
        'Presentamos una plataforma simple para compartir novedades y organizar la gestión administrativa del colegio.\n\nEn esta primera etapa se incluyen noticias institucionales, panel administrativo y módulos básicos de usuarios, divisiones y alumnos.'
    ),
    (
        'Inscripciones abiertas para ciclo lectivo 2026',
        'Ya se encuentra habilitado el proceso de preinscripción para jardín, primaria y secundaria.\n\nPara más información, acercarse a secretaría o escribir a info@colegio.local.'
    );
