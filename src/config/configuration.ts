export default () => ({
  host: process.env.HOST,
  port: parseInt(process.env.PORT, 10),
  db: process.env.DATABASE_URL,
});
