import swal from "sweetalert2";

export const successResponse = async (data) => {
    return await new swal({
        title: "Success!",
        text: data,
        icon: "success",
        confirmButtonColor: "cornflowerblue"
    })
}

export const warningResponse = (text) => {
    new swal({
        title: "Warning!",
        text: text,
        icon: "warning",
        confirmButtonColor: "cornflowerblue"
    })
}

export const errorResponse = (text = null) => {
    new swal({
        title: "Error!",
        text: text ? text : "",
        icon: "error",
        confirmButtonColor: "cornflowerblue"
    })
}

export const questionResponse = async (data) => {
    return await new swal({
        title: "Are you sure?",
        icon: "question",
        text: data,
        showCancelButton: true,
        confirmButtonColor: "#b3e0ff",
        cancelButtonColor: "lightgrey"
    })
}

export const validator = (data) => {
    var ret = {
        status: false,
        message: ''
    };

    const keys = Object.keys(data);
    for(var i=0;i<keys.length;i++){
        const val = data[keys[i]];
        if(val === ""){
            ret.message = keys[i][0].toUpperCase() + keys[i].slice(1) + " cannot be empty!";
            return ret;
        }
    }
    ret.status = true;
    return ret;
}

export const appendImage = (data) => {
    if (data.files && data.files[0]) {
        data.callback();
    //   setImage(URL.createObjectURL(data.files[0]));
    }
}