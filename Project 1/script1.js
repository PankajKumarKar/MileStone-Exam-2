const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContainer = document.getElementById("modal-container");

const blogList = document.querySelector(".blogList");

openModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeModalBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// Handle form submission to add a new blog post

const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const blogImageUrl = document.getElementById("blogImageUrl").value;
  const blogTitle = document.getElementById("blogTitle").value;
  const blogDescription = document.getElementById("blogDescription").value;
  const blogContent = document.getElementById("blogContent").value;

  // Create a new blog object
  const newBlog = {
    id: new Date(),
    title: blogTitle,
    blogImageUrl: blogImageUrl,
    blogDescription: blogDescription,
    blogContent: blogContent,
  };

  // Save the new blog to LocalStorage
  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  //Reset Form
  blogForm.reset();

  // close model
  modalContainer.style.display = "none";

  // Refresh the blog list on the home page
  displayBlogs();
});

function displayBlogs() {
  // Retrieve blogs from LocalStorage and display them on the home page
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  let blogHTML = "";

  for (const blog of blogs) {
    blogHTML += `<div class="blog-card">
                    <img src="${blog.blogImageUrl}"/>
                     <h2><span>Blog Title:</span> ${blog.title}</h2>
                     <p><span>Blog Description: </span> ${blog.blogDescription}</p>
                     <p class="read" data-id=${blog.id}>Read</p>
                     <button class="del" del-id=${blog.id} >Delete Blog</button>
                   </div>`;
  }

  blogList.innerHTML = blogHTML;

  const del = document.querySelectorAll(".del");

  //Delete Blog

  del.forEach((delItem) => {
    delItem.addEventListener("click", (e) => {
      const blogId = e.target.getAttribute("del-id");
      let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const filtered = Array.from(blogs).filter((blog) => blog.id !== blogId);
      localStorage.setItem("blogs", JSON.stringify(filtered));

      displayBlogs();
    });
  });

  const read = document.querySelectorAll(".read");

  read.forEach((blog) => {
    blog.addEventListener("click", function () {
      const blogId = blog.getAttribute("data-id");

      console.log(blogId);

      //navigate

      window.location.href = `blog.html?value=${blogId}`;
    });
  });
}

displayBlogs(); // Display existing blogs on page load
