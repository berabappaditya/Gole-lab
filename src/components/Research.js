import React from "react";

function Research() {
  return (
    <div className="research">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-8 fit-mob">
          <div className="rch-misn my-5">
            <h2 className="fw-bold mb-3">Research mission and Vision </h2>
            <p>
              We are multidisciplinary group aim to work in the interface of
              Inorganic and Organic chemistry. We have strong research interest
              in supramolecular chemistry, biomimetic chemistry, synthetic
              peptides, stimuli-responsive materials, and supramolecular
              self-assembled functional materials.
            </p>
          </div>
          <div className="crnt-objt my-5">
            <h2 className="fw-bold mb-3 ">Current Objectives</h2>
            <h6 className="fw-bold mb-2" style={{ color: "#A33F7F" }}>
              1. Design and synthesis of higher order foldamers for biomimetic
              functions
            </h6>
            <p>
              Foldamers are artificially synthetic oligomers that adopt folded
              defined conformations such as sheets or helices which closely
              resembles secondary motifs of proteins and other biopolymers.
              Therefore, this type of synthetic compounds has huge potential to
              mimic biological functions. These are produced in a diverse
              approach: from stepwise addition of monomers to folded oligomers
              and structured synthetic polymers to artificial nucleic acids or
              protein sequences produced by directed evolution methods. We would
              like to use self-assembly approach to create higher order
              structures for molecular recognition, artificial photosynthesis,
              catalysis, photoredox catalysis and molecular electronics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
