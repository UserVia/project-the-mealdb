import { Route, Routes } from 'react-router-dom'
import { HomePage, PortadaPage } from '../meal/pages'
import { MealRoutes } from '../meal/routes/MealRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<PortadaPage />} />
                <Route path="/*" element={<MealRoutes/>}/>
            </Routes>
        </>
    )
}
