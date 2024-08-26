
//  Props :{profile:{}}
const Card = (props) => {

    const {title,price,description,category,image}=props.profile
    let des=description.slice(0,100)
    let tit=title.slice(0,50)

    return (
        <>
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <div className="card mb-3 shadow" >
                <img src={image} className="card-img-top" alt="..." width={'100%'}  height={"150px"} />
                <div className="card-body">
                    {/* <h5 className="card-title">{da}</h5> */}
                    <p className="card-text">{des}</p>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">addtocart</a>
                </div>
            </div>
            </div>
        </>
    )
}

export default Card


