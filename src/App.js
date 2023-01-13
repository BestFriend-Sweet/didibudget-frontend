import { StrictMode, Suspense, lazy } from 'react'

import { Routes, Route } from 'react-router-dom'

import { Login } from './pages/Login'
import { Registration } from './pages/Registration'
import { Logout } from './pages/Logout'
import { Page404 } from './pages/Page404'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { Spinner } from './components/Spinner'
import { RequireAuth } from './components/RequireAuth'
import { RequireUnauthenticated } from './components/RequireUnauthenticated'
import { RequireAdminRole } from './components/RequireAdminRole'

const Home = lazy(() => import('./pages/Home'))
const UserAdministration = lazy(() => import('./pages/Users/UserAdministration'))
const InsertMonthlyBalance = lazy(() => import('./pages/MonthlyBalance/InsertMonthlyBalance'))
const ViewMonthlyBalance = lazy(() => import('./pages/MonthlyBalance/ViewMonthlyBalance'))
const MonthlyBalanceAdministration = lazy(() => import('./pages/MonthlyBalance/MonthlyBalanceAdministration'))
const ExpenseCategorySelector = lazy(() => import('./pages/Expenses/ExpenseCategorySelector'))
const InsertExpense = lazy(() => import('./pages/Expenses/InsertExpense'))
const ViewExpenses = lazy(() => import('./pages/Expenses/ViewExpenses'))
const ExpenseAdministration = lazy(() => import('./pages/Expenses/ExpenseAdministration'))
const ExpenseAnalysis = lazy(() => import('./pages/Expenses/ExpenseAnalysis'))


export const App = () => {
	return (
		<StrictMode>
			<div className="container-fluid bg-dark">
				<div className="container">
					<NavBar />
						<main className="pb-4">
							<Suspense fallback={<Spinner />}>
								<Routes>
									<Route path='/' element={<Home />} />
									<Route path="*" element={<Page404 />} />

									{
										// Restricted routes for non-authenticated users
									}
									<Route path='/login' element={
										<RequireUnauthenticated>
											<Login />
										</RequireUnauthenticated>
									} />
									<Route path='/register' element={
										<RequireUnauthenticated>
											<Registration />
										</RequireUnauthenticated>
									} />

									{
										// Restricted routes for authenticated users
									}
									<Route path='/register-monthly-balance' element={
										<RequireAuth>
											<InsertMonthlyBalance />
										</RequireAuth>
									} />
									<Route path='/view-monthly-balance' element={
										<RequireAuth>
											<ViewMonthlyBalance />
										</RequireAuth>
									} />
									<Route path='/monthly-balance-administration' element={
										<RequireAuth>
											<MonthlyBalanceAdministration />
										</RequireAuth>
									} />
									<Route path='/list-expense-categories' element={
										<RequireAuth>
											<ExpenseCategorySelector />
										</RequireAuth>
									} />
									<Route path='/register-expense/:categoryID/*' element={
										<RequireAuth>
											<InsertExpense />
										</RequireAuth>
									} />
									<Route path='/view-expenses' element={
										<RequireAuth>
											<ViewExpenses />
										</RequireAuth>
									} />
									<Route path='/expenses-administration' element={
										<RequireAuth>
											<ExpenseAdministration />
										</RequireAuth>
									} />
									<Route path='/expenses-analysis' element={
										<RequireAuth>
											<ExpenseAnalysis />
										</RequireAuth>
									} />
									<Route path='/logout' element={
										<RequireAuth>
											<Logout />
										</RequireAuth>
									} />

									{
										// Restricted routes for authenticated administrator users
									}
									<Route path='/user-administration' element={
										<RequireAuth>
											<RequireAdminRole>
												<UserAdministration />
											</RequireAdminRole>
										</RequireAuth>
									} />
								</Routes>
							</Suspense>
						</main>
					<div className="row pb-5"></div>
					<Footer />
				</div>
			</div>
		</StrictMode>
	)
}
