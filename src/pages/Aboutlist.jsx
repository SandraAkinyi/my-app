import "./aboutlist.scss"
export default function Aboutlist({id, title, active, setSelected}) {
  return (
    <li className={active ?"aboutlist active" : "aboutlist"}
    onClick={() => setSelected(id)}>
        {title}

    </li>
  )
}
