import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";



function AppUi() {

  const { 
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo 
  } = React.useContext(TodoContext);

    return (
        <React.Fragment>

        <TodoCounter />
        <TodoSearch />

            <TodoList>
              { error && <p>The page has been crashed</p> }
              { loading && <p>The page is loading...</p> }
              { (!loading && !searchedTodos.length) && <p>Make your first todo!</p> }
              
              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={()=> deleteTodo(todo.text)}
                />
              ))}
              
            </TodoList>

  
        <CreateTodoButton />
  
      </React.Fragment>
    );
}

export { AppUi };