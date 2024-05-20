import React, { useState } from "react";

enum TEXT {
  ALL = "All Task",
  PENDING = "Pending Task",
  COMPLETED = "Completed Task",
}

interface NavLinksProps {
  setTaskListTitle: React.Dispatch<React.SetStateAction<string>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setTaskListTitle }) => {
  const [selectedLink, setSelectedLink] = useState<string>(TEXT.ALL);

  const handlePress = (newTitle: string) => {
    setTaskListTitle(newTitle);
    setSelectedLink(newTitle);
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => handlePress(TEXT.ALL)}
        style={selectedLink === TEXT.ALL ? styles.selectedLink : styles.link}
      >
        {TEXT.ALL}
      </button>
      <button
        onClick={() => handlePress(TEXT.COMPLETED)}
        style={
          selectedLink === TEXT.COMPLETED ? styles.selectedLink : styles.link
        }
      >
        {TEXT.COMPLETED}
      </button>
      <button
        onClick={() => handlePress(TEXT.PENDING)}
        style={
          selectedLink === TEXT.PENDING ? styles.selectedLink : styles.link
        }
      >
        {TEXT.PENDING}
      </button>
    </div>
  );
};

const styles = {
  container: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
  },
  link: {
    fontSize: 18,
    fontWeight: "500",
    padding: "5px 10px",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: 8,
  },
  selectedLink: {
    fontSize: 18,
    fontWeight: "500",
    padding: "5px 10px",
    backgroundColor: "#0E4BEF",
    color: "#fff",
    border: "1px solid #0E4BEF",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: 8,
  },
};

export default NavLinks;
