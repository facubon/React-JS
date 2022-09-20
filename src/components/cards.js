// productos a vender//




const Cards = () => {

  

  return(
    <div className="shadow-xl card w-96 bg-base-100">
  <figure><img src="../imgs/burger1.jpg" alt="hamburguesa" /></figure>
  <div className="card-body">
    <h2 className="card-title">Burger XXL</h2>
    <p>Hamburguesa completa</p>
    <div className="justify-end card-actions">
      <button className=" btn titulo">Agregar al carrito</button>
    </div>
  </div>
</div>
  )
}

export default Cards