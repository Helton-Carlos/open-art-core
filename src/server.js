const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Conexão porta ${process.env.PORT}`);
});
