function UserInfo ({user}) {

<div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={user.avatarUrl}
          alt={user.name}
        />
        <div className="UserInfo-name">{user.name}</div>
      </div>
}

export default UserInfo