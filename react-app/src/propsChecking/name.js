import PropTypes from 'prop-types'

function Name ({name, handleChange}){

    console.log(name)

    return (

        <div>
            <p>Hello {name}</p>
        

            <input name="name" type="text" value={name} onChange={handleChange} />
        </div>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func
}

export default Name