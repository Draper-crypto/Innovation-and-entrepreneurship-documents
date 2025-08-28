'use client';

import React, { useState, useEffect } from 'react';

interface PopupModalProps {
  showOnFirstVisit?: boolean;
  initialOpen?: boolean;
  onClose?: () => void;
}

// Top-fixed announcement banner shown on first visit
const PopupModal: React.FC<PopupModalProps> = ({
  showOnFirstVisit = true,
  initialOpen = false,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  useEffect(() => {
    if (!showOnFirstVisit) return;
    try {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        setIsOpen(true);
        localStorage.setItem('hasVisited', 'true');
      }
    } catch {
      // ignore storage errors
    }
  }, [showOnFirstVisit]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-banner" role="status" aria-live="polite">
      <div className="banner-card">
        <div className="header">
          <span className="icon" aria-hidden>
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clipRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
          <p className="alert">站点已升级</p>
        </div>

        <p className="message">
          我们重构了网站并持续完善内容，部分页面仍在更新中。
        </p>

        <div className="actions">
          <button className="read" onClick={handleClose}>我已知晓，继续浏览</button>
          <a className="mark-as-read" href="https://cn.bing.com/" onClick={handleClose}>
            我不同意，返回上一页
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;

