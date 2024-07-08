import React, { useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './map.css';

const WPMaps = () => {
  useEffect(() => {
    // Create a script element for the WP Maps configs
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      var wpmaps_configs = {
        client_id: "667951643122dd6de403a70f",
        publish_id: "667954b091ee25559d004f1a",
        template: "vintage",
        container: "wpm-app",
        lang: "en_US"
      };
    `;

    // Create script elements for the WP Maps scripts
    const vendorScript = document.createElement('script');
    vendorScript.type = 'text/javascript';
    vendorScript.async = true;
    vendorScript.src = 'https://stc.wpmaps.com/mapbox/chunk.bundle.vendors~main.js?v=1.1';

    const mainScript = document.createElement('script');
    mainScript.type = 'text/javascript';
    mainScript.async = true;
    mainScript.src = 'https://stc.wpmaps.com/mapbox/bundle.main.js?v=1.1';

    // Append the scripts to the document body
    document.body.appendChild(configScript);
    document.body.appendChild(vendorScript);
    document.body.appendChild(mainScript);

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      document.body.removeChild(configScript);
      document.body.removeChild(vendorScript);
      document.body.removeChild(mainScript);
    };
  }, []);

  return (
    <div className='hello-div'>
    
    <Link to="/">
    <h3 className='hello'>Home</h3></Link>
    <div id="wpm-app">
      <a data-client-id="667951643122dd6de403a70f" href="https://wpmaps.com">
        WP Maps Locator Software
      </a>
      </div>
    </div>
  );
};

export default WPMaps;
