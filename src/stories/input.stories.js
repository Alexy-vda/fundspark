import React from "react";
import Input from "../components/input/input";

export default {
  tags: ["autodocs"],
  title: "Basic/Input",
  component: Input,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["Default", "MultiLine", "Password", "Email"],
    },
    status: {
      control: { type: "select" },
      options: ["Default", "Error", "Validate"],
    },
  },
};

export const singleLine = {
  args: {
    type: "Default",
    status: "Default",
    help:true,
    label: "Label",
    helper: "This text is an helper",
  },
};

export const password = {
  args: {
    type: "Password",
    status: "Default",
    help:true,
    label: "Password",
    helper: "This text is an helper",
  },
};

export const multiline = {
  args: {
    type: "Multiline",
    status: "Default",
    help:true,
    label: "Multiline",
    helper: "This text is an helper",
  },
};

export const email = {
  args: {
    type: "Email",
    status: "Default",
    help:true,
    label: "Email",
    helper: "This text is an helper",
  },
};

export const search = {
    args: {
      type: "Search",
      status: "Default",
      help:true,
      label: "search",
      helper: "This text is an helper",
    },
  };