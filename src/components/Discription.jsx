import React, { useState, useEffect, useRef } from "react";
import styles from "./Discription.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { todolist } from "../store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Avatar from "@mui/joy/Avatar";

function Discription() {
  const [random, setRandom] = useState(Math.floor(Math.random() * 50));
  const [images, setImages] = useState([]);
  const [title, settitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [editable, setEditable] = useState(false);
  const [describe, setDescribe] = useState(false);
  const [priority, setPriority] = useState("");
  const [Assign, setAssign] = useState("");

  const [comment, setComment] = useState([]);
  const [List, setList] = useState("");

  useEffect(() => {
    dataFetch();
  }, []);

  function dataFetch() {
    fetch("./user.json")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setImages(data[random]?.image);
      });
    console.log("image", images);
  }
  let { paramsid } = useParams();
  const inputref = useRef();
  let navigate = useNavigate();

  let dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.Todo.list;
  });
  function handleClickDecription() {
    setDescribe(true);
  }
  console.log(list);
  useEffect(() => {
    list.map((e) => {
      e?.children?.map((child) => {
        setList(e);
        if (child.id == paramsid) {
          settitle(child.title);
          setPriority(child.Priority);
          setAssign(child.AssignName);
          console.log(child.description);
          setDiscription(child.description);
          setComment(child.comment);
          console.log(discription);
          console.log("commemnrjn", child.comment);
        }
      });
    });
  }, [list]);
  function handleNaviagte() {
    navigate("/");
  }

  const handleClick = () => {
    setEditable(true);
  };

  const handleBlur = () => {
    setDescribe(false);
    setEditable(false);
  };

  function handleChange(e) {
    const updatedTitle = e.target.value;
    settitle(updatedTitle);
    dispatch(
      todolist.actions.onUpdate({ childId: paramsid, value: updatedTitle })
    );
  }
  function handleAssign(e) {
    setAssign(e.target.value);
    dispatch(
      todolist.actions.onAssign({
        childId: paramsid,
        AssignName: e.target.value,
      })
    );
  }
  function handleClickComment() {
    let value = inputref.current.value;
    setComment(value);
    dispatch(
      todolist.actions.onComment({
        childId: paramsid,
        comment: value,
      })
    );
  }

  function handlePrority(e) {
    setPriority(e.target.value);
    dispatch(
      todolist.actions.onPrority({
        childId: paramsid,
        Priority: e.target.value,
      })
    );
  }
  function handleDescription(e) {
    setDiscription(e.target.value);
    dispatch(
      todolist.actions.onDescription({
        childId: paramsid,
        description: e.target.value,
      })
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mainone}>
          <div className={styles.mainone}>
            <div>
              <BsCreditCard2Back />
            </div>
            <div>
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
          <div className={styles.closeButton} onClick={handleNaviagte}>
            ❌
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

            {describe ? (
              <textarea
                style={{
                  value: { discription },
                  width: "26.5rem",
                  height: "3rem",
                  marginBottom: "1rem",
                  border: "none",
                }}
                onBlur={handleBlur}
                autoFocus
                type="textarea"
                placeholder="Add a more detailed description..."
                onChange={handleDescription}
              ></textarea>
            ) : (
              <p onClick={handleClickDecription}>{discription}</p>
            )}
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
            <div
              style={{
                height: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <input
                ref={inputref}
                style={{
                  width: "20rem",
                  marginRight: "-5rem",
                  border: "1px solid",
                  autoFocus: "false",
                  backgroundColor: "rgb(236, 243, 243)",
                  height: "2rem",
                }}
                placeholder="Write a comment..."
              ></input>
              <span
                style={{ marginLeft: "3rem", color: "rgb(24, 238, 24)" }}
                onClick={handleClickComment}
              >
                <AddCircleIcon />
              </span>
            </div>
          </div>

          <div style={{}}>
            {Array.isArray(comment) &&
              comment.map((e) => (
                <span>
                  {
                    <>
                      <p
                        style={{
                          paddingLeft: "1rem",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          {" "}
                          {`✅ ${e.comment} has added to ${title} Card`}
                        </span>
                        <span
                          style={{
                            fontSize: "small",
                            marginLeft: "1rem",
                          }}
                        >
                          {e.time}
                        </span>
                      </p>
                    </>
                  }
                </span>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Discription;
