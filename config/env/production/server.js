module.exports = ({ env }) => ({
  host: "0.0.0.0",
  url: env("https://manziladmin.herokuapp.com/"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
