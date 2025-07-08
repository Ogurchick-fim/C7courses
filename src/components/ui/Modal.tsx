import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-slate-900 rounded-xl p-6 max-w-md w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-500 text-2xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};