import PropTypes from 'prop-types'

export const MyComponent = ( {name} ) => {

    const student = {
        name: "Andrea",
        lastName: "Ardila",
        mobile: "3012120907",
        linkedindProfile: "https://www.linkedin.com/andrea"
    };

    console.log(student);

  return (
    <div>
      <hr />
        <h3>Este es mi primer componente</h3>

        <p>Curso de React</p>
        <p>Docente: <strong>{name}</strong></p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>EComunicación</li>
        </ul>
        <p>Estudiante: <strong>{student.name} {student.lastName}</strong></p>
        <ul>
            <li>Móvil: {student.mobile}</li>
            <li>Linkedin: {student.linkedindProfile}</li>
        </ul>
    <hr />
        <p>Estudiante: <strong>{JSON.stringify(student)}</strong></p>
    </div>
  )
}

MyComponent.propTypes = {
    name: PropTypes.string
}

