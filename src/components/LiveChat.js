import React, { useState } from 'react';

const LiveChat = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="position-fixed bottom-0 end-0 m-4">
      <button 
        className="btn btn-success btn-lg rounded-pill shadow-lg px-4 py-3 hover-3d"
        onClick={toggleChat}
      >
        <i className="fas fa-comment-medical me-2"></i>Live Chat
      </button>

      {showChat && (
        <div className="position-absolute bottom-100 end-0 mb-3 bg-white rounded-3 shadow-lg" style={{ width: '300px', minHeight: '250px' }}>
          <div className="bg-success text-white p-3 rounded-top-3 d-flex justify-content-between align-items-center">
            <h5 className="m-0">Live Chat</h5>
            <button className="btn btn-sm text-white" onClick={toggleChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="p-4 text-center d-flex flex-column justify-content-center" style={{ minHeight: '200px' }}>
            <i className="fas fa-tools fa-3x text-secondary mb-3"></i>
            <h5>Functionality Coming Soon!</h5>
            <p className="text-muted">We're working on our chat feature. Please check back later.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
