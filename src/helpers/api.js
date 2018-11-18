const api = "http://localhost:3000";

export const registerUser = (postData) => (
  fetch(`${api}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  }).then(res => res)
)
