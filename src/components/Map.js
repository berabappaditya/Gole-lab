import React from "react";

function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.817449754489!2d77.57264540987792!3d28.525916289037855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c94db9a81fb91%3A0xf5f4d7686cc71561!2sShiv%20Nadar%20University%20Research%20Annexe!5e0!3m2!1sen!2sin!4v1622710558465!5m2!1sen!2sin"
        width={"100%"}
        height={400}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="SNU"
      />
    </div>
  );
}

export default Map;
