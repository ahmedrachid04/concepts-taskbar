import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../Assets/styles/modal.css";
import { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, title, content, videoSrc, startPosition }) => {
    const videoRef = useRef(null); // Reference for the video element

    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.play(); // Play the video when modal is opened
        }
    }, [isOpen]); // Runs every time isOpen changes

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
                        opacity: 0.8,
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
                            delay: 0.3,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close" onClick={onClose}>
                            &times;
                        </button>
                        <h3>{title}</h3>
                        <p>{content}</p>
                        
                        {/* Video with autoplay */}
                        <video ref={videoRef} controls autoPlay>
                            <source src={videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;