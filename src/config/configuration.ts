export default () => ({
  port: parseInt(process.env.PORT, 10),
  db: process.env.DATABASE_URL,
});
