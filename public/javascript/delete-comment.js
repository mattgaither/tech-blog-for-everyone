async function deleteCommentHandler(event) {
  event.preventDefault();

  const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  const comment_id = document.querySelector('delete-comment-btn').id; //(or this.id?)
  
  const response = await fetch(`/api/comment/${comment_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace(`${post_id}`);
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-comment-btn').addEventListener('click', deleteCommentHandler);  