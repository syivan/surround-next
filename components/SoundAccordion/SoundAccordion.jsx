"use client";

import { Accordion } from "react-bootstrap";
import SoundBar from "@/components/SoundBar/SoundBar";

export default function SoundAccordion() {
  return (
    <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>The Sound Ambience</Accordion.Header>
        <Accordion.Body>
          <SoundBar />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
