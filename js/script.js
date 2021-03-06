parcelRequire = function(e, r, t, n) {
  let i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
  function f(t, n) {
      if (!r[t]) {
          if (!e[t]) {
              let i = "function" == typeof parcelRequire && parcelRequire;
              if (!n && i)
                  return i(t, !0);
              if (o)
                  return o(t, !0);
              if (u && "string" == typeof t)
                  return u(t);
              let c = new Error("Cannot find module '" + t + "'");
              throw c.code = "MODULE_NOT_FOUND",
              c
          }
          p.resolve = function(r) {
              return e[t][1][r] || r
          }
          ,
          p.cache = {};
          let l = r[t] = new f.Module(t);
          e[t][0].call(l.exports, p, l, l.exports, this)
      }
      return r[t].exports;
      function p(e) {
          return f(p.resolve(e))
      }
  }
  f.isParcelRequire = !0,
  f.Module = function(e) {
      this.id = e,
      this.bundle = f,
      this.exports = {}
  }
  ,
  f.modules = e,
  f.cache = r,
  f.parent = o,
  f.register = function(r, t) {
      e[r] = [function(e, r) {
          r.exports = t
      }
      , {}]
  }
  ;
  for (let c = 0; c < t.length; c++)
      try {
          f(t[c])
      } catch (e) {
          i || (i = e)
      }
  if (t.length) {
      let l = f(t[t.length - 1]);
      "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
          return l
      }) : n && (this[n] = l)
  }
  if (parcelRequire = f,
  i)
      throw i;
  return f
}({
  "aBwP": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }),
      exports.formatInput = void 0;
      let e = /^0+/
        , r = /[^\d]/g
        , t = function(t) {
          return t.value.replace(r, "").replace(e, "")
      };
      exports.formatInput = t;
  }
  , {}],
  "CYDi": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }),
      exports.formatNumber = void 0;
      let e = function(e) {
          return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
      };
      exports.formatNumber = e;
  }
  , {}],
  "MX7v": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }),
      exports.default = void 0;
      let e = require("../utils/formatNumber");
      function t(e, t) {
          if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
      }
      function r(e, t) {
          for (let r = 0; r < t.length; r++) {
              let o = t[r];
              o.enumerable = o.enumerable || !1,
              o.configurable = !0,
              "value"in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o)
          }
      }
      function o(e, t, o) {
          return t && r(e.prototype, t),
          o && r(e, o),
          e
      }
      let i = function() {
          function r(e) {
              t(this, r),
              this.counter = e,
              this.root = this.counter.querySelector(".counter__result"),
              this.caloriesNormElem = this.root.querySelector("#calories-norm"),
              this.caloriesMinimalElem = this.root.querySelector("#calories-minimal"),
              this.caloriesMaximalElem = this.root.querySelector("#calories-maximal")
          }
          return o(r, [{
              key: "show",
              value: function(t) {
                  this.caloriesNormElem.textContent = (0,
                  e.formatNumber)(t.norm),
                  this.caloriesMinimalElem.textContent = (0,
                  e.formatNumber)(t.minimal),
                  this.caloriesMaximalElem.textContent = (0,
                  e.formatNumber)(t.maximal),
                  this.root.classList.remove("counter__result--hidden")
              }
          }, {
              key: "hide",
              value: function() {
                  this.root.classList.add("counter__result--hidden"),
                  this.caloriesNormElem.textContent = 0,
                  this.caloriesMinimalElem.textContent = 0,
                  this.caloriesMaximalElem.textContent = 0
              }
          }]),
          r
      }();
      exports.default = i;
  }
  , {
      "../utils/formatNumber": "CYDi"
  }],
  "ubzm": [function(require, module, exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
          value: !0
      }),
      exports.default = void 0;
      let t = require("../utils/formatInput")
        , e = n(require("./Result"));
      function n(t) {
          return t && t.__esModule ? t : {
              default: t
          }
      }
      function i(t) {
          return u(t) || s(t) || a(t) || r()
      }
      function r() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      function a(t, e) {
          if (t) {
              if ("string" == typeof t)
                  return o(t, e);
              let n = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
          }
      }
      function s(t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
              return Array.from(t)
      }
      function u(t) {
          if (Array.isArray(t))
              return o(t)
      }
      function o(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++)
              i[n] = t[n];
          return i
      }
      function l(t, e) {
          if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function")
      }
      function h(t, e) {
          for (let n = 0; n < e.length; n++) {
              let i = e[n];
              i.enumerable = i.enumerable || !1,
              i.configurable = !0,
              "value"in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i)
          }
      }
      function m(t, e, n) {
          return e && h(t.prototype, e),
          n && h(t, n),
          t
      }
      let f = new Map([["male", 5], ["female", -161]])
        , d = new Map([["min", 1.2], ["low", 1.375], ["medium", 1.55], ["high", 1.725], ["max", 1.9]])
        , c = function() {
          function n(t) {
              l(this, n),
              this.root = t,
              this.form = this.root.querySelector(".counter__form"),
              this.elements = this.form.elements,
              this.parameters = i(this.elements.parameters.elements),
              this.genderInputs = this.form.elements.gender,
              this.activityInputs = this.form.elements.activity,
              this.ageInput = this.form.elements.age,
              this.heightInput = this.form.elements.height,
              this.weightInput = this.form.elements.weight,
              this.calculateButton = this.form.elements.submit,
              this.resetButton = this.form.elements.reset,
              this.result = new e.default(this.root),
              this.handleInput = this.handleInput.bind(this),
              this.handleSubmit = this.handleSubmit.bind(this),
              this.handleReset = this.handleReset.bind(this)
          }
          return m(n, [{
              key: "handleInput",
              value: function(e) {
                  let n = e.target;
                  n.closest('[name="parameters"]') && (n.value = (0,
                  t.formatInput)(n)),
                  this.calculateButton.disabled = !this.form.checkValidity(),
                  this.resetButton.disabled = !this.parameters.some(function(t) {
                      return t.value
                  })
              }
          }, {
              key: "handleSubmit",
              value: function(t) {
                  t.preventDefault();
                  let e = this.getCaloriesNorm()
                    , n = {
                      norm: e,
                      minimal: this.getCaloriesMinimal(e),
                      maximal: this.getCaloriesMaximal(e)
                  };
                  this.result.show(n)
              }
          }, {
              key: "handleReset",
              value: function() {
                  this.calculateButton.disabled = !0,
                  this.resetButton.disabled = !0,
                  this.result.hide()
              }
          }, {
              key: "addEventListeners",
              value: function() {
                  this.form.addEventListener("input", this.handleInput),
                  this.form.addEventListener("submit", this.handleSubmit),
                  this.form.addEventListener("reset", this.handleReset)
              }
          }, {
              key: "init",
              value: function() {
                  this.addEventListeners()
              }
          }, {
              key: "getActivityRatio",
              value: function() {
                  var t = this.activityInputs.value;
                  return d.get(t)
              }
          }, {
              key: "getCaloriesNorm",
              value: function() {
                  let t = Number(this.weightInput.value)
                    , e = Number(this.heightInput.value)
                    , n = Number(this.ageInput.value)
                    , i = this.genderInputs.value
                    , r = 10 * t + 6.25 * e - 5 * n + f.get(i)
                    , a = this.getActivityRatio();
                  return Math.round(r * a)
              }
          }, {
              key: "getCaloriesMinimal",
              value: function(t) {
                  return Math.round(.85 * t)
              }
          }, {
              key: "getCaloriesMaximal",
              value: function(t) {
                  return Math.round(1.15 * t)
              }
          }]),
          n
      }();
      exports.default = c;
  }
  , {
      "../utils/formatInput": "aBwP",
      "./Result": "MX7v"
  }],
  "QvaY": [function(require, module, exports) {
      "use strict";
      let e = r(require("./modules/CaloriesCounter"));
      function r(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var u = document.querySelectorAll(".counter");
      u.forEach(function(r) {
          new e.default(r).init()
      });
  }
  , {
      "./modules/CaloriesCounter": "ubzm"
  }]
}, {}, ["QvaY"], null)
