const Banner = (props) => {
    let { title, subTitle } = props;
    return <div className="banner">
        <div className="container">
            <h1 className="logo-font">{title}</h1>
            {subTitle && <p>{subTitle}</p>}
        </div>
    </div>
}

export default Banner