(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([
  [0],
  {
    23: function (e, t, n) {},
    50: function (e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a = n(0),
        c = n.n(a),
        u = n(12),
        o = n.n(u),
        s = (n(23), n(3)),
        i = n.n(s),
        l = n(5),
        p = n(4),
        f = (n(7), n(13)),
        b = n(14),
        d = n.n(b),
        j = n(15),
        h = n(2);
      var m = j.a.div(
          r ||
            (r = Object(f.a)([
              "\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n",
            ]))
        ),
        x = function () {
          return Object(h.jsx)(m, {
            children: Object(h.jsx)(d.a, {
              type: "Puff",
              color: "#00BFFF",
              height: 100,
              width: 100,
              timeout: 3e3,
            }),
          });
        },
        O = n(10);
      var v = function () {
        var e = Object(a.useState)(""),
          t = Object(p.a)(e, 2),
          n = t[0],
          r = t[1],
          c = Object(a.useState)(""),
          u = Object(p.a)(c, 2),
          o = u[0],
          s = u[1],
          f = Object(a.useState)(""),
          b = Object(p.a)(f, 2),
          d = b[0],
          j = b[1],
          m = Object(a.useState)(!1),
          v = Object(p.a)(m, 2),
          y = v[0],
          g = v[1],
          k = Object(a.useState)(0),
          w = Object(p.a)(k, 2),
          B = w[0],
          F = w[1],
          S = Object(a.useState)(!1),
          C = Object(p.a)(S, 2),
          N = C[0],
          z = C[1],
          E = /^[a-zA-Z-0-9]+@[a-zA-Z-0-9]+\.[A-Za-z]+$/,
          A = function (e, t) {
            1 === t
              ? alert("There is an empty string...")
              : 2 === t
              ? alert("There is something wrong with your email...")
              : 3 === t && alert(e);
          },
          I = function (e) {
            return "" !== e || (A(e, 1), !1);
          },
          J = (function () {
            var e = Object(l.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        setTimeout(function () {
                          return console.log("Loading...");
                        }, 5e3);
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          M = (function () {
            var e = Object(l.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (y) {
                          e.next = 11;
                          break;
                        }
                        if (
                          (g(!0),
                          !I(n) || !I(d) || (!E.test(o) && (A(o, 2), 1)))
                        ) {
                          e.next = 10;
                          break;
                        }
                        return z(!0), (e.next = 6), J();
                      case 6:
                        return (e.next = 8), Z(n, o, d);
                      case 8:
                        e.next = 11;
                        break;
                      case 10:
                        g(!1);
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          T = (function () {
            var e = Object(l.a)(
              i.a.mark(function e() {
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        r(""), s(""), j(""), g(!1), F(0), z(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Z = (function () {
            var e = Object(l.a)(
              i.a.mark(function e() {
                var t;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        O.a.init("user_AJGy3zMpNl2Rxs4CFFafD"),
                          (t = { name: n, email: o, textMessage: d }),
                          O.a
                            .send("service_tauvzqc", "template_26nh4ab", t)
                            .then(
                              function (e) {
                                console.log(e.text),
                                  alert("Your message was successfully sent"),
                                  T();
                              },
                              function (e) {
                                console.log(e.text),
                                  A("Error, your message wasn't sent", 3);
                              }
                            );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(h.jsx)("div", {
          children: N
            ? x()
            : Object(h.jsxs)("div", {
                children: [
                  Object(h.jsx)("header", {
                    className: "headerClass",
                    children: Object(h.jsx)("h1", {
                      children: "Sending message",
                    }),
                  }),
                  Object(h.jsx)("input", {
                    type: "name",
                    placeholder: "Enter your name",
                    className: "inputField nameInputField centerBlock",
                    value: n,
                    onChange: function (e) {
                      return r(e.target.value);
                    },
                    onFocus: function () {
                      return F(1);
                    },
                    onBlur: function () {
                      return F(0);
                    },
                    style: {
                      borderBottom: 1 === B ? "3px solid #10fc2a" : null,
                    },
                  }),
                  Object(h.jsx)("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    value: o,
                    onChange: function (e) {
                      return s(e.target.value);
                    },
                    onFocus: function () {
                      return F(2);
                    },
                    onBlur: function () {
                      return F(0);
                    },
                    style: {
                      borderBottom: 2 === B ? "3px solid #10fc2a" : null,
                    },
                    className: "inputField emailInputField centerBlock",
                  }),
                  Object(h.jsx)("input", {
                    type: "text",
                    placeholder: "Enter your message here",
                    value: d,
                    onChange: function (e) {
                      return j(e.target.value);
                    },
                    className: "inputField textField centerBlock",
                    onFocus: function () {
                      return F(3);
                    },
                    onBlur: function () {
                      return F(0);
                    },
                    style: {
                      borderBottom: 3 === B ? "3px solid #10fc2a" : null,
                    },
                  }),
                  Object(h.jsx)("button", {
                    className: "centerBlock submitButton",
                    onClick: M,
                    disabled: y,
                    style: { background: y ? "#05acbb" : null },
                    children: "Submit",
                  }),
                  Object(h.jsx)("button", {
                    className: "centerBlock resetButton",
                    disabled: "" === o && "" === n && "" === d,
                    onClick: T,
                    children: "Clear",
                  }),
                ],
              }),
        });
      };
      o.a.render(
        Object(h.jsx)(c.a.StrictMode, { children: Object(h.jsx)(v, {}) }),
        document.getElementById("root")
      );
    },
    7: function (e, t, n) {},
  },
  [[50, 1, 2]],
]);
//# sourceMappingURL=main.0e6f128f.chunk.js.map
