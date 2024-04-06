import { Todo } from "./types";

export const getAllTodos = async (): Promise<Todo[]> => {
    const res = await fetch('https://ancient-shelf-72349-a45afc2377e2.herokuapp.com/api/tasks', {
        cache: "no-store"
    });
    const todos = res.json();
    return todos;
}