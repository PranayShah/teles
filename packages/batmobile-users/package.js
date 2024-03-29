Package.describe({
  summary: 'Changes user account fields to reflect our use case',
  version: '0.1.0',
  name: 'batmobile-users'
});

Package.onUse(function (api) {

  // --------------------------- 1. Meteor packages dependencies ---------------------------

  // automatic (let the package specify where it's needed)

  api.use([
    'tap:i18n',                   // internationalization package
    'iron:router',                // routing package
    'telescope-base',             // basic Telescope hooks and objects
    'telescope-lib',              // useful functions
    'telescope-i18n',             // internationalization wrapper
    'fourseven:scss',
    'useraccounts:unstyled@1.4.0'           // SCSS compilation package
  ], ['client', 'server']);

  // client

  api.use([
    'jquery',                     // useful for DOM interactions
    'underscore',                 // JavaScript swiss army knife library
    'templating',
    'session',
    'tracker'                  // required for client-side templates
  ], ['client']);
  api.imply ([
    'pauli:accounts-linkedin',
    'accounts-google'
    ]);
  // server

  api.use([
    //
  ], ['server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.add_files([
    'package-tap.i18n'
  ], ['client', 'server']);

  // both

  
  api.add_files([
    'lib/custom_fields.js',
    'lib/hooks.js',
    'lib/main.js',
    'lib/routes.js',
    'lib/settings.js',
    'lib/templates.js',
    'lib/atConfig.js'
  ], ['client', 'server']);

  // client

  api.add_files([
    'lib/client/templates/usersLogin.html',
    'lib/client/templates/usersLogin.js',
    'lib/client/templates/follow.html',
    'lib/client/templates/follow.js',
    'lib/client/templates/home.html',
    'lib/client/templates/post_page_mod.html',
    'lib/client/templates/post_page_mod.js',
    'lib/client/templates/comment_item_mod.html',
    'lib/client/templates/comment_item_mod.js',
    'lib/client/templates/comment_form_mod.html',
    'lib/client/templates/comment_form_mod.js',
    'lib/client/stylesheets/custom.scss',
    'lib/client/subscriptions.js'
  ], ['client']);

  // server

  api.add_files([
    'lib/server/publications.js',
    'lib/server/at.js'
  ], ['server']);    

  // i18n languages (must come last)

  api.add_files([
    'i18n/en.i18n.json',
  ], ['client', 'server']);

  // -------------------------------- 3. Variables to export --------------------------------
  api.export ([
    'primaryNav',
    'secondaryNav',
    'heroModules',
    'addToCommentsSchema'
    ]);

});