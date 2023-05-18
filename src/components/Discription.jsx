import React, { useState, useEffect, useRef } from "react";
import styles from "./Discription.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineEye, AiOutlineMenu } from "react-icons/ai";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { todolist } from "../store/store";
import Avatar from "@mui/joy/Avatar";
function Discription() {
   const [random, setRandom] = useState(Math.floor(Math.random() * 50));
   const [images, setImages] = useState([]);
  const [title, settitle] = useState("");
  const [discription, setDiscription] = useState('');
  const [editable, setEditable] = useState(false);
  const [priority, setPriority] = useState("");
  const [Assign, setAssign] = useState("");
  const [time, setTime] = useState("");

 useEffect(() => {
   dataFetch();
 }, []);

 function dataFetch() {
   fetch("./user.json")
     .then((r) => r.json())
     .then((data) => {
       console.log(data);
       setImages(data[random]?.image)
       
     });
     console.log("image",images)
 }
  let { paramsid } = useParams();
  let navigate = useNavigate();
  const containerRef = useRef(null);
  let dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.Todo.list;
  });
console.log(list)
  useEffect(() => {
    list.map((e) => {
      e?.children?.map((child) => {
        if (child.id == paramsid) {
          settitle(child.title);
          setPriority(child.Priority)
          setAssign(child.AssignName)
          console.log(child.description)
          setDiscription(child.description);
          setTime(getTime(child.dts))
          console.log(discription)
        }
      });
    });
    

    function getTime(dts){
      // some cal
      if(!dts) return "0"
      const date = new Date()
      const timeStamp = date.getTime()
      const currentTime = timeStamp - dts
      const minutes = Math.floor(currentTime / 60000);

      return minutes;
    }

    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        navigate(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setEditable(false);
  };

  function handleChange(e) {
    const updatedTitle = e.target.value;
    settitle(updatedTitle);
    dispatch(
      todolist.actions.onUpdate({ childId: paramsid, value: updatedTitle })
    );
  }
  function handleAssign(e){
   setAssign(e.target.value)
   dispatch(todolist.actions.onAssign({ childId: paramsid ,AssignName:e.target.value}));
  }
  function handlePrority(e){
  setPriority(e.target.value)
  dispatch(todolist.actions.onPrority({ childId: paramsid ,Priority:e.target.value}));
  }
  function handleDescription(e){
    setDiscription(e.target.value)
      dispatch(
        todolist.actions.onDescription({
          childId: paramsid,
          description:e.target.value
        })
      );

  }

  return (
    <>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.mainone}>
          <div>
            <span>
              <BsCreditCard2Back />
            </span>
          </div>
          <div className={styles.first_right}>
            <div className={styles.cookblock}>
              {editable ? (
                <input
                  value={title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                />
              ) : (
                <h2 style={{ marginTop: "-.2rem" }} onClick={handleClick}>
                  {title}
                </h2>
              )}
            </div>
            <div className={styles.first_second}></div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          <span>
            <AiOutlineMenu />
          </span>
          <div>
            <strong>Priority </strong>
            <label
              style={{
                background: "rgb(189, 20, 20)",
                color: "white",
                width: "40px",
                fontWeight: "bold",
              }}
            >
              {priority}{" "}
            </label>
            <br />

            <select
              style={{
                height: "2rem",
                width: "7rem",
                textAlign: "center",
                marginTop: ".2rem",
              }}
              defaultValue="Select"
              onChange={handlePrority}
            >
              <option disabled>Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div>
            <strong>Assign </strong>
            <label
              style={{
                background: "rgb(120, 194, 9)",

                color: "white",
                fontWeight: "bold",
              }}
            >
              {Assign}{" "}
            </label>
            <br />

            <select
              style={{
                height: "2rem",
                width: "7rem",
                textAlign: "center",
                marginTop: ".2rem",
              }}
              defaultValue="Select "
              onChange={handleAssign}
            >
              <option disabled>Select</option>
              <option value="Neelu Mishra">Neelu Mishra</option>
              <option value="Aditi Jain">Aditi Jain</option>
              <option value="Nivedita">Nivedita</option>
              <option value="Sanket Raj">Sanket Raj</option>
              <option value="Sachin">Sachin</option>
            </select>
          </div>
        </div>
        <div className={styles.maintwo}>
          <div style={{ paddingTop: ".3rem", marginRight: ".5rem" }}>
            <AiOutlineMenu />
          </div>

          <div className={styles.second}>
            <h4>Description</h4>

            <p>{discription}</p>
            <textarea
              style={{ width: "26.5rem", height: "3rem", marginBottom: "1rem" }}
              type="textarea"
              placeholder="Add a more detailed description..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleDescription(e);
                }
              }}
            ></textarea>
          </div>
        </div>
        <div className={styles.mainthird}>
          <div className={styles.thirdone}>
            <span>
              <AiOutlineMenu />
            </span>
            <span className={styles.second}>
              <h4>Activity</h4>
            </span>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <span>
              <Avatar src={images} />
            </span>
            <input
              style={{ width: "25rem", marginRight: "-5rem" }}
              placeholder="Write a comment..."
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              marginTop: "2rem",
            }}
          >
            <span>
              <Avatar src={images} />
            </span>
            <span>
              <b>{Assign} </b>added in {title} Card
            </span>

            <span className={styles.time}>{time} minutes ago</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discription;
