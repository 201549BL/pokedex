import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Capsule from "../capsule";
import TypePill from "../type/TypePill";

const Sprite = ({ name, spriteUrl, types = [] }) => {
  return (
    <Capsule
      upperContent={name}
      upperContentSecondary={
        <div style={{ display: "flex" }}>
          {types.map((t) => (
            <TypePill key={t} type={t} />
          ))}
        </div>
      }
      lowerContent={
        <Image
          width="500"
          height="500"
          src={spriteUrl}
          alt={`Image of ${name}`}
        ></Image>
      }
    >
      <h1>{name}</h1>
    </Capsule>
  );
};

export default Sprite;
