import { useEffect, useState } from "react";
import InvitationPage from "./pages/InvitationPage";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <InvitationPage />;
}

export default App;
