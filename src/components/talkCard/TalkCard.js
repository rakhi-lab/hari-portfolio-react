import React from "react";
import "./TalkCard.css";
import Button from "../button/Button";

export default function TalkCard({ talkDetails }) {
  return (
    <div>
      <div class="container">
        <div class="rectangle">
          <div class="diagonal-fill"></div>
          <div class="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <Button text="Slides" href={talkDetails.slides_url} newTab={true} />
            <Button text="Event" href={talkDetails.event_url} newTab={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
