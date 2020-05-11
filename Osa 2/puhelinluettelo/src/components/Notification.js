import React from "react"


const Notification = ({notif}) => {
    if(!notif) return null
    console.log(notif.type)
    return (

        <div className={notif.type}>
            {notif.msg}
        </div>

    )

}


export default Notification