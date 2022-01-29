import React from 'react';

function Submit() {

    return (
        <div>
            <a href="/auth/google">
                <button>Sign In With Google</button>
            </a>
            <br />
            <a href="/api/logout">
                <button>Logout</button>
            </a>
        </div>
    )
}

export default Submit