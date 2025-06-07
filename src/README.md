# Ant Design Sandbox

This project is a simple application built using React and Ant Design. It demonstrates the use of various components, including a dropdown selector with search functionality.

## Project Structure

The project has the following structure:

```
antd-sandbox
├── src
│   ├── App.js                # Main application component
│   ├── components
│   │   └── Item.js          # Dropdown selector component using TreeSelect
│   ├── hooks
│   │   └── useDebounce.js    # Custom hook for debouncing values
│   ├── models
│   │   └── index.js          # Types and interfaces related to filters
│   ├── assets
│   │   └── icons
│   │       └── DropdownIcon.js # Icon component for dropdown
│   ├── store
│   │   └── apis
│   │       └── GiftCard.js   # Hook for fetching paginated dropdown items
│   └── index.js              # Entry point of the application
├── package.json               # npm configuration and dependencies
└── README.md                  # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd antd-sandbox
   ```

2. **Install dependencies**:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. **Run the application**:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

## Features

- **Tag Management**: The application allows users to add and remove tags.
- **Dropdown Selector**: The `ItemsSelect` component provides a searchable dropdown using Ant Design's `TreeSelect`.
- **Debounced Search**: The search functionality is debounced to improve performance.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.