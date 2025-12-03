import logo from '../assets/logo1.png';

export const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img src={logo} alt="Kore Logo" className="w-8 h-8 object-contain" />
            <span className="text-white font-sans font-bold text-xl tracking-tight">Kore</span>
        </div>
    );
};
