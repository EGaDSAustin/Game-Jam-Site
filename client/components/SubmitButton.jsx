import React from "react";
import {Button} from "@material-ui/core";
import {withRouter, Redirect} from "react-router-dom";

function RouterlessSubmitButton({history, submit}) {
    const onSubmit = () => {
        // console.log("submit code");
        
        // const sub = () => {
        //     const s = submit();
        //     console.log(s);
        //     return s;
        // }
        submit().then(res => {
            // console.log("res " + res);
            if (res) {
                // console.log("success submit");
                history.push('/');
                // Redirect({to: "/"});
                // console.log("redir");
            }
        });
    }
    return(
        <Button
            onClick={onSubmit}
        >
            Submit
        </Button>
    );
}

const SubmitButton = withRouter(RouterlessSubmitButton);

export default SubmitButton;