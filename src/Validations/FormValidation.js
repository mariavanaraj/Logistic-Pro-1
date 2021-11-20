export default function validate(values) {
  const errors = {}
  if (!values.vehicleType) {
    errors.vehicleType = 'required'
  }
  if (!values.OdometerKm) {
    errors.OdometerKm = 'required'
  }

  return errors
}
