import React from "react"
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    const {peopleOrPlanet, setPeopleOrPlanet} = props
    const {id, setId} = props

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${peopleOrPlanet}/${id}`)
    }

    return (
        <div className='container border margin:15'>
            <form onSubmit={handleSubmit}>
                <label>
                    Search For:
                </label>
                <select className='form-control' onChange={(e) =>setPeopleOrPlanet(e.target.value) }>
                    <option value="">~~~~~~~~~</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>
                    ID:
                </label>
                <input className='form-control' type='number' onChange={(e)=>setId(e.target.value) }/>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;