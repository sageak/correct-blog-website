let blogCount = 0;

function postBlog() {
  const imageLink = document.getElementById('imageLink').value;
  const description = document.getElementById('description').value;
  const paragraph = document.getElementById('paragraph').value;

  // Create new blog element
  const blog = document.createElement('div');
  blog.classList.add('blog');
  blog.innerHTML = `
    <img src="${imageLink}" alt="Blog Image">
    <h2>Description: ${description}</h2>
    <p>${paragraph}</p>
    <button onclick="editBlog(this)">Edit</button>
    <button onclick="deleteBlog(this)">Delete</button>
  `;

  // Append new blog to blog list
  const blogList = document.getElementById('blogList');
  blogList.appendChild(blog);

  // Clear input fields
  document.getElementById('imageLink').value = '';
  document.getElementById('description').value = '';
  document.getElementById('paragraph').value = '';

  // Increment blog count
  blogCount++;
  document.getElementById('blogCount').textContent = blogCount;
}

function editBlog(button) {
  const blog = button.parentElement;
  const description = prompt('Enter new description:', blog.querySelector('h2').textContent.split(':')[1].trim());
  const paragraph = prompt('Enter new paragraph:', blog.querySelector('p').textContent);

  if (description !== null && paragraph !== null) {
    blog.querySelector('h2').textContent = `Description: ${description}`;
    blog.querySelector('p').textContent = paragraph;
  }
}

function deleteBlog(button) {
  const blog = button.parentElement;
  blog.remove();

  // Decrement blog count
  blogCount--;
  document.getElementById('blogCount').textContent = blogCount;
}
