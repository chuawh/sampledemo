import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignIn({ onSubmit }) {
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
            userId: e.target.userId.value,
            nickname: e.target.nickname.value,
            theme: e.target.theme.checked ? "dark" : "light"
          });
        }}
      >
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userId"
          label="User Id"
          name="userId"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="nickname"
          label="Nick Name"
          id="nickname"
        />
        <FormControlLabel
          control={<Checkbox value="dark" color="primary" name="theme" />}
          label="Apply dark theme"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Start
        </Button>
      </form>
    </Container>
  );
}
