import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/Home'
import { Header } from './components/header/Header'
import { CountryDetail } from './pages/country/CountryDetail'

function App() {
  return (
    <main className='main'>
      <Header></Header>
      <BrowserRouter basename='/frontendMentor/04_Advanced/countriesApp'>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/country/:countryname' element={<CountryDetail></CountryDetail>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
