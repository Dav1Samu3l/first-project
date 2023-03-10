import './App.css'
import Card from "./components/cards.jsx";

function App() {
  const imgFerrari = "https://s2.glbimg.com/WwkvfLhK4mt40-5fkdlWSHbyJqo=/0x0:1280x921/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/M/0/zLTv6fTfuWwIoCbUdZXA/ferrari-sf90-stradale-2020-1280-05.jpg"
  const imdAudi = "https://s2.glbimg.com/9sSU0jKD2dyX_a58OieNj4fagUs=/0x0:2000x1333/600x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/A/1/bBpi9ZQoWn46DKQ842TA/audi-e-tron-2020-04-06-f99a8681-fabio-tito-g1.jpg"
  return (
    <div className='App'>
      <Card titulo="carro ferari" imagem={imgFerrari} width={500} />
      <Card titulo="carro audi" imagem={imdAudi} width={300} />
    </div>
  )
}

export default App
