import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import { addTasks } from "../actions/creators";

const initialDetails = {
  name: "",
  email: "",
  age: "",
  parent_id: "",
};

const AddMember = () => {
  const [details, setDetails] = useState(initialDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTasks(details, navigate));
    setDetails(initialDetails);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Member</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <TextField
            value={details.name}
            name="name"
            label="Name"
            required
            fullWidth
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <TextField
            value={details.email}
            name="email"
            label="Email"
            required
            type="email"
            fullWidth
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <TextField
            value={details.age}
            name="age"
            label="Age"
            required
            type="number"
            fullWidth
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <TextField
            value={details.parent_id}
            name="parent_id"
            label="Parent ID"
            required
            type="number"
            fullWidth
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-between">
          <Button
            color="primary"
            size="large"
            type="submit"
            variant="contained"
            className="me-2"
          >
            Add Member
          </Button>
          <Button
            color="secondary"
            size="large"
            onClick={() => navigate("/")}
            variant="outlined"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;
