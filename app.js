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
  const demo = {
    todos: [
      {
        id: 1,
        title: "example task",
        done: false
      },
      {
        id: 2,
        title: "example task 2",
        done: true
      }
    ]
  };
  this.body = demo;
});

router.post('/', function *(next) {
  // THIS IS JUST STUPID EXAMPLE :D
  const body = this.request.body;
  var response = {};
  if (body.title) {
    response.title = body.title;
    response.id = 3,
    response.done = false,
    response.msg = "success";
  }
  else {
    response.msg = "FAIL";
  }
  this.body = response;
});

app.use(router.routes())
  .use(router.allowedMethods());


app.listen(8000, () => console.log('server started 8000'));

export default app;
