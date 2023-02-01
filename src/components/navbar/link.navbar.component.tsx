import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link, useLocation } from "react-router-dom"

const LinkComponent = ({ title, url }: LinksUrl) => {

  const location = useLocation()

  return (
    <Link to={url}>
      <h2 className= {`${url === location.pathname ? ("border-b-2 "):("")} box-border uppercase text-lg text-whiteReq font-barlow flex tracking-widest`}>{title}</h2>
    </Link>
  )
}


export default LinkComponent