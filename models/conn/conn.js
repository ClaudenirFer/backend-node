
const mongoose = require("mongoose");

function Conn(url, user, pass, banco) {
  mongoose
    .connect(
      `${url},${user}`,
      {
        user: user,
        pass: pass,
        useNewUrlParse: true, //para q o mongoose use o novo sistema de url
        useUnifiedTopology: true, //Mecanismo de monitoramento de banco de dados
      }
    )
    .then(() => {
      console.log("MongoDB has been configured successfully ");
    })
    .catch((err) => {
      console.error(err);
    });
}

module.exports = Conn;
