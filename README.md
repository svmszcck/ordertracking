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

- I have used **"Container-Presentational Pattern"**. Because I love this pattern as it seperates the business logic from the UI part. It is easier to maintain the code and it provides more scalability even though this is a small project.

- I have also separated services & constants & config variables from the component files.

- For styling I have used the Styled Components library as I love writing CSS in JS directly. It is easier to manipulate the UI and have dynamic rendering. Also the styles will be isoloated and they won't collide with the other styles in the application.

- I have used Context API to avoid prop drilling but as this is a small app it is also acceptable to pass props to the child components.

- I have added a global Error Boundary to catch global errors in the app(React Router library provides a default one though).

**What can be improved?:**

- I could use a CSS pattern(or naming convention) like BEM. However I choosed to be more flexible about class names. For a bigger project it makes sense to use BEM pattern because it makes it easy to read and maintain CSS code. BEM also encourages the use of descriptive class names, which make it easy to understand the purpose of each CSS rule.

- Risks with the current solution in terms of business vaulue and UX: There are some external dependencies and it is not easy to isolate the Order Status view if we want to use it in a different project & platform. It should be as lean as possible and we should be able to use it as a plugin in another environment.

- Order Status View could be implemented as an isolated environment which can be used as a plugin in different e-commerce platforms. It should be developed as a standalone Web Component. In order to do that it should be implemented in a way that it doesn't depend on external components or libraries and it should be customizable & open to extension. There should be a customization layer for the plugin. It can be done via a regular Javascript Object or JSON. The plugin should be themable and the colors, fonts, spaces should be customizable by the customization layer.

⭐ <u>These are the steps which should be followed to be able to create this plugin:</u> ⭐

**1. Defining the core requirements:**

- Integration Flexibility: Ensuring that the plugin can be integrated with different eCommerce platforms (e.g., Shopify, WooCommerc etc.)
- Custom Branding: Allow the eCommerce site to customize the look and feel of the plugin, including logos, colors, fonts, and text.
- Real-time Updates: Provide real-time tracking updates and handle errors properly.
- Mobile Compatibility: Ensuring that the plugin is responsive and works across various devices.

**2. Develop the Plugin as a Standalone Web Component:**

- Using frameworks like React, Vue, or Angular to develop the frontend interface, as they provide component-based architecture, reusability, and flexibility.

**3. Implement a Customization Layer:**

- Provide a Configuration Panel: Develop a UI for store owners to customize the plugin's appearance and behavior. This could include options for branding, choosing colors, selecting fonts, and modifying text.

- Allow configuration via JavaScript Object or JSON: The plugin can accept a configuration object when instantiated, which contains all customization settings like logo url, theming etc.

**4. Integrate with eCommerce Platforms:**

- Create Adapters: Develop integration adapters or connectors for popular eCommerce platforms. These adapters will handle platform-specific logic for fetching order data and managing updates.

- Use Webhooks: Utilize platform webhooks to get real-time updates about order status changes and send those updates to the plugin.

- Provide an SDK or API Wrapper: Develop an SDK or API wrapper to simplify the integration process for developers.

**5. Ensure Security and Compliance:**

- Implement Authentication and Authorization: Use OAuth, API keys, or JWT tokens to secure API calls between the plugin and the backend service.
- Ensure Compliance with Privacy Regulations: Handle personal and order information per regulations like GDPR or CCPA.

**6. Offer Responsive and Multi-language Support:**

- Make sure the plugin is responsive and looks good on all devices.
- Provide multi-language support by offering translations and allowing dynamic language changes based on user preferences or location.

**7. Package and Distribute the Plugin:**

- Create Plugin Packages: Create platform-specific packages (e.g., Shopify App, WordPress Plugin) to make installation easy.
- Provide Detailed Documentation: Write thorough documentation explaining how to install, configure, and use the plugin.
- Set up a Support System: Provide customer support through channels like email, chat, or a ticketing system to help with issues during installation or use.

**8. Monitor and Update:**

- Implement analytics to track the usage and performance of the plugin.
- Regularly update the plugin to patch security vulnerabilities, add new features, and improve performance based on feedback.

**9. Provide a Subscription or Licensing Model:**

- Set up a Subscription Model: Offer different plans (e.g., free, premium) based on the level of service, features, or support.
- Ensure the white-label plugin can be easily integrated into different eCommerce sites while allowing each store to make it look and feel like a native part of their website.
