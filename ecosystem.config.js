module.exports = {
  apps : [
    {
      name: "pizza",
      script: "./index.js",
      watch: true,
      env: {
        "PORT": 3000,
        "NODE_ENV": "development"
      },
      env_production: {
        "PORT": 3000,
        "NODE_ENV": "production",
      }
    }
  ]
}
