/**
 * Database Configuration
 * (app.config.database)
 *
 * Configure the ORM layer, connections, etc.
 *
 * @see {@link http://trailsjs.io/doc/config/database}
 */

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/sails'

'use strict'

module.exports = {

  /**
   * Define the database stores. A store is typically a single database.
   *
   * Use the SQLite3 by default for development purposes.
   *
   * Set production connection info in config/env/production.js
   */
  stores: {

    /**
     * Define a store called "local" which uses SQLite3 to persist data.
     *
     * To use this store, uncomment the "sqlitedev" store section below, and
     * run "npm install --save waterline-sqlite3"
     */

    /*
     dev: {
      adapter: require('waterline-sqlite3'),
      migrate: 'alter'
    }
     */

    dev: {
      adapter: require('sails-disk'),
      migrate: 'alter'
    },

    stage: {
      adapter: require('sails-mongo'),
      migrate: 'alter',
      url: MONGODB_URL
    }

  },

  models: {
    defaultStore: 'stage',
    migrate: 'safe'
  }
}
