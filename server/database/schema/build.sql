BEGIN;
CREATE DATABASE fluento;
CREATE USER team3 SUPERUSER PASSWORD '123';
ALTER DATABASE fluento OWNER TO team3;

COMMIT;