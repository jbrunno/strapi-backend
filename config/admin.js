module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '348479b4853c3d51065987ecca7d42d2'),
  },
});
