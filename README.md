# react-learning

A repository to put all the content created when I was learning React. The contents are based on "React - The complete Guide"

To debug this project:
- Run the `npm start`
- Run the debugger (*firefox debugger*)

You should download the `create-react-app` npm package

```bash
# Install the npm package that create a simple structure for us
sudo npm i -g create-react-app
```

Creating a new project
```bash
# Create a project
create-react-app project-name

# Start in dev
npm start
```

> To create a [typescript project](https://create-react-app.dev/docs/adding-typescript/)
```bash
npx create-react-app my-app --template typescript
```

> You don't need to install the  create-react-app, you can executed directly using npx
```bash
npx create-react-app my-app
```

To configure [default folder](https://create-react-app.dev/docs/importing-a-component/#absolute-imports), create a jsconfig.json in main folder and type:
```bash
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```



However, when using `create-react-app` it

We must create all components starting with capital letters

`jsx` - is the name of the code when we are writing a component like:
```jsx
  ...
  return (
    <span> Some text </span>
    <!-- .. html codes -->
  )
}
```

There are two ways to create a component:
- Functional components: using the same syntax as array functions
- Class based components: wich extends the `Component`, also named as "containers"

We must export our components

All react components (that extends components, or that wich use react class import) can call directly a command
by putting a `{}`


You can access the `<div> child </div>` element by using `props.children`

**props**  and **state**  are CORE concepts of React. Actually, only changes in props  and/ or state  trigger React to re-render your components and potentially update the DOM in the browser


In the recently versions of react, we declare our class based components in the same way that we use the
functional components, and, when we need to work with states, we'll use the **react hooks** approach

To use react hooks, the component name [must be capitalized](https://stackoverflow.com/a/55862839/10013122)

If we don't pass a **key** to an element, e.g, in a loop, react will [re-render](https://stackoverflow.com/a/28329550/10013122) all elements in this doom


You should but the content in the "smaller" way, in another words, you must preffer to show a simple data
wich can represents nothing or a group of objects (persons[], for example)

