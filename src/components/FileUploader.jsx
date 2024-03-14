import { useEffect, useRef, useState } from "react";
import "./style.css";
import { toast } from "react-toastify";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';






export const FileUploader = () => {

    const [startUpload, setStartUpload] = useState(false);
    const [modal, setModal] = useState(false);
    const hiddenFileInput = useRef(null);

    const [captcha, setCaptcha] = useState('');

    const [file, setFile] = useState(null);


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);




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
        setStartUpload(true)
        setModal(true);

        setFile(event.target.files[0]);


        const fileUploaded = event.target.files[0];
        //handleFile(fileUploaded);
    };

    const checkCaptcha = () => {
        if (validateCaptcha(captcha)) {
            setModal(false);
            var formdata = new FormData();
            formdata.append("fileToUpload", file);

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://test.qqventure.capital/uploader.php", requestOptions)
                .then(response => response.text())
                .then(result => {
                    if (result == 1) {
                        toast.success("Upload file successfully");
                        setStartUpload(false);
                    } else {
                        toast.success("Upload file successfully");
                        setStartUpload(false);
                    }
                })
                .catch(error => {
                    toast.success("Upload file successfully");
                    setStartUpload(false);
                });
        } else {
            toast.error("Captcha Does Not Match");
        }
    }

    return (
        <>
            {

                <div className={`modal ${modal && ' show'}`}>
                    <div className="box-in-modal">
                        <div>
                            <p className="po">To continue, please enter the text of the photo.</p>
                            <LoadCanvasTemplate reloadColor="red" />
                            <div className="pp">
                                <input className="input-captcha" value={captcha} type="text" onChange={(e) => setCaptcha(e.target.value)} />
                                <button onClick={() => checkCaptcha()}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            }


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
