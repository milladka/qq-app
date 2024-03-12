import { useRef, useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
export const FileUploader = () => {
    const [startUpload, setStartUpload] = useState(false);
    const hiddenFileInput = useRef(null);
    const handleClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        let file_size = event.target.files[0].size;

        if (event.target.files[0].type !== 'application/pdf') {
            toast.error("The upload file type must be PDF");
            return;
        }
        if (file_size > 10000000) {
            toast.error("The size of the uploaded file must be 10 MB maximum");
            return;
        }
        toast.success(file_size);
        setStartUpload(true)
        setStartUpload(false)

        const fileUploaded = event.target.files[0];
        //handleFile(fileUploaded);
    };
    return (
        <>
            <button disabled={startUpload} className="button-upload" onClick={handleClick}>
                {
                    startUpload ? 'Uploading ...' : 'Upload a file'
                }
            </button>
            <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                accept="application/pdf"
                style={{ display: "none" }}
            />
        </>
    );
};
