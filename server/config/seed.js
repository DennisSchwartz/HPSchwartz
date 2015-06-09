/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Post = require('../api/post/post.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    username: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    username: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Post.find({}).remove(function() {
  Post.create({
      title: 'Urlaub Ostern 2015',
      body: 'Liebe Patientinnen und Patienten,\nvor meinem Urlaub erreichen sie mich am Fr. 12.03.15 und Mo. 16.03.15 zu den normalen Sprechzeiten. Am Dienstag, den 17.03.15 unterrichte ich ein Seminar und kann nur in Notfällen am Abend zurückrufen. Ab Mittwoch, 18.03.15 - Freitag, 03.04.15 bleibt die Praxis wegen Urlaubs geschlossen. Meine Kollegin Claudia Raskopf übernimmt während dieser Zeit meine Vertretung (Tel. 07082941269) Liebe Grüße,  Gabriele Schwartz',
      date: '2015-02-22'
    }, {
    title: 'Neues Seminar!',
    body: 'Ich freue mich Ihnen mitteilen zu dürfen, dass wir im Sommer ein neues Seminar zu Hexerei mit Zaubererstellen veranstalten werden',
    date: '2015-03-26'
  }, {
      title: 'Urlaubsankündigung',
      body: 'Zwischen dem 20.03.2015 und dem Auferstehen Jesu Christi liege ich entspannt in der Sonne mit kurzen Pausen für Golf. Bei dringenden Fällen belästigen Sie bitte meine Kollegin Claudia BizlBazl!',
      date: '2015-02-14'
    }
  );
});
