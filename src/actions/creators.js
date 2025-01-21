import { AUTH ,ALLPOST,DELETE} from "../constants/actionTypes";
import * as api from "../api";

  export const addTasks = (formData, navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.addTasks(formData);
     navigate("/");
     return ;
    } catch (error) {
      console.log(error);
    }
  };

  export const getTasks = () => async (dispatch) => {
    try {
      const { data, status } = await api.getTasks();
      dispatch({type:ALLPOST,payload:data})
      return ;
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteTasks = (id) => async (dispatch) => {
    try {
      const { data, status } = await api.deleteTasks(id);
      dispatch({type:DELETE,id})
      return
    
    } catch (error) {
      console.log(error);
    }
  };

  export const updateTask = (formData,navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.updateTask(formData);
     navigate("/");
     return ;
    
    } catch (error) {
      console.log(error);
    }
  };

  export const getSingleTask = (id) => async (dispatch) => {
    try {
      const { data, status } = await api.getSingleTask(id);
      return ;
    } catch (error) {
      console.log(error);
    }
  }


