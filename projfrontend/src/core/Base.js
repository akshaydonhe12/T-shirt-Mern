import React from "react";

const Base = ({
    title="Title",
    description="Description",
    className="bg-dark text-white p-4",
    children
}) => (
    <div>
        <div className="container-fluied">
            <div className="jumbotron bg-dark text-white text-center">
            <h2 className="display-4">{title}</h2>
            <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
        </div>
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluied bg-success text-white text-center py-3">
                <h4>If you got any Question, feel free to reach out!</h4>
                <button className="btn btn-warning btn-lg">Contact us</button>
            </div>
            <div className="conatiner">
                <span className="text-muted">
                    An Amazing Website to Buy <span className="text-white">T-shirt!</span>
                </span>
            </div>
        </footer>
    </div>
)



export default Base;