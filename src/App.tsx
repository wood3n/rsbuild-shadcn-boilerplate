import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/home";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="project-ui-theme">
      <Home />
    </ThemeProvider>
  );
};

export default App;
