HTTPS AGENT
=========

A small library that returns https agent

## Installation

  `npm i @ivalice/tiny`

## Usage

    const tiny = require("@ivalice/tiny");
    
    tiny({ rejectUnauthorized: false })
  
  Output should return you an HTTPS Agent
