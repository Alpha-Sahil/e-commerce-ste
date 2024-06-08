import { useSelector } from "react-redux"

const ProgressBar = () => {
    const showProgressBar = useSelector(state => state.progressBar.showProgressBar)

    return <>
        {showProgressBar && <div className="progress-bar-custom"></div>}
    </>
}

export default ProgressBar