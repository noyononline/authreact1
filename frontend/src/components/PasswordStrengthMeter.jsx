import { Check, X } from "lucide-react";

const CRITERIA = [
  { label: "At least 6 characters", regex: /.{6,}/ },
  { label: "Contains uppercase letter", regex: /[A-Z]/ },
  { label: "Contains lowercase letter", regex: /[a-z]/ },
  { label: "Contains a number", regex: /\d/ },
  { label: "Contains special character", regex: /[^A-Za-z0-9]/ },
];

const PasswordCriteria = ({ password }) => {
  return (
    <div className="mt-2 space-y-1">
      {CRITERIA.map(({ label, regex }) => {
        const met = regex.test(password);
        return (
          <div key={label} className="flex items-center text-xs">
            {met ? (
              <Check className="size-4 text-green-500 mr-2" />
            ) : (
              <X className="size-4 text-gray-500 mr-2" />
            )}
            <span className={met ? "text-green-500" : "text-gray-400"}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const STRENGTH_COLORS = [
  "bg-red-500", // Very Weak
  "bg-red-400", // Weak
  "bg-yellow-500", // Fair
  "bg-yellow-400", // Good
  "bg-green-500", // Strong
];

const STRENGTH_TEXTS = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (CRITERIA.every(({ regex }) => regex.test(pass))) strength++;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return Math.min(strength, STRENGTH_TEXTS.length - 1);
  };

  const strength = getStrength(password);

  const getColor = (strength) => STRENGTH_COLORS[strength] || "bg-red-500";
  const getStrengthText = (strength) => STRENGTH_TEXTS[strength] || "Very Weak";

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password Strength</span>
        <span className="text-xs text-gray-400">
          {getStrengthText(strength)}
        </span>
      </div>

      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < strength ? getColor(strength) : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
