(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5301: function (n, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return r(6384);
        },
      ]);
    },
    6384: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return k;
          },
        });
      var i = r(5893),
        t = r(9008),
        c = r(7294),
        l = r(7379);
      function o(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function d() {
        var n = o([
          "\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n  padding: 3rem 1rem;\n  gap: 1rem;\n",
        ]);
        return (
          (d = function () {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = o([
          "\n  width: 100%;\n  max-width: 700px;\n  margin: auto;\n  padding: 1rem;\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = o([
          "\n  display: grid;\n  grid-template-columns: 1fr;\n  place-items: center;\n  gap: 2rem;\n\n  & > div {\n    width: 100%;\n    max-width: 700px;\n    display: grid;\n    gap: 1rem;\n  }\n",
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = o([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n\n  input {\n    width: 100%;\n    padding: 0.5rem 1rem;\n    padding-right: 0;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n  }\n",
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = o([
          "\n  width: 250px;\n  height: 65px;\n  margin-top: 1rem;\n  background: gold;\n  display: grid;\n  place-items: center;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      var h = l.default.div.withConfig({ componentId: "sc-d07adfb8-0" })(d()),
        m = l.default.section.withConfig({ componentId: "sc-d07adfb8-1" })(a()),
        p = l.default.form.withConfig({ componentId: "sc-d07adfb8-2" })(s()),
        v = l.default.div.withConfig({ componentId: "sc-d07adfb8-3" })(u()),
        x = l.default.button.withConfig({ componentId: "sc-d07adfb8-4" })(f());
      function j(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function g() {
        var n = j([
          "\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 1rem;\n  gap: 4rem;\n\n  @media only ",
          " {\n    gap: 2rem;\n  }\n\n  .Y_D,\n  .H_S {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 4rem;\n    @media only ",
          " {\n      gap: 2rem;\n    }\n  }\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = j(["\n  min-width: 140px;\n  overflow: hidden;\n"]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = j([
          "\n  text-align: center;\n  padding: 0.5rem;\n  width: 100%;\n  transform: translateY(105%);\n  opacity: 0;\n  animation: reveal 1s cubic-bezier(0.5, 0, 0.175, 1) forwards;\n  animation-delay: ",
          ";\n\n  @keyframes reveal {\n    to {\n      opacity: 1;\n      transform: translateY(0%);\n    }\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = j(["\n  font-size: 5rem;\n  color: gold;\n"]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      var S = l.default.div.withConfig({ componentId: "sc-5b1610f0-0" })(
          g(),
          function (n) {
            return n.theme.breakpoints.sm;
          },
          function (n) {
            return n.theme.breakpoints.sm;
          }
        ),
        _ = l.default.div.withConfig({ componentId: "sc-5b1610f0-1" })(b()),
        N = l.default.div.withConfig({ componentId: "sc-5b1610f0-2" })(
          y(),
          function (n) {
            return n.delay;
          }
        ),
        C = l.default.span.withConfig({ componentId: "sc-5b1610f0-3" })(w()),
        I = function (n) {
          var e,
            r,
            t,
            c,
            l,
            o,
            d = n.timer,
            a = d.yearsSince,
            s = d.monthsSince,
            u = d.daysSince,
            f = d.hoursSince,
            h = d.minsSince,
            m = d.secsSince;
          return (
            console.info(d),
            (0, i.jsxs)(S, {
              children: [
                (0, i.jsxs)("div", {
                  className: "Y_D",
                  children: [
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "0s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (e =
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.toString()) || void 0 === e
                                ? void 0
                                : e.length) < 2
                                ? "0".concat(a)
                                : a,
                          }),
                          (0, i.jsx)("p", { children: "Years" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "0.25s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (r =
                                  null === s || void 0 === s
                                    ? void 0
                                    : s.toString()) || void 0 === r
                                ? void 0
                                : r.length) < 2
                                ? "0".concat(s)
                                : s,
                          }),
                          (0, i.jsx)("p", { children: "Months" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "0.5s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (t =
                                  null === u || void 0 === u
                                    ? void 0
                                    : u.toString()) || void 0 === t
                                ? void 0
                                : t.length) < 2
                                ? "0".concat(u)
                                : u,
                          }),
                          (0, i.jsx)("p", { children: "Days" }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: "H_S",
                  children: [
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "0.75s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (c =
                                  null === f || void 0 === f
                                    ? void 0
                                    : f.toString()) || void 0 === c
                                ? void 0
                                : c.length) < 2
                                ? "0".concat(f)
                                : f,
                          }),
                          (0, i.jsx)("p", { children: "Hours" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "1s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (l =
                                  null === h || void 0 === h
                                    ? void 0
                                    : h.toString()) || void 0 === l
                                ? void 0
                                : l.length) < 2
                                ? "0".concat(h)
                                : h,
                          }),
                          (0, i.jsx)("p", { children: "Minutes" }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(_, {
                      children: (0, i.jsxs)(N, {
                        delay: "1.25s",
                        children: [
                          (0, i.jsx)(C, {
                            children:
                              (null ===
                                (o =
                                  null === m || void 0 === m
                                    ? void 0
                                    : m.toString()) || void 0 === o
                                ? void 0
                                : o.length) < 2
                                ? "0".concat(m)
                                : m,
                          }),
                          (0, i.jsx)("p", { children: "Seconds" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        M = function () {
          var n = (0, c.useState)({
              yearsSince: 0,
              monthsSince: 0,
              daysSince: 0,
              hoursSince: 0,
              minsSince: 0,
              secsSince: 0,
            }),
            e = n[0],
            r = n[1],
            t = (0, c.useState)(!1),
            l = t[0],
            o = t[1],
            d = (0, c.useState)(),
            a = d[0],
            s = d[1],
            u = (0, c.useRef)(null),
            f = (0, c.useRef)(null),
            h = (0, c.useRef)(null),
            j = (0, c.useRef)(null),
            g = (0, c.useRef)(null),
            b = new Date(),
            y = function () {
              (u.current.value = ""),
                (f.current.value = ""),
                (h.current.value = ""),
                (j.current.value = ""),
                (g.current.value = "");
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              l && (0, i.jsx)(I, { timer: e }),
              (0, i.jsx)(m, {
                children: (0, i.jsxs)(p, {
                  onSubmit: function (n) {
                    var e, i;
                    n.preventDefault();
                    var t,
                      c = Number(u.current.value),
                      l = Number(f.current.value) - 1,
                      d = Number(h.current.value),
                      m = Number(
                        null === (e = j.current) || void 0 === e
                          ? void 0
                          : e.value
                      ),
                      p = Number(
                        null === (i = g.current) || void 0 === i
                          ? void 0
                          : i.value
                      ),
                      v = new Date(d, l, c, m, p, 0),
                      x = function () {
                        var n = setInterval(function () {
                          var n =
                              (new Date().getTime() - v.getTime()) / 315576e5,
                            e = Math.floor(n),
                            i = Math.floor(12 * (n - e)),
                            t = Math.floor(30.4375 * (12 * (n - e) - i)),
                            c = Math.floor(
                              24 * (30.4375 * (12 * (n - e) - i) - t)
                            ),
                            l = Math.floor(
                              60 * (24 * (30.4375 * (12 * (n - e) - i) - t) - c)
                            ),
                            o = Math.floor(
                              60 *
                                (60 *
                                  (24 * (30.4375 * (12 * (n - e) - i) - t) -
                                    c) -
                                  l)
                            );
                          r({
                            yearsSince: e,
                            monthsSince: i,
                            daysSince: t,
                            hoursSince: c,
                            minsSince: l,
                            secsSince: o,
                          });
                        }, 1e3);
                        s(n);
                      };
                    if (
                      ((t =
                        !(1 == l && c > 29) &&
                        (1 != l ||
                          29 != c ||
                          !!((0 == d % 4 && 0 != d % 100) || 0 == d % 400))),
                      c && f.current.value && d && t)
                    ) {
                      if (v > b) return void y();
                      a
                        ? (clearInterval(a),
                          r({
                            yearsSince: 0,
                            monthsSince: 0,
                            daysSince: 0,
                            hoursSince: 0,
                            minsSince: 0,
                            secsSince: 0,
                          }),
                          x(),
                          scroll(0, 0),
                          o(!0))
                        : (x(), o(!0));
                    }
                    y();
                  },
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("label", {
                          className: "label",
                          children: "Date",
                        }),
                        (0, i.jsxs)(v, {
                          children: [
                            (0, i.jsx)("input", {
                              type: "number",
                              min: "01",
                              max: "31",
                              placeholder: "Day",
                              ref: u,
                            }),
                            (0, i.jsx)("input", {
                              type: "number",
                              min: "01",
                              max: "12",
                              placeholder: "Month",
                              ref: f,
                            }),
                            (0, i.jsx)("input", {
                              type: "number",
                              min: "1900",
                              max: b.getFullYear(),
                              placeholder: "Year",
                              ref: h,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("label", { children: "Time (optional)" }),
                        (0, i.jsxs)(v, {
                          children: [
                            (0, i.jsx)("input", {
                              type: "number",
                              min: "00",
                              max: "23",
                              placeholder: "Hours (24h)",
                              ref: j,
                            }),
                            (0, i.jsx)("input", {
                              type: "number",
                              min: "00",
                              max: "59",
                              placeholder: "Minutes",
                              ref: g,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(x, {
                      type: "submit",
                      onClick: function () {
                        return o(!1);
                      },
                      children: (0, i.jsx)("span", {
                        children: "How Old Am I ?",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        k = function () {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(t.default, {
                children: (0, i.jsx)("title", { children: "How Old Am I ?" }),
              }),
              (0, i.jsx)(h, { children: (0, i.jsx)(M, {}) }),
            ],
          });
        };
    },
    9008: function (n, e, r) {
      n.exports = r(5443);
    },
  },
  function (n) {
    n.O(0, [774, 888, 179], function () {
      return (e = 5301), n((n.s = e));
      var e;
    });
    var e = n.O();
    _N_E = e;
  },
]);
