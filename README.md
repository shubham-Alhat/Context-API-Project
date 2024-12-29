# Context API

So, **Context API** is **not** a complex concept. It is a concept to **share** data efficiently, preventing **complexity** and **Prop Drilling**.

### Prop drilling.

Prop drilling occurs when data has to be passed through multiple layers of components, even if intermediate components don't need the data, just to get it to the required child component. Here's an example.

```javascript
// App.jsx
function App() {
  const userName = "Swayam";
  return <ComponentA userName={userName} />;
}

// ComponentA.jsx
function ComponentA({ userName }) {
  return <ComponentB userName={userName} />;
}

// ComponentB.jsx
function ComponentB({ userName }) {
  return <ComponentC userName={userName} />;
}

// ComponentC.jsx
function ComponentC({ userName }) {
  return <h2>Welcome, {userName}!</h2>;
}
```

**userName** is passed through **ComponentA** and **ComponentB**, even though only **ComponentC** uses it.
This leads to **prop drilling**, which makes the code harder to maintain.

## Solution

### Context API that allow you to share data directly with the components that need it without passing through every layer.

## Understand the Context API

### Consider Context as a global storage or container that holds data and can accessible to any component directly without passing prop.

### **Below are the steps to create and use Context.**

1. Create Context
2. Create Context Provider and Put data in Context.
3. Use the Context data in required Components

We will use Context API in above files to remove prop drilling problem and simplify it.

```javascript
// Context.jsx , where we create a context
const myContext = createContext();

//  App.jsx , where we create a provider and add data in context.

 import { myContext } from "Context.jsx"

function App() {
  const userName = "Swayam";
  return
  (
    // data in prop value is stored in context.
    <myContext.Provider value={userName}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
    </myContext.Provider>
    // Now Component A,B and C have access to userName
  );
}


// ComponentC.jsx
import {useContext} from "react";
import myContext from Context.jsx
// As Components are within Provider, these components can access the data using hook useContext.
function ComponentC(){
    // get data from context
    const username = useContext(myContext);
    // use it.
    return <h2>Welcome, {userName}!</h2>;
}
```

### First we have to create a context (it may be Empty or can have default data.)

### Then Create a provider and wrap it around a components that needs the data. pass a prop value which has a data. this data get store in context.

### Now we access data present in context with the useContext() hook in a particular component.
