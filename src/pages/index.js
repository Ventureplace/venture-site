import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import EmailForm from "../components/emailForm";
import FooterCopy from "../components/footerCopy";

export default function Component() {
  return (
    <div>
      <StaticImage src="../images/logo_no_type.png" alt="My image" />
      <EmailForm />
      <FooterCopy /> 
    </div>
  );
}
