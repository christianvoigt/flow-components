Package.describe({
  summary: 'Lean Components',
  version: '0.0.6',
  git: 'https://github.com/meteorhacks/lean-components',
  name: "meteorhacks:lean-components"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use('ui');
  api.use('templating');
  api.use('reactive-var');
  api.use('reactive-dict');
  api.use('underscore');
  
  api.addFiles('lib/client/component.js', 'client');
  api.addFiles('lib/client/api.js', 'client');
  api.addFiles('lib/client/lean.main.html', 'client');
  api.export(['LeanComponents']);
});
