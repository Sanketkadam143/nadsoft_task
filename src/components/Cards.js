import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { deleteTasks } from "../actions/creators";
import { EDIT } from "../constants/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import DeleteConfirmationDialog from "./Dialogbox";


const TaskTable = ({ tasks }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleDeleteClick = (member) => {
    setSelectedMember(member);
    setOpenDialog(true); 
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedMember(null);
  };

  const handleConfirmDelete = () => {
    if (selectedMember) {
      dispatch(deleteTasks(selectedMember._id)); 
    }
    setOpenDialog(false); 
  };


  const columns = [
    {
      name: "Id",
      selector: (row) => row?._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row?.age,
      sortable: true,
    },
    {
      name: "Parent Id",
      selector: (row) => row?.parent_id,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={() => {
              dispatch({ type: EDIT, payload: row });
              navigate(`/edit/${row._id}`);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
    
          <button
            className="btn btn-sm btn-danger me-2"
            onClick={() => handleDeleteClick(row) }
          >
            <FontAwesomeIcon icon={faTrash} /> 
          </button>
    
          <button
            className="btn btn-sm btn-info"
            onClick={() => navigate(`/view/${row._id}`)}
          >
            <FontAwesomeIcon icon={faEye} /> 
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    
  ];

  return (
    <div>
    <DataTable
      title="Members Table"
      columns={columns}
      data={tasks}
      pagination
      highlightOnHover
      striped
    />

    <DeleteConfirmationDialog
      open={openDialog}
      onClose={handleCloseDialog}
      onConfirm={handleConfirmDelete}
      member={selectedMember} 
    />
  </div>
  );
};

export default TaskTable;
