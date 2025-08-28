'use client';

import React, { useState, useEffect } from 'react';

interface PopupModalProps {
  showOnFirstVisit?: boolean;
  initialOpen?: boolean;
  onClose?: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({
  showOnFirstVisit = true,
  initialOpen = false,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    if (showOnFirstVisit) {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        setIsOpen(true);
        localStorage.setItem('hasVisited', 'true');
      }
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, showOnFirstVisit]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-modal-overlay">
      <div className="card">
        <div className="header">
          <span className="icon">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <p className="alert">新消息！</p>
        </div>

        <p className="message">
          我们使用全新的框架，重构了整个网站！<br />
          但是因为时间的问题，我们还在调整内容，现在的内容时不完善的，请谅解！
        </p>

        <div className="actions">
          <a className="read" href="#" onClick={handleClose}>
            我已知晓，继续
          </a>

          <a className="mark-as-read" href="https://cn.bing.com/" onClick={handleClose}>
            我不同意，返回
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;