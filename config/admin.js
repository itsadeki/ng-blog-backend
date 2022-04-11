module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '80885db94a7e4325b596f5cad06ef4cf'),
  },
});
