const app = require("./app");

app.listen(app.get('port'), () => {
    console.log(`server is listening on port ${app.get('port')},${process.env.NODE_ENV} mode`)
})