# Safety App

## Description
The **Safety App** is dedicated to enhancing safety protocols in public spaces, with a specific focus on efficiently managing the incidents involving lost and found children. Built on **React.js** (version 17.x), it features a **user-friendly interface** that simplifies incident reporting, tracking, and resolution, making it an indispensable tool for community safety.

## Installation
Ensure you have **Node.js** (v14.x or newer) and **Yarn** installed before setting up your local development environment:

```bash
git clone https://github.com/aimforexcellenceinall/rock-security-team.git
cd safety-app
yarn install
```

## Project Structure
Designed for scalability and ease of navigation, the app's architecture is laid out as follows:

```plaintext
safety-app/
├── src/
│   ├── components/
│   │   ├── common/                  # General UI components reused across the app.
│   │   │   ├── ErrorBoundary.js     # Wraps child components to catch JavaScript errors anywhere in their child component tree.
│   │   │   ├── AccessibleButton.js  # Provides a customizable button component with enhanced keyboard and screen reader accessibility.
│   │   │   ├── AriaLiveRegion.js    # Dynamically updates content for screen readers, improving real-time accessibility.
│   │   │   ├── SkipToContentLink.js # Implements an accessible skip link, allowing keyboard users to bypass navigation menus.
│   │   ├── forms/                   # Facilitates user data entry and interaction.
│   │   │   ├── LostFoundChildForm.js# Form for submitting reports on lost or found children, including essential details for responders.
│   │   ├── layout/                  # Constructs the visual structure of the app.
│   │   │   ├── Header.js            # The top-level navigation and branding area.
│   │   │   ├── Footer.js            # Contains copyright, contact information, and additional links.
│   │   │   ├── Navigation.js        # Manages the main navigation system, guiding users through app sections.
│   │   ├── pages/                   # Root components for each page in the app.
│   │   │   ├── HomePage.js          # Presents the initial view and overview of the app's purpose.
│   │   │   ├── PromptPage.js        # Displays user prompts or messages, centralizing user notifications.
│   │   │   ├── NotePad.js           # A simple utility for users to jot down notes or reminders.
│   ├── context/
│   │   ├── AppContext.js            # Centralizes app state management, facilitating shared state across components.
│   ├── services/
│   │   ├── BiometricAuth.js         # Integrates biometric authentication, supporting fingerprint and facial recognition for secure access.
│   ├── utils/                       # Utility functions supporting common tasks and enhancing functionality.
│   │   ├── AccessibilityUtils.js    # A collection of tools designed to improve the app's usability for users with disabilities.
│   │   ├── OtherUtils.js            # Miscellaneous functions that support various aspects of the app's operations.
```

## Running the App
Start the app locally to ignite the beacon of safety:

```bash
yarn start
```

Open `http://localhost:3000` in your browser to explore the Safety App.

## Testing
Ensure the app's fortifications are robust:

```bash
yarn test
```

## Deployment
Share your creation with the world through Firebase:

```bash
yarn build
firebase deploy
```

Ensure `Firebase.js` is accurately configured for your Firebase project.

## Contributing
We invite contributions of all forms. Whether you're patching bugs, proposing features, or enhancing documentation, your input is valuable. Fork the repository, make your changes, and submit a pull request. For detailed guidelines, consult our **CONTRIBUTING.md**.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
