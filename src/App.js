// import Tweet from './componentes/Coment/Coment';
import Coment from './Componentes/Coment/Coment';
import {useState} from 'react';
import Menu from './Componentes/Menu/Menu';

function App() {

  
  
  const [Registrar, setRegistrar] = useState([]) 

   const novoRegistro = (Registro) => {
    console.log(Registro)
    setRegistrar([...Registrar, Registro])
   }

  
  return (
    <div className="App">
      <h1>Teste</h1>
      <Menu nome="Beatriz" usuário="@beatrizavn"/>
     <Coment  registrarAluno={Registro => novoRegistro(Registro)}/>
     {Tweet.map(serie =><Serie Key={serie.nome} nome={serie.nome} textColor={serie.CorTexto} 
      corDeBorda={serie.CorPrimaria} corDeFundo={serie.CorSecundaria} alunos={Registrar.filter(registro => registro.serie == serie.nome)}/>)}
    </div>
  );
}

export default App;