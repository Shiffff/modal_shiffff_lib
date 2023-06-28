import React, { useState } from 'react'
import ModalConfirm from './lib'

const App = () => {
    const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">

    <button onClick={() => setShowModal(true)}>show Modal?</button>
    {showModal && (
      <ModalConfirm text={"Le texte de votre modal"} closeFct={closeModal} />
    )}  
    </div>
    )
}

export default App
