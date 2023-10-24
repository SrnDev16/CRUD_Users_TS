import {
  Container,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserUpdate = () => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const {id} = useParams();

  useEffect(()=>{
    fetch(`https://www.melivecode.com/api/users/${id}`)
    .then(response => response.json())
    .then(result =>{
        setFname(result.user.fname)
        setLname(result.user.lname)
        setUsername(result.user.username)
        setEmail(result.user.email)
        setAvatar(result.user.avatar)
    })
  },[id]);

  const updateUser =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    let data = {
        "id": id,
        "fname": fname,
        "lname": lname,
        "email": email,
        "username": username,
        "avatar": avatar
    }
    fetch("https://www.melivecode.com/api/users/update" ,{
        method: "PUT",
        headers:{
            Accept: "application/form-data",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
    .then((response) => {
        alert(response["message"])
        if(response["status"] === "ok"){
            window.location.href = "/"
        }
    })
  }

  return (
    <Container maxWidth="xs" component={Paper} sx={{ p: 2 }}>
      <Typography component="h1" variant="h5">
        User
      </Typography>
      <form onSubmit={updateUser}>
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
              value={fname}
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
              value={lname}
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
              value={username}
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
              value={email}
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
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          update
        </Button>
      </form>
    </Container>
  );
};

export default UserUpdate;
