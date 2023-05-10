import React from 'react'
import classes from "./TextBox.module.css"
import Box from "../../assets/BGTextBox/a629c4c76825bd5d529fad1fae5b77ea.png"

function TextBox(props) {
    return (
            <div className={classes.main}>

                <div className={classes.contentBox}>
                    <h1>ضمانت</h1>
                    <p>تمامی محصولات برند فوق دارای گارانتی و خدمات پس از فروش گوناگون است که به نسبت بدند و مدل در هر مورد شرایط متفاوت است.</p>
                </div>

            </div>
    )
}

export default TextBox