import { ThemeProvider } from "@/context/theme";
import Home from "@/home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="project-ui-theme">
      <Home />
    </ThemeProvider>
  );
};

export default App;
