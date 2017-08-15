"use strict";



define('draft/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({});
});
define('draft/app', ['exports', 'ember', 'draft/resolver', 'ember-load-initializers', 'draft/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('draft/components/player-listing', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Component.extend({});
});
define('draft/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('draft/helpers/app-version', ['exports', 'ember', 'draft/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('draft/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('draft/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('draft/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'draft/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('draft/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('draft/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('draft/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('draft/initializers/export-application-global', ['exports', 'ember', 'draft/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('draft/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('draft/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('draft/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("draft/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('draft/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('draft/router', ['exports', 'ember', 'draft/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('players');
  });

  exports.default = Router;
});
define('draft/routes/index', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    beforeModel: function beforeModel() {
      this.replaceWith('players');
    }
  });
});
define('draft/routes/players', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _ember.default.Route.extend({
    model: function model() {
      return [{
        id: 'd410a9dd-6785-42b2-9283-7a628888a1f3',
        first_name: 'Consuelo',
        last_name: 'Borer',
        age: 39,
        position: 'SF',
        average_position_age_diff: 8,
        name_brief: 'Consuelo Borer',
        league: 'NHL'
      }, {
        id: '84c0bb8e-b58e-4266-85fb-90eccadb0230',
        first_name: 'Lela',
        last_name: 'Krajcik',
        age: 22,
        position: 'S',
        average_position_age_diff: 0,
        name_brief: 'Lela Krajcik',
        league: 'NHL'

      }, {
        id: '33c8e680-50f1-4fc5-b339-f588ba7505f2',
        first_name: 'Haven',
        last_name: 'Sawayn',
        age: 24,
        position: 'SF',
        average_position_age_diff: -7,
        name_brief: 'Haven Sawayn',
        league: 'NHL'

      }, {
        id: 'c13fd87b-b0cc-4940-9f5c-0165a8c7b94f',
        first_name: 'Courtney',
        last_name: 'Pfannerstill',
        age: 34,
        position: 'G',
        average_position_age_diff: 0,
        name_brief: 'C. Pfannerstill',
        league: 'NFL'

      }, {
        id: 'b391f8d1-f371-450e-be1e-de6d9e1c587f',
        first_name: 'Anya',
        last_name: 'Wehner',
        age: 33,
        position: 'RW',
        average_position_age_diff: 0,
        name_brief: 'A. Wehner',
        league: 'NFL'

      }, {
        id: '61f9ee3a-d69d-4317-941a-77bb7926c2ff',
        first_name: 'Hulda',
        last_name: 'Rau',
        age: 37,
        position: 'SF',
        average_position_age_diff: 0,
        name_brief: 'H. Rau',
        league: 'NFL'

      }, {
        id: 'ca9b9676-34e9-4d39-a03d-3512b77b68b9',
        first_name: 'Alberto',
        last_name: 'Farrell',
        age: 20,
        position: 'TE',
        average_position_age_diff: 0,
        name_brief: 'Alberto F.',
        league: 'NBA'

      }, {
        id: '7a259873-4589-4800-a8dd-4e648ea3e174',
        first_name: 'Alphonso',
        last_name: 'Kuvalis',
        age: 20,
        position: 'DL',
        average_position_age_diff: 0,
        name_brief: 'Alphonso K.',
        league: 'NBA'

      }, {
        id: '381e29ad-a77f-492c-99da-4b52dbb24118',
        first_name: 'Anya',
        last_name: 'Lubowitz',
        age: 23,
        position: 'C',
        average_position_age_diff: 0,
        name_brief: 'Anya L.',
        league: 'NBA'

      }, {
        id: '8e0777f5-de37-4bc7-8da5-5c9edc8e2a75',
        first_name: 'Isabelle',
        last_name: 'Glover',
        age: 36,
        position: 'CB',
        average_position_age_diff: 0,
        name_brief: 'I. G.',
        league: 'MLB'

      }, {
        id: '2e65e097-5a08-45e9-a5ed-b71c8d2e25b7',
        first_name: 'Claudine',
        last_name: 'Cartwright',
        age: 36,
        position: 'SF',
        average_position_age_diff: 0,
        name_brief: 'C. C.',
        league: 'MLB'

      }, {
        id: 'e7d1ee06-81e4-4a33-96b6-cbe0fc87cf45',
        first_name: 'Dana',
        last_name: 'Lehner',
        age: 30,
        position: 'C',
        average_position_age_diff: 0,
        name_brief: 'D. L.',
        league: 'MLB'

      }];
    }
  });
});
define('draft/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("draft/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8Trr8k9n", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"container\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"menu\"],[13],[0,\"\\n\"],[6,[\"link-to\"],[\"index\"],null,{\"statements\":[[0,\"      \"],[11,\"h1\",[]],[13],[0,\"\\n        \"],[11,\"em\",[]],[13],[0,\"Draft\"],[14],[0,\"\\n      \"],[14],[0,\"\\n\"]],\"locals\":[]},null],[0,\"  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"body\"],[13],[0,\"\\n    \"],[1,[26,[\"outlet\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "draft/templates/application.hbs" } });
});
define("draft/templates/components/player-listing", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1xcFRhhf", "block": "{\"statements\":[[11,\"article\",[]],[15,\"class\",\"listing\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"profile-image\"],[13],[11,\"img\",[]],[15,\"src\",\"../images/default-profile.png\"],[15,\"alt\",\"\"],[15,\"class\",\"img-thumbnail\"],[13],[14],[14],[0,\"\\n  \"],[11,\"h3\",[]],[13],[1,[28,[\"player\",\"first_name\"]],false],[14],[0,\" \"],[11,\"h3\",[]],[13],[1,[28,[\"player\",\"last_name\"]],false],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail owner\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"age:\"],[14],[0,\" \"],[1,[28,[\"player\",\"age\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail type\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Position:\"],[14],[0,\" \"],[1,[28,[\"player\",\"position\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail location\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Avg avg in league:\"],[14],[0,\" \"],[1,[28,[\"player\",\"average_position_age_diff\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail bedrooms\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"Other Name\"],[14],[0,\" \"],[1,[28,[\"player\",\"name_brief\"]],false],[0,\"\\n  \"],[14],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"detail bedrooms\"],[13],[0,\"\\n    \"],[11,\"span\",[]],[13],[0,\"League\"],[14],[0,\" \"],[1,[28,[\"player\",\"league\"]],false],[0,\"\\n  \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "draft/templates/components/player-listing.hbs" } });
});
define("draft/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bd7jPIpu", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "draft/templates/index.hbs" } });
});
define("draft/templates/players", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q/+vfHit", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"jumbo\"],[13],[0,\"\\n  \"],[11,\"div\",[]],[15,\"class\",\"right tomster\"],[13],[14],[0,\"\\n  \"],[11,\"h2\",[]],[13],[0,\"Welcome!\"],[14],[0,\"\\n  \"],[11,\"p\",[]],[13],[0,\"Best place to get your fantasy sports groove on\"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[6,[\"each\"],[[28,[\"model\"]]],null,{\"statements\":[[1,[33,[\"player-listing\"],null,[[\"player\"],[[28,[\"playerUnit\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"playerUnit\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "draft/templates/players.hbs" } });
});


define('draft/config/environment', ['ember'], function(Ember) {
  var prefix = 'draft';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("draft/app")["default"].create({"name":"draft","version":"0.0.0+9cc5f412"});
}
//# sourceMappingURL=draft.map
