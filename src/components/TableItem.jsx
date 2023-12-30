import PropTypes from 'prop-types'

export const TableItem = ({movie : {id,title,length,rating,awards,genre},handleEditMovie,handleDeleteMovie}) => {
  return (
    <tr>
    <td>{title}</td>
    <td>{length}</td>
    <td>{rating}</td>
    <td>{genre?.name}</td>
    <td>{awards}</td>
    <td>
      <div className='d-flex'>
      <button className='btn btn-sm btn-outline-success mr-3' onClick={() => handleEditMovie(id)}>
        <i className='fas fa-pencil-alt' aria-hidden="true"></i>
      </button>
      <button className='btn btn-sm btn-outline-danger' onClick={() => handleDeleteMovie(id)}>
        <i className='fas fa-trash-alt' aria-hidden="true"></i>
      </button>
      </div>
    </td>
  </tr>
  )
}

TableItem.propTypes = {
    movie : PropTypes.object,
    handleEditMovie : PropTypes.func,
    handleDeleteMovie : PropTypes.func
}

TableItem.defaultProps = {
    genre : 'sin genero asignado'
}
