import Swal from "sweetalert2";


export const showMessageSucess =(menssage) => {
    const Toast = Swal.mixin({
        toast:true,
        position: "top-end",
        showConfirmButton: false,
        timer:3000,
        timerProgressBar: true,
        didOpen:(toast) =>{
            toast.onmouseenter = Swal.stopTimer,
            toast.onmouseenter = Swal.resumeTimer;
        }
    })
    Toast.fire({
        icon: "success",
        title: menssage
    })
}



