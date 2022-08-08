import React, { FormEvent } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
export const Login = () => {
  const loginFetch = (parmas: { username: string; password: string }) => {
    fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parmas),
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    loginFetch({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">用户名：</label>
        <input type="text" id={"userName"} />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input type="password" id={"password"} />
      </div>
      <div>
        <button type="submit">登陆</button>
      </div>
    </form>
  );
};
