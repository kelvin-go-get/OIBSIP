# Project Name: FUDO

## Tagline

Savor the Flavor, Effortlessly Delivered

## Team

- Kelvin Njuiri: Full stack Engineer
- Daisy Mumbo: Full stack Engineer

## Roles

Kelvin Njuiri and Daisy Mumbo, both serving as Full stack Engineers, will collaboratively handle both frontend and backend development tasks. This division allows for a holistic approach to project development, with each team member contributing to all aspects of the application, from user interface design to server-side logic implementation. The decision to assign both team members as Full stack Engineers reflects their comprehensive skill set and ensures flexibility in addressing various project requirements.

## Technologies

- Languages: JavaScript (ES6+)
- Frontend Framework: React.js
- Backend Framework: Next.js
- Database: Sanity
- Deployment: Vercel

### Alternative Technology Choices

- Backend Framework: An alternative to Next.js could be Express.js, a minimalist Node.js web application framework. While Express.js offers more flexibility and control over server configurations, Next.js provides built-in features for server-side rendering, routing, and API handling, streamlining development and deployment processes. The decision to use Next.js was based on its seamless integration with React and its suitability for building scalable and SEO-friendly web applications.
- Database: Instead of Sanity, MongoDB could be considered for database management. MongoDB is known for its flexibility and scalability, making it suitable for handling large volumes of unstructured data. However, Sanity offers structured content management capabilities and real-time collaboration features, making it well-suited for content-heavy applications like a pizza delivery platform. The decision to use Sanity was driven by its ability to efficiently manage menu items, orders, and user data in a structured format, enhancing development speed and content management capabilities.

## Challenge

### Problem Statement

FUDO aims to solve the inconvenience and inefficiencies associated with traditional food delivery services by providing a seamless and user-friendly platform for ordering and delivering food. It addresses the need for a modern, efficient, and convenient solution for food delivery in today's fast-paced lifestyle.

### What FUDO Will Not Solve

FUDO will not address issues related to food preparation and quality control, as it focuses primarily on the ordering and delivery process. It also does not address broader issues such as food insecurity or accessibility to healthy food options.

### Target Users

FUDO will cater to busy individuals, families, and office workers seeking convenient and hassle-free food delivery options. It will also benefit restaurants and food vendors looking to expand their customer reach and streamline their delivery operations.

### Locale Relevance

While FUDO's features and functionalities are designed to be universally applicable, its initial rollout will focus on urban areas with high population densities and demand for food delivery services.

## Risks

### Technical Risks

Potential technical risks include system downtime, security vulnerabilities, and compatibility issues with different devices and browsers. To mitigate these risks, regular system monitoring, security audits, and compatibility testing will be conducted throughout the development process. Additionally, implementing robust error handling mechanisms and contingency plans will help minimize the impact of technical failures.

### Non-Technical Risks

Non-technical risks may include market competition, changing consumer preferences, and regulatory compliance issues. To address these risks, market research and analysis will be conducted to identify emerging trends and consumer demands. Flexibility and adaptability will be key in responding to market dynamics and regulatory changes effectively.

## Infrastructure

### Branching and Merging

The team will follow the GitHub flow for branching and merging, where feature branches will be created for each task or feature, reviewed through pull requests, and merged into the main branch after approval.

### Deployment Strategy

FUDO will be deployed using Vercel's continuous deployment pipeline, ensuring automatic deployment of changes from the main branch to the production environment. Feature flags and A/B testing will be utilized for gradual feature rollouts and testing.

### Data Population

Initially, sample data will be manually populated into the Sanity database for testing and development purposes. As the platform evolves, user-generated data from actual orders and interactions will populate the database.

### Testing Tools and Automation

Testing will be facilitated using Jest and React Testing Library for frontend unit and integration testing, while Postman and Jest will be used for backend API testing. Continuous integration and automated testing pipelines will be set up to ensure code quality and reliability.

## Existing Solutions

### Similar Products

Existing food delivery platforms such as Uber Eats, DoorDash, and Grubhub offer similar services for ordering and delivering food from various restaurants. While these platforms provide a wide selection of food options and extensive delivery networks, FUDO aims to differentiate itself by focusing on user experience, customization options, and local partnerships to offer unique and personalized food delivery experiences. Additionally, FUDO's integration with Sanity provides a structured content management system tailored specifically for food-related content, enhancing menu management and order processing capabilities.
