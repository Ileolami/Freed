"use client"

import React from "react";
import { useState } from "react"; 

const jobListings = [
  {
    location: "Remote",
    title: "Need a Ui/Ux designer to revamp our existing website",
    description:
      "We are seeking to revamp our website and are interested in your expertise. We require UI/UX design for five pages, <br /> featuring captivating graphics and layouts.",
    tags: ["Web design", "User experience", "User interface design", "UXUI"],
    datePosted: "22/02/2024",
    points: 10,
    payment: "100-150 USDT",
  },
  {
    location: "Remote",
    title: "Need a Ui/Ux designer to revamp our existing website",
    description:
      "We are seeking to revamp our website and are interested in your expertise. We require UI/UX design for five pages, <br /> featuring captivating graphics and layouts. These pages include the homepage, an about us page , product <br/> category, single product page, and a contact us page. Please note that this is not an e-commerce website. We <br/> prefer designs created in Figma or Photoshop more",
    tags: ["Web design", "User experience", "User interface design", "UXUI"],
    datePosted: "22/02/2024",
    points: 10,
    payment: "100-150 USDT",
  },
  {
    location: "Remote",
    title: "Need a Ui/Ux designer to revamp our existing website",
    description:
      "We are seeking to revamp our website and are interested in your expertise. We require UI/UX design for five pages, <br /> featuring captivating graphics and layouts. These pages include the homepage, an about us page , product <br/> category, single product page, and a contact us page. Please note that this is not an e-commerce website. We <br/> prefer designs created in Figma or Photoshop more",
    tags: ["Web design", "User experience", "User interface design", "UXUI"],
    datePosted: "22/02/2024",
    points: 10,
    payment: "100-150 USDT",
  },
];


export default function JobHunt() {
  return (
    <div>
      {jobListings.map((job, index) => (
        <div key={index} className="shadow-2xl bg-white p-4 mb-4">
          <span className="text-[12px] text-[#333333] font-sans">
            Location: {job.location}
          </span>
          <div>
            <h1 className="text-[24px] text-[#333333]">{job.title}</h1>
            <p
              className="text-[16px] text-[#333333] whitespace-pre-line"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></p>
            <span>
              <a href="#">more</a>
            </span>
          </div>
          <div className="flex gap-5 mt-4">
            {job.tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-300 rounded-full py-1 px-3 text-sm"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="text-sm text-gray-700">
              Posted ({job.datePosted})
            </button>
            <button className="text-sm text-gray-700 ml-2">
              Points ({job.points})
            </button>
            <button className="text-sm text-gray-700 ml-2">
              Payment ({job.payment})
            </button>
          </div>
        </div>
      ))}
    </div>
  )};