import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const alert = ({ alerts }) => {
  if (alerts !== null && alerts.length > 0) {
    const arr = alerts.map((alert) => ({
      id: alert.id,
      msg: alert.msg,
      type: alert.type,
    }))
    return arr
  } else {
    return 'Nothing'
  }
}

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}
const mapStateToProps = (state) => ({
  alerts: state.alert,
})
export default connect(mapStateToProps)(alert)
