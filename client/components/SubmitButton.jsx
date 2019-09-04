import React from "react";
import {Button} from "@material-ui/core";

function SubmitButton({submit}) {
    const onSubmit = submit
    return(
        <Button
            onClick={onSubmit}
        >
            Submit
        </Button>
    );
}


export default SubmitButton;