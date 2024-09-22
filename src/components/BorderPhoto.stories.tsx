import type { Meta, StoryObj } from "@storybook/react";
import { BorderPhoto, type BorderPhotoProps } from "./BorderPhoto";

export default {
  title: "Components/BorderPhoto",
  component: BorderPhoto,
  args: {
    src: "https://avatars.githubusercontent.com/Filipe-Bacof",
    alt: "Foto do Github do Filipe Bacof",
    href: "https://github.com/Filipe-Bacof",
    text: "Ir para o Github do Filipe Bacof",
    side: "bottom",
    small: false,
    xsmall: false,
    classes: "",
  },
  argTypes: {
    small: {
      control: {
        type: "boolean",
      },
    },
    side: {
      options: ["left", "top", "right", "bottom"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<BorderPhotoProps>;

export const Default: StoryObj<BorderPhotoProps> = {};
