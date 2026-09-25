import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home  from './Paginas/Home'
import Filmes from './Paginas/Filmes'
import Categorias from './Paginas/Categorias'
import Jogos from './Paginas/Jogos'
import Series from './Paginas/Series'
import { Layout } from './Componentes/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/jogos" element={<Jogos />} />
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App