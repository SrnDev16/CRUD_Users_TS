import { Container, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import { useState } from "react";

const UserCreate = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const createUser =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    let data = {
        "fname": fname,
        "lname": lname,
        "email": email,
        "username": username,
        "avatar": avatar
    }
    fetch("https://www.melivecode.com/api/users/create" ,{
        method: "POST",
        headers:{
            Accept: "application/form-data",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
    .then(response => {
        alert(response["message"])
        if(response["status"] === "ok"){
            window.location.href = "/"
        }
    })
  }

  return (
    <Container maxWidth="xs" component={Paper} sx={{p:2}}>
      <Typography component="h1" variant="h5">
        User
      </Typography>
      <form onSubmit={createUser}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={(e) => setFname(e.target.value)}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              onChange={(e) => setLname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="avatar"
              label="Avatar"
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{mt:2}}>
          Create
        </Button>
      </form>
    </Container>
  );
};

export default UserCreate;
