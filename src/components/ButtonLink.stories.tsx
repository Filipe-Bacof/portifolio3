import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink, type ButtonLinkProps } from "./ButtonLink";
import IconGithub from "../assets/icons/IconGithub";

export default {
  title: "Components/ButtonLink",
  component: ButtonLink,
  args: {
    children: <p>Google</p>,
    href: "https://www.google.com/",
    text: "Ir para o site do google",
    side: "bottom",
  },
} as Meta<ButtonLinkProps>;

export const Default: StoryObj<ButtonLinkProps> = {};

export const DownSideTooltip: StoryObj<ButtonLinkProps> = {
  args: {
    side: "bottom",
  },
};

export const IconAndText: StoryObj<ButtonLinkProps> = {
  args: {
    href: "https://github.com/",
    text: "Abrir a página inicial do Github",
    children: (
      <>
        <IconGithub />
        Abrir Github
      </>
    ),
  },
};

export const LoremTooltip: StoryObj<ButtonLinkProps> = {
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et nulla auctor, mattis ante ac, ullamcorper odio. Aliquam sagittis consequat arcu, sed malesuada sem scelerisque id. Phasellus accumsan in erat nec malesuada. Ut commodo auctor lorem non feugiat. Vestibulum eget nulla aliquam, gravida dui ac, mattis magna. Sed tincidunt ante ac eros bibendum facilisis. Aenean faucibus, orci non euismod hendrerit, justo tellus bibendum velit, non fringilla eros ex sit amet libero.",
  },
};
