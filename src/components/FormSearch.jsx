import Proptypes, { func } from 'prop-types'
import { useState } from "react"
import { Form } from "react-bootstrap"

export const FormSearch = ({getMovies}) => {
    const [valuesForm,setValuesForm] = useState({})
    const handleInputChange = ({target}) => {
        setValuesForm({
            ...valuesForm,
            [target.name] :  target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies(`/api/v1/movies?keyword=${valuesForm.keyword}`)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <input type="text" name="keyword" className="form-control" onChange={handleInputChange}/>
        <button className="btn btn-outline-dark input-group-text">
            <i className="fa fa-search"></i>
        </button>
        </div>
    </Form>
  )
}

FormSearch.Proptypes = {
    getMovies : Proptypes.func
}