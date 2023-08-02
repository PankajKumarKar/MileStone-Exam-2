// Get the value from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get("value");
const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
const blogPost = document.getElementById("blogPost");

blogs.forEach((blog) => {
  if (blog.id === blogId) {
    blogPost.innerHTML = `
        <h1>Blog Title: ${blog.title}</h1>
        <img src="${blog.blogImageUrl}"/>
        <h3>Blog Description : ${blog.blogDescription}</h3>
        <div>
        <p>${blog.blogContent}</p>
        </div>`;
  }
});
