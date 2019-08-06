import React from 'react';

function ResultList(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.name}>
                </img>
            </div>
            <div className="card-header">
                <div className="card-title h5">{props.name}</div>
                <div className="card-subtitle text-gray">{props.rating}</div>
            </div>
            <div className="card-body">
                Insert Truncated Chef Description Here
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">View Menu</button>
            </div>
        </div>
    )
}

export default ResultList