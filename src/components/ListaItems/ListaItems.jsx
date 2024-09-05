import './ListaItems.css'

function ListaItems({ enBody }) {
  return (
    <div >
    <div className='Vacio'></div>
    <h3 className="ListaCompras">{enBody}</h3>
  </div >
  )
}

export default ListaItems
