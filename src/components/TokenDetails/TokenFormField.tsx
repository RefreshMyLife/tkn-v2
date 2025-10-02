type TokenFormFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: 'input' | 'textarea';
  rows?: number;
};

export const TokenFormField = ({ value, onChange, placeholder, type = 'input', rows }: TokenFormFieldProps) => {
  const commonClasses = "w-full px-3 py-2.5 border border-gray-300 rounded-sm hover:border-custom-orange focus:outline-none focus:border-orange-500 focus:ring-[4px] focus:ring-orange-500/20 text-sm sm:text-base";

    if (type === 'textarea') {
        return (
            <div className="relative">
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={rows || 5}
                    placeholder=" "
                    className={`${commonClasses} peer placeholder-transparent  resize-none`}
                    /><label className="absolute left-3 top-1 text-black/50 text-sm sm:text-base transition-all duration-200 
                                        pointer-events-none peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm
                                        sm:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:left-2 peer-focus:text-xs
                                    peer-focus:text-black/50  peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0.5
                                        peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs
                                     peer-[:not(:placeholder-shown)]:px-1">
                    {placeholder}
                </label>
            </div>
        
        );
    }
    if (placeholder === "CID (OPTIONAL)") {
        return (
            <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={commonClasses}
            />
        );
    }
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className={`${commonClasses} peer placeholder-transparent  pt-4`}
      />
        <label className="absolute left-3 top-1 text-black/50 text-sm sm:text-base transition-all duration-200 
                                        pointer-events-none peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm
                                        sm:peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:left-2 peer-focus:text-xs
                                    peer-focus:text-black/50  peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-0.5
                                        peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-xs
                                     peer-[:not(:placeholder-shown)]:px-1">
        {placeholder}
      </label>
    </div>
  );
};