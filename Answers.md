1. What problem does the context API help solve?

Often times to connect a redux react app, you would have to drill props from a parent file to multiple child files. With context, you can set up state separately, and then individually provide it to the file it applies to.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the single source of truth in that it is where all of the logic, the state, and the only place to change it lives. The store takes holds the data, it can take in actions and data, and it returns the desired effect through reducers. Actions are basically the setup of an action we want to use, while a reducer will execute that action whenever it is called, and manually mutate the state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, it spans the entire application. Therefore, it would be wise to use this form of state whenever a large application is being developed. Component state is specific to each component, and can only be passed around by using props. This is good for smaller applications, but is less predictable.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk acts as sort of a middleman, or the 'fence'. It will take what the action is doing and extend its' functionality, allowing our actions to create actions, allowing for Asynchronous functionality: multiple functions running at the same time.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I would say that I am more comfortable with component state, and context is definitely easier, but redux is starting to grow on me. The process allows me to control every step, I am doing more behind the scenes work, and I know exactly where something is going wrong. 
