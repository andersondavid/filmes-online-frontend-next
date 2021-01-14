import { useEffect, useState } from "react";

const ButtonSelectAudio = (props) => {

  let buttonOptionList = props.handleLinktoIframe.map((option, index) => (
    <li key={index.toString()}>
      <button
        onClick={() => {
          props.setOptionCurrent(option);
        }} >
        {option.optionAudio}
      </button>
    </li>
  ));

  return buttonOptionList;
};

const Player = (props) => {
  const [optionCurrent, setOptionCurrent] = useState({});

  const handleLinks = (playerOption) => {
    let objectLinks = playerOption.map((link, index) => {
      return {
        optionAudio: link.split("|")[0],
        optionLink: link.split("|")[1],
      };
    });

    return objectLinks;
  };

  let linksToIframe = handleLinks(props.playerOption);

  useEffect(() => {
    setOptionCurrent(linksToIframe[0])
  }, [props]);

  return (
    <div className="component-player">
      <div className="iframe-player-container">
        <div className="iframe-responsive">
          <iframe allowFullScreen src={optionCurrent.optionLink} id="video-iframe" frameBorder="0" title="main-player"></iframe>
        </div>
      </div>
      <div className="select-player-option">
        <div className="header-po">
          <h3>Opções</h3>
        </div>
        <div className="select-po">
          <ul>
            <ButtonSelectAudio
              handleLinktoIframe={linksToIframe}
              setOptionCurrent={setOptionCurrent}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Player;
