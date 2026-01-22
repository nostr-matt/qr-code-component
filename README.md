# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Screenshot

![](./result.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- CSS custom properties
- Flexbox
- [Web Components](https://www.webcomponents.org) - Native component API

### What I learned

After a period of "so where do I start" paralysis, I ultimately decided to start preparing the base layout to showcase the widget, which led to the design of the first base component of the project: `solution-template`. I chose Web Components because it's relevant to my current job, and I love being able to create reusable, framework-agnostic components that I can drop just about anywhere. The base template helped my current solution and will easy my future works by allowing me to start right away at designing the main widget.

```html
<!-- This adds a footer and automatically centers the main contents -->
<body is="solution-template" center-contents>
  <!-- Widget elements here -->
</body>
```

Applying the same principle, I also wrapped the QR code widget as a standalone component, utilizing shadow DOM to isolate styles and slots for content injection. This resulted in a component that is very simple to use:

```html
<qr-card>
  <img slot="image">
  <div slot="head">Title goes here</div>
  Content goes here
</qr-card>
```

### Continued development

For future works, I plan to refine my CSS definitions to make them work better across slots and shadow boundaries. On top of that, I also want to improve UI/UX as well as responsiveness of my components so they can work with any devices.

### Useful resources

- [Adopting Constructed Stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/adoptedStyleSheets) - I learned how to share a single stylesheet across multiple instances of the same component to improve performance and resource efficiency.

## Author

- Frontend Mentor - [@nostr-matt](https://www.frontendmentor.io/profile/nostr-matt)
- Github - [@nostr-matt](https://github.com/nostr-matt)
