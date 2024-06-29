const Button = (props) => {
    return(
        <button className="app-button" onClick={props.onClick}>
            <div>
                { props.children }
                { props.loading && <div className="button-loader"></div> }
            </div>
        </button>
    )
}

export default Button