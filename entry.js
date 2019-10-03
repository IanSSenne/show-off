import { f as fw, _ as _toConsumableArray, a as _inherits, b as _createClass, c as _classCallCheck, d as _possibleConstructorReturn, e as _getPrototypeOf } from './index-5948dede.js';

var placeholder = './~/assets/placeholder-29238c2f.png'

function StyledComponent (component, styles) {
  var isUsed = false;
  return function (props) {
    if (!isUsed) {
      isUsed = true;
      var style = document.createElement('style');
      style.innerHTML = styles.replace(/[\n\r]+/g, ';').replace(/;+/g, ';').replace(/};+/g, '}').replace(/{;+/g, '{').replace(/\s\s+/g, ' ').replace(/([{;:]) /g, '$1');
      document.head.appendChild(style);
    }

    return fw.dom.apply(fw, [component, props].concat(_toConsumableArray(props.children)));
  };
}

var Nav = StyledComponent(
/*#__PURE__*/
function (_fw$Component) {
  _inherits(_class, _fw$Component);

  function _class(props) {
    var _this;

    _classCallCheck(this, _class);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
    _this.selectedIndex = fw.StatefulData(0);

    for (var i = 0; i < _this.props.items.length; i++) {
      if (_this.props.items[i].hash === window.location.hash) _this.selectedIndex.value = i;
    }

    fw.globals.hooks.register('nav-update', function () {
      var updated = false;

      for (var _i = 0; _i < _this.props.items.length; _i++) {
        if (_this.props.items[_i].hash === fw.globals.data.get('nav-item')) {
          _this.selectedIndex.value = _i;
          updated = true;
        }
      }

      if (!updated) _this.selectedIndex.value = -1;
    });
    return _this;
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return fw.dom("ul", {
        className: "nav"
      }, this.props.items.map(function (item, index) {
        return fw.dom("li", {
          className: "nav"
        }, fw.dom("a", {
          className: 'nav' + (index === _this2.selectedIndex.value ? ' active' : ''),
          onclick: function onclick() {
            _this2.selectedIndex.value = index;
            window.location.hash = item.hash;
          }
        }, item.name));
      }));
    }
  }]);

  return _class;
}(fw.Component), "ul.nav {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-color: #2F2C3C;\n  position:absolute;\n  top:0px;\n  left:0px;\n  width:100vw;\n  z-index:1;\n}\nli.nav {\n  float: left;\n  cursor: grab;\n}\nli.nav a.nav {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\nli.nav a.nav:hover:not(.active) {\n  background-color: #111;\n}\n.active.nav {\n  cursor:default;\n  background-color: #579F9F;\n}");

var Paralax = StyledComponent(function Paralax() {
  var LAYERS = 3;
  var x = Array(LAYERS).fill(0).map(function (_) {
    return fw.StatefulData(0);
  });
  var y = Array(LAYERS).fill(0).map(function (_) {
    return fw.StatefulData(0);
  });
  window.addEventListener('mousemove', function (evt) {
    var nx = evt.clientX / 3;
    var ny = evt.clientY / 3;

    for (var i = 0; i < LAYERS; i++) {
      x[i].value = nx * (i + 1) * 0.1;
      y[i].value = ny * (i + 1) * 0.1;
    }
  });
  return fw.dom("div", {
    className: "paralax-wrapper"
  }, Array(LAYERS).fill(0).map(function (group, index) {
    return fw.dom("svg", {
      style: fw.stateJoin('--x:', x[index], 'px;--y:', y[index], 'px'),
      "class": "paralax-group",
      width: "200vw",
      height: "200vh"
    }, Array(100 - Math.floor(90 / (LAYERS + 1))).fill(0).map(function (_) {
      var cx = Math.floor(800 + Math.random() * 1200) / 10 + 'vw';
      var cy = Math.floor(800 + Math.random() * 1200) / 10 + 'vh';
      return fw.dom("circle", {
        fill: "rgba(255,255,255,".concat(1 - index / (LAYERS + 1), ")"),
        r: 1 + index,
        cx: cx,
        cy: cy
      });
    }));
  }).reverse());
}, ".paralax-wrapper{\n    position:absolute;top:0px;left:0px;\n    z-index:0;\n    pointer-events: none;\n    overflow:hidden;\n    width:100vw;\n    height:100vh;\n}\n.paralax-svg{\n    position:absolute;\n}\n.paralax-group{\n\tposition:absolute;\n\ttransform:translate(-50%,-50%);\n    top:var(--y);\n    left:var(--x);\n}");

var Header = StyledComponent(function Header(props) {
  return fw.dom("div", null, fw.dom(Nav, {
    items: [{
      name: 'home',
      hash: '#home'
    }, {
      name: 'projects',
      hash: '#project'
    }, {
      name: '???',
      hash: '#???'
    }]
  }), fw.dom("div", {
    className: "header"
  }, fw.dom("h1", null, "Ian Senne"), fw.dom(Paralax, null)));
}, ".header {\n  padding: 60px;\n  text-align: center;\n  color: white;\n  text-shadow:\n  font-size: 30px;\n  text-shadow: 0px 0px 50px black;\n}");

var RouterError = StyledComponent(function (props) {
  return fw.dom("div", {
    className: "router-default-error"
  }, props.kids);
}, ".router-default-error{\n\t\t\t\ttext-align:center;\n\t\t\t\tfont-size:xx-large;\n\t\t\t}");
var Router =
/*#__PURE__*/
function (_fw$Component) {
  _inherits(Router, _fw$Component);

  function Router(props) {
    var _this;

    _classCallCheck(this, Router);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Router).call(this, props));
    _this.props = props;
    var children = props.children,
        master = props.master,
        routes = props.routes;
    _this.children = children;
    _this.master = master;
    _this.current = fw.StatefulData(fw.dom("a", null));
    _this.routes = routes.map(function (route) {
      route.path = route.path.split('/');
      return route;
    });
    window.addEventListener('hashchange', function () {
      return _this.exec();
    });

    _this.exec();

    return _this;
  }

  _createClass(Router, [{
    key: "exec",
    value: function exec() {
      if (window.location.hash === '') {
        return window.location.hash = this.props["default"] || '#';
      }

      var parts = window.location.hash.split('/');

      for (var i = 0; i < this.routes.length; i++) {
        var result = this.match(this.routes[i].path, _toConsumableArray(parts));

        if (result) {
          this.current.value = this.routes[i].value(result);
          fw.globals.data.set('nav-item', this.routes[i].navItem || 'unknown');
          fw.globals.fire('nav-update');
          return;
        }
      }

      this.current.value = fw.dom(RouterError, {
        kids: this.children
      });
      fw.globals.data.set('nav-item', 'unknown');
      fw.globals.fire('nav-update');
    }
  }, {
    key: "match",
    value: function match(target, given) {
      var data = {};
      if (target.length != given.length) return false;

      for (var i = 0; i < target.length; i++) {
        if (target[i].charAt(0) === ':') {
          var name = target[i].substr(1);
          data[name] = given[i];
        } else if (target[i] != given[i]) {
          return false;
        }
      }

      return data;
    }
  }, {
    key: "render",
    value: function render() {
      return this.current.value;
    }
  }]);

  return Router;
}(fw.Component);

var Panel = StyledComponent(function Panel(props) {
  return fw.dom("div", Object.assign({
    className: "lay panel"
  }, props), props.children);
}, ".lay.panel{\n    border:#f9f8f8;\n    border-radius:1em;\n    padding:1em;\n    background-color:#f9f8f8;\n}");

function HomePage(props) {
  return fw.dom("div", null, fw.dom(Panel, null, fw.dom("h1", null, "About me"), fw.dom("p", null, "Hello, my name is Ian Senne and i have been teaching myself programming for about 6 years now.")));
}

var projectCache = {};

var LoadProject =
/*#__PURE__*/
function (_fw$Component) {
  _inherits(LoadProject, _fw$Component);

  function LoadProject(props) {
    var _this;

    _classCallCheck(this, LoadProject);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadProject).call(this, props));

    var ERR = props.error || function (err) {
      return fw.dom("div", {
        style: "color:red;"
      }, JSON.stringify(err));
    };

    var SUC = props.parse || function () {};

    _this.data = fw.StatefulData(fw.dom("div", null, "Loading asset..."));
    _this.loadingState = 'loading';

    if (projectCache[props.id]) {
      _this.data.value = SUC(projectCache[props.id]);
    } else {
      (props.module || import(props.id)).then(function (Module) {
        var Component = Module["default"];
        projectCache[props.id] = Component;
        _this.loadingState = 'done';
        _this.data.value = [fw.dom(Component, null)];
      })["catch"](function (err) {
        _this.loadingState = 'error';
        _this.data.value = [ERR(err)];
      });
    }

    return _this;
  }

  _createClass(LoadProject, [{
    key: "render",
    value: function render() {
      return fw.dom("div", {
        className: 'project-loader-' + this.loadingState
      }, this.data.value);
    }
  }]);

  return LoadProject;
}(fw.Component);

var Project = StyledComponent(function (_ref) {
  var id = _ref.id,
      module = _ref.module;
  return fw.dom("div", {
    className: "project-wrapper"
  }, fw.dom(Panel, {
    style: "width:calc(100vw - 8em);overflow-x:wrap;margin:2em;"
  }, fw.dom("div", {
    className: "project-tools"
  }, fw.dom("button", {
    style: "display:contents;margin-right:2em;",
    onclick: function onclick() {
      window.location.hash = '#project';
    },
    title: "close project"
  }, fw.dom("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    style: "width:30px;height:30px;"
  }, fw.dom("path", {
    d: "M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17,15.59L15.59,17 L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12L17,15.59z"
  })))), fw.dom(LoadProject, {
    id: id,
    module: module,
    error: function error(err) {
      console.log(err);
      return fw.dom("div", null, fw.dom("h1", null, "ERROR: unable to get project \"", id, "\""));
    }
  })));
}, ".project-wrapper{position:absolute;top:0px;left:0px;width:100vw;height:100vh;background-color:rgba(1,1,1,0.5);}\n.project-tools{width:100%;height:2em;border-bottom: 1px solid black;direction:rtl;}.project-tools>button{cursor: grab;}");
function ProjectPage(props) {
  return fw.dom(Panel, null, fw.dom("h1", null, "Projects"), fw.dom("ul", null, fw.dom("li", null, fw.dom("a", {
    href: "#project/ians-fw"
  }, "ians-fw")), fw.dom("li", null, fw.dom("a", {
    href: "#project/animatorjs"
  }, "lol"))), props.id ? getProject(props.id) : '');
}
var PROJECTS;

(function (PROJECTS) {
  PROJECTS["iansfw"] = "ians-fw";
  PROJECTS["animatorjs"] = "animatorjs";
})(PROJECTS || (PROJECTS = {}));

function getProject(id) {
  console.log(id);

  switch (id) {
    case PROJECTS.iansfw:
      return fw.dom(Project, {
        module: import('./ians-fw-24ebe801.js')
      });

    case PROJECTS.animatorjs:
      return fw.dom(Project, {
        module: import('./animatorjs-07d0ce85.js')
      });
  }

  return fw.dom(Project, {
    id: './projects/' + id + '.js'
  });
}

var Content = StyledComponent(function Content(props) {
  return fw.dom("div", {
    className: "content-root"
  }, fw.dom(Router, {
    master: true,
    routes: [{
      path: '#profile/:id',
      value: function value(data) {
        return fw.dom("div", null, "profile id#", data.id);
      },
      navItem: '#profile'
    }, {
      path: '#project',
      value: function value() {
        return fw.dom(ProjectPage, null);
      },
      navItem: '#project'
    }, {
      path: '#project/:id',
      value: function value(_ref) {
        var id = _ref.id;
        return fw.dom(ProjectPage, {
          id: id
        });
      },
      navItem: '#project'
    }, {
      path: '#home',
      value: function value() {
        return fw.dom(HomePage, null);
      },
      navItem: '#home'
    }],
    "default": "#home"
  }, fw.dom("h1", null, "ERROR: route not found")));
}, ".content-root:{z-index:1}");

var App = StyledComponent(function App() {
  return fw.dom("div", {
    className: "app"
  }, fw.dom(Header, null), fw.dom(Content, null), fw.dom("img", {
    src: placeholder
  }));
}, ".app{\n    width:100vw;\n\theight:100vh;\n\tbackground-color:black;\n}");

var CSS = StyledComponent(function CSS() {
  return fw.dom("imports", null);
}, "html,body{\n    padding:0px;\n    margin:0px;\n}");
window.fw = fw;

Object.defineProperty(fw, 'globals', {
  value: {
    data: new Map(),
    fire: function fire(arr) {
      fw.globals.hooks.fire(arr);
    },
    hooks: {
      __hooks__: {},
      register: function register(hook, func) {
        fw.globals.hooks.__hooks__[hook] = fw.globals.hooks.__hooks__[hook] || [];

        fw.globals.hooks.__hooks__[hook].push(func);
      },
      fire: function fire(hook) {
        if (fw.globals.hooks.__hooks__[hook]) {
          fw.globals.hooks.__hooks__[hook].forEach(function (cb) {
            return cb();
          });
        }
      }
    }
  }
});
var c = fw.StatefulData(0);

var mount = function mount() {
  document.body.appendChild((window.app = fw.dom(App, {
    c: c
  })).element());
  document.head.appendChild((window.css = fw.dom(CSS, null)).element());
};

if (document.body) mount();else window.addEventListener('DOMContentLoaded', mount);
