'use strict';

module.exports = {
  port: process.env.PORT || '3000',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/epam_app',
  BACKEND_LOGGER_LEVEL: process.env.BACKEND_LOGGER_LEVEL || 'info',
  levels: ['debug', 'info', 'warn', 'error'],
};
