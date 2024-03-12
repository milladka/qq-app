import PIC from '../assets/QQpage2-back.jpg'
import TypeIt from "typeit-react";
import { FileUploader } from '../components/FileUploader';

export function Upload() {
    return (
        <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${PIC})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div style={{ flex: 2 }}></div>
            <div style={{ fontSize: 14, flex: 2, width: '40%' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>
                    <div style={{ flex: 2, minHeight: 300 }}>
                        <TypeIt
                            options={{
                                speed: 50,
                                strings: [
                                    "QQ vc is a decentralized team, that support innovative projects with 3 key contexts:",
                                    "{",
                                    `&nbsp;&nbsp;&nbsp;Game,`,
                                    "&nbsp;&nbsp;&nbsp;AI,",
                                    "&nbsp;&nbsp;&nbsp;Metaverse",
                                    "}",
                                    "We've created a supportive cycle to advance innovative projects worldwide. Our services include, but aren't limited to:",
                                    "{",
                                    "&nbsp;&nbsp;&nbsp;Funding,",
                                    "&nbsp;&nbsp;&nbsp;Development,",
                                    "&nbsp;&nbsp;&nbsp;Marketing",
                                    "}",
                                    "Kindly submit your intriguing ideas by providing an FSR PDF through the form below.",
                                    "if&nbsp;(we also find your submission interesting)&nbsp;{",
                                    "&nbsp;&nbsp;&nbsp;our team will be sure to reach out to you",
                                    "}&nbsp;else&nbsp;{",
                                    "&nbsp;&nbsp;&nbsp;Never give up."
                                ]
                            }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <FileUploader />
                    </div>
                </div>
            </div>
            <div style={{ flex: 1 }}></div>
        </div >
    )
}