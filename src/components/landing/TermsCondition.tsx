import React from "react";
import { ParagraphWrapper, LinkWrapper, ListWrapper } from "./TextWrappers";

const TermsOfUse = () => (
  <ParagraphWrapper title="Terms of Use">
    Please read these terms of use ("terms of use”, "agreement") carefully before using the 
    <LinkWrapper link="http://www.rapidurbanism.com" linkText={"www.RapidUrbanism.com"} /> 
    website, including any subdomains hosting versions of the Rapid Urbanism Explorer (“Explorer”), 
    such as 
    <LinkWrapper link="http://explorer.rapidurbanism.com" linkText={"Explorer.RapidUrbanism.com"} /> or 
    <LinkWrapper link="http://rue03.rapidurbanism.com" linkText={"RUE03.RapidUrbanism.com"} />, 
    ("website", "service") operated by 
    <em> IAUAI gGmbH / Rapid Urbanism alias Matthias Nohn </em> ("us”, “we", "our”). 
    IAUAI gGmbH shall be solely responsible for any content related to the Explorer, 
    especially any prototype (see below) – while 
    <em> Rapid Urbanism alias Matthias Nohn </em> is a service provider to IAUAI, only.
  </ParagraphWrapper>
)

const ConditionsOfUse = () => (
  <ParagraphWrapper title="Conditions of Use">
    By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. 
    If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. 
    We only grant use and access of this website, its products, and its services to those who have accepted its terms.
  </ParagraphWrapper>
)

const Demonstration = () => (
  <ParagraphWrapper title="Demonstration Purpose Only">
    <em> This website provides access to an early prototype of the Explorer (“Prototype”) for demonstration purposes, solely. </em>
    In contrast, the use for real-life applications shall be considered outside of the uses permitted under this Agreement. 
    (For exceptions see 
    <em> Option for Real-Life Application </em>
    .) 
    The Prototype may not be expected to be fit for real-life applications. 
    Consequently, it shall be expected that the use of the Prototype for real-life applications (e.g., real urban projects) is severely risky and potentially harmful. 
    Harm may include but is not limited to loss and/or misuse of data, or the generation of unfeasible or unsafe scenarios – even though appearing feasible or safe in the simulation, possibly. 
    Therefore, the use of the Prototype for real-life projects but without professional support and comprehensive due diligence shall be considered outside of the permitted terms of use, and we assume no responsibility for liabilities related to misuse.
  </ParagraphWrapper>
)

const RLApplication = () => (
  <>
  <ParagraphWrapper title="Option for Real-Life Application">
    Conditional on the combination with professional advisory services, the Prototype may provide the basis for further development towards the deployment in real-life applications, including but not limited to urban projects, policy analysis, or education. 
  </ParagraphWrapper>
  <ParagraphWrapper>
    If so, any use of the Prototype shall be at the sole risk and full responsibility of the (compulsory) professional service provider who shall perform due diligence on all aspects of the project and the Explorer, including but not limited to software and model architectures, parameters and algorithms, all inputs and outputs, and data security. 
    If so, subject to the terms described under 
    <em> Intellectual property </em>
    below, the Explorer shall be installed on a website controlled by the service provider and – as may be needed – be adapted and further developed to meet the requirements of the specific case.
  </ParagraphWrapper>
  <ParagraphWrapper>
    IAUAI gGmbH offers the required professional advisory services on demand and against fair compensation. 
    You are free to procure the services by any other qualified entity.
  </ParagraphWrapper>
  </>
)

const PrivacyPolicy = () => (
  <ParagraphWrapper title="Privacy Policy">
    Before you continue using our website, we advise you to read our 
    <LinkWrapper link="" linkText="privacy policy"/>
    regarding our user data collection. 
    It will help you better understand our practices.
  </ParagraphWrapper>
)

const AgeRestriction = () => (
  <ParagraphWrapper title="Age Restriction">
    You must be at least 18 (eighteen) years of age before you can use this website. 
    By using this website, you warrant that you are at least 18 years of age, and you may legally adhere to this Agreement. 
    We assume no responsibility for liabilities related to age misrepresentation.
  </ParagraphWrapper>
)

const UserAccounts = () => (
  <ParagraphWrapper title="User Accounts">
    As a user of this website, you may be asked to register with us and provide private information. 
    You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. 
    You are also responsible for all activities that occur under your account or password.
  </ParagraphWrapper>
)

const SecurityRisks = () => (
  <ParagraphWrapper title="Security and Risks">
    If you think there are any possible issues regarding the security of your account on the website or of the website itself, inform us immediately so we may address it accordingly. 
    We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.
  </ParagraphWrapper>
)

const IP = () => {
  const partnerships = [
    {
      title: "2008-present",
      content: (
        <ParagraphWrapper>
          The Explorer digitalizes and automatizes patterns of the 
          <LinkWrapper link="http://rapidurbanism.com/Framework/" linkText="Rapid Urbanism Framework"/>
          , curated by Matthias Nohn and published under a Creative Commons Attribution Non-Commercial Share Alike 4.0 International License. 
        </ParagraphWrapper>
      )
    },
    {
      title: "2019-2020",
      content: (
        <ParagraphWrapper>
          An initial feasibility study was supported by the German Federal Ministry of Education and Research 
          <LinkWrapper link="http://www.bmbf.de/" linkText="BMBF"/>
          and developed in collaboration with the 
          <LinkWrapper link="https://www.dfki.de/en/web/technologies-applications/living-labs/smartcity-living-lab/" linkText="Smart City Living Lab"/>
          at the German Research Center for Artificial Intelligence 
          <LinkWrapper link="http://www.dfki.de/" linkText="DFKI"/>
          and the 
          <LinkWrapper link="https://www.uni-weimar.de/de/architektur-und-urbanistik/professuren/computational-architecture/" linkText="Department of Computational Architecture"/>
          at 
          <LinkWrapper link="http://www.uni-weimar.de/" linkText="Bauhaus University Weimar"/> 
        </ParagraphWrapper>
      )
    },
    {
      title: "2020-present",
      content: (
        <ParagraphWrapper>
          The first Prototype is developed in collaboration with 
          <LinkWrapper link="https://code-the-future.com/" linkText="Code the Future" />
          (platform development) and the 
          <LinkWrapper link="http://design-automation.net/" linkText="Design Automation Lab" />
          at the 
          <LinkWrapper link="http://nus.edu.sg/" linkText="National University of Singapore" />
          (4D model), with generous support of 
          <LinkWrapper link="http://www.hiltifoundation.org/en/" linkText="The Hilti Foundation" />
          and 
          <LinkWrapper link="https://www.habitat.org/about" linkText="Habitat for Humanity" />
        </ParagraphWrapper>
      )
    }
  ]
  const licenses = [
    {
      title: "",
      content: <LinkWrapper link={`${process.env.PUBLIC_URL}/licenses/rue_licenses.csv`} linkText="Lucky Sheet: MIT" />
    },
    {
      title: "",
      content: <LinkWrapper link={`${process.env.PUBLIC_URL}/licenses/rue_licenses.csv`} linkText="Mobius: MIT" />
    },
    {
      title: "",
      content: <LinkWrapper link={`${process.env.PUBLIC_URL}/licenses/rue_licenses.csv`} linkText="List of all third-party software and licenses" />
    }
  ]
  return (
    <>
    <ParagraphWrapper title="Intellectual Property">
      The Rapid Urbanism Explorer is developed by the non-profit Initiative for Advanced Urbanization and Artificial Intelligence, incorporated as IAUAI gGmbH, in partnership with:   
      <ListWrapper list={ partnerships }/>
    </ParagraphWrapper>
    <ParagraphWrapper>
      <em> Licenses </em><br/>
      This version of the Rapid Urbanism Explorer software is open source published under MIT license. 
      The following third-party software (with their own specific licenses) is included: 
      <ListWrapper list={ licenses }/>
    </ParagraphWrapper>
    </>
  )
}

const ApplicableLaw = () => (
  <ParagraphWrapper title="Applicable Law">
    By visiting this website, you agree that the laws applicable in Berlin, Germany will govern these terms and conditions, and/or any dispute of any sort that might come between us and you, or its business partners and associates. 
    You also agree that, by principle, the laws applicable in Berlin, Germany will be applied in lieu of any potentially conflicting laws.
  </ParagraphWrapper>
)

const Disputes = () => (
  <ParagraphWrapper title="Disputes">
    Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by courts applicable to Berlin, Germany and you consent to exclusive jurisdiction and venue of such courts.
  </ParagraphWrapper>
)

const Indemnification = () => (
  <ParagraphWrapper title="Indemnification">
    You agree to indemnify us and our affiliates. 
    You also agree to hold us and our affiliates harmless against any legal claims and any demands that may arise from your use or misuse of our services. 
    We reserve the right to select our own legal counsel.
  </ParagraphWrapper>
)

const Liability = () => (
  <ParagraphWrapper title="Limitation on Liability">
    <em>We are not </em>
    liable for any damages that may occur to you or any third party because of your use or misuse of our website. 
  </ParagraphWrapper>
)

const Modifications = () => (
  <>
    <ParagraphWrapper title="Modifications to this Agreement">
      <em>We </em>
      reserve the right to edit, modify, and change this Agreement any time. 
      We shall let you / our users know of these changes through electronic mail. 
      In lieu of electronic mail, we may update this information on the webpage and require you / users to confirm your / their agreement with the revised Agreement before being able to use the website again.
    </ParagraphWrapper>
    <ParagraphWrapper>
      This current Agreement is an understanding between us and you, and it supersedes and replaces all prior agreements regarding the use of this website.
    </ParagraphWrapper>
  </>
)

const Provisions = () => (
  <ParagraphWrapper title="Final Provisions">
    The ineffectiveness of any one or multiple provisions of this Agreement does not affect the validity of any other. 
    If so, 
    <em> we </em> 
    shall possess the exclusive right to determine a valid provision, which best achieves the original purpose of the ineffective provision.
  </ParagraphWrapper>
)

const TermsCondition = () => {
  return (
    <article>
      <TermsOfUse />
      <ConditionsOfUse />
      <Demonstration />
      <RLApplication />
      <PrivacyPolicy />
      <AgeRestriction />
      <UserAccounts />
      <SecurityRisks />
      <IP />
      <ApplicableLaw />
      <Disputes />
      <Indemnification />
      <Liability />
      <Modifications />
      <Provisions />
    </article>
  )
}

export default TermsCondition