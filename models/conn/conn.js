const mongoose = require("mongoose");

function Conn(url, porta, banco) {
  mongoose
    .connect(
      `mongodb+srv://dbUser:bER65QmkPFSl6sYw@bluedb-mod3.buru4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      {
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
