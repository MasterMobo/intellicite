import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./themes/mainTheme";
import "./styles/global.css";
import SavedPapersPage from "./page/SavedPapersPage/SavedPapersPage";

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
                            path="/saved"
                            element={
                                <MainLayout>
                                    <SavedPapersPage />
                                </MainLayout>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}
