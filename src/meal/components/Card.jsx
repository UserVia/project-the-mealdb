import React from 'react'

export const Card = ({strMealThumb,strMeal}) => {
    return (
        <>
            <div className="card col-4 m-3 p-2"style={{ width: '14rem' }}>
                <img src={strMealThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{strMeal}</h6>
                    <a href="#" className="btn btn-danger">More</a>
                </div>
            </div>
        </>
    )
}
