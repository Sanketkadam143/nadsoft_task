import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskTable from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../actions/creators";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const members = useSelector((state) => state.auth.members);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center">Members Dashboard</h2>
        {/* Button to navigate to the AddMember page */}
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/add-member")} // Navigate to add member page
          >
            Add Member
          </Button>
        </div>

        {members?.length ? (
          <TaskTable tasks={members} />
        ) : (
          <div className="alert alert-info text-center">
            No Members available. Create one to get started.
          </div>
        )}
      </div>
    </>
  );
};

export default Homepage;
