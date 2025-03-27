
type EnergyLabelProps = {
    label: string;
  };

export default function EnergyLabel ({ label }: EnergyLabelProps) {

    const energyColors: Record<string, string> = {
        A: "bg-energy_A",
        B: "bg-energy_B",
        C: "bg-energy_C",
        D: "bg-energy_D",
      };

    return <span className={`py-1 px-[0.375rem] mr-4 font-bold ${energyColors[label]} text-white`}>
                {label}
            </span>;
}