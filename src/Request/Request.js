<<<<<<< HEAD
const siteId = Liferay.ThemeDisplay.getSiteGroupId();

const postBlog = (headline, articleBody) => {
	return Liferay.Util.fetch(
		`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			headline: headline,
			articleBody: articleBody
		})
	}).then((res) => res.json());

}

const getBlog = () => {
	return Liferay.Util.fetch(
		`/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`, { method: "GET" }
	).then((res) => res.json());
=======
const siteId = themeDisplay.getSiteGroupId()

//General 

const getGeneral = (local) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/${local}`,{
        method: 'GET',
    }).then((res) => res.json())
}

const  deleteGeneral = (local) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/${local}`,{
        method: 'GET',
    }).then((res) => res.json())
}

// Blogs 


  const postBlog = (headline, articleBody) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            headline,
            articleBody
        })
    }).then((res) => res.json())
}


const getBlog = () => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`, {
      method: 'GET',
    }).then((res) => res.json())
>>>>>>> 2d859dd (Clay, React and REST)
}

const updateBlog = (Id, headline, articleBody) =>  {
	return Liferay.Util.fetch(
		`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${Id}`, {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			headline: headline,
			articleBody: articleBody, 
			id: Id
		})
	}).then((res) => res.json())
}

<<<<<<< HEAD
const deleteBlog = (Id) => {
	return Liferay.Util.fetch(
		`http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${Id}`, {
		method: "DELETE"
	})
}

export { postBlog, getBlog, updateBlog, deleteBlog }
=======
//Documents 

const postDocument = () => {
    const input = document.getElementById('documentFile').files[0]
    const data = new FormData()
    data.append('file', input)

    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/documents`,{
        method: 'POST',
        body: data
    })
    .then((res) => {
        window.location.reload()
    })
}

const updateDocument = (id) => {
      const doc = document.querySelector('input[type="file"]');
      const data = new FormData();
      data.append("file", doc.files[0]);

      return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/documents/${id}`, {
        body: data,
        method: 'PATCH'
      }).then((res) => {
        return res.json();
      });
    };

// KnowledgeBase

const postArticle = (title, body) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/knowledge-base-articles`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: title,
            articleBody: body
        })
    }).then((res) => res.json())
      .then((res) => {
      window.location.reload()
    })
}

const knowledgeUpdate = (Id, title, body) => {
    return Liferay.Util.fetch(`http://localhost:8080/o/headless-delivery/v1.0/knowledge-base-articles/${Id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        articleBody: body
      })
    }).then((res) => res.json())
      .then((res) => {
      window.location.reload()
  })
}

export { getGeneral, deleteGeneral, postBlog, getBlog, updateBlog, postDocument, updateDocument, postArticle, knowledgeUpdate  }
>>>>>>> 2d859dd (Clay, React and REST)
