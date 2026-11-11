# Debug journal

Fill this in after Desklist matches the screenshots. Use your own words. One block per file you changed. Your teacher will compare this journal with your code.

## File

`path/to/file`

- What I saw: The app did not start because `npm run dev` was using `vite preview` not but of `vite`.


- Why it happened: The `dev` script was incorrectly configured. It used `vite preview` not but of `vite`.


- What I changed:I changed the dev script from:
`"dev": "vite preview"`
to:
`"dev": "vite"`


- How I checked it:I ran `npm run dev`and checked that the app opened successfully in the browser.

## File

`path/to/file`:src/components/TodoForm.jsx


- What I saw:
  New tasks were not being added correctly.

- Why it happened:
  The input was saving the whole input element instead of the text.

- What I changed:
  Changed `event.target` to `event.target.value`.

- How I checked it:
  Added a new task and confirmed it appeared on the list.




`path/to/file`:src/components/TodoItem.jsx

  - What I saw:
  React showed an error when deleting a task.

- Why it happened:
  The delete function was running during rendering.

- What I changed:
  Changed `onClick={onDelete(todo.id)}` to `onClick={() => onDelete(todo.id)}`.

- How I checked it:
  Clicked Delete and confirmed the task was removed.




`path/to/file`:src/App.jsx


  - What I saw:
  The "items left" number was incorrect.

- Why it happened:
  It was counting completed tasks instead of unfinished tasks.

- What I changed:
  Updated the remaining tasks calculation.

- How I checked it:
  Confirmed the items left number changed correctly.


`path/to/file`:src/components/TodoFilters.jsx

  - What I saw:
  Active and Completed numbers were wrong.

- Why it happened:
  The counters were connected to the wrong values.

- What I changed:
  Fixed Active to use `counts.active` and Completed to use `counts.completed`.

- How I checked it:
  Confirmed:
  All = 5, Active = 3, Completed = 2.


