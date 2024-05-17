import React, { useState } from 'react';
import './ChatContainer.css';
import './fonts.css';

const friendsList = [
  { id: 1, name: 'Christopher Thompson', designatedTime: '10:30 AM - 11:30 AM' },
  { id: 2, name: 'Clara Tunny', designatedTime: '4:00 PM - 5:00 PM' },
  { id: 3, name: 'Pieter Breuker', designatedTime: '5:00 PM - 6:00 PM' },
];

function ChatContainer() {
  const [addedFriends, setAddedFriends] = useState([]);
  const [popup, setPopup] = useState({ show: false, friendName: '', designatedTime: '' });

  const handleFindTime = (id, name, designatedTime) => {
    setPopup({ show: true, friendName: name, designatedTime });
  };

  const handleDismissPopup = () => {
    setAddedFriends([...addedFriends, popup.friendName]);
    setPopup({ show: false, friendName: '', designatedTime: '' });
  };

  return (
    <div className="ChatContainer">
      <div className="Top">
        <h4 className='h4'>Schedule Time With Friends</h4>
        <span className="Arrow">&#8250;</span>
      </div>
      <div className="FriendsList">
        {friendsList.map((friend) => (
          <div key={friend.id} className="FriendItem">
            <span>{friend.name}</span>
            <button
              className={`FindButton ${addedFriends.includes(friend.name) ? 'Added' : ''}`}
              onClick={() => handleFindTime(friend.id, friend.name, friend.designatedTime)}
            >
              {addedFriends.includes(friend.name) ? friend.designatedTime : 'Find Shared Time'}
            </button>
          </div>
        ))}
      </div>
      {popup.show && (
        <div className="Popup">
          <p>You and {popup.friendName} are both available at {popup.designatedTime}</p>
          <button onClick={handleDismissPopup}>Dismiss</button>
        </div>
      )}
    </div>
  );
}

export default ChatContainer;
