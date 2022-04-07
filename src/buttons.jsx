import React from 'react'

const Buttons = () => {
  return (
    <div className="container cal-con">
      <div className="row">
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">C</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">CE</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">%</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">÷</a>
      </div>
      <div className="row">
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">7</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">8</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">9</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">x</a>
      </div>
      <div className="row">
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">4</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">5</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">6</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">-</a>
      </div>
      <div className="row">
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">1</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">2</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">3</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">+</a>
      </div>
      <div className="row">
        <a className="col-9 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">0</a>
        <a className="col-3 rounded-pill shadow p-4 text-center text-dark text-decoration-none fw-bold btn my-1">=</a>
      </div>
    </div>
  )
}

export default Buttons