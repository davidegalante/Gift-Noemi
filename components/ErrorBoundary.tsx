import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="bg-brand-pink-50 min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <h1 className="text-2xl font-bold text-brand-pink-500 mb-4">Oops! Something went wrong.</h1>
          <p className="text-gray-600">Failed to load the app. Try reloading it.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-brand-pink-400 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
            aria-label="Reload the application"
          >
            Reload
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
