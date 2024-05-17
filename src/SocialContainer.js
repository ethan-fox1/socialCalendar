import React, { useState } from 'react';
import './SocialContainer.css';
import './fonts.css';

const friendsList = [
  { id: 1, name: 'Joshua Perkins' },
  { id: 2, name: 'Velma' },
  { id: 3, name: 'Kendra Murray' },
];

function SocialContainer() {
  const [addedFriends, setAddedFriends] = useState([]);

  const handleAddFriend = (id) => {
    if (!addedFriends.includes(id)) {
      setAddedFriends([...addedFriends, id]);
    }
  };

  return (
    <div className="SocialContainer">
      <div className="Top">
        <h4 className='h4'>Add Friends</h4>
        <span className="Arrow">&#8250;</span>
      </div>
      <div className="FriendsList">
        {friendsList.map((friend) => (
          <div key={friend.id} className="FriendItem">
            <span>{friend.name}</span>
            <button
              className={`AddButton ${addedFriends.includes(friend.id) ? 'Added' : ''}`}
              onClick={() => handleAddFriend(friend.id)}
            >
              {addedFriends.includes(friend.id) ? '✔️' : 'Add +'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialContainer;
