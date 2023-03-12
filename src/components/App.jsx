import Profile from './Profile/Profile';
import user from './../data/user.json';

import Statistics from './Statistics/Statistics';
import data from './../data/data.json';

import FriendList from './FriendList/FriendList';
import FriendListItem from './FriendList/FriendListItem';
import friends from './../data/friends.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        key={user.id}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} key={data.id} />
      <FriendList friends={friends}>
        <FriendListItem
          key={friends.key}
          avatar={friends.avatar}
          name={friends.name}
          isOnline={friends.isOnline}
          id={friends.id}
        />
      </FriendList>
    </div>
  );
};
