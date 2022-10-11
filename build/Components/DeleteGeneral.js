"use strict";

Liferay.Loader.define("my-react-app@1.0.0/Components/DeleteGeneral", ['module', 'exports', 'require', 'my-react-app$react', '../Request/Request', '@my-react-app$clayui/form', '@my-react-app$clayui/button'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = DeleteGeneral;

    var _react = _interopRequireWildcard(require("my-react-app$react"));

    var _Request = require("../Request/Request");

    var _form = _interopRequireWildcard(require("@my-react-app$clayui/form"));

    var _button = _interopRequireDefault(require("@my-react-app$clayui/button"));

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }

    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {
        return cache.get(obj);
      }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }newObj["default"] = obj;if (cache) {
        cache.set(obj, newObj);
      }return newObj;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }return arr2;
    }

    function _iterableToArrayLimit(arr, i) {
      var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];if (_i == null) return;var _arr = [];var _n = true;var _d = false;var _s, _e;try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function DeleteGeneral() {
      var _useState = (0, _react.useState)(''),
          _useState2 = _slicedToArray(_useState, 2),
          id = _useState2[0],
          setId = _useState2[1];

      var _useState3 = (0, _react.useState)(''),
          _useState4 = _slicedToArray(_useState3, 2),
          local = _useState4[0],
          setLocal = _useState4[1];

      function DELETE() {
        (0, _Request.deleteGeneral)(local, id);
      }

      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("h1", null, "DELETE"), /*#__PURE__*/_react["default"].createElement("h2", null, "BLOGS, DOCUMENTS AND KNOWLEDGEBASE:"), " ", /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_form.ClaySelect, {
          "aria-label": "Select Label",
          id: "mySelectId",
          onChange: function onChange(e) {
            return setLocal(e.target.value);
          }
        }, [{
          label: 'Delete location',
          value: ''
        }, {
          label: 'Documents',
          value: 'documents'
        }, {
          label: 'Blog-Posting',
          value: 'blog-postings'
        }, {
          label: 'Knowledge',
          value: 'knowledge-base-articles'
        }].map(function (item) {
          return (/*#__PURE__*/_react["default"].createElement(_form.ClaySelect.Option, {
              key: item.value,
              label: item.label,
              value: item.value
            })
          );
        })), /*#__PURE__*/_react["default"].createElement(_form["default"], null, /*#__PURE__*/_react["default"].createElement(_form["default"].Group, null, " ", /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "basicInput"
        }, "DOCUMENT ID"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          id: "id",
          onChange: function onChange(event) {
            return setId(event.target.value);
          },
          placeholder: "id",
          type: "text",
          value: id
        }))), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          displayType: "primary",
          onClick: function onClick() {
            return DELETE();
          }
        }, "Delete Blog"))
      );
    }
    //# sourceMappingURL=DeleteGeneral.js.map
  }
});
//# sourceMappingURL=DeleteGeneral.js.map