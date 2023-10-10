"use client";

import React from "react";

import { useEstablishment } from "@/app/_helpers/web/hooks/useEstablishment";
import Nav from "@/app/components/Nav/Nav";
import PrayerScreens from "@/app/components/PrayerScreens/PrayerScreens";
import Loader from "@/app/components/Loader/Loader";
import SideBarLayout from "@/app/components/__Layouts/homesidebar";
import PrayersSidebar from "./PrayersSidebar";
import PrayersPage from "./PrayersPage";
import ArticlesPage from "../../articles/[...slug]/Articles";
function PrayerScreensPage({ screens, orgUsers }) {
  const { currentEstablishment, loading } = useEstablishment(orgUsers);

  return (
    <SideBarLayout
      sideBar={<PrayersSidebar />}
      currentEstablishment={currentEstablishment}
      loading={loading}
    >
      <PrayersPage />
      {/* <ArticlesPage /> */}
    </SideBarLayout>
  );
}

export default PrayerScreensPage;
