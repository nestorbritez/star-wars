<!-- ABOUT THE PROJECT -->
# Embrace take home

This project has been deployed on a serverless infrastructure:
https://embrace.nes.workers.dev/


[![Embrace take home][screenshot]](https://example.com)

This is a small project to show my front-end skills. These includes:

- User Stories Definition
- Visual prototyping
- Setting up the project with a React Starter kit
- Unit testing
- Cloudflare Workers API proxy

# User Stories Definition
In this particular case I used Figma to set up few user stories as kick off to start prototyping. Ideally this step should be handle with a project management tool such as Jira or Trello. It's important that every user story must be as tiny as possible in order to create atomic components whose can be easily developed and tested.
Another point on User Stories are its corresponding acceptance criteria that are used to verify if the implementation satisfy the original request.
If a User Story is well written it can be used along with an E2E implementation that uses Gherking language.

# Visual Prototyping
Using Figma I was able to understand how the different elements are going to behave on the screen along with a basic style guide and space system. This step has been done by breaking down the design in different parts, including low, medium and high fidelity mockups.
A listing page and detail page has been created for 2 type of devices: mobile and desktop.
I have a personal preference of creating a mobile only strategy but a responsive design has been used in here.

Feel free to take a look to the different pages at Figma:

Low fidelity:
https://www.figma.com/file/40fH2hvMv9B20kxV5ACMAn/Embrace-Take-Home?node-id=0%3A1

Style Guide:
https://www.figma.com/file/40fH2hvMv9B20kxV5ACMAn/Embrace-Take-Home?node-id=3%3A426

Improved low fidelity:
https://www.figma.com/file/40fH2hvMv9B20kxV5ACMAn/Embrace-Take-Home?node-id=2%3A338

High fidelity:
https://www.figma.com/file/40fH2hvMv9B20kxV5ACMAn/Embrace-Take-Home?node-id=3%3A502

# Setting up the project with a React Starter kit
I have set up this project using my own open source project as starter development kit (more details below). This is a ready-to-use boilerplate to start working with Vite, React and Tailwind as Styled Components.

https://github.com/nestorbritez/vite-react-styled-tailwind

The stack of technologies includes:
 - React with hooks
 - Typescript: To add 'super powers' to javascript
 - Vite.js: To speedup the development and build process
 - Jest: To handle the unit tests
 - Eslint: To analyze the code to quickly find problems
 - Prettier: To enforce a code style
 - useQuery hook: This dependency wraps the API calls and provide few tools to improve development strategy. A strong point is a persistance technique on the localStorage.
 - useRouter hook: To handle the routing between the different layouts
 - Tailwind CSS: This technology helps to reduce the bundle size of the css files by performing a tree shaking and the CSS helper clases are being re-used to create all the styles. Few animations were included to smooth the transitions.

# Unit testing
As I mentioned above, the React Started kit already includes a set up of Jest with an example to test React components.
In order to keep it readable I prefer to use selectors related to accessibility such as `role` which also help to the HTML semantic on the project. That way for example to select a main content it's enough to do the next sentence: `screen.getByRole('main')`

The coverage for the project looks like this:
[![Embrace take home][tests]](https://example.com)

# Cloudflare Workers API proxy
For this project I decided to user a Star Wars API (swapi.dev). While I was coding, couple issues came up. Instead of implement solutions on the front-end side I decided to wrap this API into a proxy layer under a custom domain (swapi.jsdev.ar) where I was able to make transformations to the original JSON. In addition to that I was able to configure a layer of cache using the Cloudflare edges around the world to increase the response time.

<!-- MARKDOWN LINKS & IMAGES -->
[screenshot]: src/images/screenshot.png
[tests]: src/images/tests.png
