'use strict';

module.exports = {
  port: process.env.PORT || '3000',
  DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/epam_app',
}
