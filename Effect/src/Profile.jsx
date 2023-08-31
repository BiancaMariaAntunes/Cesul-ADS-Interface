import { useEffect, useState } from "react";

function Profile(){

    const [user, setUser] = useState(new Object());

    useEffect(() => {

        fetch('https://api.github.com/users/ehabibs')
        .then((response) => response.json())
        .then((responseUserJson) => setUser(responseUserJson))

    }, [])

    return(
        <main>
            {user?.login}
            <img src={user?.avatar_url}/>
            {user?.company}
        </main>
    )

}

export default Profile;