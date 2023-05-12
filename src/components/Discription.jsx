import React from 'react'
import styles from './Discription.module.css'
import { BsCreditCard2Back } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineMenu } from 'react-icons/ai'

function Discription() {
    return (
        <>
            <div className={styles.container}> 
                <div className={styles.mainone}>

                    <div>
                        <span><BsCreditCard2Back /></span>
                    </div>
                    <div className={styles.first_right}>
                        <div className={styles.cookblock}>
                            <span contentEditable>Cook Food</span><br />
                            <span>in list <u>To Do</u></span>
                        </div>
                        <div className={styles.first_second}>
                            <span>Notification</span><br />
                            <button id='watch'> <AiOutlineEye /> Watch</button>
                        </div>
                    </div>
                </div>
                <div className={styles.maintwo}>
                    <div>
                        <AiOutlineMenu />
                    </div>
                    <div className={styles.second}>
                        <h4 >Description</h4><br />
                        <p contentEditable>Add a more detailed description...</p>
                    </div>

                </div>
                <div className={styles.mainthird}>
                    <div className={styles.thirdone}>
                        <span><AiOutlineMenu /></span>
                        <span className={styles.activity}><b>Activity</b></span>
                        <span>Hide Details</span>
                    </div>
                    <div className={styles.third_second}>
                        <span className={styles.pr}><b>PR</b></span>
                        <input placeholder='write a comment...'></input>
                    </div>
                    <div className={styles.third_last}>
                        <span className={styles.pr2}><b>PR</b></span>
                        <span><b>Partha Roy </b>added this card to To Do</span><br />
                        <span className={styles.time}>2 minutes ago</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Discription
