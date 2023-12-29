import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import MainLayout from "./layouts/MainLayout";
import SearchPage from "./page/SearchPage/SearchPage";

export default function App() {
    return (
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
    );
}
