'use client';

import React from "react";

export default function ImageModal ({image, modalId} : {image : string, modalId : string}) {

    return(
        <div className="relative">
        <button
        className="btn btn-circle btn-sm absolute top-1 right-4 bg-base-200 bg-opacity-80 hover:bg-base-300"
        onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}
    >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
    </button> 

    <dialog id={modalId} className="modal">
    <div className="modal-box">
      <img src={image} />
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  </div>
    
    )
}