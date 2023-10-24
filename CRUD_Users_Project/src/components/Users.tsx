import {
  Avatar,
  Button,
  ButtonGroup,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type users = {
  id: number;
  fname: string;
  lname: string;
  username: string;
  avatar: string;
};

const Users = () => {
  const [users, setUsers] = useState<users[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    fetch("https://www.melivecode.com/api/users")
      .then((response) => response.json())
      .then((response) => {
        setUsers(response);
      });
  };

  const deleteUser = (id: number) => {
    console.log(id);
    let data =  {
        id: id,
    }
    fetch("https://www.melivecode.com/api/users/delete",{
        method: "DELETE",
        headers:{
            Accept: "application/form-data",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then((res) => {
        alert(res["message"]);
        if(res["status"] === "ok"){
            getUsers();
        }
    })
  };

  const updateUser = (id:number) => {
    console.log(id);
    navigate(`/update/${id}`)
  }

  return (
    <Container maxWidth={"lg"}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Users</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="right">
                  {" "}
                  <Avatar src={user.avatar} />
                </TableCell>
                <TableCell align="right">{user.id}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.fname}</TableCell>
                <TableCell align="right">{user.lname}</TableCell>
                <TableCell align="right">
                  <ButtonGroup aria-label="outlined primary button group">
                    <Button color="success" onClick={() => updateUser(user.id)}>
                      Edit
                    </Button>
                    <Button color="warning" onClick={() => deleteUser(user.id)}>
                      Delete
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Users;
