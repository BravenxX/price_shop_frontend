import { MainNavbar } from "..";

export type MainContainerProps = {
  children: JSX.Element;
};

export const MainContainer = ({ children }: MainContainerProps) => (
  <div>
    <MainNavbar children={children} />
  </div>
);
