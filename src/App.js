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
// const ViewMonthlyBalance = lazy(() => import('./pages/MonthlyBalance/ViewMonthlyBalance'))
// const MonthlyBalanceAdministration = lazy(() => import('./pages/MonthlyBalance/MonthlyBalanceAdministration'))
// const ExpenseCategorySelector = lazy(() => import('./pages/Expenses/ExpenseCategorySelector'))
// const InsertExpense = lazy(() => import('./pages/Expenses/InsertExpense'))
// const ViewExpenses = lazy(() => import('./pages/Expenses/ViewExpenses'))
// const ExpenseAdministration = lazy(() => import('./pages/Expenses/ExpenseAdministration'))
//const ExpenseAnalysis = lazy(() => import('./pages/Expenses/ExpenseAnalysis'))


export const App = () => {
	return (
		<StrictMode>
			<div className="container-fluid bg-dark">
				<div className="container">
					<Suspense fallback={<Spinner />}>
						<NavBar />
							<main className="pb-4">
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
										<Suspense fallback={<Spinner />}>
											<RequireAuth>
												<InsertMonthlyBalance />
											</RequireAuth>
										</Suspense>
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
										<Suspense fallback={<Spinner />}>
											<RequireAuth>
												<RequireAdminRole>
													<UserAdministration />
												</RequireAdminRole>
											</RequireAuth>
										</Suspense>
									} />

								</Routes>
							</main>
						<div className="row pb-5"></div>
						<Footer />
					</Suspense>
				</div>
			</div>
		</StrictMode>
	)
}
