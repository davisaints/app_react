"use strict";

<<<<<<< HEAD
Liferay.Loader.define("my-react-app@1.0.0/App", ['module', 'exports', 'require', 'my-react-app$react', './Components/BlogPost', './Components/DeleteBlog', './Components/GetBlog', './Components/UpdateBlog'], function (module, exports, require) {
=======
Liferay.Loader.define("my-react-app@1.0.0/App", ['module', 'exports', 'require', 'my-react-app$react', './Components/BlogPost', './Components/DeleteGeneral', './Components/GetDocument', './Components/GetBlog', './Components/GetKnowledge', './Components/KnowledgePost', './Components/PostDocument', './Components/UpdateBlog', './Components/UpdateDocument', './Components/UpdateKnowledge'], function (module, exports, require) {
>>>>>>> 2d859dd (Clay, React and REST)
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _react = _interopRequireDefault(require("my-react-app$react"));

    var _BlogPost = _interopRequireDefault(require("./Components/BlogPost"));

<<<<<<< HEAD
    var _DeleteBlog = _interopRequireDefault(require("./Components/DeleteBlog"));

    var _GetBlog = _interopRequireDefault(require("./Components/GetBlog"));

    var _UpdateBlog = _interopRequireDefault(require("./Components/UpdateBlog"));

=======
    var _DeleteGeneral = _interopRequireDefault(require("./Components/DeleteGeneral"));

    var _GetDocument = _interopRequireDefault(require("./Components/GetDocument"));

    var _GetBlog = _interopRequireDefault(require("./Components/GetBlog"));

    var _GetKnowledge = _interopRequireDefault(require("./Components/GetKnowledge"));

    var _KnowledgePost = _interopRequireDefault(require("./Components/KnowledgePost"));

    var _PostDocument = _interopRequireDefault(require("./Components/PostDocument"));

    var _UpdateBlog = _interopRequireDefault(require("./Components/UpdateBlog"));

    var _UpdateDocument = _interopRequireDefault(require("./Components/UpdateDocument"));

    var _UpdateKnowledge = _interopRequireDefault(require("./Components/UpdateKnowledge"));

>>>>>>> 2d859dd (Clay, React and REST)
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }

    function App() {
<<<<<<< HEAD
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BlogPost["default"], null), /*#__PURE__*/_react["default"].createElement(_GetBlog["default"], null), /*#__PURE__*/_react["default"].createElement(_UpdateBlog["default"], null), /*#__PURE__*/_react["default"].createElement(_DeleteBlog["default"], null))
=======
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_KnowledgePost["default"], null), /*#__PURE__*/_react["default"].createElement(_GetKnowledge["default"], null), /*#__PURE__*/_react["default"].createElement(_UpdateKnowledge["default"], null), /*#__PURE__*/_react["default"].createElement(_PostDocument["default"], null), /*#__PURE__*/_react["default"].createElement(_GetDocument["default"], null), /*#__PURE__*/_react["default"].createElement(_UpdateDocument["default"], null), /*#__PURE__*/_react["default"].createElement(_BlogPost["default"], null), /*#__PURE__*/_react["default"].createElement(_GetBlog["default"], null), /*#__PURE__*/_react["default"].createElement(_UpdateBlog["default"], null), /*#__PURE__*/_react["default"].createElement(_DeleteGeneral["default"], null))
>>>>>>> 2d859dd (Clay, React and REST)
      );
    }

    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map