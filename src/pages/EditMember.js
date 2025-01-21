import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";
import { updateTask } from "../actions/creators";
import { EDIT } from "../constants/actionTypes";

const EditMember = () => {
  const { id } = useParams(); 
  const postDetails = useSelector((state) =>
    state.auth.members?.find((post) => post._id === id)
  ); 
  const [details, setDetails] = useState(postDetails || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!postDetails) {
      navigate("/");
    }
  }, [postDetails, navigate]);

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    dispatch(updateTask(details, navigate));
    dispatch({ type: EDIT, payload: [] });
  };

  return (
    <>
      <form onSubmit={submitDetails}>
        <Typography variant="h5" gutterBottom>
          Edit member with ID: {id}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
        <TextField
          value={details.name}
          name="name"
          label="Name"
          required
          onChange={handleChange}
        />
        <TextField
          value={details.email}
          name="email"
          label="Email"
          required
          type="email"
          onChange={handleChange}
        />
        <TextField
          value={details.age}
          name="age"
          label="Age"
          required
          type="number"
          onChange={handleChange}
        />
          <Button color="primary" size="large" type="submit" variant="contained">
            Update member
          </Button>
          <Button
            color="secondary"
            size="large"
            onClick={() => navigate("/")}
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </form>
    </>
  );
};

export default EditMember;
