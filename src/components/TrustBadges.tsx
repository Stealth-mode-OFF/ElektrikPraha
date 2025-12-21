import { Shield, Clock, Award, Users, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "../utils/i18n";

export function TrustBadges() {
  const { language } = useLanguage();

  const badges = [
    {
      icon: Shield,
      label: language === 'cz' ? 'Osvědčení NV 194/2022' : 'Certified NV 194/2022',
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      icon: Award,
      label: language === 'cz' ? '30+ let praxe' : '30+ years exp.',
      color: 'text-amber-500',
      bg: 'bg-amber-50'
    },
    {
      icon: Users,
      label: language === 'cz' ? '100+ projektů' : '100+ projects',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: Clock,
      label: language === 'cz' ? 'Odpovím ještě dnes' : 'Reply today',
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className={`${badge.bg} rounded-xl p-4 flex flex-col items-center text-center gap-2 border border-slate-100 hover:shadow-md transition-all group`}
        >
          <div className={`${badge.color} group-hover:scale-110 transition-transform`}>
            <badge.icon size={28} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold text-slate-700 leading-tight">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
