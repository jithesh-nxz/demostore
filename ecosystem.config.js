module.exports = {
  apps: [{
    name: "medusa-api",
    script: "./node_modules/@medusajs/medusa/dist/commands/start.js",
    env: {
      NODE_ENV: "production",
      // Force Medusa to look for admin in the right spot
      MEDUSA_ADMIN_PATH: ".medusa/server/public/admin" 
    }
  }]
}