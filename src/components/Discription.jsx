import React, { useState, useEffect, useRef } from "react";
import styles from "./Discription.module.css";
import { BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineEye, AiOutlineMenu } from "react-icons/ai";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { todolist } from "../store/store";

function Discription() {
  const [title, settitle] = useState("");
  let { paramsid } = useParams();
  let navigate = useNavigate();
  const containerRef = useRef(null);
  let dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.Todo.list;
  });

  useEffect(() => {
    list.map((e) => {
      e.children.map((child) => {
        if (child.id == paramsid) {
          settitle(child.title);
        }
      });
    });

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

  function handleChange(e) {
    const updatedTitle = e.target.value;
    settitle(updatedTitle);
    dispatch(
      todolist.actions.onUpdate({ childId: paramsid, value: updatedTitle })
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
              <input value={title} onChange={handleChange} />
              <br />
            </div>
            <div className={styles.first_second}>
              <span>Notification</span>
              <br />
              <button id="watch">
                {" "}
                <AiOutlineEye /> Watch
              </button>
            </div>
          </div>
        </div>
        <div className={styles.maintwo}>
          <div>
            <AiOutlineMenu />
          </div>
          <div className={styles.second}>
            <h4>Description</h4>
            <br />
            <p>Add a more detailed description...</p>
          </div>
        </div>
        <div className={styles.mainthird}>
          <div className={styles.thirdone}>
            <span>
              <AiOutlineMenu />
            </span>
            <span className={styles.activity}>
              <b>Activity</b>
            </span>
            <span>Hide Details</span>
          </div>
          <div className={styles.third_second}>
            <span className={styles.pr}>
              <b>PR</b>
            </span>
            <input placeholder="write a comment..."></input>
          </div>
          <div className={styles.third_last}>
            <span className={styles.pr2}>
              <b>PR</b>
            </span>
            <span>
              <b>Partha Roy </b>added this card to To Do
            </span>
            <br />
            <span className={styles.time}>2 minutes ago</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discription;
