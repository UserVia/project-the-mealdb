import React from 'react'
import { HomePage, RecipesHome } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui'

export const MealRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="home" element={<HomePage />} />
                <Route path="recipes" element={<RecipesHome />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>

        </>
    )
}
