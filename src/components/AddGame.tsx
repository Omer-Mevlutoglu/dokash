import { Box, TextField, Button, Typography, Container } from "@mui/material";
import "../utils/data";
import { data } from "../utils/data";
import { ChangeEvent } from "react";
const AddGame = () => {
  const formData = {
    email: "",
    Password: "",
    GameName: "",
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.email = e.target.value;
  };
  const handlepasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.Password = e.target.value;
  };
  const handleGameChange = (e: ChangeEvent<HTMLInputElement>) => {
    formData.GameName = e.target.value;
  };

  const HandleSubmit = () => {
    data.push(formData);
  };

  return (
    <Container
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "400px",
          //   border: "solid 2px black",
          display: "flex",
          flexDirection: "column",
          gap: 4,
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" color="textSecondary">
          Add a Game
        </Typography>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          name="email"
          onChange={handleEmailChange}
        />
        <TextField
          id="filled-basic"
          label="Password"
          name="Password"
          variant="filled"
          onChange={handlepasswordChange}
        />
        <TextField
          id="filled-basic"
          label="Game Name"
          name="GameName"
          variant="filled"
          onChange={handleGameChange}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ width: "50%", padding: "5px", ml: "auto", mr: "auto" }}
          onClick={HandleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddGame;
