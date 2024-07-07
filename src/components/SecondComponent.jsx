
export const SecondComponent = () => {

    const books = [
        "Harry Potter y la piedra filisofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del principe",
        "Harry Potter y las reliquias de la Muerte"
    ];

  return (
    <div>
      <h2>Listado de Libros</h2>
      <ul style={{ textAlign: 'left'}}>
        {
        books.map((book, index) => {
            return <li key={index}>{book}</li>
        })
        }
      </ul>
    </div>
  )
}
