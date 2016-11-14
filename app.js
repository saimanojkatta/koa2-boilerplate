import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
const app = new Koa();
const router = new Router();

// Logger
app.use(logger());
app.use(json());
app.use(bodyParser());


router.get('/', function *(next) {
  this.body = {demo: 'Demo'};
});

router.post('/', function *(next) {
  // THIS IS JUST STUPID EXAMPLE :D
  const body = this.request.body;
  var response = {};
  if (body.demo) {
    console.log(body.demo);
    response.demo = body.demo;
    response.msg = "success";
  }
  else {
    response = {msg: "FAIL"}
  }
  this.body = response;
});

app.use(router.routes())
  .use(router.allowedMethods());


app.listen(8000, () => console.log('server started 8000'));

export default app;
