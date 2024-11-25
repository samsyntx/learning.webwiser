"use client";

import DefaultNavbar from "@/components/custom/DefaultNavbar";
import store from "@/store/store";
import { Provider } from "react-redux";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DefaultNavbar />
      {children}
    </Provider>
  );
}
