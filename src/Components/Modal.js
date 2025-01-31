import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Assets/styles/modal.css";

const Modal = ({ isOpen, onClose, title, content }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
                    >
                        <button className="modal-close" onClick={onClose}>
                            &times;
                        </button>
                        <h3>{title}</h3>
                        <div>{content}</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
