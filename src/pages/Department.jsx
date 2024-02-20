import { useEffect, useState } from "react";
import Aboutlist from "./Aboutlist";
import "./department.scss"
import { phamacyAbout,
fitnessAbout,
specialistsAbout,
nutritionAbout,
departmentsAbout,
newsAbout
 } from "../data";

export default function Department() {
  const [selected, setSelected] = useState ("featured");
  const [data, setData] =useState([]);
  const list=[
    {
    id: "phamacy",
    title: " Phamacy",
    },
    {
      id: "fitness",
      title: "Fitness",
    },
    {
    id: "specialists",
    title: "Specialists",
    },
    {
      id: "nutrition",
      title: "Nutrition",
    },
    {
        id: "departments",
        title: "Departments",
    },
    {
          id: "news",
          title: " News",
    },
  ];

  useEffect (() => {
switch(selected){
  case "phamacy":
    setData (phamacyAbout);
    break;
    case "fitness":
      setData (fitnessAbout);
      break;
      case "specialists":
        setData (specialistsAbout);
        break;
        case "nutrition":
          setData (nutritionAbout);
          break;
          case "departments":
            setData (departmentsAbout);
            break;
            case "news":
              setData (newsAbout);
              break;
              default:
                setData(phamacyAbout);
                
}
  },[selected])
  return (
    <div className="department" id="department">
      
      <ul>
    {list.map((item) => (
      <Aboutlist title={item.title} 
      active = {selected === item.id}
      setSelected={setSelected}
      id = {item.id}
      />
    ))}
      </ul>
     <div className="container">
      {data.map((d) => (
        <div className="item">
        <img src={d.img}
        alt="" />
        <h2>{d.title}</h2>

     </div>

      ))}
      
    </div>
  </div>
  )
}

