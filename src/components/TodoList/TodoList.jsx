import { TodoInfo } from '../TodoInfo/TodoInfo';

import '../../App.scss';

export const TodoList = ({ todos }) => (
  <>
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </>
);
