# Frontend Interview Practice - Star Wars Planets

A simple React app that fetches and displays Star Wars planets data with search and pagination functionality.

## What it does

- **Fetches data** from SWAPI (Star Wars API) planets endpoint
- **Search functionality** - filter planets by name in real-time  
- **Pagination** - navigate through pages of results with Previous/Next buttons
- **Responsive layout** - uses flexbox to display planet cards in a grid
- **Planet details** - shows name, climate, terrain, and population for each planet

## Key React concepts demonstrated

- `useState` - managing component state (planets data, current page, search term)
- `useEffect` - handling side effects (API calls when page or search changes)  
- **Async/await** - proper Promise handling for fetch requests
- **Controlled inputs** - search input value controlled by React state
- **Event handlers** - onClick for buttons, onChange for input
- **Conditional rendering** - disable Previous button on page 1
- **Lists and keys** - mapping over planets array with proper key prop
- **Inline styles** - quick styling with style objects

## Getting Started

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



More to practice:
  Data Operations:
  - Loading state - show "Loading..." while
  fetching
  - Error handling - try/catch for failed
  requests
  - Sorting - sort planets by name,
  population, etc.
  - Filtering - filter by climate type (arid,
   temperate, etc.)

  UI Operations:
  - Modal/details view - click planet to see
  full details
  - Toggle view - switch between grid/list
  layout
  - Favorites - heart icon to save favorite
  planets
  - Clear search - X button to reset search

  Form Operations:
  - Add new planet - form with validation
  - Edit planet - inline editing
  - Delete planet - remove from list

  Advanced State:
  - useReducer - complex state management
  - Custom hooks - extract fetch logic
  - Context - share data between components
  - Local storage - persist
  favorites/preferences

  Performance:
  - Debounced search - delay API calls while
  typing
  - Memoization - useMemo/useCallback
  - Virtual scrolling - handle large lists

