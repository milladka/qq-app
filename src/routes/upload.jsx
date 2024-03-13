import TypeIt from "typeit-react";
import { FileUploader } from '../components/FileUploader';

export function Upload() {
    return (
        <div className={'toz'}>
            <div className='ofd'>
                <div className="smil">
                    <div className='iol'>
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
                                    "We've established a supportive ecosystem to propel projects worldwide, offering services including, but not limited to:",
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
                    <div className="holder-btn">
                        <FileUploader />
                    </div>
                </div>
            </div>

        </div >
    )
}