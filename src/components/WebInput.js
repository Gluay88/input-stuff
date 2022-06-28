import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./WebInput.css";

const WebInput = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    // console.log(blog);
    setIsPending(true);
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New blog addded");
      setIsPending(false);
      //   redirect to homepage
      history.push("/");
    });
  };

  return (
    <div className="web-input">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label>Blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        >
          {" "}
        </textarea>
        <br />
        <br />
        <label>Blog author:</label>
        <select onChange={(e) => setAuthor(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <br />
        <br />
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
      </form>
      <br />
      <br />
      {/* update value */}
      {title}
      <br />
      <br />
      {body}
      <br />
      <br />
      {author}
    </div>
  );
};

export default WebInput;
