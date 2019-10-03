if (!Object.assign) {
  Object.defineProperty(Object, 'assign', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function value(target) {

      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert first argument to object');
      }

      var to = Object(target);

      for (var i = 1; i < arguments.length; i++) {
        var nextSource = arguments[i];

        if (nextSource === undefined || nextSource === null) {
          continue;
        }

        nextSource = Object(nextSource);
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }

      return to;
    }
  });
}

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value: function value(obj) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var newArr = this.filter(function (el, index) {
        return el == obj && index > start;
      });
      return newArr.length > 0;
    }
  });
}

if (!Array.prototype.fill) Object.defineProperty(Array.prototype, 'fill', {
  value: function value(_value) {
    var res = [];

    for (var i = 0; i < this.value; i++) {
      res.push(_value);
    }

    return res;
  }
});

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

if (!_Symbol) {
  var CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0987654321!@#$%^&*()';

  var _Symbol = function _Symbol(desc) {
    var arr = [];

    for (var i = 0; i < 128; i++) {
      arr.push(CHARS[Math.floor(Math.random() * CHARS.length)]);
    }

    return 'IESymbol(' + arr.join("") + (desc || '') + ')';
  };
}

function $Symbol(description) {
  return _Symbol(description);
}

$Symbol.$Symbol = function () {
  return _Symbol;
}.bind(window)();

var isState = $Symbol();
var OStatefulData =
/*#__PURE__*/
function () {
  function OStatefulData(value) {
    _classCallCheck(this, OStatefulData);

    this._relientObjects = [];
    this.relatedNodes = [];
    this._value = value;
  }

  _createClass(OStatefulData, [{
    key: "hasRelatedNodes",
    value: function hasRelatedNodes() {
      return this.relatedNodes.length > 0;
    }
  }, {
    key: "addRelient",
    value: function addRelient(obj) {
      this._relientObjects.push(obj);
    }
  }, {
    key: $Symbol.$Symbol.iterator,
    value: function value() {
      return (
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(value) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return value;

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })(this._value)
      );
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(new_value) {
      var _this = this;

      this._value = new_value;

      if (new_value && new_value.constructor === Array) {
        this.relatedNodes = [];
        new_value.forEach(function (item) {
          if (item && item.isVElement) {
            _this.relatedNodes.push(item);
          }
        });
      } else if (new_value && new_value.isVElement) {
        this.relatedNodes = [new_value];
      }

      for (var i = 0; i < this._relientObjects.length; i++) {
        this._relientObjects[i].setRelientStateDirty(this);
      }
    }
  }, {
    key: isState,
    get: function get() {
      return true;
    }
  }]);

  return OStatefulData;
}();
function StatefulData(data) {
  return new OStatefulData(data);
}
function stateJoin() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  var relience = [];

  var stateObj = _defineProperty({
    get value() {
      var res = '';

      for (var i = 0; i < parts.length; i++) {
        if (parts[i] && parts[i][isState]) {
          res += parts[i].value;
        } else if (parts[i]) {
          res += parts[i];
        }
      }

      return res;
    },

    addRelient: function addRelient(o) {
      relience.push(o);
    },
    setRelientStateDirty: function setRelientStateDirty() {
      relience.forEach(function (o) {
        if (o.setRelientStateDirty) {
          o.setRelientStateDirty(stateObj);
        }
      });
    }
  }, isState, true);

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] && parts[i][isState]) {
      parts[i].addRelient(stateObj);
    }
  }

  return stateObj;
}

var instances = [];

var verboseConstructor =
/*#__PURE__*/
function () {
  function verboseConstructor() {
    _classCallCheck(this, verboseConstructor);

    this.funcs = {
      log: console.log.bind(console, '[fw2gulp LOG]'),
      error: console.error.bind(console, '[fw2gulp ERR]'),
      warn: console.warn.bind(console, '[fw2gulp WRN]')
    };
    this._enabled = false;
    instances.push(this);
  }

  _createClass(verboseConstructor, [{
    key: "log",
    value: function log() {
      var _this$funcs;

      if (this._enabled) (_this$funcs = this.funcs).log.apply(_this$funcs, arguments);
    }
  }, {
    key: "error",
    value: function error() {
      var _this$funcs2;

      if (this._enabled) (_this$funcs2 = this.funcs).error.apply(_this$funcs2, arguments);
    }
  }, {
    key: "warn",
    value: function warn() {
      var _this$funcs3;

      if (this._enabled) (_this$funcs3 = this.funcs).warn.apply(_this$funcs3, arguments);
    }
  }, {
    key: "createInternalInstance",
    value: function createInternalInstance() {
      return this.createInstance('fw2gulp INTERNAL ');
    }
  }, {
    key: "createInstance",
    value: function createInstance(type) {
      var vc = new verboseConstructor();
      vc.funcs.log = console.log.bind(console, "[".concat(type, "LOG]"));
      vc.funcs.error = console.error.bind(console, "[".concat(type, "ERR]"));
      vc.funcs.warn = console.warn.bind(console, "[".concat(type, "WRN]"));
      return vc;
    }
  }, {
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      this._enabled = value;
      instances.forEach(function (_) {
        return _._enabled = value;
      });
    }
  }]);

  return verboseConstructor;
}();

var verbose;
var verbose$1 = verbose = new verboseConstructor();
Object.defineProperty(window || globalThis || new Function('this')(), 'FW2VERBOSE', {
  value: verbose
});

var requestIdleCallback;
if (!requestIdleCallback) requestIdleCallback = requestAnimationFrame;
var INTERNALVERBOSE = verbose$1.createInternalInstance();
var rerender_queue = [];
var rerenderCallbackOptions = {
  timeout: 500
};
var rerenderCallbackHandler = requestIdleCallback || requestAnimationFrame;

function rerenderHandler() {
  var item = rerender_queue.shift();

  if (item) {
    item.rerender();

    while (rerender_queue[0]) {
      item = rerender_queue.shift();
      item.rerender();
    }
  }
}

var isComponentConstructor = $Symbol();
var Component =
/*#__PURE__*/
function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.WARNIFINRENDER = 0;
    this._initialized = false;
    this._relient = [];
    this.isSvg = false;
    this.props = props;

    if (!this.renderFunctionExists()) {
      throw new Error('Components must define a render function');
    }
  }

  _createClass(Component, [{
    key: "renderFunctionExists",
    value: function renderFunctionExists() {
      return this.render instanceof Function;
    }
  }, {
    key: "renderInternal",
    value: function renderInternal() {
      if (!this._initialized) {
        var keys = Object.keys(this);

        for (var i = 0; i < keys.length; i++) {
          if (this[keys[i]] && this[keys[i]][isState]) {
            this[keys[i]].addRelient(this);
          }
        }

        this._initialized = true;
      }

      this.WARNIFINRENDER++;
      var next = this.render();
      this.WARNIFINRENDER--;

      if (this._element) {
        this._element.diff(next, true);
      } else {
        this._element = next;
      }

      return this._element.element(this.isSvg);
    }
  }, {
    key: "element",
    value: function element() {
      if (this._element) return this._element.element(this.isSvg);
      return this.renderInternal();
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "rerender",
    value: function rerender() {
      if (this.WARNIFINRENDER) console.warn('rerender initiated from within the render call, this should be avoided if posible');

      if (this.WARNIFINRENDER > 10) {
        console.error('rerender error: rerender is being called within render several times in a row, this most likeally means that there is an issue.');
        return null;
      }

      return this.renderInternal();
    }
  }, {
    key: "addRelient",
    value: function addRelient(other) {
      if (!this._relient.includes(other)) this._relient.push(other);
    }
  }, {
    key: "setRelientStateDirty",
    value: function setRelientStateDirty(state) {
      if (!rerender_queue.includes(this)) rerender_queue.push(this);
      rerenderCallbackHandler(rerenderHandler, rerenderCallbackOptions);
    }
  }, {
    key: "setIsSvg",
    value: function setIsSvg(value) {
      this.isSvg = value;
    }
  }, {
    key: isState,
    get: function get() {
      return true;
    }
  }]);

  return Component;
}();
Component.prototype[isComponentConstructor] = true;

var production = false;

var FWINTERNALVERBOSE = verbose$1.createInternalInstance();
FWINTERNALVERBOSE.enabled = !production;

function findStateDeep(o) {
  var res = [];
  var keys = Object.keys(o);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    if (o[key] && o[key][isState]) {
      res.push(o[key]);
    } else if (_typeof(o[key]) === 'object') {
      res.push.apply(res, _toConsumableArray(findStateDeep(o[key])));
    }
  }

  return res;
}

function deferAssignment(object, props) {
  var keys = Object.keys(props);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = props[key];

    if (value && value[isState]) {
      object[key] = value.value;
    } else {
      if (Object.isSealed(object) || Object.isFrozen(object)) {
        object[key] = value;
      }
    }
  }
}

var VChildRegion =
/*#__PURE__*/
function () {
  function VChildRegion(initializer) {
    _classCallCheck(this, VChildRegion);

    this.references = new Map();
    this.initializer = initializer;
    this._elements = [];
    if (!(this._elements instanceof Array)) this._elements = [this._elements];
    this.render();
  }

  _createClass(VChildRegion, [{
    key: "render",
    value: function render() {
      for (var i = 0; i < this._elements.length; i++) {
        var element = this._elements[i]._element;
        element.parentElement.removeChild(element);
      }

      this._elements = this.initializer();

      for (var _i = 0; _i < this._elements.length; _i++) {
        var states = _toConsumableArray(this._elements[_i].references.keys());

        for (var j = 0; j < states.length; j++) {
          if (!this.references.has(states[j])) {
            this.references.set(states[j], []);
          }

          this.references.get(states[j]).push(this._elements[_i]);
          states[j].addRelient(this);
        }
      }
    }
  }, {
    key: "setRelientStateDirty",
    value: function setRelientStateDirty(state) {
      return null;
    }
  }]);

  return VChildRegion;
}();

function flat(arr) {
  var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flat(arr[i], res);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}

var VElement =
/*#__PURE__*/
function () {
  function VElement(type, props, _children) {
    _classCallCheck(this, VElement);

    this.childrefs = [];
    this.references = new Map();
    var children = flat(_children);
    this.type = type;
    this.props = props || {};
    this.children = children;
    this.states = [];
    this.isSvg = this.type === 'svg';
  }

  _createClass(VElement, [{
    key: "element",
    value: function element(COM_isSvg) {
      if (!this._element) {
        this.render(COM_isSvg || this.isSvg);
      }

      return this._element;
    }
  }, {
    key: "setIsSvg",
    value: function setIsSvg() {
      var _this = this;

      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.isSvg || value) {
        this.isSvg = value;
        this.children.forEach(function (_) {
          if (_.setIsSvg && _.isSvg === !value) {
            _.setIsSvg(_this.isSvg);
          } else if (_typeof(_) === 'object' && Object.getPrototypeOf(_) === Component) {
            _.setIsSvg(_this.isSvg);
          }
        });
        return this.isSvg;
      }

      return value;
    }
  }, {
    key: "render",
    value: function render(isSvg) {
      isSvg = this.setIsSvg(isSvg || this.isSvg);

      if (isSvg) {
        this._element = document.createElementNS('http://www.w3.org/2000/svg', this.type);
      } else {
        this._element = document.createElement(this.type);
      }

      for (var i = 0; i < this.children.length; i++) {
        var el = VElement.resolve(this.children[i]);

        if (this.children[i] && this.children[i][isState]) {
          this.states.push(this.children[i]);

          if (!this.references.has(this.children[i])) {
            this.references.set(this.children[i], []);
          }

          this.references.get(this.children[i]).push(el);

          this._element.appendChild(el);
        } else if (this.children[i] instanceof Function) {
          this.childrefs[i] = new VChildRegion(this.children[i]);
          var elements = this.childrefs[i]._elements;

          for (var j = 0; j < elements.length; j++) {
            this._element.appendChild(elements[j]._element);
          }
        } else if (el) {
          this._element.appendChild(el);
        }
      }

      var keys = Object.keys(this.props);

      if (this.props) {
        for (var _i2 = 0; _i2 < keys.length; _i2++) {
          var key = keys[_i2];

          if (this.props[key] && this.props[key][isState]) {
            this.states.push(this.props[key]);

            if (!this.references.has(this.props[key])) {
              this.references.set(this.props[key], []);
            }

            this.references.get(this.props[key]).push(key);
          } else if (_typeof(this.props[key]) === 'object') {
            var deep_states = findStateDeep(this.props[key]);

            for (var _i3 = 0; _i3 < deep_states.length; _i3++) {
              deep_states[_i3].addRelient(this);

              this.states.push(deep_states[_i3]);

              if (!this.references.has(deep_states[_i3])) {
                this.references.set(deep_states[_i3], []);
              }

              this.references.get(deep_states[_i3]).push(key);
            }
          }
        }
      }

      for (var _i4 = 0; _i4 < keys.length; _i4++) {
        var _key = keys[_i4];

        if (this.props[_key] && this.props[_key][isState]) {
          this._element[_key] = this.props[_key].value;
        } else if (_typeof(this.props[_key]) == 'object') {
          if (_key != 'children') deferAssignment(this._element[_key], this.props[_key]);
        } else {
          try {
            if (_key.substr(0, 2) == 'on') {
              this._element.addEventListener(_key.substr(2), this.props[_key]);
            } else {
              this._element[_key] = this.props[_key];
              if (isSvg) this._element.setAttribute(_key, this.props[_key]);
            }
          } catch (e) {
            this._element.setAttribute(_key, this.props[_key]);
          }
        }
      }

      for (var _i5 = 0; _i5 < this.states.length; _i5++) {
        this.states[_i5].addRelient(this);
      }
    }
  }, {
    key: "setRelientStateDirty",
    value: function setRelientStateDirty(state) {
      var _this2 = this;

      var effected = this.references.get(state);

      var _loop = function _loop(i) {
        var item = effected[i];

        if (item instanceof Text) {
          item.textContent = state.value;
        } else if (item instanceof HTMLSpanElement && item.hasAttribute('is-state-wrapper')) {
          if (state.hasRelatedNodes()) {
            state.relatedNodes.forEach(function (el) {
              if (!state.relatedNodes.includes(el)) el.element().remove();
            });
          }

          state.value.forEach(function (el) {
            item.appendChild(el.element());
          });
        } else if (typeof item === 'string') {
          if (_this2.props[item] && _this2.props[item][isState]) {
            _this2.element()[item] = _this2.props[item].value;
          } else if (_this2.props[item] instanceof Object) {
            deferAssignment(_this2.element()[item], _this2.props[item]);
          }
        }
      };

      for (var i = 0; i < effected.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "diff",
    value: function diff(other) {
      var _this3 = this;

      if (typeof other === "undefined") {
        return this.element().parentElement.removeChild(this.element());
      }

      if (!deq(this.props, other.props)) {
        var keys = Object.keys(this.props);
        var okeys = Object.keys(other.props);

        for (var i = 0; i < Math.max(keys.length, okeys.length); i++) {
          var key0 = keys[i];
          var key1 = okeys[i];
          if (key1 === 'children') continue;

          if (!key0 || !key1) {
            if (!key0) {
              this.element()[key1] = other.props[key1];
            } else if (!key1) {
              delete this.element()[key0];
            }
          } else {
            if (this.props[key0] != other.props[key0]) {
              this.element()[key0] = other.props[key0];
            }
          }
        }
      }

      this.props = other.props;

      if (other.children.length != this.children.length) {
        var parent = this.element().parentElement;

        if (parent) {
          parent.insertBefore(other.element(), this.element());
          parent.removeChild(this.element());
          this._element = other.element();
          this.children = other.children;
        }
      } else {
        this.children.forEach(function (child, index) {
          if (child && child.diff && typeof other.children[index] != 'string') {
            child.diff(other.children[index]);
          } else if (child != other.children[index]) {
            var _parent = _this3.element().parentElement;

            if (_parent && other.element() && _this3.element() != other._element) {
              _parent.insertBefore(other.element(), _this3.element());

              _parent.removeChild(_this3.element());

              _this3._element = other.element();
              _this3.children = other.children;
            }
          }
        });
      }
    }
  }, {
    key: "isVElement",
    get: function get() {
      return true;
    }
  }], [{
    key: "resolve",
    value: function resolve(value) {
      if (value instanceof VElement) {
        return value.element();
      } else if (value != undefined && value[isState]) {
        if (value.value && value.value.constructor === Array) {
          var span = document.createElement('span');
          span.setAttribute('is-state-wrapper', 'true');

          for (var i = 0; i < value.value.length; i++) {
            span.appendChild(VElement.resolve(value.value[i]));
          }

          return span;
        } else if (value[isComponentConstructor]) {
          return value.renderInternal();
        } else {
          return document.createTextNode(value.value);
        }
      } else if (value != null && _typeof(value) === 'object' && Object.getPrototypeOf(value) instanceof Component) {
        return value.element();
      } else if (value != null) {
        return document.createTextNode(value != undefined ? value : ' ');
      }
    }
  }]);

  return VElement;
}();

function deq(x, y) {
  if (x === y) return true;
  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  if (x.constructor !== y.constructor) return false;

  for (var p in x) {
    if (!x.hasOwnProperty(p)) continue;
    if (!y.hasOwnProperty(p)) return false;
    if (x[p] === y[p]) continue;
    if (_typeof(x[p]) !== 'object') return false;
    if (!deq(x[p], y[p])) return false;
  }

  for (p in y) {
    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false;
  }

  return true;
}

function dom(node_type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key2 = 2; _key2 < _len; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }

  if (typeof node_type === 'function') {
    if (Object.getPrototypeOf(node_type) === Component) {
      return new node_type(Object.assign(Object.assign({}, props || {}), {
        children: children
      }));
    }

    var res = node_type(Object.assign(Object.assign({}, props || {}), {
      children: children
    }));
    return res;
  }

  return new VElement(node_type, props, children);
}

var style = document.createElement("style");
style.setAttribute("fw-style", "true");

if (document.head) {
  document.head.appendChild(style);
} else {
  document.addEventListener("load", function () {
    document.head.appendChild(style);
  });
}

function makeTemplateStringComplete(parts, inserts) {
  if (typeof parts === "string") return parts;
  var res = "";

  for (var i = 0; i < parts.length; i++) {
    res += parts[i] || "";
    res += inserts[i] || "";
  }

  return res;
}

var id = 0;
function css(parts) {
  for (var _len = arguments.length, inserts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    inserts[_key - 1] = arguments[_key];
  }

  var cssString = makeTemplateStringComplete(parts, inserts);
  style.innerHTML += "/*".concat(id++, "*/").concat(cssString).replace(/\n/g, "");
}

var fw = {
  dom: dom,
  StatefulData: StatefulData,
  stateJoin: stateJoin,
  css: css,
  Component: Component,
  verbose: verbose$1
};

export { _toConsumableArray as _, _inherits as a, _createClass as b, _classCallCheck as c, _possibleConstructorReturn as d, _getPrototypeOf as e, fw as f };
