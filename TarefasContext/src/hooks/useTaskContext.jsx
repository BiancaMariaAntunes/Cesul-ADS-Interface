import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function useTaskContext () {

    const context = useContext(TaskContext);

    return context;

}