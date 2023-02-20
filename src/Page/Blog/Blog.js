import React from 'react';

const Blog = () => {
    return (
        <div className='m-10'>
            <div className='border border-indigo-200 my-5 p-5'>
                <h1 className='text-indigo-500 text-2xl text-center font-bold mb-4'>What are the different ways to manage a state in a React application?</h1>
                <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                    useState is the first tool you should reach for to manage state in your components.

                    It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).useReducer is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.

                    The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.

                    You can see the benefit of useReducer versus useState in this vote tracking example. All we have to do to update state is pass the callback function dispatch a string (which is then passed to the reducer) instead of the new state itself.</p>
            </div>
            <div className='border border-indigo-200 my-5 p-5'>
                <h1 className='text-indigo-500 text-2xl text-center font-bold mb-4'>How does prototypical inheritance work?</h1>
                <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
            <div className='border border-indigo-200 my-5 p-5'>
                <h1 className='text-indigo-500 text-2xl text-center font-bold mb-4'>What is a unit test? Why should we write unit tests?</h1>
                <p>
                    Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                </p>
            </div>
            <div className='border border-indigo-200 my-5 p-5'>
                <h1 className='text-indigo-500 text-2xl text-center font-bold mb-4'>React vs. Angular vs. Vue?</h1>
                <p>
                    This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.

                    Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.

                    If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision. Here we’ll cover various aspects of Angular, Vue, and React to see how they suit your needs. This post is not just a guide on Angular vs React vs Vue but aims to provide a structure to help judge front-end JavaScript frameworks in general. In case a new framework arrives next year, you will know exactly what parameters to look at!
                </p>
                <h1 className='text-indigo-500 text-xl font-bold'>React Vs Vue</h1>
                <p>The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.</p>
                <h2 className='text-indigo-500 text-xl font-bold'>Anguler Vs Vue</h2>
                <p>In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                    It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>

            </div>
        </div>
    );
};

export default Blog;