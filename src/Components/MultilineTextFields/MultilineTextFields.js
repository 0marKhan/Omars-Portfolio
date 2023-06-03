import * as React from "react";
import "./MultilineTextFields.scss";

export default function MultilineTextFields() {
  return (
    <div className="multiline">
      <textarea type="text" placeholder="Message" />
    </div>
  );
}
