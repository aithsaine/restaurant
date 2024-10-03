import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex   items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 h-[400px] overflow-scroll rounded-lg p-6 w-11/12 md:w-1/2">
        <button
          className="text-white mb-4 p-2 rounded-lg bg-red-600 hover:bg-red-700"
          onClick={closeModal}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
