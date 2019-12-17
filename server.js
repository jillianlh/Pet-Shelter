const express = require("express"),
      db_name = "pets",
         port = 8000,
          app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.json());

require("./server/utils/mongoose")(db_name);
require("./server/utils/routes")(app);

app.all("*", (req, res, next) => {
   res.sendFile(__dirname + "/public/dist/public/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
