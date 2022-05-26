import { useState } from "react";

export const AdminBtn = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  return(<>
    { !btnClicked &&
      <button onClick={() => setBtnClicked(true)}>Admin</button>
    }

    { btnClicked &&
      <form method="POST" action="http://localhost:3001/admin" >
        <input type="password" placeholder="Password" name="password" id="password"/>
      </form>
      }
    </>
  )
}