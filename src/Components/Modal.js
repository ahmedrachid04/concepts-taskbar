import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Assets/styles/modal.css";

const Modal = ({ isOpen, onClose, title, content, startPosition }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{
                        width: startPosition.width,
                        height: startPosition.height,
                        top: startPosition.top,
                        left: startPosition.left,
                        opacity: 0.8,
                        position: "absolute",
                    }}
                    animate={{
                        width: "100vw",
                        height: "100vh",
                        top: 0,
                        left: 0,
                        opacity: 1,
                        position: "fixed",
                    }}
                    exit={{
                        width: startPosition.width,
                        height: startPosition.height,
                        top: startPosition.top,
                        left: startPosition.left,
                        opacity: 0,
                        position: "absolute",
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent close on modal content click
                    >
                        <button className="modal-close" onClick={onClose}>
                            &times;
                        </button>
                        <h3>{title}</h3>
                        <p>{content}</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
