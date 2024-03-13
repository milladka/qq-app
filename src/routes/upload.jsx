import { FileUploader } from '../components/FileUploader';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

export function Upload() {
    const [LineTwo, setLineTwo] = useState(false)
    const [LineThree, setLineThree] = useState(false)
    const [LineFour, setLineFour] = useState(false)
    const [LineFive, setLineFive] = useState(false)
    const [LineSix, setLineSix] = useState(false)
    const [LineSeven, setLineSeven] = useState(false)
    const [LineEight, setLineEight] = useState(false)
    const [LineNine, setLineNine] = useState(false)
    const [LineTen, setLineTen] = useState(false)
    const [LineEleven, setLineEleven] = useState(false)
    const [Line12, setLine12] = useState(false)
    const [Line13, setLine13] = useState(false)
    const [Line14, setLine14] = useState(false)
    const [Line15, setLine15] = useState(false)
    const [Line16, setLine16] = useState(false)
    const [Line17, setLine17] = useState(false)

    return (
        <div className={'toz'}>
            <div className='ofd'>
                <div className="smil">
                    <div className='iol'>
                        <TypeAnimation
                            sequence={[
                                'QQ vc is a decentralized team, that support innovative projects with 3 key contexts:',
                                2000,
                                () => {
                                    setLineTwo(true);
                                }
                            ]}
                            wrapper="div"
                            cursor={false}
                        />
                        {
                            LineTwo ?
                                <TypeAnimation
                                    sequence={[
                                        '{',
                                        () => {
                                            setLineThree(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineThree ?
                                <TypeAnimation
                                    sequence={[
                                        `     Game`,
                                        () => {
                                            setLineFour(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#d99d1c' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineFour ?
                                <TypeAnimation
                                    sequence={[
                                        `     AI`,
                                        () => {
                                            setLineFive(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#fff' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineFive ?
                                <TypeAnimation
                                    sequence={[
                                        `     Metaverse`,
                                        () => {
                                            setLineSix(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#d92604' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineSix ?
                                <TypeAnimation
                                    sequence={[
                                        '}',
                                        () => {
                                            setLineSeven(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineSeven ?
                                <TypeAnimation
                                    sequence={[
                                        `We've established a supportive ecosystem to propel projects worldwide, offering services including, but not limited to:`,
                                        () => {
                                            setLineEight(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#afacbe' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineEight ?
                                <TypeAnimation
                                    sequence={[
                                        `{`,
                                        () => {
                                            setLineNine(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#afacbe' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineNine ?
                                <TypeAnimation
                                    sequence={[
                                        `Funding`,
                                        () => {
                                            setLineTen(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#d99d1c' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineTen ?
                                <TypeAnimation
                                    sequence={[
                                        `Development`,
                                        () => {
                                            setLineEleven(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#fff' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            LineEleven ?
                                <TypeAnimation
                                    sequence={[
                                        `Marketing`,
                                        () => {
                                            setLine12(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#d92604' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            Line12 ?
                                <TypeAnimation
                                    sequence={[
                                        `}`,
                                        () => {
                                            setLine13(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            Line13 ?
                                <TypeAnimation
                                    sequence={[
                                        `Kindly submit your intriguing ideas by providing an FSR PDF through the form below.`,
                                        () => {
                                            setLine14(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#00b055' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            Line14 ?
                                <TypeAnimation
                                    sequence={[
                                        `If we also find your submission interesting = our team will be sure to reach out to you.`,
                                        () => {
                                            setLine15(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#50b5ef' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            Line15 ?
                                <TypeAnimation
                                    sequence={[
                                        `Else: Never give up.`,
                                        () => {
                                            setLine16(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#ff3805' }}
                                    cursor={false}
                                />
                                : null
                        }
                        {
                            Line16 ?
                                <TypeAnimation
                                    sequence={[
                                        `Nostr: 1048ffayfzul78smulvqxr9k7y2nvht5erhfcnmgpne8uh0yyhlgsu4877x`,
                                        () => {
                                            setLine17(true);
                                        }
                                    ]}
                                    wrapper="div"
                                    style={{ color: '#ffc000' }}
                                    cursor={false}
                                />
                                : null
                        }
                    </div>
                    <div className="holder-btn">
                        {
                            Line17 && <FileUploader />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}