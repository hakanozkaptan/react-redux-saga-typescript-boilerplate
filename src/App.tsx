import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getPendingSelector,
  getTodosSelector,
  getErrorSelector,
} from "store/todo/selectors";
import { fetchTodoRequest } from "store/todo/actions";
import { ITodo } from "store/todo/types";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  return (
    <div style={{ padding: "15px" }}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos?.map((todo: ITodo, index: number) => (
          <div style={{ marginBottom: "10px" }} key={todo?.id}>
            {++index}. {todo?.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;
