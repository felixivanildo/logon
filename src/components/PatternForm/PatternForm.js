import React, { useState, } from "react";
import "./pattern.css";
// import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

function PatternFrom(elements) {
  const [activeIndex1, setActiveIndex1] = useState(null);
//   const [activeIndex2, setActiveIndex2] = useState(null);
    const Props = elements.elements
    

  
  const toggleAccordion = (index) => {

    if(index === 0){
        if (activeIndex1 === index) {
            setActiveIndex1(null);
          } else {
            setActiveIndex1(index);
          }
    }
    
    // if(index === 1){
    //     if (activeIndex2 === index) {
    //         setActiveIndex2(null);
    //       } else {
    //         setActiveIndex2(index);
    //       }
    // }
  };
  

  return (
    <div id="faq">
      <div className="container">
        {/* <h1>Dados Pessoais</h1> */}
        <div className="accordion">
          <dl>
            <dt>
              <div
                className={`accordionTitle ${
                  activeIndex1 === 0 ? "active" : ""
                }`}             
                onClick={() => toggleAccordion(0)}
              >
                {Props.title}
              </div>
            </dt>
            <dd
              className={`accordionItemCollapsed ${
                activeIndex1 !==  0 ? "accordionItem" : ""
              }`}
            >
              <div>
                {Props.content}
              </div>
            </dd>
            {/* <dt>
              <div
                className={`accordionTitle ${
                  activeIndex2 === 1 ? "active" : ""
                }`}
                
                onClick={() => toggleAccordion(1)}
              >
                Test Simple Flat UI CSS Accordion 2
              </div>
            </dt>
            <dd
              className={`accordionItemCollapsed ${
                activeIndex2 !== 1 ? "accordionItem" : ""
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris.
              </p>
            </dd> */}

            
          </dl>
        </div>
      </div>
    </div>
  );
}

export default PatternFrom;
