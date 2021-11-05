import { connect } from 'react-redux';


const API_GET_ALL_TOPIC = "http://localhost:8000/api/topic/find-all";


const getAllTopic = async () => {
    try {
        const response = await fetch(API_GET_ALL_TOPIC)
        const data = await response.json()
        return data
    } catch (error) {
        console.error("Error: ", error.message)
    }
}


function mapDispatchToProps(disptach) {
    return {
        getAllTopic: function (topic) {
            dispatch({ type: 'T', sujet: topic })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(functions)

