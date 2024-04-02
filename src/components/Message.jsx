/* eslint-disable react/prop-types */

const Message = ({ message, color }) => {
    return (
        <p className={`mt-10 ${color} text-white px-6 py-2 rounded`}>
            {message}
        </p>
    )
}

export default Message