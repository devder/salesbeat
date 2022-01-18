import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Continents } from "./pages/Continents";
import { CountryList } from "./pages/CountryList";
import { Navbar } from "./components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.scss";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ApolloProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Continents />} />
              <Route path="/:continentCode" element={<CountryList />} />
            </Routes>
          </Router>
        </ApolloProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
