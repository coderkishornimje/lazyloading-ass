import React from 'react'
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/open-peeps";
import { useMemo } from "react";

function Avtar() {
  const avatar = useMemo(() => {
    return createAvatar(style, {
      dataUri: true,
      size: 128
    });
  }, []);

  return (
    <div>
    {/* <h1>Avtart</h1>
     */}
    <img src={avatar} loading="lazy" alt="profiles"/>
    </div>
  )
}

export default Avtar