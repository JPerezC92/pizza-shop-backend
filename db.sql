DROP TABLE users;
CREATE TABLE users (
  id uuid NOT NULL,
  name character varying(50),
  lastname character varying(50),
  email character varying(100),
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_email UNIQUE (email)
);
INSERT INTO users
VALUES(
    'e8f75619-00fe-4b7c-8976-a0e3ee923ad7',
    'Juan',
    'Velazques',
    'velazques@gmail.com'
  ),
  (
    '1ce312e1-3be0-4b6a-a021-c237ce81d8dc',
    'Jorge',
    'Castillo',
    'jorge.78@gmail.com'
  );
DROP TABLE products;
CREATE TABLE products (
  id uuid NOT NULL,
  name character varying(50),
  description character varying(200),
  price decimal
);
INSERT INTO products
VALUES (
    '4de795a4-b62e-44f6-8f25-bc561862c1a4',
    'XL CLASICA',
    'Pizza para compartir con tus 4 sabores favoritos Americana, Pepperoni, Hawaiana y Suprema.',
    '49.90'
  ),
  (
    '8bd8eb68-8d0f-4bad-8d2d-4054bb1433c6',
    'Super Supremas',
    'Una perfecta mezcla de pepperoni americano, carne de res, carne de cerdo, Jamón, salchicha italiana, champiñones, pimientos verdes, cebolla roja, aceitunas verdes y queso mozzarella.',
    '55.90'
  ),
  (
    '42141b4e-bfc3-4ada-af0a-facce267dab6',
    'MEAT LOVERS',
    '¡Un festín de carnes! Pepperoni americano, salchicha italiana, carne de res, carne decerdo, rebanadas de Jamón y queso mozzarella.',
    '55.90'
  ),
  (
    '5713ee8e-8498-485f-a997-e8655eab3e80',
    'Chicken Bbq',
    'Exquisita combinación de trozos de pollo, piña, tocino y salsa BBQ.',
    '51.90'
  ),
  (
    '90addd5d-346e-4147-96eb-0af70fe64138',
    'Suprema',
    'Nuestra famosa combinación de pepperoni americano, carne de res, carne de cerdo, champiñones, pimientos verdes, cebolla roja y queso mozzarella.',
    '51.90'
  ),
  (
    '4de795a4-b62e-44f6-8f25-bc561862c1a4',
    'MEAT LOVERS',
    '¡Un festín de carnes! Pepperoni americano, salchicha italiana, carne de res, carne decerdo, rebanadas de Jamón y queso mozzarella.',
    '55.90'
  );
