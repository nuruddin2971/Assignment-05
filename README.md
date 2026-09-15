Description:

My project name is Dev Stack. 

Dev Stack is a web application that helps developers choose the right technologies for their projects. Users can explore, compare, and select technologies based on their project needs.

I am using React.js, TypeScript, Tailwind CSS, DaisyUI and Vite

Explore Technologies —> Browse frontend, backend, database, programming language, styling, and development tools.
Compare Technologies —> Compare technologies by description, rating, category, and difficulty level.
Build Your Stack —> Select different technologies and create your own personalized development stack for your next project.

<!-- ----------------------------------- -->

What is JSX, and why is it used in React?
JSX is a JavaSript XML. It is used for simplifies the development process and unifies the user interface with component logic.

What is the difference between props and state?
Props are data passed from parent component to child component. On the other hand, state is data managed internally by the component itself.

What does the useState hook do, and where did you use it in this project?
The useState hook is used to store and manage data that can change a react component. I used the useState hook in selectedTechnologies and setSelectedTechnologies for store data and updates.

What does the useEffect hook do, and why did you need it to load the JSON data?
the useEffect hook do fetching data from an API or local file. In my Dev Stack project, useEffect can be used to fetch the technology data from the JSON file when the component loads.

Why does every item in a .map() list need a unique key prop?
A unique key prop to identify which item have to changed. Unique key helps to improve application performance.

What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means displaying different UI elements based on a condition. In my Dev Stack project, I used it to show an empty stack message when the user has not selected any technology. If there have technology then show that technology with length.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
In my project, data is usually passed from a parent to a child through props. To send something back, the parent passes a function as a prop, and the child calls that function.
