# Order Tracking App

**How to run locally?:**

- run **"yarn install"** and then **"yarn start"**

**How to run unit tests?:**

- run **"yarn test"**

**Used Technologies:**

- React
- Typescript for static type checking
- React Router DOM for routing
- Styled Components for in JS styling
- React Testing Library for unit testing

**Details:**

- I have used **"Container-Presentational Pattern"**. Because I love this pattern as it seperates the business logic from the UI part.

- I have also separated services & constants & config variables from the component files.

- For styling I have used Styled Components library as I love writing CSS in JS directly. It is easier to manipulate the UI and have dynamic rendering.

- I have used Context API to avoid prop drilling but as this is a small app it is also acceptable to pass props to the child components

- I have added a global Error Boundary to catch global errors in the app(React Router library provides a default one though).

**What can be improved?:**

- I could use a CSS pattern(or naming convention) like BEM. However I choosed to be more flexible about class names. For a bigger project it makes sense to use BEM pattern because it makes it easy to read and maintain CSS code. BEM also encourages the use of descriptive class names, which make it easy to understand the purpose of each CSS rule.
