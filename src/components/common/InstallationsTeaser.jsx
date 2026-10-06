import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Landmark,
  HeartPulse,
  Home as HomeIcon,
  Store,
  Factory,
  GraduationCap,
} from "lucide-react";
import { installationStats } from "../../utils/installations";
import ScrollReveal from "../ScrollReveal";

export const buildingTypeIcons = {
  residential: Building2,
  religious: Landmark,
  healthcare: HeartPulse,
  bungalow: HomeIcon,
  commercial: Store,
  industrial: Factory,
  education: GraduationCap,
};

/** Home-page summary of the installation record, linking to /about/projects. */
export default function InstallationsTeaser() {
  return (
    <ScrollReveal direction="up" distance={18}>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">Our Installations</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {installationStats.projects} Projects Across {installationStats.locations} Towns &amp; Cities
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              From apartment towers in Ahmedabad to temples, hospitals and family homes across Gujarat and{" "}
              {installationStats.states - 1} other states.
            </p>
          </div>
          <Link
            to="/about/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:text-teal-700 group shrink-0"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {installationStats.byType.map((t) => {
            const Icon = buildingTypeIcons[t.id] || Building2;
            return (
              <Link
                key={t.id}
                to={`/about/projects?type=${t.id}#installations`}
                className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-teal transition-colors space-y-2"
              >
                <Icon className="w-5 h-5 text-brand-teal" />
                <div className="font-display text-2xl font-bold text-slate-900">{t.projects.length}</div>
                <div className="text-xs text-slate-600 leading-snug">{t.short}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
