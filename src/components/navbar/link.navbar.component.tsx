import React from 'react'
import { LinksUrl } from '../../types/LinkUrl'
import { Link} from "react-router-dom"

interface propsLink extends LinksUrl{
    active:boolean
}

const LinkComponent = ({ title, url,active}: propsLink) => {

  return (
    <Link to={url}>
      <h2 className= {`${active ? ("border-b-2 "):("")} box-border uppercase text-lg text-whiteReq font-barlow tracking-widest h-full`}>{title}</h2>
    </Link>
  )
}


export default LinkComponent