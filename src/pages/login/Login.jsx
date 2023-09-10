import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function Login({ data }) {
  // eslint-disable-next-line react/prop-types
  const { token, setToken } = data;
  const userName = useRef("");
  const userParol = useRef("");
  function handelSubmit(e) {
    e.preventDefault();
    let obj = {
      userName: userName.current.value,
      password: userParol.current.value,
    };
    console.log(obj);
    fetch("http://localhost:1212/admin/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data);
        localStorage.setItem("token", JSON.stringify(data));
      });
  }

  return (
    <>
      <div>
        <form
          onSubmit={handelSubmit}
          className="form m-auto mt-5 w-[30%] rounded border p-4"
        >
          <h2 className="mb-5 text-center">Kirish</h2>
          <input
            ref={userName}
            className="form-control  mb-3"
            type="text"
            placeholder="Login"
          />
          <input
            ref={userParol}
            className="form-control mb-3"
            type="text"
            placeholder="Parol"
          />
          <button className="btn btn-info w-100 mb-3">Kirish</button>
        </form>
      </div>
    </>
  );
}
