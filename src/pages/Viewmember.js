import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, TextField, Button, Typography } from "@mui/material";
import { updateTask } from "../actions/creators";
import { EDIT } from "../constants/actionTypes";

const ViewMember = () => {
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

  // Handle changes (not needed for View, just for illustration)
  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        View member with ID: {id}
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
          disabled
          variant="outlined"
        />
        <TextField
          value={details.email}
          name="email"
          label="Email"
          disabled
          variant="outlined"
        />
        <TextField
          value={details.age}
          name="age"
          label="Age"
          disabled
          variant="outlined"
        />
        <Box sx={{ display: "flex", gap: 2, marginTop: 2 }}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            onClick={() => navigate(`/edit/${id}`)}
          >
            Edit Member
          </Button>
          <Button
            color="secondary"
            size="large"
            onClick={() => navigate("/")}
            variant="outlined"
          >
            Back
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ViewMember;
