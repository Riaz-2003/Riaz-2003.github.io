function Af(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const i = Object.getOwnPropertyDescriptor(r, l);
          i &&
            Object.defineProperty(
              e,
              l,
              i.get ? i : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function Bf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Zs = { exports: {} },
  mi = {},
  bs = { exports: {} },
  W = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nl = Symbol.for("react.element"),
  $f = Symbol.for("react.portal"),
  Vf = Symbol.for("react.fragment"),
  Wf = Symbol.for("react.strict_mode"),
  Hf = Symbol.for("react.profiler"),
  Qf = Symbol.for("react.provider"),
  Kf = Symbol.for("react.context"),
  Yf = Symbol.for("react.forward_ref"),
  Gf = Symbol.for("react.suspense"),
  Xf = Symbol.for("react.memo"),
  qf = Symbol.for("react.lazy"),
  ja = Symbol.iterator;
function Jf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ec = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  tc = Object.assign,
  nc = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nc),
    (this.updater = n || ec);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function rc() {}
rc.prototype = rr.prototype;
function yu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = nc),
    (this.updater = n || ec);
}
var wu = (yu.prototype = new rc());
wu.constructor = yu;
tc(wu, rr.prototype);
wu.isPureReactComponent = !0;
var _a = Array.isArray,
  lc = Object.prototype.hasOwnProperty,
  xu = { current: null },
  ic = { key: !0, ref: !0, __self: !0, __source: !0 };
function oc(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      lc.call(t, r) && !ic.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: nl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: xu.current,
  };
}
function Zf(e, t) {
  return {
    $$typeof: nl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Su(e) {
  return typeof e == "object" && e !== null && e.$$typeof === nl;
}
function bf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Na = /\/+/g;
function Vi(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? bf("" + e.key)
    : t.toString(36);
}
function Tl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case nl:
          case $f:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Vi(o, 0) : r),
      _a(l)
        ? ((n = ""),
          e != null && (n = e.replace(Na, "$&/") + "/"),
          Tl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (Su(l) &&
            (l = Zf(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Na, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), _a(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var a = r + Vi(i, u);
      o += Tl(i, t, n, a, l);
    }
  else if (((a = Jf(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Vi(i, u++)), (o += Tl(i, t, n, a, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function pl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Tl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function ep(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  Dl = { transition: null },
  tp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Dl,
    ReactCurrentOwner: xu,
  };
W.Children = {
  map: pl,
  forEach: function (e, t, n) {
    pl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      pl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      pl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Su(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
W.Component = rr;
W.Fragment = Vf;
W.Profiler = Hf;
W.PureComponent = yu;
W.StrictMode = Wf;
W.Suspense = Gf;
W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tp;
W.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = tc({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = xu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      lc.call(t, a) &&
        !ic.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: nl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
W.createContext = function (e) {
  return (
    (e = {
      $$typeof: Kf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Qf, _context: e }),
    (e.Consumer = e)
  );
};
W.createElement = oc;
W.createFactory = function (e) {
  var t = oc.bind(null, e);
  return (t.type = e), t;
};
W.createRef = function () {
  return { current: null };
};
W.forwardRef = function (e) {
  return { $$typeof: Yf, render: e };
};
W.isValidElement = Su;
W.lazy = function (e) {
  return { $$typeof: qf, _payload: { _status: -1, _result: e }, _init: ep };
};
W.memo = function (e, t) {
  return { $$typeof: Xf, type: e, compare: t === void 0 ? null : t };
};
W.startTransition = function (e) {
  var t = Dl.transition;
  Dl.transition = {};
  try {
    e();
  } finally {
    Dl.transition = t;
  }
};
W.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
W.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
W.useContext = function (e) {
  return Te.current.useContext(e);
};
W.useDebugValue = function () {};
W.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
W.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
W.useId = function () {
  return Te.current.useId();
};
W.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
W.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
W.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
W.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
W.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
W.useRef = function (e) {
  return Te.current.useRef(e);
};
W.useState = function (e) {
  return Te.current.useState(e);
};
W.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
W.useTransition = function () {
  return Te.current.useTransition();
};
W.version = "18.2.0";
bs.exports = W;
var R = bs.exports;
const uc = Bf(R),
  np = Af({ __proto__: null, default: uc }, [R]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rp = R,
  lp = Symbol.for("react.element"),
  ip = Symbol.for("react.fragment"),
  op = Object.prototype.hasOwnProperty,
  up = rp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ap = { key: !0, ref: !0, __self: !0, __source: !0 };
function ac(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) op.call(t, r) && !ap.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: lp,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: up.current,
  };
}
mi.Fragment = ip;
mi.jsx = ac;
mi.jsxs = ac;
Zs.exports = mi;
var N = Zs.exports,
  yo = {},
  sc = { exports: {} },
  We = {},
  cc = { exports: {} },
  dc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, O) {
    var U = T.length;
    T.push(O);
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        Z = T[Y];
      if (0 < l(Z, O)) (T[Y] = O), (T[U] = Z), (U = Y);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var O = T[0],
      U = T.pop();
    if (U !== O) {
      T[0] = U;
      e: for (var Y = 0, Z = T.length, Dt = Z >>> 1; Y < Dt; ) {
        var mt = 2 * (Y + 1) - 1,
          or = T[mt],
          vt = mt + 1,
          re = T[vt];
        if (0 > l(or, U))
          vt < Z && 0 > l(re, or)
            ? ((T[Y] = re), (T[vt] = U), (Y = vt))
            : ((T[Y] = or), (T[mt] = U), (Y = mt));
        else if (vt < Z && 0 > l(re, U)) (T[Y] = re), (T[vt] = U), (Y = vt);
        else break e;
      }
    }
    return O;
  }
  function l(T, O) {
    var U = T.sortIndex - O.sortIndex;
    return U !== 0 ? U : T.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var a = [],
    s = [],
    p = 1,
    v = null,
    m = 3,
    S = !1,
    y = !1,
    w = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(T) {
    for (var O = n(s); O !== null; ) {
      if (O.callback === null) r(s);
      else if (O.startTime <= T)
        r(s), (O.sortIndex = O.expirationTime), t(a, O);
      else break;
      O = n(s);
    }
  }
  function c(T) {
    if (((w = !1), h(T), !y))
      if (n(a) !== null) (y = !0), Tt(k);
      else {
        var O = n(s);
        O !== null && ht(c, O.startTime - T);
      }
  }
  function k(T, O) {
    (y = !1), w && ((w = !1), f(_), (_ = -1)), (S = !0);
    var U = m;
    try {
      for (
        h(O), v = n(a);
        v !== null && (!(v.expirationTime > O) || (T && !we()));

      ) {
        var Y = v.callback;
        if (typeof Y == "function") {
          (v.callback = null), (m = v.priorityLevel);
          var Z = Y(v.expirationTime <= O);
          (O = e.unstable_now()),
            typeof Z == "function" ? (v.callback = Z) : v === n(a) && r(a),
            h(O);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var Dt = !0;
      else {
        var mt = n(s);
        mt !== null && ht(c, mt.startTime - O), (Dt = !1);
      }
      return Dt;
    } finally {
      (v = null), (m = U), (S = !1);
    }
  }
  var P = !1,
    j = null,
    _ = -1,
    H = 5,
    I = -1;
  function we() {
    return !(e.unstable_now() - I < H);
  }
  function Ue() {
    if (j !== null) {
      var T = e.unstable_now();
      I = T;
      var O = !0;
      try {
        O = j(!0, T);
      } finally {
        O ? at() : ((P = !1), (j = null));
      }
    } else P = !1;
  }
  var at;
  if (typeof d == "function")
    at = function () {
      d(Ue);
    };
  else if (typeof MessageChannel < "u") {
    var rn = new MessageChannel(),
      se = rn.port2;
    (rn.port1.onmessage = Ue),
      (at = function () {
        se.postMessage(null);
      });
  } else
    at = function () {
      L(Ue, 0);
    };
  function Tt(T) {
    (j = T), P || ((P = !0), at());
  }
  function ht(T, O) {
    _ = L(function () {
      T(e.unstable_now());
    }, O);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || S || ((y = !0), Tt(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (H = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (T) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = m;
      }
      var U = m;
      m = O;
      try {
        return T();
      } finally {
        m = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, O) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var U = m;
      m = T;
      try {
        return O();
      } finally {
        m = U;
      }
    }),
    (e.unstable_scheduleCallback = function (T, O, U) {
      var Y = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Y + U : Y))
          : (U = Y),
        T)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = U + Z),
        (T = {
          id: p++,
          callback: O,
          priorityLevel: T,
          startTime: U,
          expirationTime: Z,
          sortIndex: -1,
        }),
        U > Y
          ? ((T.sortIndex = U),
            t(s, T),
            n(a) === null &&
              T === n(s) &&
              (w ? (f(_), (_ = -1)) : (w = !0), ht(c, U - Y)))
          : ((T.sortIndex = Z), t(a, T), y || S || ((y = !0), Tt(k))),
        T
      );
    }),
    (e.unstable_shouldYield = we),
    (e.unstable_wrapCallback = function (T) {
      var O = m;
      return function () {
        var U = m;
        m = O;
        try {
          return T.apply(this, arguments);
        } finally {
          m = U;
        }
      };
    });
})(dc);
cc.exports = dc;
var sp = cc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fc = R,
  Ve = sp;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var pc = new Set(),
  Ur = {};
function En(e, t) {
  Xn(e, t), Xn(e + "Capture", t);
}
function Xn(e, t) {
  for (Ur[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
}
var Pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  wo = Object.prototype.hasOwnProperty,
  cp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  La = {},
  Ta = {};
function dp(e) {
  return wo.call(Ta, e)
    ? !0
    : wo.call(La, e)
    ? !1
    : cp.test(e)
    ? (Ta[e] = !0)
    : ((La[e] = !0), !1);
}
function fp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pp(e, t, n, r) {
  if (t === null || typeof t > "u" || fp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ce[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ce[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ce[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ce[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ce[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ce[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ce[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ku = /[\-:]([a-z])/g;
function Eu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ku, Eu);
    Ce[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ku, Eu);
    Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ku, Eu);
  Ce[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ce.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ce[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cu(e, t, n, r) {
  var l = Ce.hasOwnProperty(t) ? Ce[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pp(t, n, l, r) && (n = null),
    r || l === null
      ? dp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = fc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hl = Symbol.for("react.element"),
  _n = Symbol.for("react.portal"),
  Nn = Symbol.for("react.fragment"),
  Pu = Symbol.for("react.strict_mode"),
  xo = Symbol.for("react.profiler"),
  hc = Symbol.for("react.provider"),
  mc = Symbol.for("react.context"),
  Ru = Symbol.for("react.forward_ref"),
  So = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  ju = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  vc = Symbol.for("react.offscreen"),
  Da = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Da && e[Da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  Wi;
function Er(e) {
  if (Wi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Wi = (t && t[1]) || "";
    }
  return (
    `
` +
    Wi +
    e
  );
}
var Hi = !1;
function Qi(e, t) {
  if (!e || Hi) return "";
  Hi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var a =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (Hi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Er(e) : "";
}
function hp(e) {
  switch (e.tag) {
    case 5:
      return Er(e.type);
    case 16:
      return Er("Lazy");
    case 13:
      return Er("Suspense");
    case 19:
      return Er("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Qi(e.type, !1)), e;
    case 11:
      return (e = Qi(e.type.render, !1)), e;
    case 1:
      return (e = Qi(e.type, !0)), e;
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Nn:
      return "Fragment";
    case _n:
      return "Portal";
    case xo:
      return "Profiler";
    case Pu:
      return "StrictMode";
    case So:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case mc:
        return (e.displayName || "Context") + ".Consumer";
      case hc:
        return (e._context.displayName || "Context") + ".Provider";
      case Ru:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ju:
        return (
          (t = e.displayName || null), t !== null ? t : Eo(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return Eo(e(t));
        } catch {}
    }
  return null;
}
function mp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Eo(t);
    case 8:
      return t === Pu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function qt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function gc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vp(e) {
  var t = gc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ml(e) {
  e._valueTracker || (e._valueTracker = vp(e));
}
function yc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = gc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Wl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Co(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function wc(e, t) {
  (t = t.checked), t != null && Cu(e, "checked", t, !1);
}
function Po(e, t) {
  wc(e, t);
  var n = qt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ro(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ro(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function za(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ro(e, t, n) {
  (t !== "number" || Wl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Cr = Array.isArray;
function Vn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function jo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Oa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Cr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: qt(n) };
}
function xc(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Fa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _o(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var vl,
  kc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        vl = vl || document.createElement("div"),
          vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ar(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gp = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function (e) {
  gp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});
function Ec(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_r.hasOwnProperty(e) && _r[e])
    ? ("" + t).trim()
    : t + "px";
}
function Cc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Ec(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var yp = ae(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function No(e, t) {
  if (t) {
    if (yp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function Lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var To = null;
function _u(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Do = null,
  Wn = null,
  Hn = null;
function Ia(e) {
  if ((e = il(e))) {
    if (typeof Do != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = xi(t)), Do(e.stateNode, e.type, t));
  }
}
function Pc(e) {
  Wn ? (Hn ? Hn.push(e) : (Hn = [e])) : (Wn = e);
}
function Rc() {
  if (Wn) {
    var e = Wn,
      t = Hn;
    if (((Hn = Wn = null), Ia(e), t)) for (e = 0; e < t.length; e++) Ia(t[e]);
  }
}
function jc(e, t) {
  return e(t);
}
function _c() {}
var Ki = !1;
function Nc(e, t, n) {
  if (Ki) return e(t, n);
  Ki = !0;
  try {
    return jc(e, t, n);
  } finally {
    (Ki = !1), (Wn !== null || Hn !== null) && (_c(), Rc());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var Mo = !1;
if (Pt)
  try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
      get: function () {
        Mo = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr);
  } catch {
    Mo = !1;
  }
function wp(e, t, n, r, l, i, o, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var Nr = !1,
  Hl = null,
  Ql = !1,
  zo = null,
  xp = {
    onError: function (e) {
      (Nr = !0), (Hl = e);
    },
  };
function Sp(e, t, n, r, l, i, o, u, a) {
  (Nr = !1), (Hl = null), wp.apply(xp, arguments);
}
function kp(e, t, n, r, l, i, o, u, a) {
  if ((Sp.apply(this, arguments), Nr)) {
    if (Nr) {
      var s = Hl;
      (Nr = !1), (Hl = null);
    } else throw Error(C(198));
    Ql || ((Ql = !0), (zo = s));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ua(e) {
  if (Cn(e) !== e) throw Error(C(188));
}
function Ep(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ua(l), e;
        if (i === r) return Ua(l), t;
        i = i.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function Tc(e) {
  return (e = Ep(e)), e !== null ? Dc(e) : null;
}
function Dc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Dc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Mc = Ve.unstable_scheduleCallback,
  Aa = Ve.unstable_cancelCallback,
  Cp = Ve.unstable_shouldYield,
  Pp = Ve.unstable_requestPaint,
  he = Ve.unstable_now,
  Rp = Ve.unstable_getCurrentPriorityLevel,
  Nu = Ve.unstable_ImmediatePriority,
  zc = Ve.unstable_UserBlockingPriority,
  Kl = Ve.unstable_NormalPriority,
  jp = Ve.unstable_LowPriority,
  Oc = Ve.unstable_IdlePriority,
  vi = null,
  ft = null;
function _p(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(vi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var it = Math.clz32 ? Math.clz32 : Tp,
  Np = Math.log,
  Lp = Math.LN2;
function Tp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Np(e) / Lp) | 0)) | 0;
}
var gl = 64,
  yl = 4194304;
function Pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = Pr(u)) : ((i &= o), i !== 0 && (r = Pr(i)));
  } else (o = n & ~l), o !== 0 ? (r = Pr(o)) : i !== 0 && (r = Pr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - it(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Dp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Mp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - it(i),
      u = 1 << o,
      a = l[o];
    a === -1
      ? (!(u & n) || u & r) && (l[o] = Dp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Oo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Fc() {
  var e = gl;
  return (gl <<= 1), !(gl & 4194240) && (gl = 64), e;
}
function Yi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function rl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - it(t)),
    (e[t] = n);
}
function zp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - it(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function Lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - it(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function Ic(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Uc,
  Tu,
  Ac,
  Bc,
  $c,
  Fo = !1,
  wl = [],
  Vt = null,
  Wt = null,
  Ht = null,
  $r = new Map(),
  Vr = new Map(),
  Ut = [],
  Op =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Wt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
      break;
    case "pointerover":
    case "pointerout":
      $r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vr.delete(t.pointerId);
  }
}
function pr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = il(t)), t !== null && Tu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Fp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Vt = pr(Vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Wt = pr(Wt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Ht = pr(Ht, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return $r.set(i, pr($r.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Vr.set(i, pr(Vr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var t = cn(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lc(n)), t !== null)) {
          (e.blockedOn = t),
            $c(e.priority, function () {
              Ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Io(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (To = r), n.target.dispatchEvent(r), (To = null);
    } else return (t = il(n)), t !== null && Tu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function $a(e, t, n) {
  Ml(e) && n.delete(t);
}
function Ip() {
  (Fo = !1),
    Vt !== null && Ml(Vt) && (Vt = null),
    Wt !== null && Ml(Wt) && (Wt = null),
    Ht !== null && Ml(Ht) && (Ht = null),
    $r.forEach($a),
    Vr.forEach($a);
}
function hr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fo ||
      ((Fo = !0),
      Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority, Ip)));
}
function Wr(e) {
  function t(l) {
    return hr(l, e);
  }
  if (0 < wl.length) {
    hr(wl[0], e);
    for (var n = 1; n < wl.length; n++) {
      var r = wl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && hr(Vt, e),
      Wt !== null && hr(Wt, e),
      Ht !== null && hr(Ht, e),
      $r.forEach(t),
      Vr.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Vc(n), n.blockedOn === null && Ut.shift();
}
var Qn = Nt.ReactCurrentBatchConfig,
  Gl = !0;
function Up(e, t, n, r) {
  var l = G,
    i = Qn.transition;
  Qn.transition = null;
  try {
    (G = 1), Du(e, t, n, r);
  } finally {
    (G = l), (Qn.transition = i);
  }
}
function Ap(e, t, n, r) {
  var l = G,
    i = Qn.transition;
  Qn.transition = null;
  try {
    (G = 4), Du(e, t, n, r);
  } finally {
    (G = l), (Qn.transition = i);
  }
}
function Du(e, t, n, r) {
  if (Gl) {
    var l = Io(e, t, n, r);
    if (l === null) ro(e, t, r, Xl, n), Ba(e, r);
    else if (Fp(l, e, t, n, r)) r.stopPropagation();
    else if ((Ba(e, r), t & 4 && -1 < Op.indexOf(e))) {
      for (; l !== null; ) {
        var i = il(l);
        if (
          (i !== null && Uc(i),
          (i = Io(e, t, n, r)),
          i === null && ro(e, t, r, Xl, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var Xl = null;
function Io(e, t, n, r) {
  if (((Xl = null), (e = _u(r)), (e = cn(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xl = e), null;
}
function Wc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rp()) {
        case Nu:
          return 1;
        case zc:
          return 4;
        case Kl:
        case jp:
          return 16;
        case Oc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  Mu = null,
  zl = null;
function Hc() {
  if (zl) return zl;
  var e,
    t = Mu,
    n = t.length,
    r,
    l = "value" in Bt ? Bt.value : Bt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ol(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xl() {
  return !0;
}
function Va() {
  return !1;
}
function He(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? xl
        : Va),
      (this.isPropagationStopped = Va),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = xl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xl));
      },
      persist: function () {},
      isPersistent: xl,
    }),
    t
  );
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zu = He(lr),
  ll = ae({}, lr, { view: 0, detail: 0 }),
  Bp = He(ll),
  Gi,
  Xi,
  mr,
  gi = ae({}, ll, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((Gi = e.screenX - mr.screenX), (Xi = e.screenY - mr.screenY))
              : (Xi = Gi = 0),
            (mr = e)),
          Gi);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Xi;
    },
  }),
  Wa = He(gi),
  $p = ae({}, gi, { dataTransfer: 0 }),
  Vp = He($p),
  Wp = ae({}, ll, { relatedTarget: 0 }),
  qi = He(Wp),
  Hp = ae({}, lr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Qp = He(Hp),
  Kp = ae({}, lr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Yp = He(Kp),
  Gp = ae({}, lr, { data: 0 }),
  Ha = He(Gp),
  Xp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Jp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jp[e]) ? !!t[e] : !1;
}
function Ou() {
  return Zp;
}
var bp = ae({}, ll, {
    key: function (e) {
      if (e.key) {
        var t = Xp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ol(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ou,
    charCode: function (e) {
      return e.type === "keypress" ? Ol(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ol(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  eh = He(bp),
  th = ae({}, gi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qa = He(th),
  nh = ae({}, ll, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ou,
  }),
  rh = He(nh),
  lh = ae({}, lr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ih = He(lh),
  oh = ae({}, gi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  uh = He(oh),
  ah = [9, 13, 27, 32],
  Fu = Pt && "CompositionEvent" in window,
  Lr = null;
Pt && "documentMode" in document && (Lr = document.documentMode);
var sh = Pt && "TextEvent" in window && !Lr,
  Qc = Pt && (!Fu || (Lr && 8 < Lr && 11 >= Lr)),
  Ka = String.fromCharCode(32),
  Ya = !1;
function Kc(e, t) {
  switch (e) {
    case "keyup":
      return ah.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Yc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ln = !1;
function ch(e, t) {
  switch (e) {
    case "compositionend":
      return Yc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ya = !0), Ka);
    case "textInput":
      return (e = t.data), e === Ka && Ya ? null : e;
    default:
      return null;
  }
}
function dh(e, t) {
  if (Ln)
    return e === "compositionend" || (!Fu && Kc(e, t))
      ? ((e = Hc()), (zl = Mu = Bt = null), (Ln = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Qc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fh[e.type] : t === "textarea";
}
function Gc(e, t, n, r) {
  Pc(r),
    (t = ql(t, "onChange")),
    0 < t.length &&
      ((n = new zu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Tr = null,
  Hr = null;
function ph(e) {
  id(e, 0);
}
function yi(e) {
  var t = Mn(e);
  if (yc(t)) return e;
}
function hh(e, t) {
  if (e === "change") return t;
}
var Xc = !1;
if (Pt) {
  var Ji;
  if (Pt) {
    var Zi = "oninput" in document;
    if (!Zi) {
      var Xa = document.createElement("div");
      Xa.setAttribute("oninput", "return;"),
        (Zi = typeof Xa.oninput == "function");
    }
    Ji = Zi;
  } else Ji = !1;
  Xc = Ji && (!document.documentMode || 9 < document.documentMode);
}
function qa() {
  Tr && (Tr.detachEvent("onpropertychange", qc), (Hr = Tr = null));
}
function qc(e) {
  if (e.propertyName === "value" && yi(Hr)) {
    var t = [];
    Gc(t, Hr, e, _u(e)), Nc(ph, t);
  }
}
function mh(e, t, n) {
  e === "focusin"
    ? (qa(), (Tr = t), (Hr = n), Tr.attachEvent("onpropertychange", qc))
    : e === "focusout" && qa();
}
function vh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return yi(Hr);
}
function gh(e, t) {
  if (e === "click") return yi(t);
}
function yh(e, t) {
  if (e === "input" || e === "change") return yi(t);
}
function wh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ut = typeof Object.is == "function" ? Object.is : wh;
function Qr(e, t) {
  if (ut(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!wo.call(t, l) || !ut(e[l], t[l])) return !1;
  }
  return !0;
}
function Ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Za(e, t) {
  var n = Ja(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ja(n);
  }
}
function Jc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Jc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Zc() {
  for (var e = window, t = Wl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Wl(e.document);
  }
  return t;
}
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function xh(e) {
  var t = Zc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Jc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Iu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = Za(n, i));
        var o = Za(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sh = Pt && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  Uo = null,
  Dr = null,
  Ao = !1;
function ba(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Tn == null ||
    Tn !== Wl(r) ||
    ((r = Tn),
    "selectionStart" in r && Iu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Dr && Qr(Dr, r)) ||
      ((Dr = r),
      (r = ql(Uo, "onSelect")),
      0 < r.length &&
        ((t = new zu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function Sl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Dn = {
    animationend: Sl("Animation", "AnimationEnd"),
    animationiteration: Sl("Animation", "AnimationIteration"),
    animationstart: Sl("Animation", "AnimationStart"),
    transitionend: Sl("Transition", "TransitionEnd"),
  },
  bi = {},
  bc = {};
Pt &&
  ((bc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Dn.animationend.animation,
    delete Dn.animationiteration.animation,
    delete Dn.animationstart.animation),
  "TransitionEvent" in window || delete Dn.transitionend.transition);
function wi(e) {
  if (bi[e]) return bi[e];
  if (!Dn[e]) return e;
  var t = Dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bc) return (bi[e] = t[n]);
  return e;
}
var ed = wi("animationend"),
  td = wi("animationiteration"),
  nd = wi("animationstart"),
  rd = wi("transitionend"),
  ld = new Map(),
  es =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bt(e, t) {
  ld.set(e, t), En(t, [e]);
}
for (var eo = 0; eo < es.length; eo++) {
  var to = es[eo],
    kh = to.toLowerCase(),
    Eh = to[0].toUpperCase() + to.slice(1);
  bt(kh, "on" + Eh);
}
bt(ed, "onAnimationEnd");
bt(td, "onAnimationIteration");
bt(nd, "onAnimationStart");
bt("dblclick", "onDoubleClick");
bt("focusin", "onFocus");
bt("focusout", "onBlur");
bt(rd, "onTransitionEnd");
Xn("onMouseEnter", ["mouseout", "mouseover"]);
Xn("onMouseLeave", ["mouseout", "mouseover"]);
Xn("onPointerEnter", ["pointerout", "pointerover"]);
Xn("onPointerLeave", ["pointerout", "pointerover"]);
En(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
En(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
En("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
En(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
En(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Rr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ch = new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));
function ts(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kp(r, t, void 0, e), (e.currentTarget = null);
}
function id(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== i && l.isPropagationStopped())) break e;
          ts(l, u, s), (i = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== i && l.isPropagationStopped())
          )
            break e;
          ts(l, u, s), (i = a);
        }
    }
  }
  if (Ql) throw ((e = zo), (Ql = !1), (zo = null), e);
}
function ee(e, t) {
  var n = t[Ho];
  n === void 0 && (n = t[Ho] = new Set());
  var r = e + "__bubble";
  n.has(r) || (od(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), od(n, e, r, t);
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Kr(e) {
  if (!e[kl]) {
    (e[kl] = !0),
      pc.forEach(function (n) {
        n !== "selectionchange" && (Ch.has(n) || no(n, !1, e), no(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[kl] || ((t[kl] = !0), no("selectionchange", !1, t));
  }
}
function od(e, t, n, r) {
  switch (Wc(t)) {
    case 1:
      var l = Up;
      break;
    case 4:
      l = Ap;
      break;
    default:
      l = Du;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ro(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = cn(u)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Nc(function () {
    var s = i,
      p = _u(n),
      v = [];
    e: {
      var m = ld.get(e);
      if (m !== void 0) {
        var S = zu,
          y = e;
        switch (e) {
          case "keypress":
            if (Ol(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = eh;
            break;
          case "focusin":
            (y = "focus"), (S = qi);
            break;
          case "focusout":
            (y = "blur"), (S = qi);
            break;
          case "beforeblur":
          case "afterblur":
            S = qi;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = Wa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Vp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = rh;
            break;
          case ed:
          case td:
          case nd:
            S = Qp;
            break;
          case rd:
            S = ih;
            break;
          case "scroll":
            S = Bp;
            break;
          case "wheel":
            S = uh;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Yp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Qa;
        }
        var w = (t & 4) !== 0,
          L = !w && e === "scroll",
          f = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var d = s, h; d !== null; ) {
          h = d;
          var c = h.stateNode;
          if (
            (h.tag === 5 &&
              c !== null &&
              ((h = c),
              f !== null && ((c = Br(d, f)), c != null && w.push(Yr(d, c, h)))),
            L)
          )
            break;
          d = d.return;
        }
        0 < w.length &&
          ((m = new S(m, y, null, n, p)), v.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m &&
            n !== To &&
            (y = n.relatedTarget || n.fromElement) &&
            (cn(y) || y[Rt]))
        )
          break e;
        if (
          (S || m) &&
          ((m =
            p.window === p
              ? p
              : (m = p.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          S
            ? ((y = n.relatedTarget || n.toElement),
              (S = s),
              (y = y ? cn(y) : null),
              y !== null &&
                ((L = Cn(y)), y !== L || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = s)),
          S !== y)
        ) {
          if (
            ((w = Wa),
            (c = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Qa),
              (c = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (L = S == null ? m : Mn(S)),
            (h = y == null ? m : Mn(y)),
            (m = new w(c, d + "leave", S, n, p)),
            (m.target = L),
            (m.relatedTarget = h),
            (c = null),
            cn(p) === s &&
              ((w = new w(f, d + "enter", y, n, p)),
              (w.target = h),
              (w.relatedTarget = L),
              (c = w)),
            (L = c),
            S && y)
          )
            t: {
              for (w = S, f = y, d = 0, h = w; h; h = Rn(h)) d++;
              for (h = 0, c = f; c; c = Rn(c)) h++;
              for (; 0 < d - h; ) (w = Rn(w)), d--;
              for (; 0 < h - d; ) (f = Rn(f)), h--;
              for (; d--; ) {
                if (w === f || (f !== null && w === f.alternate)) break t;
                (w = Rn(w)), (f = Rn(f));
              }
              w = null;
            }
          else w = null;
          S !== null && ns(v, m, S, w, !1),
            y !== null && L !== null && ns(v, L, y, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? Mn(s) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var k = hh;
        else if (Ga(m))
          if (Xc) k = yh;
          else {
            k = vh;
            var P = mh;
          }
        else
          (S = m.nodeName) &&
            S.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (k = gh);
        if (k && (k = k(e, s))) {
          Gc(v, k, n, p);
          break e;
        }
        P && P(e, m, s),
          e === "focusout" &&
            (P = m._wrapperState) &&
            P.controlled &&
            m.type === "number" &&
            Ro(m, "number", m.value);
      }
      switch (((P = s ? Mn(s) : window), e)) {
        case "focusin":
          (Ga(P) || P.contentEditable === "true") &&
            ((Tn = P), (Uo = s), (Dr = null));
          break;
        case "focusout":
          Dr = Uo = Tn = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ao = !1), ba(v, n, p);
          break;
        case "selectionchange":
          if (Sh) break;
        case "keydown":
        case "keyup":
          ba(v, n, p);
      }
      var j;
      if (Fu)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Ln
          ? Kc(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Qc &&
          n.locale !== "ko" &&
          (Ln || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Ln && (j = Hc())
            : ((Bt = p),
              (Mu = "value" in Bt ? Bt.value : Bt.textContent),
              (Ln = !0))),
        (P = ql(s, _)),
        0 < P.length &&
          ((_ = new Ha(_, e, null, n, p)),
          v.push({ event: _, listeners: P }),
          j ? (_.data = j) : ((j = Yc(n)), j !== null && (_.data = j)))),
        (j = sh ? ch(e, n) : dh(e, n)) &&
          ((s = ql(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Ha("onBeforeInput", "beforeinput", null, n, p)),
            v.push({ event: p, listeners: s }),
            (p.data = j)));
    }
    id(v, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ql(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Br(e, n)),
      i != null && r.unshift(Yr(e, i, l)),
      (i = Br(e, t)),
      i != null && r.push(Yr(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ns(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Br(n, i)), a != null && o.unshift(Yr(n, a, u)))
        : l || ((a = Br(n, i)), a != null && o.push(Yr(n, a, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Ph = /\r\n?/g,
  Rh = /\u0000|\uFFFD/g;
function rs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ph,
      `
`
    )
    .replace(Rh, "");
}
function El(e, t, n) {
  if (((t = rs(t)), rs(e) !== t && n)) throw Error(C(425));
}
function Jl() {}
var Bo = null,
  $o = null;
function Vo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wo = typeof setTimeout == "function" ? setTimeout : void 0,
  jh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ls = typeof Promise == "function" ? Promise : void 0,
  _h =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ls < "u"
      ? function (e) {
          return ls.resolve(null).then(e).catch(Nh);
        }
      : Wo;
function Nh(e) {
  setTimeout(function () {
    throw e;
  });
}
function lo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Wr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Wr(t);
}
function Qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function is(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + ir,
  Gr = "__reactProps$" + ir,
  Rt = "__reactContainer$" + ir,
  Ho = "__reactEvents$" + ir,
  Lh = "__reactListeners$" + ir,
  Th = "__reactHandles$" + ir;
function cn(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = is(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = is(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function il(e) {
  return (
    (e = e[dt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Mn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function xi(e) {
  return e[Gr] || null;
}
var Qo = [],
  zn = -1;
function en(e) {
  return { current: e };
}
function te(e) {
  0 > zn || ((e.current = Qo[zn]), (Qo[zn] = null), zn--);
}
function b(e, t) {
  zn++, (Qo[zn] = e.current), (e.current = t);
}
var Jt = {},
  _e = en(Jt),
  Oe = en(!1),
  vn = Jt;
function qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Zl() {
  te(Oe), te(_e);
}
function os(e, t, n) {
  if (_e.current !== Jt) throw Error(C(168));
  b(_e, t), b(Oe, n);
}
function ud(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(C(108, mp(e) || "Unknown", l));
  return ae({}, n, r);
}
function bl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (vn = _e.current),
    b(_e, e),
    b(Oe, Oe.current),
    !0
  );
}
function us(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = ud(e, t, vn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Oe),
      te(_e),
      b(_e, e))
    : te(Oe),
    b(Oe, n);
}
var xt = null,
  Si = !1,
  io = !1;
function ad(e) {
  xt === null ? (xt = [e]) : xt.push(e);
}
function Dh(e) {
  (Si = !0), ad(e);
}
function tn() {
  if (!io && xt !== null) {
    io = !0;
    var e = 0,
      t = G;
    try {
      var n = xt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xt = null), (Si = !1);
    } catch (l) {
      throw (xt !== null && (xt = xt.slice(e + 1)), Mc(Nu, tn), l);
    } finally {
      (G = t), (io = !1);
    }
  }
  return null;
}
var On = [],
  Fn = 0,
  ei = null,
  ti = 0,
  Ye = [],
  Ge = 0,
  gn = null,
  St = 1,
  kt = "";
function an(e, t) {
  (On[Fn++] = ti), (On[Fn++] = ei), (ei = e), (ti = t);
}
function sd(e, t, n) {
  (Ye[Ge++] = St), (Ye[Ge++] = kt), (Ye[Ge++] = gn), (gn = e);
  var r = St;
  e = kt;
  var l = 32 - it(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - it(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - it(t) + l)) | (n << l) | r),
      (kt = i + e);
  } else (St = (1 << i) | (n << l) | r), (kt = e);
}
function Uu(e) {
  e.return !== null && (an(e, 1), sd(e, 1, 0));
}
function Au(e) {
  for (; e === ei; )
    (ei = On[--Fn]), (On[Fn] = null), (ti = On[--Fn]), (On[Fn] = null);
  for (; e === gn; )
    (gn = Ye[--Ge]),
      (Ye[Ge] = null),
      (kt = Ye[--Ge]),
      (Ye[Ge] = null),
      (St = Ye[--Ge]),
      (Ye[Ge] = null);
}
var $e = null,
  Be = null,
  ne = !1,
  lt = null;
function cd(e, t) {
  var n = Xe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function as(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (Be = Qt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (Be = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = gn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Xe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (Be = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ko(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Yo(e) {
  if (ne) {
    var t = Be;
    if (t) {
      var n = t;
      if (!as(e, t)) {
        if (Ko(e)) throw Error(C(418));
        t = Qt(n.nextSibling);
        var r = $e;
        t && as(e, t)
          ? cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e));
      }
    } else {
      if (Ko(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (ne = !1), ($e = e);
    }
  }
}
function ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Cl(e) {
  if (e !== $e) return !1;
  if (!ne) return ss(e), (ne = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps))),
    t && (t = Be))
  ) {
    if (Ko(e)) throw (dd(), Error(C(418)));
    for (; t; ) cd(e, t), (t = Qt(t.nextSibling));
  }
  if ((ss(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Be = Qt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Be = null;
    }
  } else Be = $e ? Qt(e.stateNode.nextSibling) : null;
  return !0;
}
function dd() {
  for (var e = Be; e; ) e = Qt(e.nextSibling);
}
function Jn() {
  (Be = $e = null), (ne = !1);
}
function Bu(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
var Mh = Nt.ReactCurrentBatchConfig;
function tt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ni = en(null),
  ri = null,
  In = null,
  $u = null;
function Vu() {
  $u = In = ri = null;
}
function Wu(e) {
  var t = ni.current;
  te(ni), (e._currentValue = t);
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Kn(e, t) {
  (ri = e),
    ($u = In = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function Je(e) {
  var t = e._currentValue;
  if ($u !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), In === null)) {
      if (ri === null) throw Error(C(308));
      (In = e), (ri.dependencies = { lanes: 0, firstContext: e });
    } else In = In.next = e;
  return t;
}
var dn = null;
function Hu(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function fd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Hu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    jt(e, r)
  );
}
function jt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Qu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function pd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      jt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Hu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    jt(e, n)
  );
}
function Fl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function li(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), o === null ? (i = s) : (o.next = s), (o = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== o &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var v = l.baseState;
    (o = 0), (p = s = a = null), (u = i);
    do {
      var m = u.lane,
        S = u.eventTime;
      if ((r & m) === m) {
        p !== null &&
          (p = p.next =
            {
              eventTime: S,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            w = u;
          switch (((m = t), (S = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                v = y.call(S, v, m);
                break e;
              }
              v = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (m = typeof y == "function" ? y.call(S, v, m) : y),
                m == null)
              )
                break e;
              v = ae({}, v, m);
              break e;
            case 2:
              It = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (S = {
          eventTime: S,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = S), (a = v)) : (p = p.next = S),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = v),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (wn |= o), (e.lanes = o), (e.memoizedState = v);
  }
}
function ds(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(C(191, l));
        l.call(r);
      }
    }
}
var hd = new fc.Component().refs;
function Xo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ki = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Gt(e),
      i = Et(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, l)),
      t !== null && (ot(t, e, l, r), Fl(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Le(),
      l = Gt(e),
      i = Et(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, l)),
      t !== null && (ot(t, e, l, r), Fl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Le(),
      r = Gt(e),
      l = Et(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Kt(e, l, r)),
      t !== null && (ot(t, e, r, n), Fl(t, e, r));
  },
};
function fs(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Qr(n, r) || !Qr(l, i)
      : !0
  );
}
function md(e, t, n) {
  var r = !1,
    l = Jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Je(i))
      : ((l = Fe(t) ? vn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qn(e, l) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ki),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ps(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ki.enqueueReplaceState(t, t.state, null);
}
function qo(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = hd), Qu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Je(i))
    : ((i = Fe(t) ? vn : _e.current), (l.context = qn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Xo(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ki.enqueueReplaceState(l, l.state, null),
      li(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === hd && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Pl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function hs(e) {
  var t = e._init;
  return t(e._payload);
}
function vd(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = Xt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, d, h, c) {
    return d === null || d.tag !== 6
      ? ((d = po(h, f.mode, c)), (d.return = f), d)
      : ((d = l(d, h)), (d.return = f), d);
  }
  function a(f, d, h, c) {
    var k = h.type;
    return k === Nn
      ? p(f, d, h.props.children, c, h.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Ft &&
            hs(k) === d.type))
      ? ((c = l(d, h.props)), (c.ref = vr(f, d, h)), (c.return = f), c)
      : ((c = Vl(h.type, h.key, h.props, null, f.mode, c)),
        (c.ref = vr(f, d, h)),
        (c.return = f),
        c);
  }
  function s(f, d, h, c) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = ho(h, f.mode, c)), (d.return = f), d)
      : ((d = l(d, h.children || [])), (d.return = f), d);
  }
  function p(f, d, h, c, k) {
    return d === null || d.tag !== 7
      ? ((d = mn(h, f.mode, c, k)), (d.return = f), d)
      : ((d = l(d, h)), (d.return = f), d);
  }
  function v(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = po("" + d, f.mode, h)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case hl:
          return (
            (h = Vl(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = vr(f, null, d)),
            (h.return = f),
            h
          );
        case _n:
          return (d = ho(d, f.mode, h)), (d.return = f), d;
        case Ft:
          var c = d._init;
          return v(f, c(d._payload), h);
      }
      if (Cr(d) || dr(d))
        return (d = mn(d, f.mode, h, null)), (d.return = f), d;
      Pl(f, d);
    }
    return null;
  }
  function m(f, d, h, c) {
    var k = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return k !== null ? null : u(f, d, "" + h, c);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case hl:
          return h.key === k ? a(f, d, h, c) : null;
        case _n:
          return h.key === k ? s(f, d, h, c) : null;
        case Ft:
          return (k = h._init), m(f, d, k(h._payload), c);
      }
      if (Cr(h) || dr(h)) return k !== null ? null : p(f, d, h, c, null);
      Pl(f, h);
    }
    return null;
  }
  function S(f, d, h, c, k) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (f = f.get(h) || null), u(d, f, "" + c, k);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case hl:
          return (f = f.get(c.key === null ? h : c.key) || null), a(d, f, c, k);
        case _n:
          return (f = f.get(c.key === null ? h : c.key) || null), s(d, f, c, k);
        case Ft:
          var P = c._init;
          return S(f, d, h, P(c._payload), k);
      }
      if (Cr(c) || dr(c)) return (f = f.get(h) || null), p(d, f, c, k, null);
      Pl(d, c);
    }
    return null;
  }
  function y(f, d, h, c) {
    for (
      var k = null, P = null, j = d, _ = (d = 0), H = null;
      j !== null && _ < h.length;
      _++
    ) {
      j.index > _ ? ((H = j), (j = null)) : (H = j.sibling);
      var I = m(f, j, h[_], c);
      if (I === null) {
        j === null && (j = H);
        break;
      }
      e && j && I.alternate === null && t(f, j),
        (d = i(I, d, _)),
        P === null ? (k = I) : (P.sibling = I),
        (P = I),
        (j = H);
    }
    if (_ === h.length) return n(f, j), ne && an(f, _), k;
    if (j === null) {
      for (; _ < h.length; _++)
        (j = v(f, h[_], c)),
          j !== null &&
            ((d = i(j, d, _)), P === null ? (k = j) : (P.sibling = j), (P = j));
      return ne && an(f, _), k;
    }
    for (j = r(f, j); _ < h.length; _++)
      (H = S(j, f, _, h[_], c)),
        H !== null &&
          (e && H.alternate !== null && j.delete(H.key === null ? _ : H.key),
          (d = i(H, d, _)),
          P === null ? (k = H) : (P.sibling = H),
          (P = H));
    return (
      e &&
        j.forEach(function (we) {
          return t(f, we);
        }),
      ne && an(f, _),
      k
    );
  }
  function w(f, d, h, c) {
    var k = dr(h);
    if (typeof k != "function") throw Error(C(150));
    if (((h = k.call(h)), h == null)) throw Error(C(151));
    for (
      var P = (k = null), j = d, _ = (d = 0), H = null, I = h.next();
      j !== null && !I.done;
      _++, I = h.next()
    ) {
      j.index > _ ? ((H = j), (j = null)) : (H = j.sibling);
      var we = m(f, j, I.value, c);
      if (we === null) {
        j === null && (j = H);
        break;
      }
      e && j && we.alternate === null && t(f, j),
        (d = i(we, d, _)),
        P === null ? (k = we) : (P.sibling = we),
        (P = we),
        (j = H);
    }
    if (I.done) return n(f, j), ne && an(f, _), k;
    if (j === null) {
      for (; !I.done; _++, I = h.next())
        (I = v(f, I.value, c)),
          I !== null &&
            ((d = i(I, d, _)), P === null ? (k = I) : (P.sibling = I), (P = I));
      return ne && an(f, _), k;
    }
    for (j = r(f, j); !I.done; _++, I = h.next())
      (I = S(j, f, _, I.value, c)),
        I !== null &&
          (e && I.alternate !== null && j.delete(I.key === null ? _ : I.key),
          (d = i(I, d, _)),
          P === null ? (k = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        j.forEach(function (Ue) {
          return t(f, Ue);
        }),
      ne && an(f, _),
      k
    );
  }
  function L(f, d, h, c) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Nn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case hl:
          e: {
            for (var k = h.key, P = d; P !== null; ) {
              if (P.key === k) {
                if (((k = h.type), k === Nn)) {
                  if (P.tag === 7) {
                    n(f, P.sibling),
                      (d = l(P, h.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  P.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Ft &&
                    hs(k) === P.type)
                ) {
                  n(f, P.sibling),
                    (d = l(P, h.props)),
                    (d.ref = vr(f, P, h)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            h.type === Nn
              ? ((d = mn(h.props.children, f.mode, c, h.key)),
                (d.return = f),
                (f = d))
              : ((c = Vl(h.type, h.key, h.props, null, f.mode, c)),
                (c.ref = vr(f, d, h)),
                (c.return = f),
                (f = c));
          }
          return o(f);
        case _n:
          e: {
            for (P = h.key; d !== null; ) {
              if (d.key === P)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = ho(h, f.mode, c)), (d.return = f), (f = d);
          }
          return o(f);
        case Ft:
          return (P = h._init), L(f, d, P(h._payload), c);
      }
      if (Cr(h)) return y(f, d, h, c);
      if (dr(h)) return w(f, d, h, c);
      Pl(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = po(h, f.mode, c)), (d.return = f), (f = d)),
        o(f))
      : n(f, d);
  }
  return L;
}
var Zn = vd(!0),
  gd = vd(!1),
  ol = {},
  pt = en(ol),
  Xr = en(ol),
  qr = en(ol);
function fn(e) {
  if (e === ol) throw Error(C(174));
  return e;
}
function Ku(e, t) {
  switch ((b(qr, t), b(Xr, e), b(pt, ol), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _o(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _o(t, e));
  }
  te(pt), b(pt, t);
}
function bn() {
  te(pt), te(Xr), te(qr);
}
function yd(e) {
  fn(qr.current);
  var t = fn(pt.current),
    n = _o(t, e.type);
  t !== n && (b(Xr, e), b(pt, n));
}
function Yu(e) {
  Xr.current === e && (te(pt), te(Xr));
}
var oe = en(0);
function ii(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var oo = [];
function Gu() {
  for (var e = 0; e < oo.length; e++)
    oo[e]._workInProgressVersionPrimary = null;
  oo.length = 0;
}
var Il = Nt.ReactCurrentDispatcher,
  uo = Nt.ReactCurrentBatchConfig,
  yn = 0,
  ue = null,
  ge = null,
  xe = null,
  oi = !1,
  Mr = !1,
  Jr = 0,
  zh = 0;
function Pe() {
  throw Error(C(321));
}
function Xu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ut(e[n], t[n])) return !1;
  return !0;
}
function qu(e, t, n, r, l, i) {
  if (
    ((yn = i),
    (ue = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Il.current = e === null || e.memoizedState === null ? Uh : Ah),
    (e = n(r, l)),
    Mr)
  ) {
    i = 0;
    do {
      if (((Mr = !1), (Jr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (xe = ge = null),
        (t.updateQueue = null),
        (Il.current = Bh),
        (e = n(r, l));
    } while (Mr);
  }
  if (
    ((Il.current = ui),
    (t = ge !== null && ge.next !== null),
    (yn = 0),
    (xe = ge = ue = null),
    (oi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ju() {
  var e = Jr !== 0;
  return (Jr = 0), e;
}
function ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e), xe;
}
function Ze() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null) (xe = t), (ge = e);
  else {
    if (e === null) throw Error(C(310));
    (ge = e),
      (e = {
        memoizedState: ge.memoizedState,
        baseState: ge.baseState,
        baseQueue: ge.baseQueue,
        queue: ge.queue,
        next: null,
      }),
      xe === null ? (ue.memoizedState = xe = e) : (xe = xe.next = e);
  }
  return xe;
}
function Zr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ao(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ge,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      a = null,
      s = i;
    do {
      var p = s.lane;
      if ((yn & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var v = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = v), (o = r)) : (a = a.next = v),
          (ue.lanes |= p),
          (wn |= p);
      }
      s = s.next;
    } while (s !== null && s !== i);
    a === null ? (o = r) : (a.next = u),
      ut(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (ue.lanes |= i), (wn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function so(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    ut(i, t.memoizedState) || (ze = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function wd() {}
function xd(e, t) {
  var n = ue,
    r = Ze(),
    l = t(),
    i = !ut(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ze = !0)),
    (r = r.queue),
    Zu(Ed.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (xe !== null && xe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      br(9, kd.bind(null, n, r, l, t), void 0, null),
      Se === null)
    )
      throw Error(C(349));
    yn & 30 || Sd(n, t, l);
  }
  return l;
}
function Sd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function kd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Cd(t) && Pd(e);
}
function Ed(e, t, n) {
  return n(function () {
    Cd(t) && Pd(e);
  });
}
function Cd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ut(e, n);
  } catch {
    return !0;
  }
}
function Pd(e) {
  var t = jt(e, 1);
  t !== null && ot(t, e, 1, -1);
}
function ms(e) {
  var t = ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ih.bind(null, ue, e)),
    [t.memoizedState, e]
  );
}
function br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ue.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ue.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Rd() {
  return Ze().memoizedState;
}
function Ul(e, t, n, r) {
  var l = ct();
  (ue.flags |= e),
    (l.memoizedState = br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ei(e, t, n, r) {
  var l = Ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ge !== null) {
    var o = ge.memoizedState;
    if (((i = o.destroy), r !== null && Xu(r, o.deps))) {
      l.memoizedState = br(t, n, i, r);
      return;
    }
  }
  (ue.flags |= e), (l.memoizedState = br(1 | t, n, i, r));
}
function vs(e, t) {
  return Ul(8390656, 8, e, t);
}
function Zu(e, t) {
  return Ei(2048, 8, e, t);
}
function jd(e, t) {
  return Ei(4, 2, e, t);
}
function _d(e, t) {
  return Ei(4, 4, e, t);
}
function Nd(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ld(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ei(4, 4, Nd.bind(null, t, e), n)
  );
}
function bu() {}
function Td(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Dd(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Xu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Md(e, t, n) {
  return yn & 21
    ? (ut(n, t) || ((n = Fc()), (ue.lanes |= n), (wn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function Oh(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (uo.transition = r);
  }
}
function zd() {
  return Ze().memoizedState;
}
function Fh(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Od(e))
  )
    Fd(t, n);
  else if (((n = fd(e, t, n, r)), n !== null)) {
    var l = Le();
    ot(n, e, r, l), Id(n, t, r);
  }
}
function Ih(e, t, n) {
  var r = Gt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Od(e)) Fd(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), ut(u, o))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), Hu(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = fd(e, t, l, r)),
      n !== null && ((l = Le()), ot(n, e, r, l), Id(n, t, r));
  }
}
function Od(e) {
  var t = e.alternate;
  return e === ue || (t !== null && t === ue);
}
function Fd(e, t) {
  Mr = oi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Id(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n);
  }
}
var ui = {
    readContext: Je,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  Uh = {
    readContext: Je,
    useCallback: function (e, t) {
      return (ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Je,
    useEffect: vs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ul(4194308, 4, Nd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ul(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ul(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Fh.bind(null, ue, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ms,
    useDebugValue: bu,
    useDeferredValue: function (e) {
      return (ct().memoizedState = e);
    },
    useTransition: function () {
      var e = ms(!1),
        t = e[0];
      return (e = Oh.bind(null, e[1])), (ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ue,
        l = ct();
      if (ne) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), Se === null)) throw Error(C(349));
        yn & 30 || Sd(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        vs(Ed.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        br(9, kd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ct(),
        t = Se.identifierPrefix;
      if (ne) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - it(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Jr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ah = {
    readContext: Je,
    useCallback: Td,
    useContext: Je,
    useEffect: Zu,
    useImperativeHandle: Ld,
    useInsertionEffect: jd,
    useLayoutEffect: _d,
    useMemo: Dd,
    useReducer: ao,
    useRef: Rd,
    useState: function () {
      return ao(Zr);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = Ze();
      return Md(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = ao(Zr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: zd,
    unstable_isNewReconciler: !1,
  },
  Bh = {
    readContext: Je,
    useCallback: Td,
    useContext: Je,
    useEffect: Zu,
    useImperativeHandle: Ld,
    useInsertionEffect: jd,
    useLayoutEffect: _d,
    useMemo: Dd,
    useReducer: so,
    useRef: Rd,
    useState: function () {
      return so(Zr);
    },
    useDebugValue: bu,
    useDeferredValue: function (e) {
      var t = Ze();
      return ge === null ? (t.memoizedState = e) : Md(t, ge.memoizedState, e);
    },
    useTransition: function () {
      var e = so(Zr)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: wd,
    useSyncExternalStore: xd,
    useId: zd,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += hp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Jo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var $h = typeof WeakMap == "function" ? WeakMap : Map;
function Ud(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      si || ((si = !0), (uu = r)), Jo(e, t);
    }),
    n
  );
}
function Ad(e, t, n) {
  (n = Et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Jo(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Jo(e, t),
          typeof r != "function" &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $h();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = tm.bind(null, e, t, n)), t.then(e, e));
}
function ys(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ws(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Et(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Vh = Nt.ReactCurrentOwner,
  ze = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? gd(t, null, n, r) : Zn(t, e.child, n, r);
}
function xs(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Kn(t, l),
    (r = qu(e, t, n, r, i, l)),
    (n = Ju()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        _t(e, t, l))
      : (ne && n && Uu(t), (t.flags |= 1), Ne(e, t, r, l), t.child)
  );
}
function Ss(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !ua(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Bd(e, t, i, r, l))
      : ((e = Vl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Qr), n(o, r) && e.ref === t.ref)
    )
      return _t(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Bd(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Qr(i, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), _t(e, t, l);
  }
  return Zo(e, t, n, r, l);
}
function $d(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(An, Ae),
        (Ae |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(An, Ae),
          (Ae |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(An, Ae),
        (Ae |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(An, Ae),
      (Ae |= r);
  return Ne(e, t, l, n), t.child;
}
function Vd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zo(e, t, n, r, l) {
  var i = Fe(n) ? vn : _e.current;
  return (
    (i = qn(t, i)),
    Kn(t, l),
    (n = qu(e, t, n, r, i, l)),
    (r = Ju()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        _t(e, t, l))
      : (ne && r && Uu(t), (t.flags |= 1), Ne(e, t, n, l), t.child)
  );
}
function ks(e, t, n, r, l) {
  if (Fe(n)) {
    var i = !0;
    bl(t);
  } else i = !1;
  if ((Kn(t, l), t.stateNode === null))
    Al(e, t), md(t, n, r), qo(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var a = o.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Je(s))
      : ((s = Fe(n) ? vn : _e.current), (s = qn(t, s)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && ps(t, o, r, s)),
      (It = !1);
    var m = t.memoizedState;
    (o.state = m),
      li(t, r, o, l),
      (a = t.memoizedState),
      u !== r || m !== a || Oe.current || It
        ? (typeof p == "function" && (Xo(t, n, p, r), (a = t.memoizedState)),
          (u = It || fs(t, n, u, r, m, a, s))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = s),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      pd(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : tt(t.type, u)),
      (o.props = s),
      (v = t.pendingProps),
      (m = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Je(a))
        : ((a = Fe(n) ? vn : _e.current), (a = qn(t, a)));
    var S = n.getDerivedStateFromProps;
    (p =
      typeof S == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== v || m !== a) && ps(t, o, r, a)),
      (It = !1),
      (m = t.memoizedState),
      (o.state = m),
      li(t, r, o, l);
    var y = t.memoizedState;
    u !== v || m !== y || Oe.current || It
      ? (typeof S == "function" && (Xo(t, n, S, r), (y = t.memoizedState)),
        (s = It || fs(t, n, s, r, m, y, a) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, a),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = a),
        (r = s))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bo(e, t, n, r, i, l);
}
function bo(e, t, n, r, l, i) {
  Vd(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && us(t, n, !1), _t(e, t, i);
  (r = t.stateNode), (Vh.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, i)), (t.child = Zn(t, null, u, i)))
      : Ne(e, t, u, i),
    (t.memoizedState = r.state),
    l && us(t, n, !0),
    t.child
  );
}
function Wd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? os(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && os(e, t.context, !1),
    Ku(e, t.containerInfo);
}
function Es(e, t, n, r, l) {
  return Jn(), Bu(l), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var eu = { dehydrated: null, treeContext: null, retryLane: 0 };
function tu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Hd(e, t, n) {
  var r = t.pendingProps,
    l = oe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    b(oe, l & 1),
    e === null)
  )
    return (
      Yo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Ri(o, r, 0, null)),
              (e = mn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = tu(n)),
              (t.memoizedState = eu),
              e)
            : ea(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Wh(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Xt(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = Xt(u, i)) : ((i = mn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? tu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = eu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ea(e, t) {
  return (
    (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Rl(e, t, n, r) {
  return (
    r !== null && Bu(r),
    Zn(t, e.child, null, n),
    (e = ea(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wh(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = co(Error(C(422)))), Rl(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = Ri({ mode: "visible", children: r.children }, l, 0, null)),
        (i = mn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, o),
        (t.child.memoizedState = tu(o)),
        (t.memoizedState = eu),
        i);
  if (!(t.mode & 1)) return Rl(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(C(419))), (r = co(i, r, void 0)), Rl(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ze || u)) {
    if (((r = Se), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), jt(e, l), ot(r, e, l, -1));
    }
    return oa(), (r = co(Error(C(421)))), Rl(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Be = Qt(l.nextSibling)),
      ($e = t),
      (ne = !0),
      (lt = null),
      e !== null &&
        ((Ye[Ge++] = St),
        (Ye[Ge++] = kt),
        (Ye[Ge++] = gn),
        (St = e.id),
        (kt = e.overflow),
        (gn = t)),
      (t = ea(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Cs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Go(e.return, t, n);
}
function fo(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Qd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((Ne(e, t, r.children, n), (r = oe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Cs(e, n, t);
        else if (e.tag === 19) Cs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(oe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ii(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          fo(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ii(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        fo(t, !0, n, null, i);
        break;
      case "together":
        fo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Al(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function _t(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (wn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Hh(e, t, n) {
  switch (t.tag) {
    case 3:
      Wd(t), Jn();
      break;
    case 5:
      yd(t);
      break;
    case 1:
      Fe(t.type) && bl(t);
      break;
    case 4:
      Ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      b(ni, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(oe, oe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Hd(e, t, n)
          : (b(oe, oe.current & 1),
            (e = _t(e, t, n)),
            e !== null ? e.sibling : null);
      b(oe, oe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Qd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        b(oe, oe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), $d(e, t, n);
  }
  return _t(e, t, n);
}
var Kd, nu, Yd, Gd;
Kd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
nu = function () {};
Yd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), fn(pt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = Co(e, l)), (r = Co(e, r)), (i = []);
        break;
      case "select":
        (l = ae({}, l, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = jo(e, l)), (r = jo(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jl);
    }
    No(n, r);
    var o;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Ur.hasOwnProperty(s)
              ? i || (i = [])
              : (i = i || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                u[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else n || (i || (i = []), i.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (i = i || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Ur.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && ee("scroll", e),
                  i || u === a || (i = []))
                : (i = i || []).push(s, a));
    }
    n && (i = i || []).push("style", n);
    var s = i;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Gd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!ne)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Qh(e, t, n) {
  var r = t.pendingProps;
  switch ((Au(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Re(t), null;
    case 1:
      return Fe(t.type) && Zl(), Re(t), null;
    case 3:
      return (
        (r = t.stateNode),
        bn(),
        te(Oe),
        te(_e),
        Gu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (cu(lt), (lt = null)))),
        nu(e, t),
        Re(t),
        null
      );
    case 5:
      Yu(t);
      var l = fn(qr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Yd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Re(t), null;
        }
        if (((e = fn(pt.current)), Cl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[dt] = t), (r[Gr] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Rr.length; l++) ee(Rr[l], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              Ma(r, i), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              Oa(r, i), ee("invalid", r);
          }
          No(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      El(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      El(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Ur.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              ml(r), za(r, i, !0);
              break;
            case "textarea":
              ml(r), Fa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[Gr] = r),
            Kd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Lo(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Rr.length; l++) ee(Rr[l], e);
                l = r;
                break;
              case "source":
                ee("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (l = r);
                break;
              case "details":
                ee("toggle", e), (l = r);
                break;
              case "input":
                Ma(e, r), (l = Co(e, r)), ee("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ae({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                Oa(e, r), (l = jo(e, r)), ee("invalid", e);
                break;
              default:
                l = r;
            }
            No(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var a = u[i];
                i === "style"
                  ? Cc(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && kc(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Ar(e, a)
                    : typeof a == "number" && Ar(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ur.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && ee("scroll", e)
                      : a != null && Cu(e, i, a, o));
              }
            switch (n) {
              case "input":
                ml(e), za(e, r, !1);
                break;
              case "textarea":
                ml(e), Fa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Vn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Vn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Re(t), null;
    case 6:
      if (e && t.stateNode != null) Gd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = fn(qr.current)), fn(pt.current), Cl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (i = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                El(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  El(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return Re(t), null;
    case 13:
      if (
        (te(oe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ne && Be !== null && t.mode & 1 && !(t.flags & 128))
          dd(), Jn(), (t.flags |= 98560), (i = !1);
        else if (((i = Cl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[dt] = t;
          } else
            Jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Re(t), (i = !1);
        } else lt !== null && (cu(lt), (lt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || oe.current & 1 ? ye === 0 && (ye = 3) : oa())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null);
    case 4:
      return (
        bn(), nu(e, t), e === null && Kr(t.stateNode.containerInfo), Re(t), null
      );
    case 10:
      return Wu(t.type._context), Re(t), null;
    case 17:
      return Fe(t.type) && Zl(), Re(t), null;
    case 19:
      if ((te(oe), (i = t.memoizedState), i === null)) return Re(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) gr(i, !1);
        else {
          if (ye !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ii(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    gr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(oe, (oe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            he() > tr &&
            ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ii(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ne)
            )
              return Re(t), null;
          } else
            2 * he() - i.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = he()),
          (t.sibling = null),
          (n = oe.current),
          b(oe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null);
    case 22:
    case 23:
      return (
        ia(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function Kh(e, t) {
  switch ((Au(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && Zl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        bn(),
        te(Oe),
        te(_e),
        Gu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Yu(t), null;
    case 13:
      if (
        (te(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(C(340));
        Jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(oe), null;
    case 4:
      return bn(), null;
    case 10:
      return Wu(t.type._context), null;
    case 22:
    case 23:
      return ia(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jl = !1,
  je = !1,
  Yh = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Un(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function ru(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ps = !1;
function Gh(e, t) {
  if (((Bo = Gl), (e = Zc()), Iu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            v = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = o + l),
                v !== i || (r !== 0 && v.nodeType !== 3) || (a = o + r),
                v.nodeType === 3 && (o += v.nodeValue.length),
                (S = v.firstChild) !== null;

            )
              (m = v), (v = S);
            for (;;) {
              if (v === e) break t;
              if (
                (m === n && ++s === l && (u = o),
                m === i && ++p === r && (a = o),
                (S = v.nextSibling) !== null)
              )
                break;
              (v = m), (m = v.parentNode);
            }
            v = S;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($o = { focusedElem: e, selectionRange: n }, Gl = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    L = y.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : tt(t.type, w),
                      L
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (c) {
          ce(t, t.return, c);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = Ps), (Ps = !1), y;
}
function zr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && ru(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ci(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function lu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Xd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Xd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[Gr], delete t[Ho], delete t[Lh], delete t[Th])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function qd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || qd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Jl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (iu(e, t, n), e = e.sibling; e !== null; ) iu(e, t, n), (e = e.sibling);
}
function ou(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ou(e, t, n), e = e.sibling; e !== null; ) ou(e, t, n), (e = e.sibling);
}
var ke = null,
  nt = !1;
function Ot(e, t, n) {
  for (n = n.child; n !== null; ) Jd(e, t, n), (n = n.sibling);
}
function Jd(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(vi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Un(n, t);
    case 6:
      var r = ke,
        l = nt;
      (ke = null),
        Ot(e, t, n),
        (ke = r),
        (nt = l),
        ke !== null &&
          (nt
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ke.removeChild(n.stateNode));
      break;
    case 18:
      ke !== null &&
        (nt
          ? ((e = ke),
            (n = n.stateNode),
            e.nodeType === 8
              ? lo(e.parentNode, n)
              : e.nodeType === 1 && lo(e, n),
            Wr(e))
          : lo(ke, n.stateNode));
      break;
    case 4:
      (r = ke),
        (l = nt),
        (ke = n.stateNode.containerInfo),
        (nt = !0),
        Ot(e, t, n),
        (ke = r),
        (nt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && ru(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Ot(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Un(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ce(n, t, u);
        }
      Ot(e, t, n);
      break;
    case 21:
      Ot(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), Ot(e, t, n), (je = r))
        : Ot(e, t, n);
      break;
    default:
      Ot(e, t, n);
  }
}
function js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yh()),
      t.forEach(function (r) {
        var l = rm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function et(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ke = u.stateNode), (nt = !1);
              break e;
            case 3:
              (ke = u.stateNode.containerInfo), (nt = !0);
              break e;
            case 4:
              (ke = u.stateNode.containerInfo), (nt = !0);
              break e;
          }
          u = u.return;
        }
        if (ke === null) throw Error(C(160));
        Jd(i, o, l), (ke = null), (nt = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Zd(t, e), (t = t.sibling);
}
function Zd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((et(t, e), st(e), r & 4)) {
        try {
          zr(3, e, e.return), Ci(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          zr(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      et(t, e), st(e), r & 512 && n !== null && Un(n, n.return);
      break;
    case 5:
      if (
        (et(t, e),
        st(e),
        r & 512 && n !== null && Un(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Ar(l, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && wc(l, i),
              Lo(u, o);
            var s = Lo(u, i);
            for (o = 0; o < a.length; o += 2) {
              var p = a[o],
                v = a[o + 1];
              p === "style"
                ? Cc(l, v)
                : p === "dangerouslySetInnerHTML"
                ? kc(l, v)
                : p === "children"
                ? Ar(l, v)
                : Cu(l, p, v, s);
            }
            switch (u) {
              case "input":
                Po(l, i);
                break;
              case "textarea":
                xc(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? Vn(l, !!i.multiple, S, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Vn(l, !!i.multiple, i.defaultValue, !0)
                      : Vn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Gr] = i;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((et(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (et(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      et(t, e), st(e);
      break;
    case 13:
      et(t, e),
        st(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ra = he())),
        r & 4 && js(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (s = je) || p), et(t, e), (je = s)) : et(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (M = e, p = e.child; p !== null; ) {
            for (v = M = p; M !== null; ) {
              switch (((m = M), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  zr(4, m, m.return);
                  break;
                case 1:
                  Un(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Un(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Ns(v);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (M = S)) : Ns(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (l = v.stateNode),
                  s
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = v.stateNode),
                      (a = v.memoizedProps.style),
                      (o =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = Ec("display", o)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = s ? "" : v.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      et(t, e), st(e), r & 4 && js(e);
      break;
    case 21:
      break;
    default:
      et(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (qd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Ar(l, ""), (r.flags &= -33));
          var i = Rs(e);
          ou(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Rs(e);
          iu(e, u, o);
          break;
        default:
          throw Error(C(161));
      }
    } catch (a) {
      ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xh(e, t, n) {
  (M = e), bd(e);
}
function bd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var l = M,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || jl;
      if (!o) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || je;
        u = jl;
        var s = je;
        if (((jl = o), (je = a) && !s))
          for (M = l; M !== null; )
            (o = M),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Ls(l)
                : a !== null
                ? ((a.return = o), (M = a))
                : Ls(l);
        for (; i !== null; ) (M = i), bd(i), (i = i.sibling);
        (M = l), (jl = u), (je = s);
      }
      _s(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (M = i)) : _s(e);
  }
}
function _s(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Ci(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ds(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ds(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && Wr(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        je || (t.flags & 512 && lu(t));
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ns(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Ls(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ci(4, t);
          } catch (a) {
            ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ce(t, l, a);
            }
          }
          var i = t.return;
          try {
            lu(t);
          } catch (a) {
            ce(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            lu(t);
          } catch (a) {
            ce(t, o, a);
          }
      }
    } catch (a) {
      ce(t, t.return, a);
    }
    if (t === e) {
      M = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (M = u);
      break;
    }
    M = t.return;
  }
}
var qh = Math.ceil,
  ai = Nt.ReactCurrentDispatcher,
  ta = Nt.ReactCurrentOwner,
  qe = Nt.ReactCurrentBatchConfig,
  K = 0,
  Se = null,
  me = null,
  Ee = 0,
  Ae = 0,
  An = en(0),
  ye = 0,
  el = null,
  wn = 0,
  Pi = 0,
  na = 0,
  Or = null,
  Me = null,
  ra = 0,
  tr = 1 / 0,
  wt = null,
  si = !1,
  uu = null,
  Yt = null,
  _l = !1,
  $t = null,
  ci = 0,
  Fr = 0,
  au = null,
  Bl = -1,
  $l = 0;
function Le() {
  return K & 6 ? he() : Bl !== -1 ? Bl : (Bl = he());
}
function Gt(e) {
  return e.mode & 1
    ? K & 2 && Ee !== 0
      ? Ee & -Ee
      : Mh.transition !== null
      ? ($l === 0 && ($l = Fc()), $l)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Wc(e.type))),
        e)
    : 1;
}
function ot(e, t, n, r) {
  if (50 < Fr) throw ((Fr = 0), (au = null), Error(C(185)));
  rl(e, n, r),
    (!(K & 2) || e !== Se) &&
      (e === Se && (!(K & 2) && (Pi |= n), ye === 4 && At(e, Ee)),
      Ie(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((tr = he() + 500), Si && tn()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Mp(e, t);
  var r = Yl(e, e === Se ? Ee : 0);
  if (r === 0)
    n !== null && Aa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Aa(n), t === 1))
      e.tag === 0 ? Dh(Ts.bind(null, e)) : ad(Ts.bind(null, e)),
        _h(function () {
          !(K & 6) && tn();
        }),
        (n = null);
    else {
      switch (Ic(r)) {
        case 1:
          n = Nu;
          break;
        case 4:
          n = zc;
          break;
        case 16:
          n = Kl;
          break;
        case 536870912:
          n = Oc;
          break;
        default:
          n = Kl;
      }
      n = af(n, ef.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function ef(e, t) {
  if (((Bl = -1), ($l = 0), K & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Yl(e, e === Se ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = di(e, r);
  else {
    t = r;
    var l = K;
    K |= 2;
    var i = nf();
    (Se !== e || Ee !== t) && ((wt = null), (tr = he() + 500), hn(e, t));
    do
      try {
        bh();
        break;
      } catch (u) {
        tf(e, u);
      }
    while (1);
    Vu(),
      (ai.current = i),
      (K = l),
      me !== null ? (t = 0) : ((Se = null), (Ee = 0), (t = ye));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Oo(e)), l !== 0 && ((r = l), (t = su(e, l)))), t === 1)
    )
      throw ((n = el), hn(e, 0), At(e, r), Ie(e, he()), n);
    if (t === 6) At(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Jh(l) &&
          ((t = di(e, r)),
          t === 2 && ((i = Oo(e)), i !== 0 && ((r = i), (t = su(e, i)))),
          t === 1))
      )
        throw ((n = el), hn(e, 0), At(e, r), Ie(e, he()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          sn(e, Me, wt);
          break;
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = ra + 500 - he()), 10 < t))
          ) {
            if (Yl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wo(sn.bind(null, e, Me, wt), t);
            break;
          }
          sn(e, Me, wt);
          break;
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - it(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = he() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wo(sn.bind(null, e, Me, wt), r);
            break;
          }
          sn(e, Me, wt);
          break;
        case 5:
          sn(e, Me, wt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ie(e, he()), e.callbackNode === n ? ef.bind(null, e) : null;
}
function su(e, t) {
  var n = Or;
  return (
    e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    (e = di(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && cu(t)),
    e
  );
}
function cu(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function Jh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!ut(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function At(e, t) {
  for (
    t &= ~na,
      t &= ~Pi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - it(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ts(e) {
  if (K & 6) throw Error(C(327));
  Yn();
  var t = Yl(e, 0);
  if (!(t & 1)) return Ie(e, he()), null;
  var n = di(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Oo(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = el), hn(e, 0), At(e, t), Ie(e, he()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, Me, wt),
    Ie(e, he()),
    null
  );
}
function la(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((tr = he() + 500), Si && tn());
  }
}
function xn(e) {
  $t !== null && $t.tag === 0 && !(K & 6) && Yn();
  var t = K;
  K |= 1;
  var n = qe.transition,
    r = G;
  try {
    if (((qe.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (qe.transition = n), (K = t), !(K & 6) && tn();
  }
}
function ia() {
  (Ae = An.current), te(An);
}
function hn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jh(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch ((Au(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Zl();
          break;
        case 3:
          bn(), te(Oe), te(_e), Gu();
          break;
        case 5:
          Yu(r);
          break;
        case 4:
          bn();
          break;
        case 13:
          te(oe);
          break;
        case 19:
          te(oe);
          break;
        case 10:
          Wu(r.type._context);
          break;
        case 22:
        case 23:
          ia();
      }
      n = n.return;
    }
  if (
    ((Se = e),
    (me = e = Xt(e.current, null)),
    (Ee = Ae = t),
    (ye = 0),
    (el = null),
    (na = Pi = wn = 0),
    (Me = Or = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function tf(e, t) {
  do {
    var n = me;
    try {
      if ((Vu(), (Il.current = ui), oi)) {
        for (var r = ue.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        oi = !1;
      }
      if (
        ((yn = 0),
        (xe = ge = ue = null),
        (Mr = !1),
        (Jr = 0),
        (ta.current = null),
        n === null || n.return === null)
      ) {
        (ye = 1), (el = t), (me = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          a = t;
        if (
          ((t = Ee),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            p = u,
            v = p.tag;
          if (!(p.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = p.alternate;
            m
              ? ((p.updateQueue = m.updateQueue),
                (p.memoizedState = m.memoizedState),
                (p.lanes = m.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var S = ys(o);
          if (S !== null) {
            (S.flags &= -257),
              ws(S, o, u, i, t),
              S.mode & 1 && gs(i, s, t),
              (t = S),
              (a = s);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              gs(i, s, t), oa();
              break e;
            }
            a = Error(C(426));
          }
        } else if (ne && u.mode & 1) {
          var L = ys(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              ws(L, o, u, i, t),
              Bu(er(a, u));
            break e;
          }
        }
        (i = a = er(a, u)),
          ye !== 4 && (ye = 2),
          Or === null ? (Or = [i]) : Or.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ud(i, a, t);
              cs(i, f);
              break e;
            case 1:
              u = a;
              var d = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Yt === null || !Yt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var c = Ad(i, u, t);
                cs(i, c);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      lf(n);
    } catch (k) {
      (t = k), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function nf() {
  var e = ai.current;
  return (ai.current = ui), e === null ? ui : e;
}
function oa() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4),
    Se === null || (!(wn & 268435455) && !(Pi & 268435455)) || At(Se, Ee);
}
function di(e, t) {
  var n = K;
  K |= 2;
  var r = nf();
  (Se !== e || Ee !== t) && ((wt = null), hn(e, t));
  do
    try {
      Zh();
      break;
    } catch (l) {
      tf(e, l);
    }
  while (1);
  if ((Vu(), (K = n), (ai.current = r), me !== null)) throw Error(C(261));
  return (Se = null), (Ee = 0), ye;
}
function Zh() {
  for (; me !== null; ) rf(me);
}
function bh() {
  for (; me !== null && !Cp(); ) rf(me);
}
function rf(e) {
  var t = uf(e.alternate, e, Ae);
  (e.memoizedProps = e.pendingProps),
    t === null ? lf(e) : (me = t),
    (ta.current = null);
}
function lf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Kh(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ye = 6), (me = null);
        return;
      }
    } else if (((n = Qh(n, t, Ae)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function sn(e, t, n) {
  var r = G,
    l = qe.transition;
  try {
    (qe.transition = null), (G = 1), em(e, t, n, r);
  } finally {
    (qe.transition = l), (G = r);
  }
  return null;
}
function em(e, t, n, r) {
  do Yn();
  while ($t !== null);
  if (K & 6) throw Error(C(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zp(e, i),
    e === Se && ((me = Se = null), (Ee = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _l ||
      ((_l = !0),
      af(Kl, function () {
        return Yn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var o = G;
    G = 1;
    var u = K;
    (K |= 4),
      (ta.current = null),
      Gh(e, n),
      Zd(n, e),
      xh($o),
      (Gl = !!Bo),
      ($o = Bo = null),
      (e.current = n),
      Xh(n),
      Pp(),
      (K = u),
      (G = o),
      (qe.transition = i);
  } else e.current = n;
  if (
    (_l && ((_l = !1), ($t = e), (ci = l)),
    (i = e.pendingLanes),
    i === 0 && (Yt = null),
    _p(n.stateNode),
    Ie(e, he()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (si) throw ((si = !1), (e = uu), (uu = null), e);
  return (
    ci & 1 && e.tag !== 0 && Yn(),
    (i = e.pendingLanes),
    i & 1 ? (e === au ? Fr++ : ((Fr = 0), (au = e))) : (Fr = 0),
    tn(),
    null
  );
}
function Yn() {
  if ($t !== null) {
    var e = Ic(ci),
      t = qe.transition,
      n = G;
    try {
      if (((qe.transition = null), (G = 16 > e ? 16 : e), $t === null))
        var r = !1;
      else {
        if (((e = $t), ($t = null), (ci = 0), K & 6)) throw Error(C(331));
        var l = K;
        for (K |= 4, M = e.current; M !== null; ) {
          var i = M,
            o = i.child;
          if (M.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (M = s; M !== null; ) {
                  var p = M;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zr(8, p, i);
                  }
                  var v = p.child;
                  if (v !== null) (v.return = p), (M = v);
                  else
                    for (; M !== null; ) {
                      p = M;
                      var m = p.sibling,
                        S = p.return;
                      if ((Xd(p), p === s)) {
                        M = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (M = m);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var L = w.sibling;
                    (w.sibling = null), (w = L);
                  } while (w !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (M = o);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    zr(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (M = f);
                break e;
              }
              M = i.return;
            }
        }
        var d = e.current;
        for (M = d; M !== null; ) {
          o = M;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (M = h);
          else
            e: for (o = d; M !== null; ) {
              if (((u = M), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, u);
                  }
                } catch (k) {
                  ce(u, u.return, k);
                }
              if (u === o) {
                M = null;
                break e;
              }
              var c = u.sibling;
              if (c !== null) {
                (c.return = u.return), (M = c);
                break e;
              }
              M = u.return;
            }
        }
        if (
          ((K = l), tn(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(vi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (qe.transition = t);
    }
  }
  return !1;
}
function Ds(e, t, n) {
  (t = er(n, t)),
    (t = Ud(e, t, 1)),
    (e = Kt(e, t, 1)),
    (t = Le()),
    e !== null && (rl(e, 1, t), Ie(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Ds(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ds(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yt === null || !Yt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Ad(t, e, 1)),
            (t = Kt(t, e, 1)),
            (e = Le()),
            t !== null && (rl(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Se === e &&
      (Ee & n) === n &&
      (ye === 4 || (ye === 3 && (Ee & 130023424) === Ee && 500 > he() - ra)
        ? hn(e, 0)
        : (na |= n)),
    Ie(e, t);
}
function of(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = yl), (yl <<= 1), !(yl & 130023424) && (yl = 4194304))
      : (t = 1));
  var n = Le();
  (e = jt(e, t)), e !== null && (rl(e, t, n), Ie(e, n));
}
function nm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), of(e, n);
}
function rm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), of(e, n);
}
var uf;
uf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), Hh(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), ne && t.flags & 1048576 && sd(t, ti, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Al(e, t), (e = t.pendingProps);
      var l = qn(t, _e.current);
      Kn(t, n), (l = qu(null, t, r, e, l, n));
      var i = Ju();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((i = !0), bl(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Qu(t),
            (l.updater = ki),
            (t.stateNode = l),
            (l._reactInternals = t),
            qo(t, r, e, n),
            (t = bo(null, t, r, !0, i, n)))
          : ((t.tag = 0), ne && i && Uu(t), Ne(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Al(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = im(r)),
          (e = tt(r, e)),
          l)
        ) {
          case 0:
            t = Zo(null, t, r, e, n);
            break e;
          case 1:
            t = ks(null, t, r, e, n);
            break e;
          case 11:
            t = xs(null, t, r, e, n);
            break e;
          case 14:
            t = Ss(null, t, r, tt(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Zo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        ks(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Wd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          pd(e, t),
          li(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = er(Error(C(423)), t)), (t = Es(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = er(Error(C(424)), t)), (t = Es(e, t, r, n, l));
            break e;
          } else
            for (
              Be = Qt(t.stateNode.containerInfo.firstChild),
                $e = t,
                ne = !0,
                lt = null,
                n = gd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Jn(), r === l)) {
            t = _t(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        yd(t),
        e === null && Yo(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Vo(r, l) ? (o = null) : i !== null && Vo(r, i) && (t.flags |= 32),
        Vd(e, t),
        Ne(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Yo(t), null;
    case 13:
      return Hd(e, t, n);
    case 4:
      return (
        Ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        xs(e, t, r, l, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          b(ni, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (ut(i.value, o)) {
            if (i.children === l.children && !Oe.current) {
              t = _t(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Et(-1, n & -n)), (a.tag = 2);
                      var s = i.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Go(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(C(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Go(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Ne(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Kn(t, n),
        (l = Je(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = tt(r, t.pendingProps)),
        (l = tt(r.type, l)),
        Ss(e, t, r, l, n)
      );
    case 15:
      return Bd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : tt(r, l)),
        Al(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), bl(t)) : (e = !1),
        Kn(t, n),
        md(t, r, l),
        qo(t, r, l, n),
        bo(null, t, r, !0, e, n)
      );
    case 19:
      return Qd(e, t, n);
    case 22:
      return $d(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function af(e, t) {
  return Mc(e, t);
}
function lm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Xe(e, t, n, r) {
  return new lm(e, t, n, r);
}
function ua(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function im(e) {
  if (typeof e == "function") return ua(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ru)) return 11;
    if (e === ju) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Xe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vl(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) ua(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Nn:
        return mn(n.children, l, i, t);
      case Pu:
        (o = 8), (l |= 8);
        break;
      case xo:
        return (
          (e = Xe(12, n, t, l | 2)), (e.elementType = xo), (e.lanes = i), e
        );
      case So:
        return (e = Xe(13, n, t, l)), (e.elementType = So), (e.lanes = i), e;
      case ko:
        return (e = Xe(19, n, t, l)), (e.elementType = ko), (e.lanes = i), e;
      case vc:
        return Ri(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case hc:
              o = 10;
              break e;
            case mc:
              o = 9;
              break e;
            case Ru:
              o = 11;
              break e;
            case ju:
              o = 14;
              break e;
            case Ft:
              (o = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Xe(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function mn(e, t, n, r) {
  return (e = Xe(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
  return (
    (e = Xe(22, e, r, t)),
    (e.elementType = vc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function po(e, t, n) {
  return (e = Xe(6, e, null, t)), (e.lanes = n), e;
}
function ho(e, t, n) {
  return (
    (t = Xe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function om(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yi(0)),
    (this.expirationTimes = Yi(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yi(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function aa(e, t, n, r, l, i, o, u, a) {
  return (
    (e = new om(e, t, n, u, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Xe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Qu(i),
    e
  );
}
function um(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function sf(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return ud(e, n, t);
  }
  return t;
}
function cf(e, t, n, r, l, i, o, u, a) {
  return (
    (e = aa(n, r, !0, e, l, i, o, u, a)),
    (e.context = sf(null)),
    (n = e.current),
    (r = Le()),
    (l = Gt(n)),
    (i = Et(r, l)),
    (i.callback = t ?? null),
    Kt(n, i, l),
    (e.current.lanes = l),
    rl(e, l, r),
    Ie(e, r),
    e
  );
}
function ji(e, t, n, r) {
  var l = t.current,
    i = Le(),
    o = Gt(l);
  return (
    (n = sf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Et(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kt(l, t, o)),
    e !== null && (ot(e, l, o, i), Fl(e, l, o)),
    o
  );
}
function fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Ms(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function sa(e, t) {
  Ms(e, t), (e = e.alternate) && Ms(e, t);
}
function am() {
  return null;
}
var df =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ca(e) {
  this._internalRoot = e;
}
_i.prototype.render = ca.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  ji(e, t, null, null);
};
_i.prototype.unmount = ca.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xn(function () {
      ji(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function _i(e) {
  this._internalRoot = e;
}
_i.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Bc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Vc(e);
  }
};
function da(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ni(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zs() {}
function sm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var s = fi(o);
        i.call(s);
      };
    }
    var o = cf(t, r, e, 0, null, !1, !1, "", zs);
    return (
      (e._reactRootContainer = o),
      (e[Rt] = o.current),
      Kr(e.nodeType === 8 ? e.parentNode : e),
      xn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = fi(a);
      u.call(s);
    };
  }
  var a = aa(e, 0, !1, null, null, !1, !1, "", zs);
  return (
    (e._reactRootContainer = a),
    (e[Rt] = a.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    xn(function () {
      ji(t, a, n, r);
    }),
    a
  );
}
function Li(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = fi(o);
        u.call(a);
      };
    }
    ji(t, o, e, l);
  } else o = sm(n, t, e, l, r);
  return fi(o);
}
Uc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pr(t.pendingLanes);
        n !== 0 &&
          (Lu(t, n | 1), Ie(t, he()), !(K & 6) && ((tr = he() + 500), tn()));
      }
      break;
    case 13:
      xn(function () {
        var r = jt(e, 1);
        if (r !== null) {
          var l = Le();
          ot(r, e, 1, l);
        }
      }),
        sa(e, 1);
  }
};
Tu = function (e) {
  if (e.tag === 13) {
    var t = jt(e, 134217728);
    if (t !== null) {
      var n = Le();
      ot(t, e, 134217728, n);
    }
    sa(e, 134217728);
  }
};
Ac = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = jt(e, t);
    if (n !== null) {
      var r = Le();
      ot(n, e, t, r);
    }
    sa(e, t);
  }
};
Bc = function () {
  return G;
};
$c = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
Do = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Po(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = xi(r);
            if (!l) throw Error(C(90));
            yc(r), Po(r, l);
          }
        }
      }
      break;
    case "textarea":
      xc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Vn(e, !!n.multiple, t, !1);
  }
};
jc = la;
_c = xn;
var cm = { usingClientEntryPoint: !1, Events: [il, Mn, xi, Pc, Rc, la] },
  yr = {
    findFiberByHostInstance: cn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dm = {
    bundleType: yr.bundleType,
    version: yr.version,
    rendererPackageName: yr.rendererPackageName,
    rendererConfig: yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yr.findFiberByHostInstance || am,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Nl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Nl.isDisabled && Nl.supportsFiber)
    try {
      (vi = Nl.inject(dm)), (ft = Nl);
    } catch {}
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cm;
We.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!da(t)) throw Error(C(200));
  return um(e, t, null, n);
};
We.createRoot = function (e, t) {
  if (!da(e)) throw Error(C(299));
  var n = !1,
    r = "",
    l = df;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = aa(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    Kr(e.nodeType === 8 ? e.parentNode : e),
    new ca(t)
  );
};
We.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = Tc(t)), (e = e === null ? null : e.stateNode), e;
};
We.flushSync = function (e) {
  return xn(e);
};
We.hydrate = function (e, t, n) {
  if (!Ni(t)) throw Error(C(200));
  return Li(null, e, t, !0, n);
};
We.hydrateRoot = function (e, t, n) {
  if (!da(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = df;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = cf(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[Rt] = t.current),
    Kr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new _i(t);
};
We.render = function (e, t, n) {
  if (!Ni(t)) throw Error(C(200));
  return Li(null, e, t, !1, n);
};
We.unmountComponentAtNode = function (e) {
  if (!Ni(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (xn(function () {
        Li(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
We.unstable_batchedUpdates = la;
We.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ni(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Li(e, t, n, !1, r);
};
We.version = "18.2.0-next-9e3b772b8-20220608";
function ff() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff);
    } catch (e) {
      console.error(e);
    }
}
ff(), (sc.exports = We);
var fm = sc.exports,
  Os = fm;
(yo.createRoot = Os.createRoot), (yo.hydrateRoot = Os.hydrateRoot);
/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var fe;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fe || (fe = {}));
const Fs = "popstate";
function pm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: i, search: o, hash: u } = r.location;
    return tl(
      "",
      { pathname: i, search: o, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : kn(l);
  }
  return mm(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Sn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function hm() {
  return Math.random().toString(36).substr(2, 8);
}
function Is(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function tl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Lt(t) : t,
      { state: n, key: (t && t.key) || r || hm() }
    )
  );
}
function kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Lt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function mm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: i = !1 } = r,
    o = l.history,
    u = fe.Pop,
    a = null,
    s = p();
  s == null && ((s = 0), o.replaceState(ie({}, o.state, { idx: s }), ""));
  function p() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    u = fe.Pop;
    let L = p(),
      f = L == null ? null : L - s;
    (s = L), a && a({ action: u, location: w.location, delta: f });
  }
  function m(L, f) {
    u = fe.Push;
    let d = tl(w.location, L, f);
    n && n(d, L), (s = p() + 1);
    let h = Is(d, s),
      c = w.createHref(d);
    try {
      o.pushState(h, "", c);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      l.location.assign(c);
    }
    i && a && a({ action: u, location: w.location, delta: 1 });
  }
  function S(L, f) {
    u = fe.Replace;
    let d = tl(w.location, L, f);
    n && n(d, L), (s = p());
    let h = Is(d, s),
      c = w.createHref(d);
    o.replaceState(h, "", c),
      i && a && a({ action: u, location: w.location, delta: 0 });
  }
  function y(L) {
    let f = l.location.origin !== "null" ? l.location.origin : l.location.href,
      d = typeof L == "string" ? L : kn(L);
    return (
      V(
        f,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, f)
    );
  }
  let w = {
    get action() {
      return u;
    },
    get location() {
      return e(l, o);
    },
    listen(L) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Fs, v),
        (a = L),
        () => {
          l.removeEventListener(Fs, v), (a = null);
        }
      );
    },
    createHref(L) {
      return t(l, L);
    },
    createURL: y,
    encodeLocation(L) {
      let f = y(L);
      return { pathname: f.pathname, search: f.search, hash: f.hash };
    },
    push: m,
    replace: S,
    go(L) {
      return o.go(L);
    },
  };
  return w;
}
var pe;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(pe || (pe = {}));
const vm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function gm(e) {
  return e.index === !0;
}
function du(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, i) => {
      let o = [...n, i],
        u = typeof l.id == "string" ? l.id : o.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        V(
          !r[u],
          'Found a route id collision on id "' +
            u +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        gm(l))
      ) {
        let a = ie({}, l, t(l), { id: u });
        return (r[u] = a), a;
      } else {
        let a = ie({}, l, t(l), { id: u, children: void 0 });
        return (
          (r[u] = a), l.children && (a.children = du(l.children, t, o, r)), a
        );
      }
    })
  );
}
function Bn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Lt(t) : t,
    l = Zt(r.pathname || "/", n);
  if (l == null) return null;
  let i = pf(e);
  wm(i);
  let o = null;
  for (let u = 0; o == null && u < i.length; ++u) o = _m(i[u], Lm(l));
  return o;
}
function ym(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function pf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (i, o, u) => {
    let a = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (V(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let s = Ct([r, a.relativePath]),
      p = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (V(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      pf(i.children, t, p, s)),
      !(i.path == null && !i.index) &&
        t.push({ path: s, score: Rm(s, i.index), routesMeta: p });
  };
  return (
    e.forEach((i, o) => {
      var u;
      if (i.path === "" || !((u = i.path) != null && u.includes("?"))) l(i, o);
      else for (let a of hf(i.path)) l(i, o, a);
    }),
    t
  );
}
function hf(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [i, ""] : [i];
  let o = hf(r.join("/")),
    u = [];
  return (
    u.push(...o.map((a) => (a === "" ? i : [i, a].join("/")))),
    l && u.push(...o),
    u.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function wm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : jm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const xm = /^:\w+$/,
  Sm = 3,
  km = 2,
  Em = 1,
  Cm = 10,
  Pm = -2,
  Us = (e) => e === "*";
function Rm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Us) && (r += Pm),
    t && (r += km),
    n
      .filter((l) => !Us(l))
      .reduce((l, i) => l + (xm.test(i) ? Sm : i === "" ? Em : Cm), r)
  );
}
function jm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _m(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let u = n[o],
      a = o === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = fu(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = u.route;
    i.push({
      params: r,
      pathname: Ct([l, p.pathname]),
      pathnameBase: zm(Ct([l, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" && (l = Ct([l, p.pathnameBase]));
  }
  return i;
}
function fu(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Nm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let i = l[0],
    o = i.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, v) => {
      if (p === "*") {
        let m = u[v] || "";
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (s[p] = Tm(u[v] || "", p)), s;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Nm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Sn(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, u) => (r.push(u), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Lm(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Sn(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Tm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Sn(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function Zt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Dm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Lt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Mm(n, t)) : t,
    search: Om(r),
    hash: Fm(l),
  };
}
function Mm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function mo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ti(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function fa(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Lt(e))
    : ((l = ie({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        mo("?", "pathname", "search", l)
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        mo("#", "pathname", "hash", l)
      ),
      V(!l.search || !l.search.includes("#"), mo("#", "search", "hash", l)));
  let i = e === "" || l.pathname === "",
    o = i ? "/" : l.pathname,
    u;
  if (r || o == null) u = n;
  else {
    let v = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (v -= 1);
      l.pathname = m.join("/");
    }
    u = v >= 0 ? t[v] : "/";
  }
  let a = Dm(l, u),
    s = o && o !== "/" && o.endsWith("/"),
    p = (i || o === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const Ct = (e) => e.join("/").replace(/\/\/+/g, "/"),
  zm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Om = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Fm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class pa {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function mf(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const vf = ["post", "put", "patch", "delete"],
  Im = new Set(vf),
  Um = ["get", ...vf],
  Am = new Set(Um),
  Bm = new Set([301, 302, 303, 307, 308]),
  $m = new Set([307, 308]),
  vo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  wr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  gf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wm = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  yf = "remix-router-transitions";
function Hm(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let g = e.detectErrorBoundary;
    l = (x) => ({ hasErrorBoundary: g(x) });
  } else l = Wm;
  let i = {},
    o = du(e.routes, l, void 0, i),
    u,
    a = e.basename || "/",
    s = ie({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    p = null,
    v = new Set(),
    m = null,
    S = null,
    y = null,
    w = e.hydrationData != null,
    L = Bn(o, e.history.location, a),
    f = null;
  if (L == null) {
    let g = Qe(404, { pathname: e.history.location.pathname }),
      { matches: x, route: E } = Ks(o);
    (L = x), (f = { [E.id]: g });
  }
  let d =
      !L.some((g) => g.route.lazy) &&
      (!L.some((g) => g.route.loader) || e.hydrationData != null),
    h,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: L,
      initialized: d,
      navigation: vo,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || f,
      fetchers: new Map(),
      blockers: new Map(),
    },
    k = fe.Pop,
    P = !1,
    j,
    _ = !1,
    H = new Map(),
    I = null,
    we = !1,
    Ue = !1,
    at = [],
    rn = [],
    se = new Map(),
    Tt = 0,
    ht = -1,
    T = new Map(),
    O = new Set(),
    U = new Map(),
    Y = new Map(),
    Z = new Map(),
    Dt = !1;
  function mt() {
    if (
      ((p = e.history.listen((g) => {
        let { action: x, location: E, delta: D } = g;
        if (Dt) {
          Dt = !1;
          return;
        }
        Sn(
          Z.size === 0 || D != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let B = Ea({
          currentLocation: c.location,
          nextLocation: E,
          historyAction: x,
        });
        if (B && D != null) {
          (Dt = !0),
            e.history.go(D * -1),
            dl(B, {
              state: "blocked",
              location: E,
              proceed() {
                dl(B, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: E,
                }),
                  e.history.go(D);
              },
              reset() {
                let A = new Map(c.blockers);
                A.set(B, wr), re({ blockers: A });
              },
            });
          return;
        }
        return ln(x, E);
      })),
      n)
    ) {
      tv(t, H);
      let g = () => nv(t, H);
      t.addEventListener("pagehide", g),
        (I = () => t.removeEventListener("pagehide", g));
    }
    return c.initialized || ln(fe.Pop, c.location), h;
  }
  function or() {
    p && p(),
      I && I(),
      v.clear(),
      j && j.abort(),
      c.fetchers.forEach((g, x) => Oi(x)),
      c.blockers.forEach((g, x) => ka(x));
  }
  function vt(g) {
    return v.add(g), () => v.delete(g);
  }
  function re(g, x) {
    (c = ie({}, c, g)),
      v.forEach((E) => E(c, { unstable_viewTransitionOpts: x }));
  }
  function ur(g, x) {
    var E, D;
    let B =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        rt(c.navigation.formMethod) &&
        c.navigation.state === "loading" &&
        ((E = g.state) == null ? void 0 : E._isRedirect) !== !0,
      A;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (A = x.actionData)
        : (A = null)
      : B
      ? (A = c.actionData)
      : (A = null);
    let $ = x.loaderData
        ? Qs(c.loaderData, x.loaderData, x.matches || [], x.errors)
        : c.loaderData,
      F = c.blockers;
    F.size > 0 && ((F = new Map(F)), F.forEach((le, Q) => F.set(Q, wr)));
    let z =
      P === !0 ||
      (c.navigation.formMethod != null &&
        rt(c.navigation.formMethod) &&
        ((D = g.state) == null ? void 0 : D._isRedirect) !== !0);
    u && ((o = u), (u = void 0)),
      we ||
        k === fe.Pop ||
        (k === fe.Push
          ? e.history.push(g, g.state)
          : k === fe.Replace && e.history.replace(g, g.state));
    let q;
    if (k === fe.Pop) {
      let le = H.get(c.location.pathname);
      le && le.has(g.pathname)
        ? (q = { currentLocation: c.location, nextLocation: g })
        : H.has(g.pathname) &&
          (q = { currentLocation: g, nextLocation: c.location });
    } else if (_) {
      let le = H.get(c.location.pathname);
      le
        ? le.add(g.pathname)
        : ((le = new Set([g.pathname])), H.set(c.location.pathname, le)),
        (q = { currentLocation: c.location, nextLocation: g });
    }
    re(
      ie({}, x, {
        actionData: A,
        loaderData: $,
        historyAction: k,
        location: g,
        initialized: !0,
        navigation: vo,
        revalidation: "idle",
        restoreScrollPosition: Pa(g, x.matches || c.matches),
        preventScrollReset: z,
        blockers: F,
      }),
      q
    ),
      (k = fe.Pop),
      (P = !1),
      (_ = !1),
      (we = !1),
      (Ue = !1),
      (at = []),
      (rn = []);
  }
  async function va(g, x) {
    if (typeof g == "number") {
      e.history.go(g);
      return;
    }
    let E = pu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        g,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      {
        path: D,
        submission: B,
        error: A,
      } = As(s.v7_normalizeFormMethod, !1, E, x),
      $ = c.location,
      F = tl(c.location, D, x && x.state);
    F = ie({}, F, e.history.encodeLocation(F));
    let z = x && x.replace != null ? x.replace : void 0,
      q = fe.Push;
    z === !0
      ? (q = fe.Replace)
      : z === !1 ||
        (B != null &&
          rt(B.formMethod) &&
          B.formAction === c.location.pathname + c.location.search &&
          (q = fe.Replace));
    let le =
        x && "preventScrollReset" in x ? x.preventScrollReset === !0 : void 0,
      Q = Ea({ currentLocation: $, nextLocation: F, historyAction: q });
    if (Q) {
      dl(Q, {
        state: "blocked",
        location: F,
        proceed() {
          dl(Q, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F,
          }),
            va(g, x);
        },
        reset() {
          let J = new Map(c.blockers);
          J.set(Q, wr), re({ blockers: J });
        },
      });
      return;
    }
    return await ln(q, F, {
      submission: B,
      pendingError: A,
      preventScrollReset: le,
      replace: x && x.replace,
      enableViewTransition: x && x.unstable_viewTransition,
    });
  }
  function _f() {
    if (
      (zi(),
      re({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        ln(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      ln(k || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function ln(g, x, E) {
    j && j.abort(),
      (j = null),
      (k = g),
      (we = (E && E.startUninterruptedRevalidation) === !0),
      Ff(c.location, c.matches),
      (P = (E && E.preventScrollReset) === !0),
      (_ = (E && E.enableViewTransition) === !0);
    let D = u || o,
      B = E && E.overrideNavigation,
      A = Bn(D, x, a);
    if (!A) {
      let J = Qe(404, { pathname: x.pathname }),
        { matches: de, route: on } = Ks(D);
      Fi(), ur(x, { matches: de, loaderData: {}, errors: { [on.id]: J } });
      return;
    }
    if (
      c.initialized &&
      !Ue &&
      Xm(c.location, x) &&
      !(E && E.submission && rt(E.submission.formMethod))
    ) {
      ur(x, { matches: A });
      return;
    }
    j = new AbortController();
    let $ = Sr(e.history, x, j.signal, E && E.submission),
      F,
      z;
    if (E && E.pendingError) z = { [$n(A).route.id]: E.pendingError };
    else if (E && E.submission && rt(E.submission.formMethod)) {
      let J = await Nf($, x, E.submission, A, { replace: E.replace });
      if (J.shortCircuited) return;
      (F = J.pendingActionData),
        (z = J.pendingActionError),
        (B = go(x, E.submission)),
        ($ = new Request($.url, { signal: $.signal }));
    }
    let {
      shortCircuited: q,
      loaderData: le,
      errors: Q,
    } = await Lf(
      $,
      x,
      A,
      B,
      E && E.submission,
      E && E.fetcherSubmission,
      E && E.replace,
      F,
      z
    );
    q ||
      ((j = null),
      ur(
        x,
        ie({ matches: A }, F ? { actionData: F } : {}, {
          loaderData: le,
          errors: Q,
        })
      ));
  }
  async function Nf(g, x, E, D, B) {
    B === void 0 && (B = {}), zi();
    let A = bm(x, E);
    re({ navigation: A });
    let $,
      F = mu(D, x);
    if (!F.route.action && !F.route.lazy)
      $ = {
        type: pe.error,
        error: Qe(405, {
          method: g.method,
          pathname: x.pathname,
          routeId: F.route.id,
        }),
      };
    else if ((($ = await xr("action", g, F, D, i, l, a)), g.signal.aborted))
      return { shortCircuited: !0 };
    if (Gn($)) {
      let z;
      return (
        B && B.replace != null
          ? (z = B.replace)
          : (z = $.location === c.location.pathname + c.location.search),
        await ar(c, $, { submission: E, replace: z }),
        { shortCircuited: !0 }
      );
    }
    if (Ir($)) {
      let z = $n(D, F.route.id);
      return (
        (B && B.replace) !== !0 && (k = fe.Push),
        { pendingActionData: {}, pendingActionError: { [z.route.id]: $.error } }
      );
    }
    if (pn($)) throw Qe(400, { type: "defer-action" });
    return { pendingActionData: { [F.route.id]: $.data } };
  }
  async function Lf(g, x, E, D, B, A, $, F, z) {
    let q = D || go(x, B),
      le = B || A || Xs(q),
      Q = u || o,
      [J, de] = Bs(e.history, c, E, le, x, Ue, at, rn, U, O, Q, a, F, z);
    if (
      (Fi(
        (X) =>
          !(E && E.some((be) => be.route.id === X)) ||
          (J && J.some((be) => be.route.id === X))
      ),
      (ht = ++Tt),
      J.length === 0 && de.length === 0)
    ) {
      let X = xa();
      return (
        ur(
          x,
          ie(
            { matches: E, loaderData: {}, errors: z || null },
            F ? { actionData: F } : {},
            X ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!we) {
      de.forEach((be) => {
        let zt = c.fetchers.get(be.key),
          $i = kr(void 0, zt ? zt.data : void 0);
        c.fetchers.set(be.key, $i);
      });
      let X = F || c.actionData;
      re(
        ie(
          { navigation: q },
          X
            ? Object.keys(X).length === 0
              ? { actionData: null }
              : { actionData: X }
            : {},
          de.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
        )
      );
    }
    de.forEach((X) => {
      se.has(X.key) && Mt(X.key), X.controller && se.set(X.key, X.controller);
    });
    let on = () => de.forEach((X) => Mt(X.key));
    j && j.signal.addEventListener("abort", on);
    let {
      results: un,
      loaderResults: sr,
      fetcherResults: Ii,
    } = await ya(c.matches, E, J, de, g);
    if (g.signal.aborted) return { shortCircuited: !0 };
    j && j.signal.removeEventListener("abort", on),
      de.forEach((X) => se.delete(X.key));
    let gt = Ys(un);
    if (gt) {
      if (gt.idx >= J.length) {
        let X = de[gt.idx - J.length].key;
        O.add(X);
      }
      return await ar(c, gt.result, { replace: $ }), { shortCircuited: !0 };
    }
    let { loaderData: yt, errors: fl } = Hs(c, E, J, sr, z, de, Ii, Y);
    Y.forEach((X, be) => {
      X.subscribe((zt) => {
        (zt || X.done) && Y.delete(be);
      });
    });
    let Ui = xa(),
      Ai = Sa(ht),
      Bi = Ui || Ai || de.length > 0;
    return ie(
      { loaderData: yt, errors: fl },
      Bi ? { fetchers: new Map(c.fetchers) } : {}
    );
  }
  function ga(g) {
    return c.fetchers.get(g) || Vm;
  }
  function Tf(g, x, E, D) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    se.has(g) && Mt(g);
    let B = u || o,
      A = pu(
        c.location,
        c.matches,
        a,
        s.v7_prependBasename,
        E,
        x,
        D == null ? void 0 : D.relative
      ),
      $ = Bn(B, A, a);
    if (!$) {
      cl(g, x, Qe(404, { pathname: A }));
      return;
    }
    let {
      path: F,
      submission: z,
      error: q,
    } = As(s.v7_normalizeFormMethod, !0, A, D);
    if (q) {
      cl(g, x, q);
      return;
    }
    let le = mu($, F);
    if (((P = (D && D.preventScrollReset) === !0), z && rt(z.formMethod))) {
      Df(g, x, F, le, $, z);
      return;
    }
    U.set(g, { routeId: x, path: F }), Mf(g, x, F, le, $, z);
  }
  async function Df(g, x, E, D, B, A) {
    if ((zi(), U.delete(g), !D.route.action && !D.route.lazy)) {
      let ve = Qe(405, { method: A.formMethod, pathname: E, routeId: x });
      cl(g, x, ve);
      return;
    }
    let $ = c.fetchers.get(g),
      F = ev(A, $);
    c.fetchers.set(g, F), re({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      q = Sr(e.history, E, z.signal, A);
    se.set(g, z);
    let le = Tt,
      Q = await xr("action", q, D, B, i, l, a);
    if (q.signal.aborted) {
      se.get(g) === z && se.delete(g);
      return;
    }
    if (Gn(Q))
      if ((se.delete(g), ht > le)) {
        let ve = jn(void 0);
        c.fetchers.set(g, ve), re({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        O.add(g);
        let ve = kr(A);
        return (
          c.fetchers.set(g, ve),
          re({ fetchers: new Map(c.fetchers) }),
          ar(c, Q, { fetcherSubmission: A })
        );
      }
    if (Ir(Q)) {
      cl(g, x, Q.error);
      return;
    }
    if (pn(Q)) throw Qe(400, { type: "defer-action" });
    let J = c.navigation.location || c.location,
      de = Sr(e.history, J, z.signal),
      on = u || o,
      un =
        c.navigation.state !== "idle"
          ? Bn(on, c.navigation.location, a)
          : c.matches;
    V(un, "Didn't find any matches after fetcher action");
    let sr = ++Tt;
    T.set(g, sr);
    let Ii = kr(A, Q.data);
    c.fetchers.set(g, Ii);
    let [gt, yt] = Bs(
      e.history,
      c,
      un,
      A,
      J,
      Ue,
      at,
      rn,
      U,
      O,
      on,
      a,
      { [D.route.id]: Q.data },
      void 0
    );
    yt
      .filter((ve) => ve.key !== g)
      .forEach((ve) => {
        let cr = ve.key,
          Ra = c.fetchers.get(cr),
          Uf = kr(void 0, Ra ? Ra.data : void 0);
        c.fetchers.set(cr, Uf),
          se.has(cr) && Mt(cr),
          ve.controller && se.set(cr, ve.controller);
      }),
      re({ fetchers: new Map(c.fetchers) });
    let fl = () => yt.forEach((ve) => Mt(ve.key));
    z.signal.addEventListener("abort", fl);
    let {
      results: Ui,
      loaderResults: Ai,
      fetcherResults: Bi,
    } = await ya(c.matches, un, gt, yt, de);
    if (z.signal.aborted) return;
    z.signal.removeEventListener("abort", fl),
      T.delete(g),
      se.delete(g),
      yt.forEach((ve) => se.delete(ve.key));
    let X = Ys(Ui);
    if (X) {
      if (X.idx >= gt.length) {
        let ve = yt[X.idx - gt.length].key;
        O.add(ve);
      }
      return ar(c, X.result);
    }
    let { loaderData: be, errors: zt } = Hs(
      c,
      c.matches,
      gt,
      Ai,
      void 0,
      yt,
      Bi,
      Y
    );
    if (c.fetchers.has(g)) {
      let ve = jn(Q.data);
      c.fetchers.set(g, ve);
    }
    let $i = Sa(sr);
    c.navigation.state === "loading" && sr > ht
      ? (V(k, "Expected pending action"),
        j && j.abort(),
        ur(c.navigation.location, {
          matches: un,
          loaderData: be,
          errors: zt,
          fetchers: new Map(c.fetchers),
        }))
      : (re(
          ie(
            { errors: zt, loaderData: Qs(c.loaderData, be, un, zt) },
            $i || yt.length > 0 ? { fetchers: new Map(c.fetchers) } : {}
          )
        ),
        (Ue = !1));
  }
  async function Mf(g, x, E, D, B, A) {
    let $ = c.fetchers.get(g),
      F = kr(A, $ ? $.data : void 0);
    c.fetchers.set(g, F), re({ fetchers: new Map(c.fetchers) });
    let z = new AbortController(),
      q = Sr(e.history, E, z.signal);
    se.set(g, z);
    let le = Tt,
      Q = await xr("loader", q, D, B, i, l, a);
    if (
      (pn(Q) && (Q = (await Sf(Q, q.signal, !0)) || Q),
      se.get(g) === z && se.delete(g),
      q.signal.aborted)
    )
      return;
    if (Gn(Q))
      if (ht > le) {
        let de = jn(void 0);
        c.fetchers.set(g, de), re({ fetchers: new Map(c.fetchers) });
        return;
      } else {
        O.add(g), await ar(c, Q);
        return;
      }
    if (Ir(Q)) {
      let de = $n(c.matches, x);
      c.fetchers.delete(g),
        re({
          fetchers: new Map(c.fetchers),
          errors: { [de.route.id]: Q.error },
        });
      return;
    }
    V(!pn(Q), "Unhandled fetcher deferred data");
    let J = jn(Q.data);
    c.fetchers.set(g, J), re({ fetchers: new Map(c.fetchers) });
  }
  async function ar(g, x, E) {
    let {
      submission: D,
      fetcherSubmission: B,
      replace: A,
    } = E === void 0 ? {} : E;
    x.revalidate && (Ue = !0);
    let $ = tl(g.location, x.location, { _isRedirect: !0 });
    if ((V($, "Expected a location on the redirect navigation"), n)) {
      let J = !1;
      if (x.reloadDocument) J = !0;
      else if (gf.test(x.location)) {
        const de = e.history.createURL(x.location);
        J = de.origin !== t.location.origin || Zt(de.pathname, a) == null;
      }
      if (J) {
        A ? t.location.replace(x.location) : t.location.assign(x.location);
        return;
      }
    }
    j = null;
    let F = A === !0 ? fe.Replace : fe.Push,
      { formMethod: z, formAction: q, formEncType: le } = g.navigation;
    !D && !B && z && q && le && (D = Xs(g.navigation));
    let Q = D || B;
    if ($m.has(x.status) && Q && rt(Q.formMethod))
      await ln(F, $, {
        submission: ie({}, Q, { formAction: x.location }),
        preventScrollReset: P,
      });
    else {
      let J = go($, D);
      await ln(F, $, {
        overrideNavigation: J,
        fetcherSubmission: B,
        preventScrollReset: P,
      });
    }
  }
  async function ya(g, x, E, D, B) {
    let A = await Promise.all([
        ...E.map((z) => xr("loader", B, z, x, i, l, a)),
        ...D.map((z) =>
          z.matches && z.match && z.controller
            ? xr(
                "loader",
                Sr(e.history, z.path, z.controller.signal),
                z.match,
                z.matches,
                i,
                l,
                a
              )
            : { type: pe.error, error: Qe(404, { pathname: z.path }) }
        ),
      ]),
      $ = A.slice(0, E.length),
      F = A.slice(E.length);
    return (
      await Promise.all([
        Gs(
          g,
          E,
          $,
          $.map(() => B.signal),
          !1,
          c.loaderData
        ),
        Gs(
          g,
          D.map((z) => z.match),
          F,
          D.map((z) => (z.controller ? z.controller.signal : null)),
          !0
        ),
      ]),
      { results: A, loaderResults: $, fetcherResults: F }
    );
  }
  function zi() {
    (Ue = !0),
      at.push(...Fi()),
      U.forEach((g, x) => {
        se.has(x) && (rn.push(x), Mt(x));
      });
  }
  function cl(g, x, E) {
    let D = $n(c.matches, x);
    Oi(g), re({ errors: { [D.route.id]: E }, fetchers: new Map(c.fetchers) });
  }
  function Oi(g) {
    let x = c.fetchers.get(g);
    se.has(g) && !(x && x.state === "loading" && T.has(g)) && Mt(g),
      U.delete(g),
      T.delete(g),
      O.delete(g),
      c.fetchers.delete(g);
  }
  function Mt(g) {
    let x = se.get(g);
    V(x, "Expected fetch controller: " + g), x.abort(), se.delete(g);
  }
  function wa(g) {
    for (let x of g) {
      let E = ga(x),
        D = jn(E.data);
      c.fetchers.set(x, D);
    }
  }
  function xa() {
    let g = [],
      x = !1;
    for (let E of O) {
      let D = c.fetchers.get(E);
      V(D, "Expected fetcher: " + E),
        D.state === "loading" && (O.delete(E), g.push(E), (x = !0));
    }
    return wa(g), x;
  }
  function Sa(g) {
    let x = [];
    for (let [E, D] of T)
      if (D < g) {
        let B = c.fetchers.get(E);
        V(B, "Expected fetcher: " + E),
          B.state === "loading" && (Mt(E), T.delete(E), x.push(E));
      }
    return wa(x), x.length > 0;
  }
  function zf(g, x) {
    let E = c.blockers.get(g) || wr;
    return Z.get(g) !== x && Z.set(g, x), E;
  }
  function ka(g) {
    c.blockers.delete(g), Z.delete(g);
  }
  function dl(g, x) {
    let E = c.blockers.get(g) || wr;
    V(
      (E.state === "unblocked" && x.state === "blocked") ||
        (E.state === "blocked" && x.state === "blocked") ||
        (E.state === "blocked" && x.state === "proceeding") ||
        (E.state === "blocked" && x.state === "unblocked") ||
        (E.state === "proceeding" && x.state === "unblocked"),
      "Invalid blocker state transition: " + E.state + " -> " + x.state
    );
    let D = new Map(c.blockers);
    D.set(g, x), re({ blockers: D });
  }
  function Ea(g) {
    let { currentLocation: x, nextLocation: E, historyAction: D } = g;
    if (Z.size === 0) return;
    Z.size > 1 && Sn(!1, "A router only supports one blocker at a time");
    let B = Array.from(Z.entries()),
      [A, $] = B[B.length - 1],
      F = c.blockers.get(A);
    if (
      !(F && F.state === "proceeding") &&
      $({ currentLocation: x, nextLocation: E, historyAction: D })
    )
      return A;
  }
  function Fi(g) {
    let x = [];
    return (
      Y.forEach((E, D) => {
        (!g || g(D)) && (E.cancel(), x.push(D), Y.delete(D));
      }),
      x
    );
  }
  function Of(g, x, E) {
    if (((m = g), (y = x), (S = E || null), !w && c.navigation === vo)) {
      w = !0;
      let D = Pa(c.location, c.matches);
      D != null && re({ restoreScrollPosition: D });
    }
    return () => {
      (m = null), (y = null), (S = null);
    };
  }
  function Ca(g, x) {
    return (
      (S &&
        S(
          g,
          x.map((D) => ym(D, c.loaderData))
        )) ||
      g.key
    );
  }
  function Ff(g, x) {
    if (m && y) {
      let E = Ca(g, x);
      m[E] = y();
    }
  }
  function Pa(g, x) {
    if (m) {
      let E = Ca(g, x),
        D = m[E];
      if (typeof D == "number") return D;
    }
    return null;
  }
  function If(g) {
    (i = {}), (u = du(g, l, void 0, i));
  }
  return (
    (h = {
      get basename() {
        return a;
      },
      get state() {
        return c;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: mt,
      subscribe: vt,
      enableScrollRestoration: Of,
      navigate: va,
      fetch: Tf,
      revalidate: _f,
      createHref: (g) => e.history.createHref(g),
      encodeLocation: (g) => e.history.encodeLocation(g),
      getFetcher: ga,
      deleteFetcher: Oi,
      dispose: or,
      getBlocker: zf,
      deleteBlocker: ka,
      _internalFetchControllers: se,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: If,
    }),
    h
  );
}
function Qm(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function pu(e, t, n, r, l, i, o) {
  let u, a;
  if (i != null && o !== "path") {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === i)) {
        a = p;
        break;
      }
  } else (u = t), (a = t[t.length - 1]);
  let s = fa(
    l || ".",
    Ti(u).map((p) => p.pathnameBase),
    Zt(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    l == null && ((s.search = e.search), (s.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      a &&
      a.route.index &&
      !ha(s.search) &&
      (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (s.pathname = s.pathname === "/" ? n : Ct([n, s.pathname])),
    kn(s)
  );
}
function As(e, t, n, r) {
  if (!r || !Qm(r)) return { path: n };
  if (r.formMethod && !Zm(r.formMethod))
    return { path: n, error: Qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: Qe(400, { type: "invalid-body" }) }),
    i = r.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    u = xf(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!rt(o)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((S, y) => {
              let [w, L] = y;
              return (
                "" +
                S +
                w +
                "=" +
                L +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: u,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!rt(o)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: u,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, s;
  if (r.formData) (a = hu(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (a = hu(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (a = r.body), (s = Ws(a));
  else if (r.body == null) (a = new URLSearchParams()), (s = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)), (s = Ws(a));
    } catch {
      return l();
    }
  let p = {
    formMethod: o,
    formAction: u,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (rt(p.formMethod)) return { path: n, submission: p };
  let v = Lt(n);
  return (
    t && v.search && ha(v.search) && a.append("index", ""),
    (v.search = "?" + a),
    { path: kn(v), submission: p }
  );
}
function Km(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Bs(e, t, n, r, l, i, o, u, a, s, p, v, m, S) {
  let y = S ? Object.values(S)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    L = e.createURL(l),
    f = S ? Object.keys(S)[0] : void 0,
    h = Km(n, f).filter((k, P) => {
      if (k.route.lazy) return !0;
      if (k.route.loader == null) return !1;
      if (Ym(t.loaderData, t.matches[P], k) || o.some((H) => H === k.route.id))
        return !0;
      let j = t.matches[P],
        _ = k;
      return $s(
        k,
        ie(
          {
            currentUrl: w,
            currentParams: j.params,
            nextUrl: L,
            nextParams: _.params,
          },
          r,
          {
            actionResult: y,
            defaultShouldRevalidate:
              i ||
              w.pathname + w.search === L.pathname + L.search ||
              w.search !== L.search ||
              wf(j, _),
          }
        )
      );
    }),
    c = [];
  return (
    a.forEach((k, P) => {
      if (!n.some((we) => we.route.id === k.routeId)) return;
      let j = Bn(p, k.path, v);
      if (!j) {
        c.push({
          key: P,
          routeId: k.routeId,
          path: k.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let _ = t.fetchers.get(P),
        H = mu(j, k.path),
        I = !1;
      s.has(P)
        ? (I = !1)
        : u.includes(P)
        ? (I = !0)
        : _ && _.state !== "idle" && _.data === void 0
        ? (I = i)
        : (I = $s(
            H,
            ie(
              {
                currentUrl: w,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: L,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: y, defaultShouldRevalidate: i }
            )
          )),
        I &&
          c.push({
            key: P,
            routeId: k.routeId,
            path: k.path,
            matches: j,
            match: H,
            controller: new AbortController(),
          });
    }),
    [h, c]
  );
}
function Ym(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function wf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function $s(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Vs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let i = {};
  for (let o in r) {
    let a = l[o] !== void 0 && o !== "hasErrorBoundary";
    Sn(
      !a,
      'Route "' +
        l.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.')
    ),
      !a && !vm.has(o) && (i[o] = r[o]);
  }
  Object.assign(l, i), Object.assign(l, ie({}, t(l), { lazy: void 0 }));
}
async function xr(e, t, n, r, l, i, o, u) {
  u === void 0 && (u = {});
  let a,
    s,
    p,
    v = (y) => {
      let w,
        L = new Promise((f, d) => (w = d));
      return (
        (p = () => w()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          y({ request: t, params: n.params, context: u.requestContext }),
          L,
        ])
      );
    };
  try {
    let y = n.route[e];
    if (n.route.lazy)
      if (y) {
        let w,
          L = await Promise.all([
            v(y).catch((f) => {
              w = f;
            }),
            Vs(n.route, i, l),
          ]);
        if (w) throw w;
        s = L[0];
      } else if ((await Vs(n.route, i, l), (y = n.route[e]), y)) s = await v(y);
      else if (e === "action") {
        let w = new URL(t.url),
          L = w.pathname + w.search;
        throw Qe(405, { method: t.method, pathname: L, routeId: n.route.id });
      } else return { type: pe.data, data: void 0 };
    else if (y) s = await v(y);
    else {
      let w = new URL(t.url),
        L = w.pathname + w.search;
      throw Qe(404, { pathname: L });
    }
    V(
      s !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (y) {
    (a = pe.error), (s = y);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (Jm(s)) {
    let y = s.status;
    if (Bm.has(y)) {
      let f = s.headers.get("Location");
      if (
        (V(
          f,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !gf.test(f))
      )
        f = pu(new URL(t.url), r.slice(0, r.indexOf(n) + 1), o, !0, f);
      else if (!u.isStaticRequest) {
        let d = new URL(t.url),
          h = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f),
          c = Zt(h.pathname, o) != null;
        h.origin === d.origin && c && (f = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (s.headers.set("Location", f), s);
      return {
        type: pe.redirect,
        status: y,
        location: f,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: s.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: a === pe.error ? pe.error : pe.data, response: s };
    let w,
      L = s.headers.get("Content-Type");
    return (
      L && /\bapplication\/json\b/.test(L)
        ? (w = await s.json())
        : (w = await s.text()),
      a === pe.error
        ? { type: a, error: new pa(y, s.statusText, w), headers: s.headers }
        : { type: pe.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  if (a === pe.error) return { type: a, error: s };
  if (qm(s)) {
    var m, S;
    return {
      type: pe.deferred,
      deferredData: s,
      statusCode: (m = s.init) == null ? void 0 : m.status,
      headers:
        ((S = s.init) == null ? void 0 : S.headers) &&
        new Headers(s.init.headers),
    };
  }
  return { type: pe.data, data: s };
}
function Sr(e, t, n, r) {
  let l = e.createURL(xf(t)).toString(),
    i = { signal: n };
  if (r && rt(r.formMethod)) {
    let { formMethod: o, formEncType: u } = r;
    (i.method = o.toUpperCase()),
      u === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": u })),
          (i.body = JSON.stringify(r.json)))
        : u === "text/plain"
        ? (i.body = r.text)
        : u === "application/x-www-form-urlencoded" && r.formData
        ? (i.body = hu(r.formData))
        : (i.body = r.formData);
  }
  return new Request(l, i);
}
function hu(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ws(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Gm(e, t, n, r, l) {
  let i = {},
    o = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((p, v) => {
      let m = t[v].route.id;
      if (
        (V(!Gn(p), "Cannot handle redirect results in processLoaderData"),
        Ir(p))
      ) {
        let S = $n(e, m),
          y = p.error;
        r && ((y = Object.values(r)[0]), (r = void 0)),
          (o = o || {}),
          o[S.route.id] == null && (o[S.route.id] = y),
          (i[m] = void 0),
          a || ((a = !0), (u = mf(p.error) ? p.error.status : 500)),
          p.headers && (s[m] = p.headers);
      } else
        pn(p)
          ? (l.set(m, p.deferredData), (i[m] = p.deferredData.data))
          : (i[m] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (u = p.statusCode),
          p.headers && (s[m] = p.headers);
    }),
    r && ((o = r), (i[Object.keys(r)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: u || 200, loaderHeaders: s }
  );
}
function Hs(e, t, n, r, l, i, o, u) {
  let { loaderData: a, errors: s } = Gm(t, n, r, l, u);
  for (let p = 0; p < i.length; p++) {
    let { key: v, match: m, controller: S } = i[p];
    V(
      o !== void 0 && o[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let y = o[p];
    if (!(S && S.signal.aborted))
      if (Ir(y)) {
        let w = $n(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = ie({}, s, { [w.route.id]: y.error })),
          e.fetchers.delete(v);
      } else if (Gn(y)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (pn(y)) V(!1, "Unhandled fetcher deferred data");
      else {
        let w = jn(y.data);
        e.fetchers.set(v, w);
      }
  }
  return { loaderData: a, errors: s };
}
function Qs(e, t, n, r) {
  let l = ie({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (l[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (l[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return l;
}
function $n(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Ks(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    u = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (u =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
          ? (u = "defer() is not supported in actions")
          : i === "invalid-body" && (u = "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (u = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (u = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (u =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new pa(e || 500, o, new Error(u), !0)
  );
}
function Ys(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Gn(n)) return { result: n, idx: t };
  }
}
function xf(e) {
  let t = typeof e == "string" ? Lt(e) : e;
  return kn(ie({}, t, { hash: "" }));
}
function Xm(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function pn(e) {
  return e.type === pe.deferred;
}
function Ir(e) {
  return e.type === pe.error;
}
function Gn(e) {
  return (e && e.type) === pe.redirect;
}
function qm(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Jm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Zm(e) {
  return Am.has(e.toLowerCase());
}
function rt(e) {
  return Im.has(e.toLowerCase());
}
async function Gs(e, t, n, r, l, i) {
  for (let o = 0; o < n.length; o++) {
    let u = n[o],
      a = t[o];
    if (!a) continue;
    let s = e.find((v) => v.route.id === a.route.id),
      p = s != null && !wf(s, a) && (i && i[a.route.id]) !== void 0;
    if (pn(u) && (l || p)) {
      let v = r[o];
      V(v, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Sf(u, v, l).then((m) => {
          m && (n[o] = m || n[o]);
        });
    }
  }
}
async function Sf(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: pe.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: pe.error, error: l };
      }
    return { type: pe.data, data: e.deferredData.data };
  }
}
function ha(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function mu(e, t) {
  let n = typeof t == "string" ? Lt(t).search : t.search;
  if (e[e.length - 1].route.index && ha(n || "")) return e[e.length - 1];
  let r = Ti(e);
  return r[r.length - 1];
}
function Xs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function go(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function bm(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function kr(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function ev(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function jn(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function tv(e, t) {
  try {
    let n = e.sessionStorage.getItem(yf);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, i] of Object.entries(r || {}))
        i && Array.isArray(i) && t.set(l, new Set(i || []));
    }
  } catch {}
}
function nv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(yf, JSON.stringify(n));
    } catch (r) {
      Sn(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pi() {
  return (
    (pi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pi.apply(this, arguments)
  );
}
const ul = R.createContext(null),
  ma = R.createContext(null),
  Pn = R.createContext(null),
  Di = R.createContext(null),
  nn = R.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  kf = R.createContext(null);
function rv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  al() || V(!1);
  let { basename: r, navigator: l } = R.useContext(Pn),
    { hash: i, pathname: o, search: u } = Mi(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : Ct([r, o])),
    l.createHref({ pathname: a, search: u, hash: i })
  );
}
function al() {
  return R.useContext(Di) != null;
}
function sl() {
  return al() || V(!1), R.useContext(Di).location;
}
function Ef(e) {
  R.useContext(Pn).static || R.useLayoutEffect(e);
}
function lv() {
  let { isDataRoute: e } = R.useContext(nn);
  return e ? yv() : iv();
}
function iv() {
  al() || V(!1);
  let e = R.useContext(ul),
    { basename: t, navigator: n } = R.useContext(Pn),
    { matches: r } = R.useContext(nn),
    { pathname: l } = sl(),
    i = JSON.stringify(Ti(r).map((a) => a.pathnameBase)),
    o = R.useRef(!1);
  return (
    Ef(() => {
      o.current = !0;
    }),
    R.useCallback(
      function (a, s) {
        if ((s === void 0 && (s = {}), !o.current)) return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let p = fa(a, JSON.parse(i), l, s.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Ct([t, p.pathname])),
          (s.replace ? n.replace : n.push)(p, s.state, s);
      },
      [t, n, i, l, e]
    )
  );
}
const ov = R.createContext(null);
function uv(e) {
  let t = R.useContext(nn).outlet;
  return t && R.createElement(ov.Provider, { value: e }, t);
}
function Mi(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = R.useContext(nn),
    { pathname: l } = sl(),
    i = JSON.stringify(Ti(r).map((o) => o.pathnameBase));
  return R.useMemo(() => fa(e, JSON.parse(i), l, n === "path"), [e, i, l, n]);
}
function av(e, t, n) {
  al() || V(!1);
  let { navigator: r } = R.useContext(Pn),
    { matches: l } = R.useContext(nn),
    i = l[l.length - 1],
    o = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let a = sl(),
    s;
  if (t) {
    var p;
    let w = typeof t == "string" ? Lt(t) : t;
    u === "/" || ((p = w.pathname) != null && p.startsWith(u)) || V(!1),
      (s = w);
  } else s = a;
  let v = s.pathname || "/",
    m = u === "/" ? v : v.slice(u.length) || "/",
    S = Bn(e, { pathname: m }),
    y = pv(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, o, w.params),
            pathname: Ct([
              u,
              r.encodeLocation
                ? r.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? u
                : Ct([
                    u,
                    r.encodeLocation
                      ? r.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      l,
      n
    );
  return t && y
    ? R.createElement(
        Di.Provider,
        {
          value: {
            location: pi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s
            ),
            navigationType: fe.Pop,
          },
        },
        y
      )
    : y;
}
function sv() {
  let e = gv(),
    t = mf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    i = null;
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? R.createElement("pre", { style: l }, n) : null,
    i
  );
}
const cv = R.createElement(sv, null);
class dv extends R.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? R.createElement(
          nn.Provider,
          { value: this.props.routeContext },
          R.createElement(kf.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = R.useContext(ul);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    R.createElement(nn.Provider, { value: t }, r)
  );
}
function pv(e, t, n) {
  var r;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), e == null)) {
    var l;
    if ((l = n) != null && l.errors) e = n.matches;
    else return null;
  }
  let i = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let u = i.findIndex(
      (a) => a.route.id && (o == null ? void 0 : o[a.route.id])
    );
    u >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, u + 1)));
  }
  return i.reduceRight((u, a, s) => {
    let p = a.route.id ? (o == null ? void 0 : o[a.route.id]) : null,
      v = null;
    n && (v = a.route.errorElement || cv);
    let m = t.concat(i.slice(0, s + 1)),
      S = () => {
        let y;
        return (
          p
            ? (y = v)
            : a.route.Component
            ? (y = R.createElement(a.route.Component, null))
            : a.route.element
            ? (y = a.route.element)
            : (y = u),
          R.createElement(fv, {
            match: a,
            routeContext: { outlet: u, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (a.route.ErrorBoundary || a.route.errorElement || s === 0)
      ? R.createElement(dv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: S(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : S();
  }, null);
}
var Cf = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Cf || {}),
  hi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(hi || {});
function hv(e) {
  let t = R.useContext(ul);
  return t || V(!1), t;
}
function mv(e) {
  let t = R.useContext(ma);
  return t || V(!1), t;
}
function vv(e) {
  let t = R.useContext(nn);
  return t || V(!1), t;
}
function Pf(e) {
  let t = vv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function gv() {
  var e;
  let t = R.useContext(kf),
    n = mv(hi.UseRouteError),
    r = Pf(hi.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function yv() {
  let { router: e } = hv(Cf.UseNavigateStable),
    t = Pf(hi.UseNavigateStable),
    n = R.useRef(!1);
  return (
    Ef(() => {
      n.current = !0;
    }),
    R.useCallback(
      function (l, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, pi({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function wv(e) {
  return uv(e.context);
}
function jr(e) {
  V(!1);
}
function xv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = fe.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  al() && V(!1);
  let u = t.replace(/^\/*/, "/"),
    a = R.useMemo(() => ({ basename: u, navigator: i, static: o }), [u, i, o]);
  typeof r == "string" && (r = Lt(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: v = "",
      state: m = null,
      key: S = "default",
    } = r,
    y = R.useMemo(() => {
      let w = Zt(s, u);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: v, state: m, key: S },
            navigationType: l,
          };
    }, [u, s, p, v, m, S, l]);
  return y == null
    ? null
    : R.createElement(
        Pn.Provider,
        { value: a },
        R.createElement(Di.Provider, { children: n, value: y })
      );
}
new Promise(() => {});
function vu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    R.Children.forEach(e, (r, l) => {
      if (!R.isValidElement(r)) return;
      let i = [...t, l];
      if (r.type === R.Fragment) {
        n.push.apply(n, vu(r.props.children, i));
        return;
      }
      r.type !== jr && V(!1), !r.props.index || !r.props.children || V(!1);
      let o = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = vu(r.props.children, i)), n.push(o);
    }),
    n
  );
}
function Sv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nr() {
  return (
    (nr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    nr.apply(this, arguments)
  );
}
function Rf(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    i;
  for (i = 0; i < r.length; i++)
    (l = r[i]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function kv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ev(e, t) {
  return e.button === 0 && (!t || t === "_self") && !kv(e);
}
const Cv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Pv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ];
function Rv(e, t) {
  return Hm({
    basename: t == null ? void 0 : t.basename,
    future: nr({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: pm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || jv(),
    routes: e,
    mapRouteProperties: Sv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function jv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = nr({}, t, { errors: _v(t.errors) })), t;
}
function _v(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new pa(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let i = window[l.__subType];
        if (typeof i == "function")
          try {
            let o = new i(l.message);
            (o.stack = ""), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(l.message);
        (i.stack = ""), (n[r] = i);
      }
    } else n[r] = l;
  return n;
}
const jf = R.createContext({ isTransitioning: !1 }),
  Nv = "startTransition",
  qs = np[Nv];
function Lv(e) {
  qs ? qs(e) : e();
}
class Tv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function Dv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, i] = R.useState(n.state),
    [o, u] = R.useState(),
    [a, s] = R.useState({ isTransitioning: !1 }),
    [p, v] = R.useState(),
    [m, S] = R.useState(),
    [y, w] = R.useState(),
    { v7_startTransition: L } = r || {},
    f = R.useCallback(
      (P) => {
        L ? Lv(P) : P();
      },
      [L]
    ),
    d = R.useCallback(
      (P, j) => {
        let { unstable_viewTransitionOpts: _ } = j;
        !_ ||
        n.window == null ||
        typeof n.window.document.startViewTransition != "function"
          ? f(() => i(P))
          : m && p
          ? (p.resolve(),
            m.skipTransition(),
            w({
              state: P,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }))
          : (u(P),
            s({
              isTransitioning: !0,
              currentLocation: _.currentLocation,
              nextLocation: _.nextLocation,
            }));
      },
      [f, m, p, n.window]
    );
  R.useLayoutEffect(() => n.subscribe(d), [n, d]),
    R.useEffect(() => {
      a.isTransitioning && v(new Tv());
    }, [a.isTransitioning]),
    R.useEffect(() => {
      if (p && o && n.window) {
        let P = o,
          j = p.promise,
          _ = n.window.document.startViewTransition(async () => {
            f(() => i(P)), await j;
          });
        _.finished.finally(() => {
          v(void 0), S(void 0), u(void 0), s({ isTransitioning: !1 });
        }),
          S(_);
      }
    }, [f, o, p, n.window]),
    R.useEffect(() => {
      p && o && l.location.key === o.location.key && p.resolve();
    }, [p, m, l.location, o]),
    R.useEffect(() => {
      !a.isTransitioning &&
        y &&
        (u(y.state),
        s({
          isTransitioning: !0,
          currentLocation: y.currentLocation,
          nextLocation: y.nextLocation,
        }),
        w(void 0));
    }, [a.isTransitioning, y]);
  let h = R.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (P) => n.navigate(P),
        push: (P, j, _) =>
          n.navigate(P, {
            state: j,
            preventScrollReset: _ == null ? void 0 : _.preventScrollReset,
          }),
        replace: (P, j, _) =>
          n.navigate(P, {
            replace: !0,
            state: j,
            preventScrollReset: _ == null ? void 0 : _.preventScrollReset,
          }),
      }),
      [n]
    ),
    c = n.basename || "/",
    k = R.useMemo(
      () => ({ router: n, navigator: h, static: !1, basename: c }),
      [n, h, c]
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      ul.Provider,
      { value: k },
      R.createElement(
        ma.Provider,
        { value: l },
        R.createElement(
          jf.Provider,
          { value: a },
          R.createElement(
            xv,
            {
              basename: c,
              location: l.location,
              navigationType: l.historyAction,
              navigator: h,
            },
            l.initialized
              ? R.createElement(Mv, { routes: n.routes, state: l })
              : t
          )
        )
      )
    ),
    null
  );
}
function Mv(e) {
  let { routes: t, state: n } = e;
  return av(t, void 0, n);
}
const zv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Ov = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ke = R.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: i,
        replace: o,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
        unstable_viewTransition: v,
      } = t,
      m = Rf(t, Cv),
      { basename: S } = R.useContext(Pn),
      y,
      w = !1;
    if (typeof s == "string" && Ov.test(s) && ((y = s), zv))
      try {
        let h = new URL(window.location.href),
          c = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          k = Zt(c.pathname, S);
        c.origin === h.origin && k != null
          ? (s = k + c.search + c.hash)
          : (w = !0);
      } catch {}
    let L = rv(s, { relative: l }),
      f = Iv(s, {
        replace: o,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: v,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || f(h);
    }
    return R.createElement(
      "a",
      nr({}, m, { href: y || L, onClick: w || i ? r : d, ref: n, target: a })
    );
  }),
  Ll = R.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: i = "",
        end: o = !1,
        style: u,
        to: a,
        unstable_viewTransition: s,
        children: p,
      } = t,
      v = Rf(t, Pv),
      m = Mi(a, { relative: v.relative }),
      S = sl(),
      y = R.useContext(ma),
      { navigator: w } = R.useContext(Pn),
      L = y != null && Uv(m) && s === !0,
      f = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      d = S.pathname,
      h =
        y && y.navigation && y.navigation.location
          ? y.navigation.location.pathname
          : null;
    l ||
      ((d = d.toLowerCase()),
      (h = h ? h.toLowerCase() : null),
      (f = f.toLowerCase()));
    let c = d === f || (!o && d.startsWith(f) && d.charAt(f.length) === "/"),
      k =
        h != null &&
        (h === f || (!o && h.startsWith(f) && h.charAt(f.length) === "/")),
      P = { isActive: c, isPending: k, isTransitioning: L },
      j = c ? r : void 0,
      _;
    typeof i == "function"
      ? (_ = i(P))
      : (_ = [
          i,
          c ? "active" : null,
          k ? "pending" : null,
          L ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let H = typeof u == "function" ? u(P) : u;
    return R.createElement(
      Ke,
      nr({}, v, {
        "aria-current": j,
        className: _,
        ref: n,
        style: H,
        to: a,
        unstable_viewTransition: s,
      }),
      typeof p == "function" ? p(P) : p
    );
  });
var gu;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(gu || (gu = {}));
var Js;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Js || (Js = {}));
function Fv(e) {
  let t = R.useContext(ul);
  return t || V(!1), t;
}
function Iv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: i,
      relative: o,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    a = lv(),
    s = sl(),
    p = Mi(e, { relative: o });
  return R.useCallback(
    (v) => {
      if (Ev(v, n)) {
        v.preventDefault();
        let m = r !== void 0 ? r : kn(s) === kn(p);
        a(e, {
          replace: m,
          state: l,
          preventScrollReset: i,
          relative: o,
          unstable_viewTransition: u,
        });
      }
    },
    [s, a, p, r, l, n, e, i, o, u]
  );
}
function Uv(e, t) {
  t === void 0 && (t = {});
  let n = R.useContext(jf);
  n == null && V(!1);
  let { basename: r } = Fv(gu.useViewTransitionState),
    l = Mi(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = Zt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Zt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return fu(l.pathname, o) != null || fu(l.pathname, i) != null;
}
function Av() {
  return N.jsxs("div", {
    className: "mx-auto w-full max-w-7xl",
    children: [
      N.jsxs("aside", {
        className:
          "relative overflow-hidden  text-teal-800 rounded-lg sm:mx-16 mx-2 sm:py-16",
        children: [
          N.jsx("div", {
            className:
              "relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8",
            children: N.jsxs("div", {
              className:
                "max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto",
              children: [
                N.jsx("h2", {
                  className: "text-4xl font-bold sm:text-5xl",
                  children: "Lorem, ipsum.",
                }),
                N.jsx(Ke, {
                  className:
                    "inline-flex text-white items-center px-6 py-3 font-medium bg-teal-700 rounded-sm hover:opacity-75",
                  to: "/",
                  children: "  Download now",
                }),
              ],
            }),
          }),
          N.jsx("div", {
            className: "absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ",
            children: N.jsx("img", {
              className: "w-96",
              src: "https://images6.alphacoders.com/641/thumb-1920-641386.jpg",
              alt: "image1",
            }),
          }),
        ],
      }),
      N.jsx("div", {
        className: "grid  place-items-center sm:mt-20",
        children: N.jsx("img", {
          className: "sm:w-96 w-48",
          src: "https://ww2.freelogovectors.net/wp-content/uploads/2023/04/venom-sticker-logo.png",
          alt: "image2",
        }),
      }),
      N.jsx("h1", {
        className: "text-center text-2xl sm:text-5xl py-10 font-medium",
        children: "Lorem ipsum dolor sit amet consectetur.",
      }),
    ],
  });
}
function Bv() {
  return N.jsx("div", {
    children: N.jsx("div", {
      className: " my-1",
      children:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia laudantium dolorum molestias voluptatibus quae ea ipsum, impedit praesentium! Laboriosam aliquid quaerat dignissimos rem consequuntur dolorum excepturi ab! Deleniti ipsam ea voluptate esse? Recusandae accusantium vitae ea, expedita eum repudiandae sapiente saepe quis nam odit id omnis quibusdam tempore cupiditate voluptatibus nisi nostrum! Esse eaque ad fuga porro impedit molestias? Sint officiis cum blanditiis officia dolores quam qui similique architecto itaque doloribus quae, error consequuntur tenetur voluptas neque? Nesciunt hic nam architecto accusamus optio quas, laboriosam maiores labore quisquam voluptatem doloremque incidunt rerum error at beatae fuga, minima itaque perspiciatis veniam sunt officiis. Officiis commodi voluptatem id nisi molestias perspiciatis maxime minima quia. Mollitia iusto ratione ipsum praesentium. Facere commodi repudiandae blanditiis nihil nobis atque fugit illum debitis, soluta facilis. Facilis sequi cum eius, temporibus labore autem quibusdam esse nihil possimus corporis. Eius accusamus dicta odit sint veniam accusantium, impedit labore debitis quis voluptatum quod! Praesentium perspiciatis asperiores nam accusantium officiis vitae natus maxime tempore minus, voluptate, fuga error totam dicta nulla atque deserunt rem quasi nisi nesciunt. Eos perspiciatis quibusdam placeat animi eius illo, impedit in officia aut similique recusandae. Adipisci aliquam praesentium dignissimos, sunt voluptas optio quae porro numquam ad in, placeat rem nostrum pariatur recusandae voluptates nulla debitis eos, consequatur excepturi minus iusto ipsam. Autem, eum? Unde accusantium laborum vero, accusamus non fugiat quae autem sunt rerum nesciunt? Provident veniam voluptates dolor cupiditate eveniet, quisquam quibusdam nam reprehenderit numquam nihil perspiciatis odio aliquid praesentium eum iure vitae esse.",
    }),
  });
}
function $v() {
  const e = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "MacBook Pro",
      description:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Samsung Galaxy Book",
      description:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Microsoft Surface Laptop 4",
      description:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Infinix INBOOK",
      description:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      ],
    },
  ];
  return N.jsx("div", {
    className: " grid grid-cols-2 lg:grid-cols-3",
    children: e.map((t) =>
      N.jsx(N.Fragment, {
        children: N.jsxs("div", {
          className: " bg-gray-900 my-2 text-white  rounded-sm  w-fit m-2 p-1",
          children: [
            N.jsx(
              "div",
              { className: " text-center mx-1", children: t.title },
              t.title
            ),
            N.jsxs("div", {
              className: " block text-center",
              children: ["$", t.price],
            }),
            N.jsx("img", {
              src: t.images[0],
              alt: "",
              className: "",
              width: "200px",
            }),
          ],
        }),
      })
    ),
  });
}
function Vv() {
  return N.jsx("header", {
    className: "shadow sticky z-50 top-0",
    children: N.jsx("nav", {
      className: "bg-white border-gray-200 px-4 lg:px-6 py-2.5",
      children: N.jsxs("div", {
        className:
          "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl",
        children: [
          N.jsx(Ke, {
            to: "/",
            className: "flex items-center",
            children: N.jsx("img", {
              src: "https://assets.stickpng.com/images/61d183393a856e0004c6334b.png",
              className: "mr-3 h-12",
              alt: "Logo",
            }),
          }),
          N.jsxs("div", {
            className: "flex items-center lg:order-2",
            children: [
              N.jsx(Ke, {
                to: "#",
                className:
                  "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none",
                children: "Log in",
              }),
              N.jsx(Ke, {
                to: "#",
                className:
                  "text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-sm text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none",
                children: "Get started",
              }),
            ],
          }),
          N.jsx("div", {
            className:
              "hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
            id: "mobile-menu-2",
            children: N.jsxs("ul", {
              className:
                "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
              children: [
                N.jsx("li", {
                  children: N.jsx(Ll, {
                    to: "/",
                    className: ({
                      isActive: e,
                    }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 font-quick 
                                        ${
                                          e ? "text-teal-700" : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0`,
                    children: "Home",
                  }),
                }),
                N.jsx("li", {
                  children: N.jsx(Ll, {
                    to: "/about",
                    className: ({
                      isActive: e,
                    }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 font-quick
                                        ${
                                          e ? "text-teal-700" : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0`,
                    children: "About",
                  }),
                }),
                N.jsx("li", {
                  children: N.jsx(Ll, {
                    to: "/contact",
                    className: ({
                      isActive: e,
                    }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 font-quick
                                        ${
                                          e ? "text-teal-700" : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0`,
                    children: "Contact",
                  }),
                }),
                N.jsx("li", {
                  children: N.jsx(Ll, {
                    to: "/products",
                    className: ({
                      isActive: e,
                    }) => `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 font-quick
                                        ${
                                          e ? "text-teal-700" : "text-gray-700"
                                        } lg:hover:bg-transparent lg:border-0 hover:text-teal-700 lg:p-0`,
                    children: "Products",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function Wv() {
  return N.jsx("footer", {
    className: "bg-white border-y",
    children: N.jsxs("div", {
      className: "mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8",
      children: [
        N.jsxs("div", {
          className: "md:flex md:justify-between",
          children: [
            N.jsx("div", {
              className: "mb-6 md:mb-0",
              children: N.jsx(Ke, {
                to: "/",
                className: "flex items-center",
                children: N.jsx("img", {
                  src: "https://assets.stickpng.com/images/61d183393a856e0004c6334b.png",
                  className: "mr-3 h-16",
                  alt: "Logo",
                }),
              }),
            }),
            N.jsxs("div", {
              className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3",
              children: [
                N.jsxs("div", {
                  children: [
                    N.jsx("h2", {
                      className:
                        "mb-6 text-sm font-semibold text-gray-900 uppercase",
                      children: "Resources",
                    }),
                    N.jsxs("ul", {
                      className: "text-gray-500 font-medium",
                      children: [
                        N.jsx("li", {
                          className: "mb-4",
                          children: N.jsx(Ke, {
                            to: "/",
                            className: "hover:underline",
                            children: "Home",
                          }),
                        }),
                        N.jsx("li", {
                          children: N.jsx(Ke, {
                            to: "/about",
                            className: "hover:underline",
                            children: "About",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                N.jsxs("div", {
                  children: [
                    N.jsx("h2", {
                      className:
                        "mb-6 text-sm font-semibold text-gray-900 uppercase",
                      children: "Follow us",
                    }),
                    N.jsxs("ul", {
                      className: "text-gray-500 font-medium",
                      children: [
                        N.jsx("li", {
                          className: "mb-4",
                          children: N.jsx(Ke, {
                            to: "/",
                            className: "hover:underline",
                            children: "Github",
                          }),
                        }),
                        N.jsx("li", {
                          children: N.jsx(Ke, {
                            to: "/",
                            className: "hover:underline",
                            children: "Discord",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                N.jsxs("div", {
                  children: [
                    N.jsx("h2", {
                      className:
                        "mb-6 text-sm font-semibold text-gray-900 uppercase",
                      children: "Legal",
                    }),
                    N.jsxs("ul", {
                      className: "text-gray-500 font-medium",
                      children: [
                        N.jsx("li", {
                          className: "mb-4",
                          children: N.jsx(Ke, {
                            to: "#",
                            className: "hover:underline",
                            children: "Privacy Policy",
                          }),
                        }),
                        N.jsx("li", {
                          children: N.jsx(Ke, {
                            to: "#",
                            className: "hover:underline",
                            children: "Terms & Conditions",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        N.jsx("hr", { className: "my-6 border-gray-200 sm:mx-auto lg:my-8" }),
        N.jsx("div", {
          className: "sm:flex sm:items-center sm:justify-between",
        }),
      ],
    }),
  });
}
function Hv() {
  return N.jsxs(N.Fragment, {
    children: [N.jsx(Vv, {}), N.jsx(wv, {}), N.jsx(Wv, {})],
  });
}
const Qv = Rv(
  vu(
    N.jsxs(jr, {
      path: "/",
      element: N.jsx(Hv, {}),
      children: [
        N.jsx(jr, { path: "", element: N.jsx(Av, {}) }),
        N.jsx(jr, { path: "about", element: N.jsx(Bv, {}) }),
        N.jsx(jr, { path: "products", element: N.jsx($v, {}) }),
      ],
    })
  )
);
yo.createRoot(document.getElementById("root")).render(
  N.jsx(uc.StrictMode, { children: N.jsx(Dv, { router: Qv }) })
);
