async function editCommentHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  const comment_id = document.querySelector('edit-comment-form').id; //(or this.id?)
  
  const response = await fetch(`/api/comments/${comment_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_id,
      comment_text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace(`/posts/${post_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-comment-form').addEventListener('submit', editCommentHandler);  