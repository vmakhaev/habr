var app = require('derby').createApp(module)
  .use(require('../../ui'))

app.get('/', function(page, model) {
  model.subscribe('page.text', function(err) {
    if (!model.get('page.text')) {
      model.set('page.text', 'text in model');
    }
    page.render();
  })
});
