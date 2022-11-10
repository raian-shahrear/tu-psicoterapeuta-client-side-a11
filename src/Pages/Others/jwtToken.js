export function jwtToken(user){
  const currentUser = {
    email: user?.email,
  };
  fetch('http://localhost:5000/jwt', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
  .then(res => res.json())
  .then(data => {
    if(data.token){
      localStorage.setItem("user-access-token", data.token);
    }
  })
  .catch(err => console.error(err))
}