/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
function DrumPad({drumpadkeys, playSound, setActivateKey}) {
    return (
        <div>
            <div id="title">
                <h1>DRUMMITY DRUM</h1>
            </div>
            <div id="pad">
                    {drumpadkeys.map(drumy => 
                    <div
                    key={drumy.src}
                    id={drumy.id}
                    onClick={
                        () => {
                        playSound(drumy.keyTrigger)}
                        }
                    className="drum-pad">
                        <audio 
                        className="clip"
                        src={drumy.url} 
                        id={drumy.keyTrigger}>
                        </audio>
                        {drumy.keyTrigger}
                    </div>)}
               
               
            </div>
        </div>
    )
}

export default DrumPad