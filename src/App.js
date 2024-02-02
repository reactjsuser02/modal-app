import React from "react";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="App">
      <button onClick={handleOpen}>open modal</button>
      <Modal isOpen={open} onClose={handleClose}>modal text</Modal>
    </div>
  );
}

export default App;
