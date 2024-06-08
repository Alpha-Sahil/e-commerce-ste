const Button = (props) => {
    return(
        <button className="app-button" onClick={props.onClick}>
            <div>
            {/* <div style={{display: 'flex', gap: '1em'}}> */}
                { props.children }
                { props.loading && <div className="button-loader"></div> }
            </div>
        </button>
    )
}

export default Button