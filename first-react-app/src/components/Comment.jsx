// simpler Comment component with the user info section extracted out into its own component

import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

function Comment({author, text, date}) {
    return (
    <div className="Comment componentBox">
    <UserInfo user={author} /> {/* here we pass the author prop down to the UserInfo component */}
    <div className="Comment-text">
    {text}
    </div>
    <div className="Comment-date">
    <FormattedDate date={date}></FormattedDate>
    </div>
    </div>
    );
}

export default Comment