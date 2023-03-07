function Button({ children, isDisabled, version, type, onClick}) {
  return (
   <button type={type} disabled={isDisabled} className={`btn btn-${version}`} onClick={onClick}>
     {children}
   </button>
  )
}

Button.defaultProps = {
  isDisabled : false,
  version: 'primary',
  type: 'button',
}

export default Button
