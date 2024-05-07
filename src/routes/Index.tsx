import { useLocation, useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import { ITask } from "../models/interface";
import { useEffect, useState } from "react";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const taskFormState: ITask = location.state?.task;

  const [taskToEdit] = useState<ITask | null>(taskFormState ?? null);

  useEffect(() => {
    if (taskFormState) {
      navigate(location.pathname, {});
    }
  }, [taskFormState, location.pathname, navigate]);

  return (
    <main className="container mx-auto">
      <section className="max-w-5xl mx-auto m-12 p-16">
        <h1 className="text-4xl md:text-7xl font-bold text-center py-3 mb-16">
          AI-enhanced, Voice-enabled, Searchable Task Manager
        </h1>
        <AddTask task={taskToEdit} isEdit={taskToEdit ? true : false} />
      </section>
    </main>
  );
};

export default Index;
