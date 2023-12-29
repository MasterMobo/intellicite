import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import SearchPage from "./page/SearchPage/SearchPage";
import MainTheme from "./themes/mainTheme";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./themes/mainTheme";
import "./styles/global.css";
export default function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <Router>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MainLayout>
                                    <HomePage />
                                </MainLayout>
                            }
                        />
                        <Route
                            path="/search"
                            element={
                                <MainLayout>
                                    <SearchPage />
                                </MainLayout>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}
