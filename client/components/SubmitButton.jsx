import React from "react";
import {Button} from "@material-ui/core";
import {withRouter, Redirect} from "react-router-dom";

function RouterlessSubmitButton({history, submit}) {
    const onSubmit = submit
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