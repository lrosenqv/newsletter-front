import { useState } from "react";

export const AdminBtn = () => {
  const [btnClicked, setBtnClicked] = useState(false);

  function cancelBtn(){
    setBtnClicked(false);
  }

  return(<>
    { !btnClicked &&
      <button onClick={() => setBtnClicked(true)}>Admin</button>
    }

    { btnClicked &&
      <form method="POST" action="http://localhost:3001/admin" >
        <input type="password" placeholder="Password" name="password" id="password"/>
        <button type="submit">Sign in</button>
        <button onClick={cancelBtn} type="button">Cancel</button>
      </form>
      }
    </>
  )
}