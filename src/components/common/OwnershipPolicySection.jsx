import React from "react";
import { Link } from "react-router-dom";
import { LockOpen, Network, UserCheck, ArrowRight } from "lucide-react";
import { ownershipPolicy } from "../../data/companyData";
import ScrollReveal from "../ScrollReveal";

const promiseIcons = {
  "no-locks": LockOpen,
  "open-systems": Network,
  "your-choice": UserCheck,
};

/**
 * "Monopoly-Free" ownership promise — a calm, informative card that states the
 * customer's concern and Krupa's policy, linking to the full policy on the AMC page.
 */
export default function OwnershipPolicySection() {
  return (
    <ScrollReveal direction="up" distance={18}>
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal">
              After Installation · Ownership Policy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              {ownershipPolicy.badge}
            </h2>
            <Link
              to="/services/amc-maintenance#ownership-policy"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:text-teal-700 group"
            >
              <span>Read our ownership policy</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-1.5">
              {ownershipPolicy.questions.map((q) => (
                <p key={q} className="text-sm text-slate-500 italic leading-relaxed">
                  {q}
                </p>
              ))}
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{ownershipPolicy.summary}</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
          {ownershipPolicy.promises.map((p) => {
            const Icon = promiseIcons[p.id] || LockOpen;
            return (
              <li key={p.id} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  <strong className="block text-sm font-bold text-slate-900">{p.title}</strong>
                  <span className="block text-xs text-slate-500 leading-relaxed mt-0.5">{p.desc}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </ScrollReveal>
  );
}
