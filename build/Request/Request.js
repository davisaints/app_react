"use strict";

Liferay.Loader.define("my-react-app@1.0.0/Request/Request", ['module', 'exports', 'require'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
<<<<<<< HEAD
    exports.updateBlog = exports.postBlog = exports.getBlog = exports.deleteBlog = void 0;
    var siteId = Liferay.ThemeDisplay.getSiteGroupId();

    var postBlog = function postBlog(headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/blog-postings"), {
        method: "POST",
=======
    exports.updateDocument = exports.updateBlog = exports.postDocument = exports.postBlog = exports.postArticle = exports.knowledgeUpdate = exports.getGeneral = exports.getBlog = exports.deleteGeneral = void 0;
    var siteId = themeDisplay.getSiteGroupId(); //General 

    var getGeneral = function getGeneral(local) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/").concat(local), {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      });
    };

    exports.getGeneral = getGeneral;

    var deleteGeneral = function deleteGeneral(local) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/").concat(local), {
        method: 'GET'
      }).then(function (res) {
        return res.json();
      });
    }; // Blogs 


    exports.deleteGeneral = deleteGeneral;

    var postBlog = function postBlog(headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/blog-postings"), {
        method: 'POST',
>>>>>>> 2d859dd (Clay, React and REST)
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          headline: headline,
          articleBody: articleBody
        })
      }).then(function (res) {
        return res.json();
      });
    };

    exports.postBlog = postBlog;

    var getBlog = function getBlog() {
<<<<<<< HEAD
      return Liferay.Util.fetch("/o/headless-delivery/v1.0/sites/".concat(siteId, "/blog-postings"), {
        method: "GET"
=======
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/blog-postings"), {
        method: 'GET'
>>>>>>> 2d859dd (Clay, React and REST)
      }).then(function (res) {
        return res.json();
      });
    };

    exports.getBlog = getBlog;

    var updateBlog = function updateBlog(Id, headline, articleBody) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/blog-postings/".concat(Id), {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          headline: headline,
          articleBody: articleBody,
          id: Id
        })
      }).then(function (res) {
        return res.json();
      });
<<<<<<< HEAD
    };

    exports.updateBlog = updateBlog;

    var deleteBlog = function deleteBlog(Id) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/blog-postings/".concat(Id), {
        method: "DELETE"
      });
    };

    exports.deleteBlog = deleteBlog;
=======
    }; //Documents 


    exports.updateBlog = updateBlog;

    var postDocument = function postDocument() {
      var input = document.getElementById('documentFile').files[0];
      var data = new FormData();
      data.append('file', input);
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/documents"), {
        method: 'POST',
        body: data
      }).then(function (res) {
        window.location.reload();
      });
    };

    exports.postDocument = postDocument;

    var updateDocument = function updateDocument(id) {
      var doc = document.querySelector('input[type="file"]');
      var data = new FormData();
      data.append("file", doc.files[0]);
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/documents/".concat(id), {
        body: data,
        method: 'PATCH'
      }).then(function (res) {
        return res.json();
      });
    }; // KnowledgeBase


    exports.updateDocument = updateDocument;

    var postArticle = function postArticle(title, body) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/sites/".concat(siteId, "/knowledge-base-articles"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          articleBody: body
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        window.location.reload();
      });
    };

    exports.postArticle = postArticle;

    var knowledgeUpdate = function knowledgeUpdate(Id, title, body) {
      return Liferay.Util.fetch("http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/".concat(Id), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          articleBody: body
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        window.location.reload();
      });
    };

    exports.knowledgeUpdate = knowledgeUpdate;
>>>>>>> 2d859dd (Clay, React and REST)
    //# sourceMappingURL=Request.js.map
  }
});
//# sourceMappingURL=Request.js.map