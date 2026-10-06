import React from "react";
import { Wrench } from "lucide-react";
import { servicesMaster } from "../data/servicesMaster";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import Seo from "../components/common/Seo";
import CustomizationProcess from "../components/CustomizationProcess";

export default function ServiceInstallation() {
  return (
    <>
      <Seo
        title="Elevator Installation & Commissioning Process"
        description="Our end-to-end installation workflow — from initial requirement consultation and building survey through manufacturing, on-site erection, and statutory commissioning."
      />
      <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden">
        <PageHero
          breadcrumbs={[{ label: "Services", to: "/services" }, { label: "Installation Process" }]}
          icon={Wrench}
          badge="Certified Engineering • Lifecycle Support"
          title="Elevator Installation & Commissioning Process"
          description={servicesMaster.headline}
        />

        <div className="pt-4 pb-2">
          <CustomizationProcess />
        </div>
      </div>

      <CTASection contained
        title="Ready to Plan Your Installation?"
        subtitle="Our engineering team provides complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat and Western India."
        variant="gradient"
        className="rounded-none"
      />
    </>
  );
}
