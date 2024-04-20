import { useEffect, useRef } from "react";

const Model = (props) => {
    const model = useRef()

    useEffect(() => {
        const handler = (event) => { 
            if (!model.current) return
            
            if (model.current.contains(event.target) === false) props.closed()
        };

        document.addEventListener("click", handler, true);

        return () => {
            document.removeEventListener("click", handler);
        };
      }, []);

    return (
        <div className="model" ref={ model }>
            <div className="model-container">
                <div className="model-inner">
                    {props.heading && 
                        <div className="model-heading">
                            <h2>
                                { props.heading }
                            </h2>
                        </div>
                    }
                    <div className="model-content">
                        <div className="model-content-container">
                            { props.children }
                        </div>
                    </div>
                </div>
                <div className="model-close" onClick={ props.closed }>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
        </div>
    )
}

export default Model