import Footer from "./components/footer"
import BookDetail from "./pages/BookDetail"
import AuthorDetail from "./pages/AuthorDetail"
import UserDetail from "./pages/UserDetail"
import Header from "./components/Header"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import AboutUs from "./pages/AboutUs"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/book/:bookid" element={<BookDetail />} />
            <Route path="/user/:userid" element={<UserDetail />} />
            <Route path="/author/:authorid" element={<AuthorDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
