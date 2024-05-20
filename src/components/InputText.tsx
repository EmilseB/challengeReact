import React, { useState } from "react";

const InputText = ({ onSubmit }: any) => {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text === "") {
      window.alert("Por favor agregue una nueva tarea");
    } else {
      onSubmit(text);
    }
    setText("");
  };

  return (
    <>
      <div style={styles.inputContainer}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="New Task"
          style={styles.input}
        />
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#0E4BEF",
            color: "#fff",
            padding: "10px",
            fontSize: "18px",
            width: "150px",
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

const styles = {
  input: {
    height: 50,
    width: 350,
    padding: 10,
    borderWidth: 1,
    marginTop: 30,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
};

export default InputText;
