"use strict";

Liferay.Loader.define("my-react-app@1.0.0/Components/PostDocument", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/button', '../Request/Request'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = PostDocument;

    var _react = _interopRequireDefault(require("my-react-app$react"));

    var _button = _interopRequireDefault(require("@my-react-app$clayui/button"));

    var _Request = require("../Request/Request");

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function PostDocument() {
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "DOCUMENTS"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("h2", null, "POST"), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("input", {
          type: "file",
          id: "documentFile"
        }), /*#__PURE__*/_react["default"].createElement(_button["default"], {
          onClick: function onClick() {
            return (0, _Request.postDocument)();
          },
          displayType: "secondary"
        }, "Post a document"), /*#__PURE__*/_react["default"].createElement("hr", null))
      );
    }
    //# sourceMappingURL=PostDocument.js.map
  }
});
//# sourceMappingURL=PostDocument.js.map