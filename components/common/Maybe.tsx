import React from "react";

const Maybe = (props: any) => {
    let { test, children } = props;
    return <>
        {test && children}
    </>
}

export default Maybe;
