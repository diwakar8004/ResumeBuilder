import type { RootState } from "lib/redux/store";

// Reference: https://dev.to/igorovic/simplest-way-to-persist-redux-state-to-localstorage-e67
// NOTE: We intentionally do NOT persist resume state across page refreshes.
// When the page loads, we always start with a blank form.

export const loadStateFromLocalStorage = () => {
  // ALWAYS return undefined to ensure fresh form on each page load
  // This means resume data is cleared on every refresh
  return undefined;
};

export const saveStateToLocalStorage = (state: RootState) => {
  try {
    // Save to localStorage for debugging, but we don't load it back
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("resumebuilder-state-temp", stringifiedState);
  } catch (e) {
    // Ignore
  }
};

export const getHasUsedAppBefore = () => {
  // Always return false since we don't persist state
  return false;
};
